import type { RankId } from "./types";

export type RankBand = {
  id: RankId;
  label: string;
  minVp: number;
  hint: string;
};

export const RANKS: RankBand[] = [
  {
    id: "bronze",
    label: "Bronze",
    minVp: 1000,
    hint: "Build one opener, one strip, one closer. Refresh past anything you cannot read.",
  },
  {
    id: "silver",
    label: "Silver",
    minVp: 1400,
    hint: "Stop forcing the same four units. Keep a tanky answer for counter-set walls.",
  },
  {
    id: "gold",
    label: "Gold",
    minVp: 1800,
    hint: "Immunity and strip decide fights. If you lose to buffed knights, you need a stripper.",
  },
  {
    id: "master",
    label: "Master",
    minVp: 2400,
    hint: "Defenses get sticky. Carry at least one anti-revive and one bruiser plan.",
  },
  {
    id: "challenger",
    label: "Challenger",
    minVp: 3000,
    hint: "Harsetti and evasion show up. Speed cleave stops being free. Scout every fight.",
  },
  {
    id: "champion",
    label: "Champion",
    minVp: 3800,
    hint: "Consistency beats hero drafts. Skip 40% of defenses. Log the ones that beat you.",
  },
  {
    id: "legend",
    label: "Legend",
    minVp: 4400,
    hint: "Weekly placement is the season. Protect your defense and only attack high-percentage walls.",
  },
  {
    id: "emperor",
    label: "Emperor",
    minVp: 4800,
    hint: "Top of the server. Defense craft and refresh discipline matter more than any one unit.",
  },
];

export function rankForVp(vp: number): RankBand {
  let current = RANKS[0]!;
  for (const band of RANKS) {
    if (vp >= band.minVp) current = band;
  }
  return current;
}

export function nextRank(vp: number): RankBand | null {
  const current = rankForVp(vp);
  const idx = RANKS.findIndex((r) => r.id === current.id);
  return RANKS[idx + 1] ?? null;
}

export function rankProgress(vp: number): number {
  const current = rankForVp(vp);
  const nxt = nextRank(vp);
  if (!nxt) return 1;
  const span = nxt.minVp - current.minVp;
  return Math.max(0, Math.min(1, (vp - current.minVp) / span));
}

export function suggestedVpDelta(won: boolean, vp: number): number {
  const rank = rankForVp(vp);
  const gain: Record<RankId, number> = {
    bronze: 24,
    silver: 20,
    gold: 18,
    master: 16,
    challenger: 14,
    champion: 12,
    legend: 10,
    emperor: 8,
  };
  const g = gain[rank.id];
  return won ? g : -Math.round(g * 0.75);
}

export const DEFAULT_VP = 3120;
