import type { MatchLog } from "./types";

export type RecordStat = {
  key: string;
  label: string;
  n: number;
  wins: number;
};

export function winRate(wins: number, n: number): number | null {
  if (n === 0) return null;
  return Math.round((wins / n) * 100);
}

export function recordFor(matches: MatchLog[], recipeId: string | undefined): RecordStat {
  const list = matches.filter((m) => (m.recipeId ?? "") === (recipeId ?? ""));
  return {
    key: recipeId ?? "",
    label: list[0]?.recipeName ?? "Strategy",
    n: list.length,
    wins: list.filter((m) => m.won).length,
  };
}

export function groupByRecipe(matches: MatchLog[]): RecordStat[] {
  const map = new Map<string, RecordStat>();
  for (const m of matches) {
    const key = m.recipeId || "unknown";
    const cur = map.get(key) ?? {
      key,
      label: m.recipeName || "Unlabeled",
      n: 0,
      wins: 0,
    };
    cur.n += 1;
    if (m.won) cur.wins += 1;
    map.set(key, cur);
  }
  return [...map.values()].sort((a, b) => b.n - a.n || b.wins - a.wins);
}

export function groupByArchetype(matches: MatchLog[]): RecordStat[] {
  const map = new Map<string, RecordStat>();
  for (const m of matches) {
    const key = m.archetype || "unknown";
    const cur = map.get(key) ?? {
      key,
      label: key === "unknown" ? "Unlabeled" : key.replace(/-/g, " "),
      n: 0,
      wins: 0,
    };
    cur.n += 1;
    if (m.won) cur.wins += 1;
    map.set(key, cur);
  }
  return [...map.values()].sort((a, b) => b.n - a.n);
}
