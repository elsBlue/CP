/**
 * Wall watches. Accumulated — never rewrite this file as a whole.
 * Targeted search-replace of a unique nearby block only.
 * Floor: stay above 400 lines.
 */
import { heroEffects } from "./effects";
import type { Hero, NormalEffect, Role, Tag } from "./types";

export type DraftThreat = {
  key: string;
  label: string;
  note: string;
  answerTags?: Tag[];
  answerRoles?: Role[];
  answerEffects?: NormalEffect[];
};

function hasUnique(heroes: Hero[], needle: string): boolean {
  const n = needle.toLowerCase();
  return heroes.some((h) => (h.uniqueEffects ?? []).some((u) => u.name.toLowerCase().includes(n)));
}

export function wallThreats(heroes: Hero[]): DraftThreat[] {
  const out: DraftThreat[] = [];
  const add = (t: DraftThreat) => {
    if (!out.some((x) => x.key === t.key)) out.push(t);
  };

  const ids = new Set(heroes.map((h) => h.id));
  const roles = new Set(heroes.flatMap((h) => h.roles));
  const tags = new Set(heroes.flatMap((h) => h.tags));
  const debuffs = heroes.flatMap((h) => h.debuffs ?? []);
  const hasDebuff = (name: string) => debuffs.some((d) => d.toLowerCase() === name.toLowerCase());

  if (roles.has("speedcap") || ids.has("harsetti") || hasUnique(heroes, "skuggiheim")) {
    add({
      key: "speedcap",
      label: "Speed cap",
      note: hasUnique(heroes, "skuggiheim")
        ? "Speed is capped. Combat Readiness increase on her turn does not apply. Use injury, or a turn-2 plan."
        : "Speed contest is off. Use injury, or a turn-2 plan.",
      answerTags: ["injury"],
    });
  }
  if (roles.has("soulblock") || ids.has("belian") || hasUnique(heroes, "shackles of suppression")) {
    add({
      key: "soulblock",
      label: "Soul lock",
      note: "No souls. Play this fight without Soulburn.",
    });
  } else if (
    hasUnique(heroes, "unwavering execution") ||
    ids.has("disciplinary-prefect-aria")
  ) {
    add({
      key: "dp-aria",
      label: "DP Aria",
      note: "Enemy Soulburn costs double. Souls still generate. This is not Belian. Disciplinary Action injuries while Purge is on cooldown.",
      answerTags: ["injury"],
    });
  }
  if (hasUnique(heroes, "dragon flame") || ids.has("martial-artist-ken")) {
    add({
      key: "ma-ken",
      label: "MA Ken",
      note: "Counters ally crits, and Dragon Flame when he is crit (50% penetrate, lost Health). Mort and Star's Blessing turn those counters off.",
      answerTags: ["aoe"],
    });
  }
  if (
    roles.has("revive") ||
    ids.has("lisette") ||
    ids.has("ruele-of-light") ||
    hasUnique(heroes, "fragment of life") ||
    hasUnique(heroes, "time reversal") ||
    hasUnique(heroes, "spirit lord") ||
    hasUnique(heroes, "sacred covenant") ||
    hasUnique(heroes, "it's time to be reborn") ||
    ids.has("school-nurse-yulha")
  ) {
    add({
      key: "revive",
      label: "Revive / reset",
      note: "A kill can reset. Land anti-revive, or play two cycles.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "time reversal")) {
    add({
      key: "reversal",
      label: "Time Reversal",
      note: "Do not commit everything on the first cycle. Health and state roll back.",
    });
  }
  if (
    heroes.some((h) => (h.uniqueEffects ?? []).some((u) => /^skill nullifier$/i.test(u.name))) ||
    ids.has("fallen-cecilia") ||
    ids.has("angel-of-light-angelica") ||
    ids.has("eternal-wanderer-ludwig")
  ) {
    add({
      key: "nullifier",
      label: "Skill Nullifier",
      note: "Eats one skill. Do not open with your only strip.",
    });
  }
  if (ids.has("setsuka") || ids.has("remnant-violet")) {
    add({
      key: "evade",
      label: "Evasion",
      note: "Single-target third skills miss often. Use area attacks, Dual Attacks, or injury.",
      answerTags: ["aoe", "dual-attack", "injury"],
    });
  }
  if (tags.has("injury") && (roles.has("bruiser") || roles.has("tank") || roles.has("dps"))) {
    add({
      key: "injury",
      label: "Injury",
      note: "They want the long fight. Do not race raw Health.",
    });
  }
  if (
    (ids.has("last-rider-krau") || heroes.some((h) => h.tags.includes("immunity") && h.roles.includes("tank"))) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "strip",
      label: "Buffed wall",
      note: "They are sitting in buffs. Bring a strip.",
      answerRoles: ["strip"],
      answerTags: ["strip"],
      answerEffects: ["buff-dispel"],
    });
  }
  if (hasDebuff("Seal") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) {
    add({
      key: "seal",
      label: "Seal",
      note: "Passives are off. Do not lean on a buffed opener.",
    });
  } else if (
    hasDebuff("Cannot Buff") &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "unbuffable",
      label: "Cannot Buff",
      note: "New buffs will not land. This is not Seal — passives still run.",
    });
  }
  if (
    (hasUnique(heroes, "cascade") ||
      hasUnique(heroes, "lullaby for waves") ||
      ids.has("dragon-king-sharun")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "cascade",
      label: "Cascade",
      note: "Do not Stun, Sleep, or Fear this wall. That cleanses the lock and grants Cascade: 4,000 extra damage on their next attack.",
    });
  }
  if (hasUnique(heroes, "ferocious stand")) {
    add({
      key: "force-target",
      label: "Forced targeting",
      note: "Single-target skills have to hit her. Prefer area attacks.",
      answerTags: ["aoe"],
    });
  }
  if (hasUnique(heroes, "oath of punishment")) {
    add({
      key: "oath",
      label: "Oath of Punishment",
      note: "Undispellable. Debuffs do not stick on her.",
    });
  }
  if (hasUnique(heroes, "insight") || ids.has("sylvan-sage-vivian")) {
    add({
      key: "ss-vivian",
      label: "SS Vivian",
      note: "Starts at full Focus: immune to debuffs. A hit of 30% max Health spends 1 Focus for 50% damage reduction. This is not the Immunity buff — strip does not turn it off.",
      answerTags: ["injury", "aoe"],
    });
  }
  if (
    hasUnique(heroes, "barrier inversion") ||
    hasUnique(heroes, "desert storm") ||
    ids.has("desert-jewel-basar")
  ) {
    add({
      key: "dj-basar",
      label: "DJ Basar",
      note: "Team Immunity and a full cleanse. Desert Storm strips two and inverts Barrier into damage. Extra turn only if a target has Barrier. Do not put Barrier on this wall.",
      answerTags: ["strip"],
    });
  }
  if (
    hasUnique(heroes, "shield of holy spirit") ||
    ids.has("crimson-armin")
  ) {
    add({
      key: "c-armin",
      label: "C.Armin",
      note: "Team Immunity 2 turns and Invincible 1 turn. Strip before that window, or wait it out. She does not cleanse.",
      answerTags: ["strip"],
    });
  }
  if (hasUnique(heroes, "divine vessel") || ids.has("bystander-hwayoung")) {
    add({
      key: "b-hwayoung",
      label: "ML Hwayoung",
      note: "Immune to buffs and debuffs. Strip does not apply. A 40% hit on an ally fires Sura at a random enemy: ignore share, ignore damage reduction, Extinction on a kill.",
      answerTags: ["aoe", "injury"],
    });
  }
  if (hasUnique(heroes, "demon blade")) {
    add({
      key: "cannot-die",
      label: "Cannot die",
      note: "She cannot die in that window. Do not spend the closer there.",
      answerTags: ["strip"],
    });
  }
  if (hasDebuff("Beguile")) {
    add({
      key: "beguile",
      label: "Beguile",
      note: "After her strip, the back line takes 10% of maximum Health.",
    });
  }
  if (
    (hasDebuff("Block") ||
      hasUnique(heroes, "mirror of the abyss") ||
      ids.has("witch-of-the-mere-tenebria")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "block",
      label: "Block",
      note: "After the strip, Block: you cannot receive buffs, and other heroes cannot cleanse you. Not Seal — passives still run. The random Stun, Sleep, or Redirected Provoke is not guaranteed.",
    });
    add({
      key: "wmeri",
      label: "WMeri Dual Attack",
      note: "While Mirror of the Abyss is on cooldown, her basic attack Dual Attacks from their highest-Attack ally.",
    });
  }
  if (
    (hasDebuff("Restrict") || hasUnique(heroes, "restrict")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "restrict",
      label: "Restrict",
      note: "Combat Readiness push other than Speed does not apply.",
    });
  }
  if (
    (hasDebuff("Rupture") || hasUnique(heroes, "rupture")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "rupture",
      label: "Rupture",
      note: "Attacking a Ruptured hero deals extra damage back, proportional to maximum Health.",
    });
  }
  if (hasUnique(heroes, "witch's curse") || ids.has("briar-witch-iseria") || hasUnique(heroes, "death's dominion") || ids.has("hecate")) {
    add({
      key: "both-revive",
      label: "No revive (both sides)",
      note: "Nobody revives while they live. Your revive is off as well.",
    });
  }
  if (hasUnique(heroes, "offering") || hasUnique(heroes, "scales of equity")) {
    add({
      key: "offering",
      label: "Offering",
      note: "Seventy percent of damage is shared onto the front. Do not spend the closer into the share.",
      answerEffects: ["ignore-damage-sharing"],
    });
    add({
      key: "cr-steal",
      label: "Combat Readiness steal",
      note: "When you increase Combat Readiness, she takes 35% of it.",
    });
  }
  if (hasUnique(heroes, "spirit gate") || ids.has("spirit-eye-celine")) {
    add({
      key: "se-celine",
      label: "SE Celine reset",
      note: "Her third skill revives all. One hit cannot exceed 70% Health. Use anti-revive.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "soul exchange") || ids.has("apocalypse-ravi")) {
    add({
      key: "aravi-reset",
      label: "A.Ravi kill-revive",
      note: "A kill with her third skill revives one ally. Anti-revive shuts it.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "bzzt") || ids.has("urban-shadow-choux")) {
    add({
      key: "bzzt",
      label: "Bzzt!",
      note: "Every attack injures everyone.",
    });
  }
  if (hasUnique(heroes, "time to rampage") || ids.has("lone-wolf-peira")) {
    add({
      key: "peira-evade",
      label: "Peira evade",
      note: "+35% self evasion. Extra-turn opener. This is not a miss nest.",
      answerTags: ["aoe", "dual-attack", "injury"],
    });
  }
  if (hasUnique(heroes, "ruler of the sea") || ids.has("navy-captain-landy")) {
    add({
      key: "nc-landy",
      label: "NC Landy",
      note: "Immune to Stun, Sleep, and Fear. Extra-attack area damage.",
    });
  }
  if (hasUnique(heroes, "laying the groundwork") || ids.has("architect-laika")) {
    add({
      key: "a-laika",
      label: "A.Laika",
      note: "Strip and Target, then an extra turn into Extinction on the third skill.",
    });
  }
  if (hasUnique(heroes, "cloud of ruin") || ids.has("sage-baal")) {
    add({
      key: "sage-baal",
      label: "Sage Baal",
      note: "Area strip into Sleep. Mort, Little Queen Charlotte, Dark Corvus, and Navy Captain Landy ignore Sleep.",
    });
  }
  if (hasUnique(heroes, "wandering eidolon") || ids.has("twisted-eidolon-kayron")) {
    add({
      key: "te-kayron",
      label: "TE Kayron",
      note: "Counters are area injury. Additional damage on the third skill hits on a miss. Mort turns counters off.",
    });
  }
  if (hasUnique(heroes, "elbris's successor") || ids.has("monarch-of-the-sword-iseria")) {
    add({
      key: "miseria",
      label: "Miseria",
      note: "Counter chance is doubled, and the foremost ally counters with her. Dawnbreaker is area injury. Fracture stays through revive. Mort turns the counters off.",
    });
  }
  if (hasUnique(heroes, "it's far from over") || ids.has("lionheart-cermia")) {
    add({
      key: "lh-cermia",
      label: "LH Cermia",
      note: "Do not Dual Attack into her. That resets her third skill.",
    });
  }
  if (hasUnique(heroes, "light storm") || ids.has("specimen-sez")) {
    add({
      key: "s-sez",
      label: "S.Sez",
      note: "Stun, then Extinction if Light Storm gets the last hit.",
    });
  }
  if (hasUnique(heroes, "dark contract") || ids.has("arbiter-vildred")) {
    add({
      key: "a-vildred",
      label: "A.Vildred",
      note: "Dies once, returns at 70% Health with a full bar. Anti-revive shuts it.",
      answerTags: ["anti-revive", "aoe"],
    });
  }
  if (hasUnique(heroes, "vip treatment") || ids.has("maid-chloe")) {
    add({
      key: "maid-chloe",
      label: "Maid Chloe",
      note: "Revives the dead and places Revive on the living. Anti-revive shuts it.",
      answerTags: ["anti-revive"],
    });
  }
  if (hasUnique(heroes, "superhumanization") || ids.has("school-nurse-yulha")) {
    add({
      key: "sn-yulha",
      label: "SN Yulha",
      note: "Full revive with Superhumanization: +100% max Health and Speed, undispellable. That cooldown cannot be pushed. Anti-revive shuts it.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "spirit invocation") || ids.has("successor-taeyou")) {
    add({
      key: "s-taeyou",
      label: "S.Taeyou",
      note: "Area strip of two, then Invincible. Possession counters on a critical hit. Azure Phantom extra-turns if he is Possessed. Soulburn ignores Effect Resistance. Roaring Spiritfall does not Dual Attack.",
      answerRoles: ["strip"],
    });
  }
  if (hasUnique(heroes, "sanctuary of battle") || ids.has("notos")) {
    add({
      key: "notos",
      label: "Notos",
      note: "God's Might doubles all of his stats and puts Sanctuary of Battle on the field: buffs and debuffs do not apply to anyone. That third skill starts the first fight on cooldown. Injury still works. Combat Readiness does not move him until he transforms.",
      answerTags: ["injury"],
    });
  }
  if (hasUnique(heroes, "laceration") || ids.has("faithless-lidica")) {
    add({
      key: "f-lidica",
      label: "F.Lidica",
      note: "Area strip of two, Laceration, then an extra turn.",
      answerTags: ["strip"],
    });
  }
  if (hasUnique(heroes, "emergency stitching") || ids.has("designer-lilibet")) {
    add({
      key: "d-lilibet",
      label: "D.Lilibet",
      note: "Your debuffs feed her Combat Readiness and Immunity.",
    });
  }
  if (hasUnique(heroes, "queen's dignity") || ids.has("little-queen-charlotte")) {
    add({
      key: "lq-charlotte",
      label: "LQ Charlotte",
      note: "Immune to Stun, Sleep, and Fear. Soulburn on her third skill cannot miss.",
    });
  }
  if (hasUnique(heroes, "ruin's advent") || ids.has("dark-corvus")) {
    add({
      key: "d-corvus",
      label: "D.Corvus",
      note: "Hits feed his third skill. It ignores damage sharing and applies Extinction on a kill. The first fight starts that skill on cooldown.",
    });
  }
  if (hasUnique(heroes, "closer") || ids.has("closer-charles")) {
    add({
      key: "c-charles",
      label: "C.Charles",
      note: "Start-of-fight evasion. Executes units under 40% Health.",
    });
  }
  if (hasUnique(heroes, "waxing crescent") || ids.has("lone-crescent-bellona")) {
    add({
      key: "lc-bellona",
      label: "LC Bellona",
      note: "Self evasion, plus area injury at full Fighting Spirit. This is not a miss nest.",
      answerTags: ["aoe", "injury"],
    });
  }
  if (hasUnique(heroes, "end of evil") || ids.has("judge-kise")) {
    add({
      key: "j-kise",
      label: "J.Kise",
      note: "Strips all and cannot be countered. Soulburn ignores Effect Resistance.",
      answerTags: ["strip", "aoe"],
    });
  }
  if (hasUnique(heroes, "frostbite") || hasUnique(heroes, "mental focus") || ids.has("ran")) {
    add({
      key: "ran",
      label: "Ran",
      note: "Extra turn into a strip. Frostbite turns damage sharing off.",
      answerTags: ["strip"],
    });
  }
  if (hasUnique(heroes, "battle command") || ids.has("ambitious-tywin")) {
    add({
      key: "a-tywin",
      label: "A.Tywin",
      note: "Area Stun. Removes souls. Does not strip.",
    });
  }
  if (
    (hasUnique(heroes, "meteor fall") ||
      hasUnique(heroes, "flame of savara") ||
      ids.has("silver-blade-aramintha")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "sb-ara",
      label: "SB Ara",
      note: "Meteor Fall is area Stun and two Burns, then −30% Combat Readiness on the highest bar. Flame Release is an extra attack, not Dual Attack.",
    });
  }
  if (ids.has("zahhak") || heroes.some((h) => h.id === "zahhak" && h.tags.includes("injury"))) {
    add({
      key: "zahhak",
      label: "Zahhak injury",
      note: "Single-target 35% injury. This is not a cleave.",
    });
  }
  if (hasUnique(heroes, "absolute dignity") || ids.has("mort")) {
    add({
      key: "no-counter",
      label: "No counters",
      note: "Nobody else can counter. Immune to Stun, Sleep, and Fear.",
    });
  } else if (
    (hasUnique(heroes, "star's blessing") ||
      hasUnique(heroes, "disciple of the stars") ||
      ids.has("astromancer-elena")) &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "a-elena",
      label: "A.Elena",
      note: "While Star's Blessing is up, you cannot counter. She starts the fight with it for one turn. This is not Mort.",
    });
  }
  if (
    hasDebuff("Unhealable") &&
    !ids.has("notos") &&
    !hasUnique(heroes, "sanctuary of battle")
  ) {
    add({
      key: "unhealable",
      label: "Unhealable",
      note: "Heals do not land on afflicted heroes.",
    });
  }
  if (
    hasUnique(heroes, "begone") ||
    hasUnique(heroes, "obstacle elimination") ||
    ids.has("commander-pavel")
  ) {
    add({
      key: "c-pavel",
      label: "C.Pavel",
      note: "Ally crits charge Begone: area gunfire, then a full Combat Readiness bar. Extra attacks, counters, and Dual Attacks do not charge it. His third skill ignores damage sharing on heroes.",
    });
  }
  if (hasDebuff("Sleep") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) {
    add({
      key: "sleep",
      label: "Sleep",
      note: "They can Sleep a unit. That unit cannot act, and its Evasion drops to zero until it takes a hit.",
    });
  }
  if (hasDebuff("Target")) {
    add({
      key: "target",
      label: "Target",
      note: "+15% damage taken, −50% Evasion. Architect Laika takes an extra turn if this lands.",
      answerTags: ["aoe", "injury"],
    });
  }
  if (hasUnique(heroes, "pilfer")) {
    add({
      key: "pilfer",
      label: "Pilfer",
      note: "−20% Attack, Health, and Defense, and it stays after death. Strip Spoils to clear it.",
      answerTags: ["strip"],
      answerEffects: ["buff-dispel"],
    });
  }
  if (hasUnique(heroes, "redirected provoke")) {
    add({
      key: "redir-provoke",
      label: "Redirected Provoke",
      note: "They use their first skill on your highest-Health unit. Assassins waste the turn.",
    });
  }
  if (hasUnique(heroes, "vigor")) {
    add({
      key: "vigor",
      label: "Vigor",
      note: "Undispellable +30% Attack and Defense.",
    });
  }
  if (hasUnique(heroes, "defensive magic")) {
    add({
      key: "def-magic",
      label: "Defensive Magic",
      note: "At four Soul, skill damage nullifies. Belian turns this off.",
      answerRoles: ["soulblock"],
    });
  }
  if (hasUnique(heroes, "sacred covenant")) {
    add({
      key: "covenant",
      label: "Sacred Covenant",
      note: "Self only. Undispellable for five turns, then a 100% revive. This is not team Immunity.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasDebuff("Collapse") || hasUnique(heroes, "collapse") || ids.has("salome")) {
    add({
      key: "collapse",
      label: "Collapse",
      note: "−50% maximum Health on heroes. This is not injury stacking. Injury cores get the rest for free.",
    });
  }
  if (hasUnique(heroes, "clone") || ids.has("salome")) {
    add({
      key: "salome",
      label: "Salome",
      note: "Self Skill Nullifier, then Clone a target for one turn, then an extra turn. Dual Attack comes from the highest Attack ally. Dispelling Clone also removes unique effects she copied.",
      answerTags: ["strip"],
    });
  }
  if (hasUnique(heroes, "inner abyss") || ids.has("abyssal-yufine")) {
    add({
      key: "a-yufine",
      label: "A.Yufine",
      note: "AoE strip and −50% Combat Readiness, ignores Effect Resistance. Enemy Combat Readiness increases are reduced by 30% — this is not a Speed cap. 30% counter when hit. Trauma is on herself.",
    });
  }
  if (hasUnique(heroes, "bind") || ids.has("rhianna-and-luciella")) {
    add({
      key: "rnl",
      label: "R&L",
      note: "Rhianna strips two and inflicts Bind: no extra skills, counters, or Dual Attacks off-turn. After the third skill, Afterdream is 70% evasion for the rest of the fight. Extra attacks are not Dual Attack.",
      answerTags: ["aoe", "injury"],
    });
  }
  if (hasUnique(heroes, "lua squad") || ids.has("hellion-lua")) {
    add({
      key: "h-lua",
      label: "H.Lua",
      note: "A Hero hitting her: team +7% Combat Readiness and every ally with Challenge counters. Mort and Star's Blessing turn those counters off. Lua's Challenge is buff duration −1, not a strip.",
    });
  }
  if (hasUnique(heroes, "obliterate") || ids.has("operator-sigret")) {
    add({
      key: "o-sigret",
      label: "O.Sigret",
      note: "AoE Combat Readiness −30% and buff duration −1 (not a strip). Extra turn only if Annihilation kills. Ignores Effect Resistance if the target has Barrier.",
    });
  }
  if (ids.has("pirate-captain-flan")) {
    add({
      key: "pc-flan",
      label: "PC Flan",
      note: "Hunt fires after an ally hits a target with no buffs: team Swift Attack and Combat Readiness. Full Burst steals one, then delayed Bomb. Bomb stun ignores Effect Resistance after two turns. This is not an opener stun.",
    });
  }
  if (hasUnique(heroes, "death sentence") || ids.has("ainz-ooal-gown")) {
    add({
      key: "ainz",
      label: "Ainz",
      note: "Strip all, then Silence. Death Sentence is 50,000 at the 12th turn, ignores damage sharing, and falls off if he dies. Mana Barrier is 25% on ally hit — not a counter nest. Extra turn is Soulburn only. 25% Stun is not a stun wall.",
    });
  }
  if (hasUnique(heroes, "grudge") || hasUnique(heroes, "blood aura")) {
    add({
      key: "grudge",
      label: "Grudge / Blood Aura",
      note: "First death: team Immunity. A kill with his third skill revives everyone.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "can you handle this") || ids.has("eternal-wanderer-ludwig")) {
    add({
      key: "ew-ludwig",
      label: "EW Ludwig",
      note: "Any Soulburn pushes his Combat Readiness and stacks penetrate on the third skill. Extra turn is Soulburn only. Self Skill Nullifier eats one skill.",
    });
  }
  if (hasUnique(heroes, "boundless obsession") || ids.has("requiem-roana")) {
    add({
      key: "rq-roana",
      label: "RQ Roana",
      note: "Combat Readiness from Speed is halved — this is not a Speed cap. She jumps 70% Combat Readiness when the front ally takes a turn. Eternal Lament is area strip, cooldown +1, and Combat Readiness −30%.",
    });
  }
  if (hasUnique(heroes, "illusion") || ids.has("specter-tenebria")) {
    add({
      key: "spec-tene",
      label: "Spec Tene",
      note: "Cannot be selected as a skill target while an ally lives. AoE still hits her. Endless Nightmare is a guaranteed stun. Poison Blast does not trigger counters. Extra turn is Soulburn only.",
      answerTags: ["aoe"],
    });
  }
  if (hasUnique(heroes, "engulf") || ids.has("tidal-rift-elvira")) {
    add({
      key: "tr-elvira",
      label: "TR Elvira",
      note: "Engulf is 100% Effectiveness and Crit Hit Resistance — not Immunity. Killing her grants Cascade to her team (4,000 extra on their next attack). 75% Seal. Twisted Strike extra attack is not Dual Attack.",
    });
  }
  if (hasUnique(heroes, "victory pose") || ids.has("top-model-luluca")) {
    add({
      key: "tm-lulu",
      label: "TM Lulu",
      note: "Victory Pose is team Combat Readiness plus extra turn. Demolish is extinction only if it kills, then Stealth and Barrier. Energy Blast ignores damage sharing versus Heroes. Extra attack is not Dual Attack.",
    });
  }
  if (hasUnique(heroes, "deify") || ids.has("zio")) {
    add({
      key: "zio",
      label: "Zio",
      note: "Strip two, then Silence and Combat Readiness −30%. Deify: extra attack on S1 (not Dual Attack) and 50% damage reduction when hit. Supreme Authority is not a Speed cap.",
    });
  }
  if (hasUnique(heroes, "nature restoration") || ids.has("mediator-kawerik")) {
    add({
      key: "ml-kawerik",
      label: "ML Kawerik",
      note: "Strip all, then team Barrier. Nature Restoration is team cleanse, Increase Attack, and Immunity. Barrier is not Barrier Inversion. Debuff duration −1 is not a strip.",
    });
  }
  if (hasUnique(heroes, "pestilence") || ids.has("death-dealer-ray")) {
    add({
      key: "dd-ray",
      label: "DD Ray",
      note: "Cloud of Death is area strip two, then Sleep, Venom, and extra turn. Pestilence makes allies apply Venom and detonate it — that is the injury. Clinical Trial does not trigger Dual Attack. Sleep is not a stun wall.",
    });
  }
  if (hasUnique(heroes, "dark moon") || hasUnique(heroes, "noias") || ids.has("shepherd-diene")) {
    add({
      key: "dark-moon",
      label: "Dark Moon",
      note: "Any Soulburn strips two. Do not Soulburn.",
    });
  }
  if (hasUnique(heroes, "i wanna go home") || ids.has("solitaria")) {
    add({
      key: "no-focus",
      label: "Focus lock",
      note: "Enemy Focus gain is zero. Massacre never charges.",
      answerTags: ["injury", "aoe", "dual-attack"],
    });
  }
  if (hasUnique(heroes, "phantom's waltz") || ids.has("sea-phantom-politis")) {
    add({
      key: "resource-cut",
      label: "Resource cut",
      note: "Enemy resource gain is reduced by 50% (Focus, Fighting Spirit, and similar). This is not a soul lock.",
    });
  }
  if (hasUnique(heroes, "astral guide") || hasUnique(heroes, "tranquility") || ids.has("politis")) {
    add({
      key: "tranquility",
      label: "Tranquility",
      note: "Heals and Immunity clip buff duration. She takes the cycle.",
    });
  }
  if (roles.has("opener") && roles.has("cleave")) {
    add({
      key: "cleave",
      label: "Turn-1 cleave",
      note: "They want the first turn. Cap Speed, play a miss nest, or outspeed them.",
    });
  }

  const rank: Record<string, number> = {
    speedcap: 0,
    notos: 1,
    evade: 2,
    rnl: 2,
    revive: 3,
    injury: 4,
    soulblock: 5,
    "dp-aria": 5,
    "ma-ken": 13,
    "h-lua": 13,
    "o-sigret": 14,
    "pc-flan": 14,
    ainz: 9,
    "force-target": 6,
    offering: 7,
    nullifier: 8,
    collapse: 8,
    salome: 8,
    "a-yufine": 11,
    block: 8,
    "cannot-die": 9,
    "both-revive": 10,
    oath: 10,
    "ss-vivian": 10,
    "dj-basar": 11,
    "c-armin": 11,
    "b-hwayoung": 9,
    strip: 11,
    cascade: 11,
    reversal: 12,
    "no-counter": 13,
    "a-elena": 13,
    unhealable: 21,
    "c-pavel": 23,
    "sb-ara": 24,
    "dark-moon": 14,
    "ew-ludwig": 14,
    "rq-roana": 11,
    "spec-tene": 8,
    "tr-elvira": 8,
    "tm-lulu": 12,
    zio: 9,
    "ml-kawerik": 10,
    "dd-ray": 8,
    miseria: 15,
    "sn-yulha": 16,
    "s-taeyou": 17,
    restrict: 18,
    wmeri: 19,
    rupture: 22,
  };
  return out.sort((a, b) => (rank[a.key] ?? 40) - (rank[b.key] ?? 40));
}

export function unansweredThreats(threats: DraftThreat[], filled: Hero[]): string[] {
  const tags = new Set(filled.flatMap((h) => h.tags));
  const roles = new Set(filled.flatMap((h) => h.roles));
  const effects = new Set(filled.flatMap((h) => heroEffects(h)));
  return threats
    .filter((t) => t.answerTags?.length || t.answerRoles?.length || t.answerEffects?.length)
    .filter((t) => {
      const hit =
        t.answerTags?.some((x) => tags.has(x)) ||
        t.answerRoles?.some((x) => roles.has(x)) ||
        t.answerEffects?.some((x) => effects.has(x));
      return !hit;
    })
    .map((t) => t.label);
}
