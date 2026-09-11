import { PVP_ARTIFACTS, type PvpArtifact } from "./artifacts-pvp";
import { EE_BY_HERO, type ExclusiveGear } from "./exclusive-equipment";
import { GEAR_SETS, type GearSetId } from "./gear-sets";
import type { Hero, Role, Tag } from "./types";

export type SetLayout =
  | { kind: "4+2"; four: GearSetId; two: GearSetId }
  | { kind: "2+2+2"; sets: [GearSetId, GearSetId, GearSetId] };

export type KitLoadout = {
  job: string;
  primary: SetLayout;
  alt: SetLayout;
  artifacts: PvpArtifact[];
  ee: ExclusiveGear | null;
};

const PLAY_CHANGE =
  /\b(evasions?|stealth|injur(?:y|ies)|immortal(?:ity)?|extra turn|skill nullifier|dual attacks?|ignore(?:s)? (?:effect )?resistance|does not cost soul|revives?)\b/i;

export function optionChangesPlay(effect: string): boolean {
  return PLAY_CHANGE.test(effect);
}

export function eeForHero(id: string): ExclusiveGear | null {
  return EE_BY_HERO[id] ?? null;
}

function pickJob(hero: Hero): string {
  const roles = new Set<Role>(hero.roles);
  const tags = new Set<Tag>(hero.tags);
  if (roles.has("evasion") || tags.has("evade")) return "evasion";
  if (tags.has("injury")) return "injury";
  if (roles.has("revive")) return "revive";
  if (roles.has("opener") || roles.has("strip") || roles.has("speedcap")) return "opener";
  if (roles.has("cleave") || roles.has("dps")) return "cleave";
  if (roles.has("tank")) return "tank";
  if (roles.has("bruiser")) return "bruiser";
  if (roles.has("control") || roles.has("soulblock")) return "control";
  if (roles.has("healer") || roles.has("cleanse")) return "support";
  return "bruiser";
}

const TEMPLATES: Record<string, { primary: SetLayout; alt: SetLayout }> = {
  opener: {
    primary: { kind: "4+2", four: "speed", two: "hit" },
    alt: { kind: "4+2", four: "speed", two: "immunity" },
  },
  bruiser: {
    primary: { kind: "4+2", four: "counter", two: "health" },
    alt: { kind: "4+2", four: "injury", two: "hit" },
  },
  tank: {
    primary: { kind: "4+2", four: "protection", two: "health" },
    alt: { kind: "2+2+2", sets: ["immunity", "health", "resist"] },
  },
  evasion: {
    primary: { kind: "4+2", four: "riposte", two: "immunity" },
    alt: { kind: "4+2", four: "riposte", two: "health" },
  },
  cleave: {
    primary: { kind: "4+2", four: "destruction", two: "critical" },
    alt: { kind: "4+2", four: "attack", two: "critical" },
  },
  revive: {
    primary: { kind: "4+2", four: "reversal", two: "health" },
    alt: { kind: "4+2", four: "reversal", two: "immunity" },
  },
  injury: {
    primary: { kind: "4+2", four: "injury", two: "hit" },
    alt: { kind: "4+2", four: "injury", two: "critical" },
  },
  control: {
    primary: { kind: "4+2", four: "speed", two: "hit" },
    alt: { kind: "2+2+2", sets: ["hit", "immunity", "resist"] },
  },
  support: {
    primary: { kind: "4+2", four: "speed", two: "resist" },
    alt: { kind: "4+2", four: "protection", two: "health" },
  },
};

function scoreArtifact(art: PvpArtifact, hero: Hero): number {
  if (art.class && art.class !== hero.class) return -1;
  const keys = new Set<string>([...hero.roles, ...hero.tags, hero.class]);
  let score = 0;
  for (const cue of art.fit) {
    if (keys.has(cue)) score += 2;
  }
  if (art.class === hero.class) score += 1;
  if (hero.tags.includes("extra-turn") && art.fit.includes("extra-turn")) score += 2;
  if (hero.tags.includes("soulburn") && art.id.includes("tagehel")) score += 2;
  return score;
}

function pickArtifacts(hero: Hero): PvpArtifact[] {
  const ranked = PVP_ARTIFACTS.map((art) => ({ art, score: scoreArtifact(art, hero) }))
    .filter((row) => row.score >= 0)
    .sort((a, b) => b.score - a.score);
  const fitted = ranked.filter((row) => row.score >= 2).slice(0, 2);
  if (fitted.length) return fitted.map((row) => row.art);
  const sameClass = ranked.filter((row) => row.art.class === hero.class);
  const fallback = sameClass[0] ?? ranked[0];
  return fallback ? [fallback.art] : [];
}

export function fitKit(hero: Hero): KitLoadout {
  const job = pickJob(hero);
  const template = TEMPLATES[job] ?? TEMPLATES.bruiser;
  let primary = template.primary;
  let alt = template.alt;
  if (hero.tags.includes("extra-turn") && primary.kind === "4+2" && primary.two !== "fervor") {
    alt = { kind: "4+2", four: primary.four, two: "fervor" };
  }
  return {
    job,
    primary,
    alt,
    artifacts: pickArtifacts(hero),
    ee: eeForHero(hero.id),
  };
}

export function layoutLabel(layout: SetLayout): string {
  if (layout.kind === "4+2") {
    return `${GEAR_SETS[layout.four].name} 4 + ${GEAR_SETS[layout.two].name} 2`;
  }
  return layout.sets.map((id) => `${GEAR_SETS[id].name} 2`).join(" + ");
}

export function layoutPieces(layout: SetLayout): { set: GearSetId; name: string }[] {
  if (layout.kind === "4+2") {
    const four = GEAR_SETS[layout.four];
    const two = GEAR_SETS[layout.two];
    return [
      ...Array.from({ length: 4 }, () => ({ set: four.id, name: four.name })),
      ...Array.from({ length: 2 }, () => ({ set: two.id, name: two.name })),
    ];
  }
  return layout.sets.flatMap((id) => {
    const set = GEAR_SETS[id];
    return [
      { set: set.id, name: set.name },
      { set: set.id, name: set.name },
    ];
  });
}

export const LOADOUT_DISCLAIMER = "Matched to the kit. Not a ladder build.";
