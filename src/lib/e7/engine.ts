import { allHeroes, allRecipes, getHero } from "./catalog";
import { heroEffects } from "./effects";
import { TIER_ORDER } from "./heroes";
import { ARCHETYPE_META } from "./recipes";
import { unansweredThreats, wallThreats } from "./threats";
import type {
  ArchetypeId,
  CounterTeam,
  DefenseRead,
  Hero,
  Recipe,
  SlotNeed,
} from "./types";

export function heroesOf(ids: string[]): Hero[] {
  return ids.map((id) => getHero(id)).filter((h): h is Hero => Boolean(h));
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function classifyDefense(ids: string[]): DefenseRead | null {
  const heroes = heroesOf(ids);
  if (heroes.length === 0) return null;

  const trusted = heroes.filter((h) => h.verified);
  const unverifiedIds = heroes.filter((h) => !h.verified).map((h) => h.id);

  const tags = unique(trusted.flatMap((h) => h.tags));
  const roles = unique(trusted.flatMap((h) => h.roles));
  const effects = unique(trusted.flatMap((h) => heroEffects(h)));
  const buffs = unique(trusted.flatMap((h) => h.buffs ?? []));
  const debuffs = unique(trusted.flatMap((h) => h.debuffs ?? []));
  const uniqueEffects = trusted.flatMap((h) =>
    (h.uniqueEffects ?? []).map((u) => ({ ...u, heroId: h.id })),
  );
  const idSet = new Set(trusted.map((h) => h.id));

  const scores: Record<ArchetypeId, number> = {
    "speed-cleave": 0,
    "harsetti-stall": 0,
    "revive-wall": 0,
    "injury-grind": 0,
    "evasion-counter": 0,
    "turn2-control": 0,
    "immunity-soul": 0,
    "bruiser-mix": 1,
  };

  if (trusted.length > 0) {
    if (idSet.has("harsetti") || roles.includes("speedcap")) scores["harsetti-stall"] += 8;
    if (uniqueEffects.some((u) => /skuggiheim/i.test(u.name))) scores["harsetti-stall"] += 4;

    const revivers = trusted.filter((h) => h.roles.includes("revive")).length;
    if (revivers > 0) scores["revive-wall"] += 4 + (revivers > 1 ? 3 : 0);
    if (roles.includes("tank") && revivers > 0) scores["revive-wall"] += 2;
    if (
      idSet.has("lisette") ||
      idSet.has("spirit-eye-celine") ||
      uniqueEffects.some((u) => /fragment of life|time reversal|sacred covenant|grudge|spirit gate/i.test(u.name))
    ) {
      scores["revive-wall"] += 3;
    }

    const injuryN = trusted.filter((h) => h.tags.includes("injury") || (h.effects ?? []).includes("injury")).length;
    if (injuryN > 0 && (roles.includes("bruiser") || roles.includes("tank") || roles.includes("dps"))) {
      scores["injury-grind"] += 4 + injuryN * 2;
    }

    const evadeCore = trusted.filter(
      (h) =>
        h.id === "setsuka" ||
        h.id === "remnant-violet" ||
        uniqueEffects.some((u) => u.heroId === h.id && /suppressed desire|concentration|demon blade/i.test(u.name)),
    ).length;
    const evadeN = trusted.filter((h) => h.tags.includes("evade") || h.roles.includes("evasion")).length;
    if (evadeCore > 0) scores["evasion-counter"] += 6 + (evadeCore > 1 ? 3 : 0);
    else if (evadeN >= 2) scores["evasion-counter"] += 5;
    if (tags.includes("counter") && evadeCore > 0) scores["evasion-counter"] += 2;

    const openers = trusted.filter((h) => h.roles.includes("opener"));
    const cleavers = trusted.filter((h) => h.roles.includes("cleave"));
    if (openers.length > 0 && cleavers.length > 0) scores["speed-cleave"] += 6;
    const aoeCloser = trusted.some(
      (h) =>
        h.tags.includes("aoe") &&
        (h.roles.includes("dps") || h.roles.includes("cleave") || h.roles.includes("bruiser")) &&
        !h.roles.includes("opener"),
    );
    if (openers.length > 0 && aoeCloser) scores["speed-cleave"] += 4;

    if (roles.includes("control") && (tags.includes("cr-cut") || tags.includes("cr-push"))) {
      scores["turn2-control"] += 4;
    }
    if (
      idSet.has("rinak") ||
      idSet.has("lady-of-the-scales") ||
      idSet.has("frieren") ||
      idSet.has("solitaria") ||
      idSet.has("angel-of-light-angelica") ||
      idSet.has("politis")
    ) {
      scores["turn2-control"] += 3;
    }
    if (idSet.has("last-rider-krau") && !idSet.has("belian")) scores["turn2-control"] += 4;

    if (idSet.has("belian") || roles.includes("soulblock")) scores["immunity-soul"] += 6;
    if (idSet.has("last-rider-krau") && idSet.has("belian")) scores["immunity-soul"] += 3;

    if (roles.includes("bruiser") && roles.includes("tank")) scores["bruiser-mix"] += 2;
  }

  const archetypePriority: Record<ArchetypeId, number> = {
    "harsetti-stall": 0,
    "evasion-counter": 1,
    "injury-grind": 2,
    "revive-wall": 3,
    "immunity-soul": 4,
    "turn2-control": 5,
    "speed-cleave": 6,
    "bruiser-mix": 7,
  };
  const archetype = (Object.entries(scores) as [ArchetypeId, number][]).sort(
    (a, b) => b[1] - a[1] || archetypePriority[a[0]] - archetypePriority[b[0]],
  )[0]![0];

  const threats = heroes
    .map((h) => ({
      heroId: h.id,
      text: h.verified ? h.kit : "Kit not in-game verified — ignored for this wall.",
      severity: (h.verified && h.defense >= 9 ? 3 : h.verified && h.defense >= 7 ? 2 : 1) as 1 | 2 | 3,
    }))
    .sort((a, b) => b.severity - a.severity);

  const watch = wallThreats(trusted);
  if (unverifiedIds.length > 0) {
    const names = unverifiedIds
      .map((id) => getHero(id)?.short ?? id)
      .join(", ");
    watch.unshift({
      key: "unverified",
      label: "Unverified kit",
      note:
        unverifiedIds.length === 1
          ? `${names} is not in-game verified. Their skills are ignored.`
          : `${names} are not in-game verified. Their skills are ignored.`,
    });
  }
  const notes = watch.map((t) => t.note);

  const meta = ARCHETYPE_META[archetype];
  return {
    archetype,
    title: meta.title,
    headline: meta.blurb,
    threats,
    notes,
    watch: watch.slice(0, 6),
    tags,
    roles,
    effects,
    buffs,
    debuffs,
    uniqueEffects,
    unverifiedIds,
  };
}

function slotScore(hero: Hero, need: SlotNeed): number {
  let score = 0;
  if (!hero.verified) score -= 20;
  if (need.prefer?.includes(hero.id)) score += 8;
  if (need.roles?.some((r) => hero.roles.includes(r))) score += 4;
  if (need.tags?.some((t) => hero.tags.includes(t))) score += 3;
  if (need.avoidRoles?.some((r) => hero.roles.includes(r))) score -= 6;
  score += TIER_ORDER[hero.tier];
  score += hero.offense * 0.15;
  return score;
}

function fillRecipe(recipe: Recipe, pool: Hero[], enemyIds: string[]): {
  heroIds: string[];
  missing: string[];
  coverage: number;
} {
  const used = new Set<string>();
  const enemy = new Set(enemyIds);
  const heroIds: string[] = [];
  const missing: string[] = [];

  for (const need of recipe.slots) {
    let best: Hero | null = null;
    let bestScore = 0;
    for (const hero of pool) {
      if (used.has(hero.id) || enemy.has(hero.id)) continue;
      const s = slotScore(hero, need);
      if (s > bestScore) {
        best = hero;
        bestScore = s;
      }
    }
    if (!best) {
      missing.push(need.label);
      continue;
    }
    const preferHit = Boolean(need.prefer?.includes(best.id));
    const roleHit = !need.roles?.length || need.roles.some((r) => best.roles.includes(r));
    const tagHit = !need.tags?.length || need.tags.some((t) => best.tags.includes(t));
    const matched =
      bestScore >= 4 &&
      (preferHit || (roleHit && tagHit && Boolean(need.roles?.length || need.tags?.length)));
    if (matched) {
      used.add(best.id);
      heroIds.push(best.id);
    } else {
      missing.push(need.label);
    }
  }

  return {
    heroIds,
    missing,
    coverage: (4 - missing.length) / 4,
  };
}

function whyFor(recipe: Recipe, read: DefenseRead, filled: Hero[]): string[] {
  const why: string[] = [];
  const names = new Set(filled.map((h) => h.id));
  if (read.roles.includes("speedcap") && filled.some((h) => h.tags.includes("injury"))) {
    why.push("Injury ignores the speed cap — you play the fight Harsetti wants, better.");
  }
  if (read.roles.includes("revive") && filled.some((h) => h.tags.includes("anti-revive"))) {
    why.push("Anti-revive stops the reset so the wall cannot stall forever.");
  }
  if (read.tags.includes("evade") && filled.some((h) => h.tags.includes("aoe") || h.tags.includes("dual-attack") || h.tags.includes("injury"))) {
    why.push("AoE, dual attacks, or injury do not care if Violet rolls a miss.");
  }
  if (read.roles.includes("soulblock") && !filled.some((h) => h.tags.includes("soulburn"))) {
    why.push("This draft does not need souls, so Belian is just a bulky knight.");
  }
  if (names.has("briar-witch-iseria") && (read.tags.includes("immunity") || read.roles.includes("revive"))) {
    why.push("Soulburn Cursed Thorn strips through ER. Witch's Curse is passive — revive is off as long as she lives.");
  }
  if (names.has("hecate") && (read.roles.includes("revive") || read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name)))) {
    why.push("Death's Dominion: no revive, no Immortal. S3 ignores damage share — Offering does not save the front.");
  }
  if (read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)) && filled.some((h) => h.tags.includes("aoe"))) {
    why.push("AoE ignores Ferocious Stand — you do not have to tap Arunka.");
  }
  if (read.uniqueEffects.some((u) => /nullifier|guardian angel/i.test(u.name))) {
    why.push("Skill Nullifier eats one skill. Don't lead with the only strip or anti-revive. A.Angelica procs it on AoE.");
  }
  if (names.has("conqueror-lilias") && read.tags.includes("evade")) {
    why.push("C.Lilias S1 Dual Attack needs no soulburn — it bypasses Concentration.");
  }
  if (names.has("sea-phantom-politis") && read.tags.includes("evade")) {
    why.push("SP Politis S1 Dual Attack while Enraged — no soulburn needed.");
  }
  if (names.has("mort") && (read.tags.includes("evade") || read.tags.includes("counter"))) {
    why.push("Mort: nobody else can counter. Setsuka bounce is off.");
  }
  if (names.has("rinak") && (read.tags.includes("immunity") || read.roles.includes("strip") || read.roles.includes("control"))) {
    why.push("Pickpocketing strips, cuts CR, extra turn. Soulburn ignores ER. Don't S3 unless the fight ends.");
  }
  if (read.uniqueEffects.some((u) => /defensive magic/i.test(u.name)) && filled.some((h) => h.roles.includes("soulblock"))) {
    why.push("Belian keeps Frieren under 4 Soul — Defensive Magic never comes up.");
  }
  if (read.uniqueEffects.some((u) => /tranquility|astral guide/i.test(u.name))) {
    why.push("Don't recast Immunity or heals into Politis — Tranquility clips buff duration and she takes the cycle.");
  }
  if (read.uniqueEffects.some((u) => /sacred covenant/i.test(u.name)) && filled.some((h) => h.tags.includes("anti-revive"))) {
    why.push("Anti-revive shuts the Covenant 100% revive. After 5 turns he is just a knight.");
  }
  if (read.uniqueEffects.some((u) => /grudge|blood aura/i.test(u.name)) && filled.some((h) => h.tags.includes("anti-revive"))) {
    why.push("Anti-revive stops Moon Slash from bringing the bench back. Don't feed him the last hit.");
  }
  if (names.has("frieren") && filled.some((h) => h.tags.includes("evade"))) {
    why.push("Frieren's +40% Focus / Fighting Spirit charges Massacre and Demon Blade faster.");
  }
  if (names.has("solitaria") && (read.tags.includes("evade") || read.roles.includes("evasion"))) {
    why.push("Solitaria sets their Focus gain to 0. Massacre never comes up.");
  }
  if (read.uniqueEffects.some((u) => /dark moon|noias/i.test(u.name)) && filled.some((h) => h.tags.includes("soulburn"))) {
    why.push("Don't soulburn into ML Diene — Dark Moon strips two from everyone and she re-immortals.");
  }
  if (names.has("lone-wolf-peira") && (read.roles.includes("opener") || read.archetype === "speed-cleave" || read.archetype === "turn2-control")) {
    why.push("Peira extra turn + Swift Attack is the opener — she is not a stripper.");
  }
  if (names.has("urban-shadow-choux") && (read.roles.includes("speedcap") || read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)))) {
    why.push("Bzzt! injuries everyone after each attack — Ferocious Stand does not eat it.");
  }
  if (names.has("straze") && (read.tags.includes("immunity") || read.tags.includes("evade") || read.roles.includes("strip"))) {
    why.push("Straze S2 strips all and ignores ER vs lower Attack. S3 does not bounce a counter.");
  }
  return why.slice(0, 3);
}

