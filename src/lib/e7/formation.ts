import { getHero } from "./catalog";
import type { Hero } from "./types";

/** Stored order: Front, Left, Right, Back. Front is the rightmost slot (foremost ally). */
export const FORMATION_LABELS = ["Front", "Left", "Right", "Back"] as const;

/** Top-down, enemy to the right — same facing as in-game. */
export const FORMATION_CELLS = [
  { index: 1, area: "left", label: "Left" },
  { index: 3, area: "back", label: "Back" },
  { index: 0, area: "front", label: "Front" },
  { index: 2, area: "right", label: "Right" },
] as const;

const NOT_FRONT = new Set([
  "monarch-of-the-sword-iseria",
  "requiem-roana",
  "lady-of-the-scales",
]);

function take(pool: Hero[], pred: (h: Hero) => boolean): Hero | undefined {
  const i = pool.findIndex(pred);
  if (i < 0) return undefined;
  return pool.splice(i, 1)[0];
}

/** Place a lineup on the diamond. Front = foremost ally. */
export function placeLineup(ids: string[]): string[] {
  const pool = ids
    .map((id) => getHero(id))
    .filter((h): h is Hero => Boolean(h));
  const front =
    take(pool, (h) => h.roles.includes("tank") && !NOT_FRONT.has(h.id)) ||
    take(pool, (h) => h.roles.includes("bruiser") && !NOT_FRONT.has(h.id)) ||
    take(pool, (h) => !NOT_FRONT.has(h.id)) ||
    take(pool, () => true);
  const back =
    take(pool, (h) => NOT_FRONT.has(h.id)) ||
    take(pool, (h) => h.roles.includes("healer") || h.roles.includes("opener")) ||
    take(pool, () => true);
  const left =
    take(
      pool,
      (h) =>
        h.roles.includes("strip") ||
        h.roles.includes("control") ||
        h.tags.includes("injury"),
    ) || take(pool, () => true);
  const right = take(pool, () => true);
  return [front, left, right, back].map((h) => h?.id ?? "");
}
