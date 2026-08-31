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

  if (roles.has("speedcap") || ids.has("harsetti")) {
    add({
      key: "speedcap",
      label: "Speed cap",
      note: "Speed contest is off. Injury or a turn-2 plan.",
      answerTags: ["injury"],
    });
  }
  if (roles.has("soulblock") || ids.has("belian")) {
    add({
      key: "soulblock",
      label: "Soul lock",
      note: "Soulburn cleave will brick. Play without souls.",
    });
  }
  if (
    roles.has("revive") ||
    ids.has("lisette") ||
    hasUnique(heroes, "fragment of life") ||
    hasUnique(heroes, "time reversal")
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
  if (hasUnique(heroes, "nullifier")) {
    add({
      key: "nullifier",
      label: "Skill Effect Nullifier",
      note: "Don't lead with the one skill this fight needs.",
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
  if (tags.has("immunity")) {
    add({
      key: "strip",
      label: "Buffed wall",
      note: "Buffs stick. A stripper belongs in the draft.",
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