function requirePool(): string[] {
  return allHeroes()
    .filter((h) => h.verified)
    .map((h) => h.id);
}

function recipesFor(archetype: ArchetypeId): Recipe[] {
  const all = allRecipes();
  const hit = all.filter((r) => r.vs.includes(archetype) || r.vs.length === 0);
  if (hit.length > 0) return hit;
  return all.filter((r) => r.vs.includes("bruiser-mix"));
}

export function recommendCounters(
  enemyIds: string[],
  poolIds: string[] | null,
): CounterTeam[] {
  const read = classifyDefense(enemyIds);
  if (!read) return [];

  const wanted = (poolIds ?? requirePool())
    .map((id) => getHero(id))
    .filter((h): h is Hero => Boolean(h && h.verified));
  const theory = !poolIds || wanted.length < 4;
  const usable = wanted.length >= 3 ? wanted : heroesOf(requirePool());
  const isTheory = theory || wanted.length < 4;

  const results: CounterTeam[] = [];
  for (const recipe of recipesFor(read.archetype)) {
    const reviveThreat =
      read.roles.includes("revive") ||
      read.uniqueEffects.some((u) => /covenant|fragment of life|time reversal|grudge|blood aura/i.test(u.name));
    if (recipe.id === "anti-revive-burst" && !reviveThreat) continue;
    const filled = fillRecipe(recipe, usable, enemyIds);
    if (filled.heroIds.length < 3) continue;
    const filledHeroes = heroesOf(filled.heroIds);
    const answerable = read.watch.filter(
      (t) => t.answerTags?.length || t.answerRoles?.length || t.answerEffects?.length,
    ).length;
    const gaps = unansweredThreats(read.watch, filledHeroes);
    const answered = Math.max(0, answerable - gaps.length);
    const tierAvg =
      filledHeroes.reduce((s, h) => s + TIER_ORDER[h.tier], 0) / Math.max(1, filledHeroes.length);
    const score = Math.round(
      Math.min(
        99,
        20 +
          filled.coverage * 48 +
          answered * 8 +
          tierAvg * 4 +
          (isTheory ? -8 : 4) -
          gaps.length * 8,
      ),
    );
    results.push({
      recipeId: recipe.id,
      name: recipe.name,
      heroIds: filled.heroIds,
      score,
      coverage: filled.coverage,
      wincon: recipe.wincon,
      setup: recipe.setup,
      pitfalls: recipe.pitfalls,
      missing: filled.missing,
      gaps,
      theorycraft: isTheory,
      why: whyFor(recipe, read, filledHeroes),
    });
  }

  results.sort((a, b) => b.score - a.score || b.coverage - a.coverage);
  const seen = new Set<string>();
  const uniqueTeams: CounterTeam[] = [];
  for (const team of results) {
    const key = [...team.heroIds].sort().join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueTeams.push(team);
    if (uniqueTeams.length >= 4) break;
  }
  return uniqueTeams;
}

