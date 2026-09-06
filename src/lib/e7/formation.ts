import { getHero } from "./catalog";
import type { Hero } from "./types";

export type ScoutMode = "gw" | "arena";
/** Enemy wall sits on the right of VS — Front faces you, so it is leftmost. Your lineup Front is rightmost. */
export type FormationFacing = "enemy" | "ally";

/** Stored order: Front, Left, Right, Back. */
export const FORMATION_LABELS = ["Front", "Left", "Right", "Back"] as const;

/** Stored order GW: Front, Rear left, Rear right. Front is the lower apex (foremost ally). */
export const GW_LABELS = ["Front", "Rear", "Rear"] as const;

/** Enemy defense, attacker camera: Front left, Back right, Left top, Right bottom. */
export const FORMATION_CELLS = [
  { index: 1, area: "left", label: "Left" },
  { index: 3, area: "back", label: "Back" },
  { index: 0, area: "front", label: "Front" },
  { index: 2, area: "right", label: "Right" },
] as const;

export const GW_CELLS = [
  { index: 1, area: "rear-left", label: "Rear" },
  { index: 2, area: "rear-right", label: "Rear" },
  { index: 0, area: "front", label: "Front" },
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

function pickFront(pool: Hero[]) {
  return (
    take(pool, (h) => h.roles.includes("tank") && !NOT_FRONT.has(h.id)) ||
    take(pool, (h) => h.roles.includes("bruiser") && !NOT_FRONT.has(h.id)) ||
    take(pool, (h) => !NOT_FRONT.has(h.id)) ||
    take(pool, () => true)
  );
}

/** Place a lineup on the diamond. Front = foremost ally. */
export function placeLineup(ids: string[]): string[] {
  const pool = ids
    .map((id) => getHero(id))
    .filter((h): h is Hero => Boolean(h));
  const front = pickFront(pool);
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

/** Place a 3-man Guild War lineup. Front = lower apex. */
export function placeLineupGw(ids: string[]): string[] {
  const pool = ids
    .map((id) => getHero(id))
    .filter((h): h is Hero => Boolean(h));
  const front = pickFront(pool);
  const rearLeft =
    take(
      pool,
      (h) =>
        h.roles.includes("strip") ||
        h.roles.includes("control") ||
        h.tags.includes("injury"),
    ) || take(pool, () => true);
  const rearRight = take(pool, () => true);
  return [front, rearLeft, rearRight].map((h) => h?.id ?? "");
}