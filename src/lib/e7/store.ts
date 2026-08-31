import { create } from "zustand";
import { SAMPLE_ROSTER, STARTER_ROSTER } from "./heroes";
import { DEFAULT_VP } from "./ranks";
import { clearMatches as apiClear, removeMatch as apiRemove, saveArena, saveMatch } from "./api";
import type { ArenaPayload } from "./api";
import type { MatchLog, MemberRole, RosterEntry } from "./types";

type ArenaState = {
  hydrated: boolean;
  role: MemberRole;
  email: string | null;
  roster: Record<string, RosterEntry>;
  enemy: string[];
  lastTeam: string[];
  vp: number;
  matches: MatchLog[];
  restrictToRoster: boolean;
  applyServer: (payload: ArenaPayload) => void;
  resetSession: () => void;
  setEnemySlot: (index: number, id: string | null) => void;
  setEnemy: (ids: string[]) => void;
  setLastTeam: (ids: string[]) => void;
  toggleBuilt: (id: string) => void;
  loadPresetRoster: (kind: "challenger" | "starter" | "clear") => void;
  setRestrict: (v: boolean) => void;
  setVp: (vp: number) => void;
  logMatch: (entry: Omit<MatchLog, "id" | "at"> & { at?: number }) => void;
  removeMatch: (id: string) => void;
  clearMatches: () => void;
};

function emptySlots(): string[] {
  return ["", "", "", ""];
}

function rosterFrom(ids: readonly string[]): Record<string, RosterEntry> {
  const next: Record<string, RosterEntry> = {};
  for (const id of ids) next[id] = { owned: true, built: true };
  return next;
}

const emptyState = {
  hydrated: false,
  role: "member" as MemberRole,
  email: null as string | null,
  roster: {},
  enemy: emptySlots(),
  lastTeam: emptySlots(),
  vp: DEFAULT_VP,
  matches: [] as MatchLog[],
  restrictToRoster: true,
};

let saveTimer: ReturnType<typeof setTimeout> | undefined;

function persistState() {
  if (typeof window === "undefined") return;
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const s = useArenaStore.getState();
    if (!s.hydrated) return;
    void saveArena({
      data: {
        vp: s.vp,
        restrictToRoster: s.restrictToRoster,
        enemy: s.enemy,
        lastTeam: s.lastTeam,
        roster: s.roster,
      },
    }).catch(() => {
      /* keep local copy; next edit retries */
    });
  }, 400);
}

export const useArenaStore = create<ArenaState>((set, get) => ({
  ...emptyState,
  applyServer: (payload) =>
    set({
      hydrated: true,
      role: payload.role,
      email: payload.email,
      roster: payload.roster,
      enemy: payload.enemy.length ? payload.enemy : emptyState.enemy,
      lastTeam: payload.lastTeam,
      vp: payload.vp,
      matches: payload.matches,
      restrictToRoster: payload.restrictToRoster,
    }),
  resetSession: () => set({ ...emptyState }),
  setEnemySlot: (index, id) => {
    const enemy = [...get().enemy];
    enemy[index] = id ?? "";
    set({ enemy });
    persistState();
  },
  setEnemy: (ids) => {
    const enemy = emptySlots();
    ids.slice(0, 4).forEach((id, i) => {
      enemy[i] = id;
    });
    set({ enemy });
    persistState();
  },
  setLastTeam: (ids) => {
    set({ lastTeam: ids.slice(0, 4) });
    persistState();
  },
  toggleBuilt: (id) => {
    const roster = { ...get().roster };
    const cur = roster[id] ?? { owned: false, built: false };
    const built = !cur.built;
    roster[id] = { owned: built ? true : cur.owned, built };
    if (!roster[id].owned && !roster[id].built) delete roster[id];
    set({ roster });
    persistState();
  },
  loadPresetRoster: (kind) => {
    if (kind === "clear") set({ roster: {} });
    else if (kind === "starter") set({ roster: rosterFrom(STARTER_ROSTER) });
    else set({ roster: rosterFrom(SAMPLE_ROSTER) });
    persistState();
  },
  setRestrict: (v) => {
    set({ restrictToRoster: v });
    persistState();
  },
  setVp: (vp) => {
    set({ vp: Math.max(800, Math.min(6000, Math.round(vp))) });
    persistState();
  },
  logMatch: (entry) => {
    const match: MatchLog = {
      id: crypto.randomUUID(),
      at: entry.at ?? Date.now(),
      enemy: entry.enemy,
      team: entry.team,
      won: entry.won,
      vpDelta: entry.vpDelta,
      note: entry.note,
      recipeId: entry.recipeId,
      recipeName: entry.recipeName,
      archetype: entry.archetype,
    };
    const vp = Math.max(800, get().vp + entry.vpDelta);
    set({ matches: [match, ...get().matches].slice(0, 80), vp, lastTeam: entry.team });
    void saveMatch({
      data: {
        id: match.id,
        at: match.at,
        enemy: match.enemy,
        team: match.team,
        won: match.won,
        vpDelta: match.vpDelta,
        note: match.note,
        recipeId: match.recipeId,
        recipeName: match.recipeName,
        archetype: match.archetype,
      },
    }).catch(() => {
      /* local log still visible */
    });
  },
  removeMatch: (id) => {
    set({ matches: get().matches.filter((m) => m.id !== id) });
    void apiRemove({ data: { id } }).catch(() => undefined);
  },
  clearMatches: () => {
    set({ matches: [] });
    void apiClear().catch(() => undefined);
  },
}));

export function builtIds(roster: Record<string, RosterEntry>): string[] {
  return Object.entries(roster)
    .filter(([, v]) => v.built)
    .map(([id]) => id);
}