function heroMatchesToken(h: Hero, t: string): boolean {
  const name = h.name.toLowerCase();
  const short = h.short.toLowerCase();
  if (name.includes(t) || short.toLowerCase().includes(t) || h.id.includes(t)) return true;
  if (name.split(/[\s.&'-]+/).some((w) => w.startsWith(t))) return true;
  const hay = `${h.element} ${h.class} ${h.roles.join(" ")} ${h.tags.join(" ")} ${(h.effects ?? []).join(" ")}`.toLowerCase();
  return hay.includes(t);
}

function tokenScore(h: Hero, t: string): number {
  const name = h.name.toLowerCase();
  const short = h.short.toLowerCase();
  let s = 0;
  if (short === t || name === t || h.id === t) s = 100;
  else if (short.startsWith(t) || name.startsWith(t)) s = 80;
  else if (name.split(/[\s.&'-]+/).some((w) => w === t)) s = 70;
  else if (name.split(/[\s.&'-]+/).some((w) => w.startsWith(t))) s = 55;
  else if (name.includes(t) || short.includes(t)) s = 40;
  else if (heroMatchesToken(h, t)) s = 20;
  if (h.verified) s += 4;
  return s;
}

export function searchTokens(query: string): string[] {
  return query
    .split(/[,，;]+/)
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
}

export function searchHeroes(query: string, list: Hero[] = allHeroes()): Hero[] {
  const tokens = searchTokens(query);
  if (tokens.length === 0) return list;
  return list.filter((h) => tokens.some((t) => heroMatchesToken(h, t)));
}

/** Best unique hit per comma-separated token. */
export function bestHeroMatches(query: string, list: Hero[] = allHeroes()): Hero[] {
  const tokens = searchTokens(query);
  const used = new Set<string>();
  const out: Hero[] = [];
  for (const t of tokens) {
    const hit = list
      .filter((h) => !used.has(h.id) && tokenScore(h, t) >= 40)
      .sort((a, b) => tokenScore(b, t) - tokenScore(a, t) || a.name.localeCompare(b.name))[0];
    if (hit) {
      used.add(hit.id);
      out.push(hit);
    }
  }
  return out;
}
