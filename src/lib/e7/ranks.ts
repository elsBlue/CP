import type { RankId } from "./types";

export type RankBand = {
  id: RankId;
  label: string;
  minVp: number;
  hint: string;
};

export type RankDivision = {
  id: RankId;
  league: string;
  division: string;
  label: string;
  minVp: number;
  placement?: string;
};

const HINT: Record<RankId, string> = {
  bronze: "Build one opener, one strip, one closer. Skip walls you cannot read.",
  silver: "Stop forcing the same four units. Keep a tanky answer for counter-set walls.",
  gold: "Immunity and strip decide fights. If you lose to buffed knights, you need a stripper.",
  master: "Defenses get sticky. Carry at least one anti-revive and one bruiser plan.",
  challenger: "Harsetti and evasion show up. Speed cleave stops being free. Scout every fight.",
  champion: "Consistency beats hero drafts. Skip walls you cannot answer. Log the ones that beat you.",
  emperor: "Placement starts here. Protect defense and only attack high-percentage walls.",
  legend: "Top of the server. Defense craft and refresh discipline matter more than any one unit.",
};

export const DIVISIONS: RankDivision[] = [
  { id: "bronze", league: "Bronze", division: "V", label: "Bronze V", minVp: 0 },
  { id: "bronze", league: "Bronze", division: "IV", label: "Bronze IV", minVp: 200 },
  { id: "bronze", league: "Bronze", division: "III", label: "Bronze III", minVp: 400 },
  { id: "bronze", league: "Bronze", division: "II", label: "Bronze II", minVp: 600 },
  { id: "bronze", league: "Bronze", division: "I", label: "Bronze I", minVp: 800 },
  { id: "silver", league: "Silver", division: "V", label: "Silver V", minVp: 1000 },
  { id: "silver", league: "Silver", division: "IV", label: "Silver IV", minVp: 1200 },
  { id: "silver", league: "Silver", division: "III", label: "Silver III", minVp: 1400 },
  { id: "silver", league: "Silver", division: "II", label: "Silver II", minVp: 1600 },
  { id: "silver", league: "Silver", division: "I", label: "Silver I", minVp: 1800 },
  { id: "gold", league: "Gold", division: "V", label: "Gold V", minVp: 2000 },
  { id: "gold", league: "Gold", division: "IV", label: "Gold IV", minVp: 2200 },
  { id: "gold", league: "Gold", division: "III", label: "Gold III", minVp: 2400 },
  { id: "gold", league: "Gold", division: "II", label: "Gold II", minVp: 2600 },
  { id: "gold", league: "Gold", division: "I", label: "Gold I", minVp: 2800 },
  { id: "master", league: "Master", division: "V", label: "Master V", minVp: 3000 },
  { id: "master", league: "Master", division: "IV", label: "Master IV", minVp: 3200 },
  { id: "master", league: "Master", division: "III", label: "Master III", minVp: 3400 },
  { id: "master", league: "Master", division: "II", label: "Master II", minVp: 3600 },
  { id: "master", league: "Master", division: "I", label: "Master I", minVp: 3800 },
  { id: "challenger", league: "Challenger", division: "V", label: "Challenger V", minVp: 4000 },
  { id: "challenger", league: "Challenger", division: "IV", label: "Challenger IV", minVp: 4200 },
  { id: "challenger", league: "Challenger", division: "III", label: "Challenger III", minVp: 4400 },
  { id: "challenger", league: "Challenger", division: "II", label: "Challenger II", minVp: 4600 },
  { id: "challenger", league: "Challenger", division: "I", label: "Challenger I", minVp: 4800 },
  { id: "champion", league: "Champion", division: "V", label: "Champion V", minVp: 5000 },
  { id: "champion", league: "Champion", division: "IV", label: "Champion IV", minVp: 5050, placement: "Top 3000" },
  { id: "champion", league: "Champion", division: "III", label: "Champion III", minVp: 5100, placement: "Top 2500" },
  { id: "champion", league: "Champion", division: "II", label: "Champion II", minVp: 5150, placement: "Top 2000" },
  { id: "champion", league: "Champion", division: "I", label: "Champion I", minVp: 5200, placement: "Top 1500" },
  { id: "emperor", league: "Emperor", division: "V", label: "Emperor V", minVp: 5250, placement: "Top 1000" },
  { id: "emperor", league: "Emperor", division: "IV", label: "Emperor IV", minVp: 5300, placement: "Top 800" },
  { id: "emperor", league: "Emperor", division: "III", label: "Emperor III", minVp: 5350, placement: "Top 600" },
  { id: "emperor", league: "Emperor", division: "II", label: "Emperor II", minVp: 5400, placement: "Top 400" },
  { id: "emperor", league: "Emperor", division: "I", label: "Emperor I", minVp: 5450, placement: "Top 200" },
  { id: "legend", league: "Legend", division: "VI", label: "Legend VI", minVp: 5500, placement: "Top 100" },
  { id: "legend", league: "Legend", division: "V", label: "Legend V", minVp: 5550, placement: "Top 50" },
  { id: "legend", league: "Legend", division: "IV", label: "Legend IV", minVp: 5600, placement: "Top 10" },
  { id: "legend", league: "Legend", division: "III", label: "Legend III", minVp: 5650, placement: "Top 3" },
  { id: "legend", league: "Legend", division: "II", label: "Legend II", minVp: 5700, placement: "Top 2" },
  { id: "legend", league: "Legend", division: "I", label: "Legend I", minVp: 5750, placement: "Top 1" },
];

function uniqueLeagues(): RankBand[] {
  const seen = new Set<RankId>();
  const out: RankBand[] = [];
  for (const d of DIVISIONS) {
    if (seen.has(d.id)) continue;
    seen.add(d.id);
    out.push({ id: d.id, label: d.league, minVp: d.minVp, hint: HINT[d.id] });
  }
  return out;
}

export const RANKS: RankBand[] = uniqueLeagues();

export function divisionForVp(vp: number): RankDivision {
  let current = DIVISIONS[0]!;
  for (const d of DIVISIONS) {
    if (vp >= d.minVp) current = d;
  }
  return current;
}

export function rankForVp(vp: number): RankBand {
  const d = divisionForVp(vp);
  return RANKS.find((r) => r.id === d.id) ?? RANKS[0]!;
}

export function nextDivision(vp: number): RankDivision | null {
  const current = divisionForVp(vp);
  const idx = DIVISIONS.findIndex(
    (d) => d.id === current.id && d.division === current.division && d.minVp === current.minVp,
  );
  return DIVISIONS[idx + 1] ?? null;
}

export function nextRank(vp: number): RankBand | null {
  const current = rankForVp(vp);
  const idx = RANKS.findIndex((r) => r.id === current.id);
  return RANKS[idx + 1] ?? null;
}

export function rankProgress(vp: number): number {
  const current = divisionForVp(vp);
  const nxt = nextDivision(vp);
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
    emperor: 10,
    legend: 8,
  };
  const g = gain[rank.id];
  return won ? g : -Math.round(g * 0.75);
}

export const DEFAULT_VP = 3120;
