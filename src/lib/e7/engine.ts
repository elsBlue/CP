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
  return ids
    .map((id) => getHero(id))
    .filter((h): h is Hero => Boolean(h));
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
  const effects = unique(
    trusted.flatMap((h) => heroEffects(h)),
  );
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
    if (idSet.has("harsetti") || roles.includes("speedcap"))
      scores["harsetti-stall"] += 8;
    if (uniqueEffects.some((u) => /skuggiheim/i.test(u.name)))
      scores["harsetti-stall"] += 4;
    const revivers = trusted.filter((h) => h.roles.includes("revive")).length;
    if (revivers > 0) scores["revive-wall"] += 4 + (revivers > 1 ? 3 : 0);
    if (roles.includes("tank") && revivers > 0) scores["revive-wall"] += 2;
    if (
      idSet.has("lisette") ||
      idSet.has("spirit-eye-celine") ||
      idSet.has("apocalypse-ravi") ||
      uniqueEffects.some((u) =>
        /fragment of life|time reversal|sacred covenant|grudge|spirit gate|soul exchange|dark contract|vip treatment|superhumanization|it's time to be reborn/i.test(
          u.name,
        ),
      )
    ) {
      scores["revive-wall"] += 3;
    }
    const injuryCores = trusted.filter(
      (h) =>
        h.id === "empyrean-ilynav" ||
        h.id === "new-moon-luna" ||
        h.id === "urban-shadow-choux" ||
        h.id === "zahhak" ||
        h.id === "lone-crescent-bellona" ||
        h.id === "twisted-eidolon-kayron" ||
        h.id === "monarch-of-the-sword-iseria",
    ).length;
    const injuryN = trusted.filter(
      (h) =>
        h.tags.includes("injury") || (h.effects ?? []).includes("injury"),
    ).length;
    if (injuryN >= 2) scores["injury-grind"] += 5 + injuryN * 2;
    else if (
      injuryCores > 0 &&
      trusted.some(
        (h) => h.roles.includes("tank") || h.roles.includes("bruiser"),
      )
    ) {
      scores["injury-grind"] += 6;
    }
    const evadeCore = trusted.filter(
      (h) =>
        h.id === "setsuka" ||
        h.id === "remnant-violet" ||
        uniqueEffects.some(
          (u) =>
            u.heroId === h.id &&
            /suppressed desire|concentration|demon blade/i.test(u.name),
        ),
    ).length;
    const evadeN = trusted.filter(
      (h) =>
        (h.tags.includes("evade") || h.roles.includes("evasion")) &&
        h.id !== "lone-crescent-bellona" &&
        h.id !== "lone-wolf-peira",
    ).length;
    if (evadeCore > 0)
      scores["evasion-counter"] += 6 + (evadeCore > 1 ? 3 : 0);
    else if (evadeN >= 2) scores["evasion-counter"] += 5;
    if (tags.includes("counter") && evadeCore > 0)
      scores["evasion-counter"] += 2;
    const openers = trusted.filter((h) => h.roles.includes("opener"));
    const distinctCleave = trusted.some(
      (h) =>
        h.roles.includes("cleave") && !openers.some((o) => o.id === h.id),
    );
    if (openers.length > 0 && distinctCleave) scores["speed-cleave"] += 6;
    const aoeCloser = trusted.some(
      (h) =>
        h.tags.includes("aoe") &&
        (h.roles.includes("dps") || h.roles.includes("cleave")) &&
        !h.roles.includes("opener"),
    );
    if (openers.length > 0 && aoeCloser) scores["speed-cleave"] += 4;
    if (
      trusted.some(
        (h) =>
          h.roles.includes("control") &&
          (h.tags.includes("cr-cut") || h.tags.includes("cr-push")),
      )
    ) {
      scores["turn2-control"] += 4;
    }
    if (
      idSet.has("rinak") ||
      idSet.has("lady-of-the-scales") ||
      idSet.has("frieren") ||
      idSet.has("solitaria") ||
      idSet.has("angel-of-light-angelica") ||
      idSet.has("politis") ||
      idSet.has("ambitious-tywin") ||
      idSet.has("sage-baal") ||
      idSet.has("architect-laika") ||
      idSet.has("successor-taeyou")
    ) {
      scores["turn2-control"] += 3;
    }
    if (
      idSet.has("last-rider-krau") &&
      !idSet.has("belian") &&
      trusted.some(
        (h) => h.roles.includes("control") || h.roles.includes("opener"),
      )
    ) {
      scores["turn2-control"] += 4;
    }
    if (idSet.has("belian") || roles.includes("soulblock"))
      scores["immunity-soul"] += 6;
    if (idSet.has("last-rider-krau") && idSet.has("belian"))
      scores["immunity-soul"] += 3;
    if (roles.includes("bruiser") && roles.includes("tank"))
      scores["bruiser-mix"] += 2;
    if (
      idSet.has("notos") ||
      uniqueEffects.some((u) =>
        /god of battle|sanctuary of battle/i.test(u.name),
      )
    ) {
      scores["bruiser-mix"] += 6;
    }
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
    (a, b) =>
      b[1] - a[1] || archetypePriority[a[0]] - archetypePriority[b[0]],
  )[0]![0];
  const threats = heroes
    .map((h) => ({
      heroId: h.id,
      text: h.verified
        ? h.kit
        : "This kit has not been checked against the in-game journal. Scout ignores it.",
      severity: (h.verified && h.defense >= 9
          ? 3
          : h.verified && h.defense >= 7
            ? 2
            : 1) as 1 | 2 | 3,
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
          ? `${names} has not been checked against the in-game journal. Scout ignores that kit.`
          : `${names} have not been checked against the in-game journal. Scout ignores those kits.`,
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
    watch,
    tags,
    roles,
    effects,
    buffs,
    debuffs,
    uniqueEffects,
    unverifiedIds,
  };
}
function slotScore(
  hero: Hero,
  need: SlotNeed,
  wall?: { offering?: boolean },
): number {
  let score = 0;
  if (!hero.verified) score -= 20;
  if (need.prefer?.includes(hero.id)) score += 8;
  if (need.roles?.some((r) => hero.roles.includes(r))) score += 4;
  if (need.tags?.some((t) => hero.tags.includes(t))) score += 3;
  if (need.avoidRoles?.some((r) => hero.roles.includes(r))) score -= 6;
  if (
    wall?.offering &&
    (hero.effects ?? []).includes("ignore-damage-sharing") &&
    (need.label === "Tech" ||
      need.label === "Cover" ||
      need.label === "Closer" ||
      need.label === "Wincon")
  ) {
    score += 8;
  }
  score += TIER_ORDER[hero.tier];
  score += hero.offense * 0.15;
  return score;
}
function fillRecipe(
  recipe: Recipe,
  pool: Hero[],
  enemyIds: string[],
): {
  picks: { label: string; hero: Hero }[];
  heroIds: string[];
  missing: string[];
  coverage: number;
} {
  const used = new Set<string>();
  const enemy = new Set(enemyIds);
  const picks: { label: string; hero: Hero }[] = [];
  const missing: string[] = [];
  const wallHeroes = heroesOf(enemyIds);
  const offering = wallHeroes.some((h) =>
    (h.uniqueEffects ?? []).some((u) =>
      /offering|scales of equity/i.test(u.name),
    ),
  );
  for (const need of recipe.slots) {
    let best: Hero | null = null;
    let bestScore = 0;
    for (const hero of pool) {
      if (used.has(hero.id) || enemy.has(hero.id)) continue;
      const s = slotScore(hero, need, { offering });
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
    const roleHit =
      !need.roles?.length || need.roles.some((r) => best.roles.includes(r));
    const tagHit =
      !need.tags?.length || need.tags.some((t) => best.tags.includes(t));
    const matched =
      bestScore >= 4 &&
      (preferHit ||
        (roleHit &&
          tagHit &&
          Boolean(need.roles?.length || need.tags?.length)));
    if (matched) {
      used.add(best.id);
      picks.push({ label: need.label, hero: best });
    } else {
      missing.push(need.label);
    }
  }
  return {
    picks,
    heroIds: picks.map((p) => p.hero.id),
    missing,
    coverage: (4 - missing.length) / 4,
  };
}
function jobFor(
  hero: Hero,
  label: string,
  ctx?: { sanctuary?: boolean; wallRevive?: boolean; wallCounters?: boolean },
): string {
  const n = hero.name;
  switch (hero.id) {
    case "urban-shadow-choux":
      return `${n} applies injury to every enemy after each of her attacks, so you do not have to choose a single target.`;
    case "empyrean-ilynav":
      return `${n} is the injury core. She also cleanses and can hold the front.`;
    case "lone-crescent-bellona":
      return `${n} injuries everyone once Fighting Spirit is full. Her evasion applies only to herself.`;
    case "twisted-eidolon-kayron":
      return `${n} injuries on his basic attack, and his counters become area injury. Mort turns those counters off; the additional damage on his third skill still lands on a miss.`;
    case "monarch-of-the-sword-iseria":
      return `${n} injuries on Sword of Duty (her counter) and on Dawnbreaker. Fracture stacks Attack on her. Doubled counters also fire the foremost ally.`;
    case "zahhak":
      return `${n} is single-target injury after an extra turn. If Arunka is on the wall, he has to hit her.`;
    case "new-moon-luna":
      return `${n} is area injury and a strip. She also starts with Skill Nullifier.`;
    case "last-rider-krau":
      return ctx?.sanctuary
        ? `${n} holds the front.`
        : `${n} holds the front and can grant the team Immunity.`;
    case "dragon-bride-senya":
      return `${n} holds the front. Oath of Punishment does not strip off.`;
    case "notos":
      return `${n} holds the front. God's Might doubles all of his stats and puts Sanctuary of Battle on the field: nobody can be buffed or debuffed. That third skill starts the first fight on cooldown.`;
    case "mort":
      return ctx && ctx.wallCounters === false
        ? `${n} holds the front.`
        : `${n} holds the front and prevents every other hero from countering.`;
    case "dark-corvus":
      return `${n} holds the front. Hits feed his third skill, which ignores damage sharing and applies Extinction if it kills.`;
    case "ruele-of-light":
      return `${n} is the reset if a cycle goes badly.`;
    case "school-nurse-yulha":
      return `${n} revives an ally at full Health with Superhumanization: undispellable +100% max Health and Speed. She also cleanses and heals at the start of every ally turn.`;
    case "maid-chloe":
      return `${n} revives the dead and places Revive on the living.`;
    case "diene":
      return `${n} is cleanse and barrier. She does not grant team Immunity.`;
    case "blood-moon-haste":
      return `${n} is sustain and a strip. A kill with Moon Slash revives the bench \u2014 anti-revive still shuts that.`;
    case "briar-witch-iseria":
      if (ctx?.sanctuary) {
        return `${n} is Witch's Curse: nobody revives while she lives.`;
      }
      if (ctx?.wallRevive) {
        return `${n} is Witch's Curse: nobody revives while she lives. Soulburn Cursed Thorn is the area strip and ignores Effect Resistance.`;
      }
      return `${n} is the area strip. Soulburn ignores Effect Resistance.`;
    case "hecate":
      return ctx?.wallRevive || ctx?.sanctuary
        ? `${n} is Death's Dominion: nobody revives, and Immortal does not apply. Her third skill ignores damage sharing. That skill starts the first fight on cooldown.`
        : `${n} ignores damage sharing on her third skill. That skill starts the first fight on cooldown; the passive is the point.`;
    case "belian":
      return `${n} removes soul gain. Play the rest of this draft without Soulburn.`;
    case "shepherd-diene":
      return `${n} strips when anyone Soulburns. Do not Soulburn into her.`;
    case "architect-laika":
      return `${n} strips, inflicts Target, and takes an extra turn into her third skill if Target lands.`;
    case "ran":
      return `${n} grants team Immunity, then extra-turns into a strip. Frostbite turns damage sharing off.`;
    case "faithless-lidica":
      return `${n} strips two, applies Laceration, and takes an extra turn. Hits after that become injury.`;
    case "rinak":
      return `${n} strips, cuts Combat Readiness, and takes an extra turn. Stay on Pickpocketing unless the fight is over.`;
    case "straze":
      return `${n} is the area wipe. His second skill strips all and cannot be countered.`;
    case "judge-kise":
      return `${n} strips all, cannot be countered, and Soulburn ignores Effect Resistance.`;
    case "successor-taeyou":
      return `${n} is the area strip of two. Soulburn ignores Effect Resistance. With Possession, Azure Phantom extra-turns. Possession also counters on a critical hit. Roaring Spiritfall does not Dual Attack.`;
    case "arbiter-vildred":
      return `${n} is the area wipe. Dark Contract is a self-revive; anti-revive still shuts it.`;
    case "navy-captain-landy":
      return `${n} is extra-attack area damage. She is immune to Stun, Sleep, and Fear.`;
    case "little-queen-charlotte":
      return `${n} is the closer. Soulburn on her third skill cannot miss. Extinction applies only if that skill kills.`;
    case "specimen-sez":
      return `${n} stuns, then Extinction-kills if Light Storm gets the last hit.`;
    case "setsuka":
      return `${n} is the miss core. She buffs team evasion and counters when an ally is missed.`;
    case "remnant-violet":
      return `${n} is the miss magnet. Massacre charges on Focus; Solitaria turns that off.`;
    case "conqueror-lilias":
      return `${n} Dual Attacks without Soulburn, which bypasses evasion.`;
    case "sea-phantom-politis":
      return `${n} Dual Attacks while Enraged and cuts enemy resources. She is not a soul lock.`;
    case "solitaria":
      return `${n} sets enemy Focus gain to zero and locks the next cycle after the strip.`;
    case "sage-baal":
      return `${n} strips into Sleep. Sleep is ignored by Mort, Little Queen Charlotte, Dark Corvus, and Navy Captain Landy.`;
    case "frieren":
      return `${n} is strip and control. At four Soul, Defensive Magic nullifies a skill; Belian keeps her under that.`;
    case "lone-wolf-peira":
      return `${n} is the extra-turn opener. Her evasion is only on herself.`;
    case "harsetti":
      return `${n} caps enemy Speed. Do not bring a Combat Readiness stack as the win condition.`;
    case "genesis-ras":
      return `${n} covers himself with Sacred Covenant, a self-only revive. That is not team Immunity.`;
    case "fallen-cecilia":
      return `${n} holds a Skill Nullifier. Do not lead with the only strip into her.`;
    case "angel-of-light-angelica":
      return `${n} is Stun-immune. Guardian Angel can grant Skill Nullifier when she is hit by area attacks.`;
    case "lionheart-cermia":
      return `${n} extra-turns after her third skill. Dual Attacks and extra attacks into an ally reset that skill \u2014 do not give it to her.`;
    default:
      break;
  }
  switch (label) {
    case "Injury":
      return `${n} is the injury. Cutting maximum Health is how this draft wins a long fight.`;
    case "Frontline":
    case "Tank":
    case "Hold":
      return `${n} holds the front while the rest of the plan plays out.`;
    case "Sustain":
    case "Support":
      return `${n} keeps the draft alive if a cycle goes badly.`;
    case "Anti-revive":
      return `${n} turns revive off. That only holds while they are alive.`;
    case "Tech":
    case "Cover":
      return `${n} covers the plan \u2014 strip, anti-revive, or soul lock.`;
    case "Opener":
      return `${n} takes the first turn and sets up the rest of the cycle.`;
    case "Strip":
      return `${n} removes the wall's buffs so the rest of the draft can land.`;
    case "Cleave":
    case "AoE":
      return `${n} is the area damage that has to end the fight on that cycle.`;
    case "Closer":
    case "Wincon":
      return `${n} is the unit that has to win the fight.`;
    case "Control":
    case "Lock":
      return `${n} takes the next cycle after you survive the opener.`;
    case "Miss":
      return `${n} is the miss core. Single-target skills into this unit will fail often.`;
    case "Force":
    case "True":
      return `${n} deals hits that do not care about evasion.`;
    case "Cap":
      return `${n} caps enemy Speed.`;
    case "Soul lock":
      return `${n} removes soul gain.`;
    default:
      return `${n} fills the ${label.toLowerCase()} role in this draft.`;
  }
}
function setupFor(
  picks: { label: string; hero: Hero }[],
  read: DefenseRead,
): string {
  const sanctuary = read.uniqueEffects.some((u) =>
    /sanctuary of battle|god of battle/i.test(u.name),
  );
  const wallRevive =
    read.roles.includes("revive") ||
    read.uniqueEffects.some((u) =>
      /covenant|fragment of life|time reversal|grudge|blood aura|spirit gate|soul exchange|dark contract|vip treatment|spirit lord|superhumanization|it's time to be reborn/i.test(
        u.name,
      ),
    );
  const wallCounters =
    read.tags.includes("counter") ||
    read.watch.some((t) => t.key === "evade" || t.key === "no-counter") ||
    read.uniqueEffects.some((u) =>
      /elbris's successor|sword of duty|possession|spirit invocation/i.test(
        u.name,
      ),
    );
  return picks
    .map((p) => jobFor(p.hero, p.label, { sanctuary, wallRevive, wallCounters }))
    .join(" ");
}
function pitfallsFor(picks: { label: string; hero: Hero }[], read: DefenseRead): string[] {
  const filled = picks.map((p) => p.hero);
  const names = new Set(filled.map((h) => h.id));
  const ranked: { prio: number; line: string }[] = [];
  const push = (prio: number, line: string) => ranked.push({ prio, line });
  const uniq = (re: RegExp) => read.uniqueEffects.some((u) => re.test(u.name));
  const stripper = filled.find(
    (h) => h.tags.includes("strip") || h.roles.includes("strip") || h.tags.includes("anti-revive"),
  );
  const sanctuary = uniq(/sanctuary of battle|god of battle/i);
  const injury = filled.some((h) => h.tags.includes("injury"));

  if (sanctuary) {
    push(
      0,
      injury
        ? "Sanctuary of Battle turns buffs and debuffs off for both sides. Stay on injury. Strip, stun, and Immunity will not land while it is up."
        : "Sanctuary of Battle turns buffs and debuffs off for both sides. Strip and stun will not land. Kill him before God's Might, or bring injury.",
    );
  }
  if (read.roles.includes("speedcap")) {
    push(
      1,
      injury
        ? "This wall caps Speed. Stay on injury; a cleave will not work."
        : "This wall caps Speed. You cannot outrun the first cycle.",
    );
  }
  if (uniq(/offering|scales of equity/i) && !filled.some((h) => (h.effects ?? []).includes("ignore-damage-sharing"))) {
    push(
      2,
      "Offering still shares seventy percent of damage onto the front. Do not spend the closer into the back while the front is alive.",
    );
  }
  if (read.roles.includes("revive")) {
    const anti = filled.find((h) => h.tags.includes("anti-revive"));
    const clashCovered =
      (names.has("briar-witch-iseria") || names.has("hecate")) &&
      (names.has("ruele-of-light") ||
        names.has("school-nurse-yulha") ||
        names.has("maid-chloe"));
    if (!clashCovered) {
      push(
        3,
        anti
          ? `Revive on this wall is off only while ${anti.name} is alive.`
          : "This wall can reset. Injury you have already stacked is lost unless anti-revive or Extinction lands.",
      );
    }
  }
  if (names.has("briar-witch-iseria") && names.has("ruele-of-light")) {
    push(
      4,
      sanctuary
        ? "Witch's Curse turns Ruele's revive off. During Sanctuary her Barrier does not apply either — she is heals only."
        : "Witch's Curse turns Ruele's revive off as well. She is heals and Barrier only while Briar Witch Iseria is alive.",
    );
  }
  if (names.has("briar-witch-iseria") && names.has("school-nurse-yulha")) {
    push(
      4,
      "Witch's Curse turns School Nurse Yulha's revive off as well. She is still the per-turn cleanse and heal.",
    );
  }
  if (names.has("hecate") && (names.has("ruele-of-light") || names.has("school-nurse-yulha") || names.has("maid-chloe"))) {
    push(4, "Death's Dominion turns your revive off as well while Hecate is alive.");
  }
  if (names.has("briar-witch-iseria") && names.has("maid-chloe")) {
    push(4, "Witch's Curse turns Maid Chloe's revive off. VIP Treatment does not land while she lives.");
  }
  if (names.has("mort") && filled.some((h) => h.id !== "mort" && h.tags.includes("counter"))) {
    push(4, "Mort on this draft turns your other counters off. Non-counter skills still play.");
  }
  if (uniq(/ferocious stand/i)) {
    const aoeInjury = filled.some((h) => h.tags.includes("injury") && h.tags.includes("aoe"));
    if (aoeInjury) {
      push(
        5,
        "Ferocious Stand only blocks single-target skills. The injury in this draft hits everyone, so you do not have to attack Arunka.",
      );
    } else if (names.has("zahhak") || names.has("empyrean-ilynav")) {
      push(5, "Ferocious Stand forces single-target injury onto Arunka. You have to accept hitting her.");
    }
  }
  if (
    stripper &&
    !sanctuary &&
    read.uniqueEffects.some(
      (u) => /^skill nullifier$/i.test(u.name) || /guardian angel/i.test(u.name),
    )
  ) {
    push(6, `Skill Nullifier eats the first skill. Do not open with ${stripper.name}.`);
  }
  if (uniq(/dark moon|noias/i) && filled.some((h) => h.tags.includes("soulburn"))) {
    push(6, "Any Soulburn on this wall triggers Dark Moon and strips your team. Do not Soulburn.");
  }
  if (uniq(/it's far from over/i) && filled.some((h) => h.tags.includes("dual-attack"))) {
    push(6, "A Dual Attack into Lionheart Cermia resets her third skill. Do not Dual Attack into her.");
  }
  if (read.tags.includes("evade") && names.has("little-queen-charlotte")) {
    push(6, "Little Queen Charlotte still misses without Soulburn. Belian on their side turns that Soulburn off.");
  }
  if (uniq(/demon blade/i)) {
    push(6, "During Demon Blade Unleashed, Setsuka cannot die. Wait it out, or strip first.");
  }
  if (uniq(/absolute dignity/i) && filled.some((h) => h.tags.includes("counter"))) {
    push(6, "Mort prevents every other hero from countering. Counter plans do not work into him.");
  }
  if (names.has("rinak")) {
    push(7, "Rinak stuns herself on her third skill. Stay on Pickpocketing unless the fight is over.");
  }

  const seen = new Set<string>();
  const cap = sanctuary ? 4 : 3;
  return ranked
    .sort((a, b) => a.prio - b.prio)
    .map((x) => x.line)
    .filter((line) => {
      if (seen.has(line)) return false;
      seen.add(line);
      return true;
    })
    .slice(0, cap);
}
function whyFor(recipe: Recipe, read: DefenseRead, filled: Hero[]): string[] {
  const why: string[] = [];
  const names = new Set(filled.map((h) => h.id));
  const sanctuary = read.uniqueEffects.some((u) =>
    /sanctuary of battle|god of battle/i.test(u.name),
  );
  if (sanctuary && filled.some((h) => h.tags.includes("injury"))) {
    why.push(
      "Sanctuary of Battle turns buffs and debuffs off for both sides. Injury still stacks.",
    );
  }
  if (
    read.roles.includes("speedcap") &&
    filled.some((h) => h.tags.includes("injury"))
  ) {
    why.push(
      "Injury ignores the speed cap. You are playing the long fight this wall wants, on better terms.",
    );
  }
  if (
    read.roles.includes("revive") &&
    filled.some((h) => h.tags.includes("anti-revive")) &&
    !names.has("briar-witch-iseria") &&
    !names.has("hecate")
  ) {
    why.push(
      "Anti-revive stops the reset, so the wall cannot stall forever.",
    );
  }
  if (
    read.watch.some((t) => t.key === "evade") &&
    filled.some(
      (h) =>
        h.tags.includes("aoe") ||
        h.tags.includes("dual-attack") ||
        h.tags.includes("injury"),
    )
  ) {
    why.push(
      "Area attacks, Dual Attacks, and injury do not miss the way a single-target third skill does.",
    );
  }
  if (
    read.roles.includes("soulblock") &&
    !filled.some((h) => h.tags.includes("soulburn"))
  ) {
    why.push(
      "This draft does not need souls, so Belian is only a bulky knight.",
    );
  }
  if (names.has("briar-witch-iseria")) {
    const reviveOnWall =
      read.roles.includes("revive") ||
      read.uniqueEffects.some((u) =>
        /covenant|fragment of life|time reversal|grudge|blood aura|spirit gate|soul exchange|dark contract|vip treatment|spirit lord|superhumanization|it's time to be reborn/i.test(
          u.name,
        ),
      );
    if (reviveOnWall) {
      why.push(
        sanctuary
          ? "Witch's Curse turns revive off while she lives. Strip does not land during Sanctuary of Battle."
          : "Soulburn Cursed Thorn strips through Effect Resistance. Revive is off while she lives.",
      );
    } else if (
      read.tags.includes("immunity") ||
      read.roles.includes("strip")
    ) {
      why.push(
        "Soulburn Cursed Thorn is an area strip that ignores Effect Resistance.",
      );
    }
  }
  if (
    names.has("hecate") &&
    (read.roles.includes("revive") ||
      read.uniqueEffects.some((u) =>
        /offering|scales of equity/i.test(u.name),
      ))
  ) {
    why.push(
      "Death's Dominion: no revive, no Immortal. Her third skill ignores damage sharing.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)) &&
    filled.some((h) => h.tags.includes("aoe"))
  ) {
    const stInjury = filled.some(
      (h) => h.tags.includes("injury") && !h.tags.includes("aoe"),
    );
    why.push(
      stInjury
        ? "Area attacks ignore Ferocious Stand. Single-target injury still has to hit Arunka."
        : "Area attacks ignore Ferocious Stand. You do not have to attack Arunka.",
    );
  }
  if (names.has("conqueror-lilias") && read.tags.includes("evade")) {
    why.push(
      "Conqueror Lilias Dual Attacks without Soulburn, which bypasses Concentration.",
    );
  }
  if (names.has("sea-phantom-politis") && read.tags.includes("evade")) {
    why.push(
      "Sea Phantom Politis Dual Attacks while Enraged, with no Soulburn required.",
    );
  }
  if (
    names.has("mort") &&
    (read.tags.includes("counter") ||
      read.watch.some((t) => t.key === "evade"))
  ) {
    if (
      read.uniqueEffects.some((u) =>
        /elbris's successor|sword of duty/i.test(u.name),
      )
    ) {
      why.push(
        "Mort turns her doubled counters off. Dawnbreaker still injures.",
      );
    } else if (read.watch.some((t) => t.key === "evade")) {
      why.push("Mort: nobody else can counter. Setsuka bounce is off.");
    } else {
      why.push("Mort: nobody else can counter.");
    }
  }
  if (
    names.has("rinak") &&
    (read.tags.includes("immunity") ||
      read.roles.includes("strip") ||
      read.roles.includes("control"))
  ) {
    why.push(
      "Pickpocketing strips, cuts Combat Readiness, and grants an extra turn. Do not use the third skill unless the fight ends.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /defensive magic/i.test(u.name)) &&
    filled.some((h) => h.roles.includes("soulblock"))
  ) {
    why.push(
      "Belian keeps Frieren under four Soul, so Defensive Magic never comes up.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /tranquility|astral guide/i.test(u.name))
  ) {
    why.push(
      "Do not recast Immunity or heals into Politis \u2014 Tranquility clips buff duration and she takes the cycle.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /sacred covenant/i.test(u.name)) &&
    filled.some((h) => h.tags.includes("anti-revive"))
  ) {
    why.push(
      "Anti-revive shuts the Covenant revive. After five turns he is only a knight.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /grudge|blood aura/i.test(u.name)) &&
    filled.some((h) => h.tags.includes("anti-revive"))
  ) {
    why.push(
      "Anti-revive stops Moon Slash from bringing the bench back. Do not give him the last hit.",
    );
  }
  if (names.has("frieren") && filled.some((h) => h.tags.includes("evade"))) {
    why.push(
      "Frieren's extra Focus and Fighting Spirit charges Massacre and Demon Blade faster.",
    );
  }
  if (
    names.has("solitaria") &&
    (read.tags.includes("evade") || read.roles.includes("evasion"))
  ) {
    why.push(
      "Solitaria sets their Focus gain to zero. Massacre never comes up.",
    );
  }
  if (
    read.uniqueEffects.some((u) => /dark moon|noias/i.test(u.name)) &&
    filled.some((h) => h.tags.includes("soulburn"))
  ) {
    why.push(
      "Do not Soulburn into Shepherd of the Dark Diene \u2014 Dark Moon strips two from everyone.",
    );
  }
  if (
    names.has("lone-wolf-peira") &&
    (read.roles.includes("opener") ||
      read.archetype === "speed-cleave" ||
      read.archetype === "turn2-control")
  ) {
    why.push(
      "Peira extra turn plus Swift Attack is the opener. She is not a stripper.",
    );
  }
  if (
    names.has("urban-shadow-choux") &&
    (read.roles.includes("speedcap") ||
      read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)))
  ) {
    why.push(
      "Bzzt! injuries everyone after each attack. Ferocious Stand does not eat it.",
    );
  }
  if (
    names.has("straze") &&
    (read.tags.includes("immunity") ||
      read.tags.includes("evade") ||
      read.roles.includes("strip"))
  ) {
    why.push(
      "Straze's second skill strips all and ignores Effect Resistance against lower Attack.",
    );
  }
  if (
    names.has("zahhak") &&
    read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name))
  ) {
    why.push("Zahhak has to attack Arunka. Bring area injury if you can.");
  }
  if (
    names.has("zahhak") &&
    (read.roles.includes("speedcap") || read.archetype === "harsetti-stall")
  ) {
    why.push(
      "Execute is 35% injury after an extra turn. The cap does not stop it.",
    );
  }
  if (
    names.has("ambitious-tywin") &&
    (read.roles.includes("soulblock") || read.tags.includes("immunity"))
  ) {
    why.push(
      "Flash is area Stun and Decrease Defense. He does not strip \u2014 bring a real stripper.",
    );
  }
  if (
    names.has("ran") &&
    read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name))
  ) {
    why.push(
      "Frostbite turns Offering off \u2014 damage sharing and damage reduction do not apply.",
    );
  }
  if (
    names.has("ran") &&
    (read.tags.includes("immunity") || read.roles.includes("strip"))
  ) {
    why.push(
      "Her second skill extra-turns into Instant Blade. Soulburn ignores Effect Resistance.",
    );
  }
  if (
    names.has("judge-kise") &&
    (read.tags.includes("immunity") ||
      read.tags.includes("evade") ||
      read.tags.includes("counter"))
  ) {
    why.push(
      "End of Evil strips all and cannot be countered. Soulburn ignores Effect Resistance.",
    );
  }
  if (
    names.has("lone-crescent-bellona") &&
    (read.roles.includes("speedcap") ||
      read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)))
  ) {
    why.push(
      "All Eyes on Me injuries everyone at full Fighting Spirit. Ferocious Stand does not eat the area hit.",
    );
  }
  if (
    names.has("dark-corvus") &&
    (read.roles.includes("revive") ||
      read.uniqueEffects.some((u) =>
        /offering|scales of equity/i.test(u.name),
      ))
  ) {
    why.push(
      "Devil's Descent ignores Offering and Extinction-kills. The first fight starts that skill on cooldown.",
    );
  }
  if (
    names.has("closer-charles") &&
    (read.tags.includes("injury") || read.archetype === "injury-grind")
  ) {
    why.push(
      "Demolition scales with lost Health. Injury walls feed him the execute.",
    );
  }
  if (
    names.has("little-queen-charlotte") &&
    (read.tags.includes("evade") || read.roles.includes("evasion"))
  ) {
    why.push(
      "Soulburn on her third skill is +100% Hit Chance. Aim Violet as the main target.",
    );
  }
  if (names.has("little-queen-charlotte") && read.roles.includes("revive")) {
    why.push("Extinction only applies if that third skill kills.");
  }
  if (
    names.has("designer-lilibet") &&
    (read.roles.includes("control") || read.tags.includes("stun"))
  ) {
    why.push(
      "Do not stack debuffs into Emergency Stitching \u2014 that is her Combat Readiness and Immunity.",
    );
  }
  if (
    names.has("faithless-lidica") &&
    (read.tags.includes("immunity") || read.roles.includes("tank"))
  ) {
    why.push(
      "Larkspur strips two, applies Laceration, and extra-turns. Hits after that become injury.",
    );
  }
  if (
    names.has("maid-chloe") &&
    filled.some((h) => h.tags.includes("anti-revive"))
  ) {
    why.push(
      "Anti-revive shuts VIP Treatment. The Revive buff on the living is still a revive.",
    );
  }
  if (
    filled.some((h) => h.tags.includes("anti-revive")) &&
    read.uniqueEffects.some((u) =>
      /superhumanization|it's time to be reborn/i.test(u.name),
    )
  ) {
    why.push(
      "Anti-revive shuts It's Time to Be Reborn. Superhumanization never comes up.",
    );
  }
  if (
    names.has("specimen-sez") &&
    (read.roles.includes("revive") || read.tags.includes("stun"))
  ) {
    why.push(
      "Stun first. Light Storm fully penetrates a stunned target and applies Extinction if it kills.",
    );
  }
  if (
    names.has("arbiter-vildred") &&
    filled.some((h) => h.tags.includes("anti-revive"))
  ) {
    why.push(
      "Anti-revive shuts Dark Contract. Without it he returns at 70% Health with a full bar.",
    );
  }
  if (
    names.has("twisted-eidolon-kayron") &&
    (read.tags.includes("evade") || read.roles.includes("evasion"))
  ) {
    why.push(
      "Sword of Requiem additional damage hits even on a miss. Injury on his first skill also applies on a miss.",
    );
  }
  if (
    names.has("lionheart-cermia") &&
    (read.tags.includes("dual-attack") || read.tags.includes("counter"))
  ) {
    why.push("Do not Dual Attack into her. That resets her third skill.");
  }
  if (
    names.has("architect-laika") &&
    (read.tags.includes("evade") ||
      read.roles.includes("evasion") ||
      read.roles.includes("revive"))
  ) {
    why.push(
      "Target reduces Evasion by 50%. The extra turn into her third skill Extinction-kills if it gets the last hit.",
    );
  }
  if (
    names.has("sage-baal") &&
    !read.uniqueEffects.some((u) =>
      /absolute dignity|queen's dignity|ruin's advent|ruler of the sea/i.test(
        u.name,
      ),
    )
  ) {
    why.push(
      "Sleep reduces Evasion to zero until they take a hit. Do not splash before Eye of Death.",
    );
  }
  return why.slice(0, 3);
}
function requirePool() {
  return allHeroes()
    .filter((h) => h.verified)
    .map((h) => h.id);
}
function recipesFor(read: DefenseRead): Recipe[] {
  const all = allRecipes();
  let hit = all.filter(
    (r) => r.vs.includes(read.archetype) || r.vs.length === 0,
  );
  const sanctuary = read.uniqueEffects.some((u) =>
    /sanctuary of battle|god of battle/i.test(u.name),
  );
  if (sanctuary) {
    hit = hit.filter(
      (r) => r.id !== "outspeed-cleave" && r.id !== "strip-control",
    );
    if (!hit.some((r) => r.id === "injury-vs-stall")) {
      const injury = all.find((r) => r.id === "injury-vs-stall");
      if (injury) hit = [injury, ...hit];
    }
  }
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
  const results = [];
  for (const recipe of recipesFor(read)) {
    const reviveThreat =
      read.roles.includes("revive") ||
      read.uniqueEffects.some((u) =>
        /covenant|fragment of life|time reversal|grudge|blood aura|spirit gate|soul exchange|dark contract|vip treatment|spirit lord|superhumanization|it's time to be reborn/i.test(
          u.name,
        ),
      );
    if (recipe.id === "anti-revive-burst" && !reviveThreat) continue;
    const filled = fillRecipe(recipe, usable, enemyIds);
    if (filled.heroIds.length < 3) continue;
    const filledHeroes = filled.picks.map((p) => p.hero);
    const answerable = read.watch.filter(
      (t) =>
        t.answerTags?.length ||
        t.answerRoles?.length ||
        t.answerEffects?.length,
    ).length;
    const gaps = unansweredThreats(
      read.watch,
      filledHeroes,
    );
    const answered = Math.max(0, answerable - gaps.length);
    const tierAvg =
      filledHeroes.reduce((s, h) => s + TIER_ORDER[h.tier], 0) /
      Math.max(1, filledHeroes.length);
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
      setup: setupFor(filled.picks, read),
      pitfalls: pitfallsFor(filled.picks, read),
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
  if (name.includes(t) || short.toLowerCase().includes(t) || h.id.includes(t))
    return true;
  if (name.split(/[\s.&'-]+/).some((w) => w.startsWith(t))) return true;
  const hay =
    `${h.element} ${h.class} ${h.roles.join(" ")} ${h.tags.join(" ")} ${(h.effects ?? []).join(" ")}`.toLowerCase();
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
export function bestHeroMatches(query: string, list: Hero[] = allHeroes()): Hero[] {
  const tokens = searchTokens(query);
  const used = new Set();
  const out = [];
  for (const t of tokens) {
    const hit = list
      .filter((h) => !used.has(h.id) && tokenScore(h, t) >= 40)
      .sort(
        (a, b) =>
          tokenScore(b, t) - tokenScore(a, t) || a.name.localeCompare(b.name),
      )[0];
    if (hit) {
      used.add(hit.id);
      out.push(hit);
    }
  }
  return out;
}