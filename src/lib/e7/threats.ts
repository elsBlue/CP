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
    ids.has("angel-of-light-angelica")
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
  }
  if (hasDebuff("Sleep") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) {
    add({
      key: "sleep",
      label: "Sleep",
      note: "Cannot act. Evasion is reduced to zero until they take a hit.",
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
  if (hasDebuff("Collapse") || hasUnique(heroes, "collapse")) {
    add({
      key: "collapse",
      label: "Collapse",
      note: "−50% maximum Health on heroes. Injury cores get the rest for free.",
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
    revive: 3,
    injury: 4,
    soulblock: 5,
    "force-target": 6,
    offering: 7,
    nullifier: 8,
    "cannot-die": 9,
    "both-revive": 10,
    strip: 11,
    reversal: 12,
    "no-counter": 13,
    "dark-moon": 14,
    miseria: 15,
    "sn-yulha": 16,
    "s-taeyou": 17,
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
