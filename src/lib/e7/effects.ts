import { EFFECT_IDS, type Hero, type NormalEffect, type Role, type Tag } from "./types";

const FROM_TAG: Partial<Record<Tag, NormalEffect>> = {
  "anti-revive": "extinction",
  "cr-push": "increase-cr",
  "cr-cut": "decrease-cr",
  "extra-turn": "extra-turn",
  evade: "increase-evasion",
  strip: "buff-dispel",
  "dual-attack": "dual-attack",
  injury: "injury",
  counter: "counterattack",
};

export function deriveEffects(roles: Role[], tags: Tag[]): NormalEffect[] {
  const found = new Set<NormalEffect>();
  if (roles.includes("revive")) found.add("revive");
  if (roles.includes("soulblock")) found.add("soul-removal");
  if (roles.includes("cleanse")) found.add("debuff-dispel");
  for (const tag of tags) {
    const mapped = FROM_TAG[tag];
    if (mapped) found.add(mapped);
  }
  return EFFECT_IDS.filter((id) => found.has(id));
}

export function heroEffects(hero: Pick<Hero, "roles" | "tags" | "effects">): NormalEffect[] {
  if (hero.effects && hero.effects.length > 0) {
    const set = new Set(hero.effects);
    return EFFECT_IDS.filter((id) => set.has(id));
  }
  return deriveEffects(hero.roles, hero.tags);
}

export function normalizeHero<T extends Hero>(hero: T): T {
  return { ...hero, effects: heroEffects(hero) };
}
