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
      note: "Speed contest is off. Injury or a turn-2 plan.",
      answerTags: ["injury"],
    });
  }
  if (hasUnique(heroes, "skuggiheim")) {
    add({
      key: "no-cr",
      label: "CR push blocked",
      note: "On her turn, Combat Readiness increase does not apply.",
    });
  }
  if (roles.has("soulblock") || ids.has("belian") || hasUnique(heroes, "shackles of suppression")) {
    add({
      key: "soulblock",
      label: "Soul lock",
      note: "Enemy soul gain is 0. Play without soulburn.",
    });
  }
  if (
    roles.has("revive") ||
    ids.has("lisette") ||
    ids.has("ruele-of-light") ||
    hasUnique(heroes, "fragment of life") ||
    hasUnique(heroes, "time reversal") ||
    hasUnique(heroes, "spirit lord") ||
    hasUnique(heroes, "sacred covenant")
  ) {
    add({
      key: "revive",
      label: "Revive / reset",
      note: "Kills can reset. Anti-revive, or accept two cycles.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "time reversal")) {
    add({
      key: "reversal",
      label: "Time Reversal",
      note: "Don't all-in turn one. HP and state roll back.",
    });
  }
  if (hasUnique(heroes, "nullifier") || ids.has("fallen-cecilia") || ids.has("angel-of-light-angelica")) {
    add({
      key: "nullifier",
      label: "Skill Nullifier",
      note: "F.Cecilia is a buff. A.Angelica procs Guardian Angel on AoE (75%): team cleanse one + Skill Nullifier once. Don't lead with the only strip.",
    });
  }
  if (tags.has("evade") || roles.has("evasion")) {
    add({
      key: "evade",
      label: "Evasion",
      note: "Single-target S3s miss. Prefer AoE or dual attacks.",
      answerTags: ["aoe", "dual-attack"],
    });
  }
  if (tags.has("injury") && (roles.has("bruiser") || roles.has("tank") || roles.has("dps"))) {
    add({
      key: "injury",
      label: "Injury",
      note: "They want the long fight. Do not race raw HP.",
    });
  }
  if (ids.has("last-rider-krau") || (tags.has("immunity") && roles.has("tank"))) {
    add({
      key: "strip",
      label: "Buffed wall",
      note: "Team Immunity or a tank sitting in buffs. A stripper belongs in the draft.",
      answerRoles: ["strip"],
      answerTags: ["strip"],
      answerEffects: ["buff-dispel"],
    });
  }
  if (hasDebuff("Seal") || hasDebuff("Cannot Buff")) {
    add({
      key: "seal",
      label: "Seal / Cannot Buff",
      note: "Passives off, no immunity window. Don't lean on a buffed opener.",
    });
  }
  if (hasUnique(heroes, "ferocious stand")) {
    add({
      key: "force-target",
      label: "Forced targeting",
      note: "Single-target skills have to hit her. Prefer AoE.",
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
      note: "Demon Blade window: she cannot die. Don't dump the closer there.",
      answerTags: ["strip"],
    });
  }
  if (hasDebuff("Beguile")) {
    add({
      key: "beguile",
      label: "Beguile",
      note: "After her strip, backline takes 10% max HP.",
    });
  }
  if (hasUnique(heroes, "witch's curse") || ids.has("briar-witch-iseria") || hasUnique(heroes, "death's dominion") || ids.has("hecate")) {
    add({
      key: "both-revive",
      label: "No revive (both sides)",
      note: "B.Iseria Witch's Curse or Hecate Death's Dominion: nobody revives while they live. Hecate also blocks Immortality. Your Ruele/Lisette/ML Diene Immortal is off too.",
    });
  }
  if (hasUnique(heroes, "offering") || hasUnique(heroes, "scales of equity")) {
    add({
      key: "offering",
      label: "Offering",
      note: "70% share on the front ally, Immortal once. Don't dump into the share.",
      answerEffects: ["ignore-damage-sharing"],
    });
    add({
      key: "cr-steal",
      label: "CR steal",
      note: "When you push CR, she takes 35% of it. Openers feed her the cycle.",
    });
  }
  if (hasUnique(heroes, "spirit gate") || ids.has("spirit-eye-celine")) {
    add({
      key: "se-celine",
      label: "SE Celine reset",
      note: "S3 revives all, team Immortal 1 turn. Sixth Sense: one hit cannot exceed 70% HP. Anti-revive; Hecate also blocks Immortal.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "soul exchange") || ids.has("apocalypse-ravi")) {
    add({
      key: "aravi-reset",
      label: "A.Ravi kill-revive",
      note: "S3 kill revives a random ally at 30% and Skill Nullifier. Anti-revive still shuts it. She also injuries on S1.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "bzzt") || ids.has("urban-shadow-choux")) {
    add({
      key: "bzzt",
      label: "Bzzt!",
      note: "After every attack: 2,000 + up to 10% injury to everyone. AoE injury without tapping S3.",
    });
  }
  if (hasUnique(heroes, "time to rampage") || ids.has("lone-wolf-peira")) {
    add({
      key: "peira-evade",
      label: "Peira evade",
      note: "+35% Evasion, +10% team CR each cycle. S3 extra turn and Swift Attack. Dark allies get Rampage.",
      answerTags: ["aoe", "dual-attack", "injury"],
    });
  }
  if (hasUnique(heroes, "ruler of the sea") || ids.has("navy-captain-landy")) {
    add({
      key: "nc-landy",
      label: "NC Landy",
      note: "Stun/Sleep/Fear immune. Team Crit Resistance. S1 extra-attacks AoE (Salvo Fire). 100 FS = AoE Stun + 60% pen.",
    });
  }
  if (hasUnique(heroes, "absolute dignity") || ids.has("mort")) {
    add({
      key: "no-counter",
      label: "No counters",
      note: "Everyone except Mort cannot counter. Setsuka / Violet bounce is off. He is Stun/Sleep/Fear immune.",
    });
  }
  if (hasDebuff("Fear")) {
    add({
      key: "fear",
      label: "Fear",
      note: "Cannot act. 40% chance to fall off at turn start.",
    });
  }
  if (hasUnique(heroes, "pilfer")) {
    add({
      key: "pilfer",
      label: "Pilfer",
      note: "−20% Atk/HP/Def, stays after death. Strip Spoils to clear it.",
      answerTags: ["strip"],
      answerEffects: ["buff-dispel"],
    });
  }
  if (hasUnique(heroes, "redirected provoke")) {
    add({
      key: "redir-provoke",
      label: "Redirected Provoke",
      note: "They S1 your highest-HP unit. Assassins waste the turn.",
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
      note: "At 4+ Soul, skill damage nullifies (costs 4 Soul). Belian turns this off.",
      answerRoles: ["soulblock"],
    });
  }
  if (hasUnique(heroes, "sacred covenant")) {
    add({
      key: "covenant",
      label: "Sacred Covenant",
      note: "Self-only. Undispellable 5 turns, then a 100% revive. Not team immunity.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasDebuff("Collapse") || hasUnique(heroes, "collapse")) {
    add({
      key: "collapse",
      label: "Collapse",
      note: "−50% max HP on heroes. Injury cores get the rest for free.",
    });
  }
  if (hasUnique(heroes, "grudge") || hasUnique(heroes, "blood aura")) {
    add({
      key: "grudge",
      label: "Grudge / Blood Aura",
      note: "First ally death: team Barrier + Immunity 2 turns. His S3 on a kill revives everyone with Immortal.",
      answerTags: ["anti-revive"],
      answerEffects: ["extinction"],
    });
  }
  if (hasUnique(heroes, "dark moon") || hasUnique(heroes, "noias") || ids.has("shepherd-diene")) {
    add({
      key: "dark-moon",
      label: "Dark Moon",
      note: "Any Soulburn — yours or theirs — AoE strips two and refreshes Immortal 3 turns. Don't soulburn.",
    });
  }
  if (hasUnique(heroes, "i wanna go home") || ids.has("solitaria")) {
    add({
      key: "no-focus",
      label: "Focus lock",
      note: "Enemy Focus gain is 0. Violet Massacre does not charge. Prefer injury or AoE.",
      answerTags: ["injury", "aoe", "dual-attack"],
    });
  }
  if (hasUnique(heroes, "phantom's waltz") || ids.has("sea-phantom-politis")) {
    add({
      key: "resource-cut",
      label: "Resource cut",
      note: "Enemy resource gain −50% (Focus, Fighting Spirit, etc). Not a soul lock.",
    });
  }
  if (hasUnique(heroes, "astral guide") || hasUnique(heroes, "tranquility") || ids.has("politis")) {
    add({
      key: "tranquility",
      label: "Tranquility",
      note: "Enemy CR increases are halved. Non-attack skills (Immunity, heals) trigger AoE −1 buff duration and she +30% CR.",
    });
  }
  if (roles.has("opener") && roles.has("cleave")) {
    add({
      key: "cleave",
      label: "Turn-1 cleave",
      note: "They want turn one. Cap, miss, or outspeed.",
    });
  }

  return out.slice(0, 5);
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
