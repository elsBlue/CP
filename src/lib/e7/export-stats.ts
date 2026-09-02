/**
 * One-file fight dump for dropping into chat. Do not rewrite this whole file.
 */
import { getHero } from "./catalog";
import { ARCHETYPE_META } from "./recipes";
import { groupByArchetype, groupByRecipe, winRate } from "./stats";
import type { ArchetypeId, MatchLog, RosterEntry } from "./types";

export type FightDump = {
  app: "crownpath";
  v: 1;
  exportedAt: string;
  vp: number;
  record: string;
  built: number;
  restrictToRoster: boolean;
  byWall: { wall: string; w: number; l: number }[];
  byRecipe: { name: string; w: number; l: number }[];
  fights: {
    at: string;
    result: "W" | "L";
    vp: number;
    wall: string;
    recipe: string;
    enemy: string[];
    team: string[];
    note: string;
  }[];
};

function label(id: string): string {
  if (!id) return "";
  const h = getHero(id);
  return h?.short || h?.name || id;
}

function wallTitle(id: string | undefined): string {
  if (!id) return "";
  return id in ARCHETYPE_META ? ARCHETYPE_META[id as ArchetypeId].title : id;
}

export function buildFightDump(input: {
  vp: number;
  matches: MatchLog[];
  roster: Record<string, RosterEntry>;
  restrictToRoster: boolean;
}): FightDump {
  const wins = input.matches.filter((m) => m.won).length;
  const losses = input.matches.length - wins;
  const built = Object.values(input.roster).filter((r) => r.built).length;
  return {
    app: "crownpath",
    v: 1,
    exportedAt: new Date().toISOString(),
    vp: input.vp,
    record: `${wins}W ${losses}L`,
    built,
    restrictToRoster: input.restrictToRoster,
    byWall: groupByArchetype(input.matches).map((r) => ({
      wall: wallTitle(r.key) || r.label,
      w: r.wins,
      l: r.n - r.wins,
    })),
    byRecipe: groupByRecipe(input.matches).map((r) => ({
      name: r.label,
      w: r.wins,
      l: r.n - r.wins,
    })),
    fights: input.matches.map((m) => ({
      at: new Date(m.at).toISOString(),
      result: m.won ? "W" : "L",
      vp: m.vpDelta,
      wall: wallTitle(m.archetype),
      recipe: m.recipeName || "",
      enemy: m.enemy.filter(Boolean).map(label),
      team: m.team.filter(Boolean).map(label),
      note: m.note || "",
    })),
  };
}

export function dumpFilename(dump: FightDump): string {
  const day = dump.exportedAt.slice(0, 10);
  return `crownpath-stats-${day}.json`;
}

export function downloadFightDump(dump: FightDump): void {
  const text = JSON.stringify(dump, null, 2);
  const blob = new Blob([text], { type: "application/json" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = dumpFilename(dump);
  a.click();
  URL.revokeObjectURL(href);
}

export async function copyFightDump(dump: FightDump): Promise<void> {
  await navigator.clipboard.writeText(JSON.stringify(dump, null, 2));
}

export function wr(wins: number, losses: number): string {
  const n = wins + losses;
  if (n === 0) return "—";
  const rate = winRate(wins, n);
  return rate === null ? "—" : `${rate}%`;
}

export function downloadJson(name: string, data: unknown): void {
  const text = JSON.stringify(data, null, 2);
  const blob = new Blob([text], { type: "application/json" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = name;
  a.click();
  URL.revokeObjectURL(href);
}

