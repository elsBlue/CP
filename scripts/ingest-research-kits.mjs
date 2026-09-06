#!/usr/bin/env node
/**
 * Load Crownpath_research/crownpath-kits into heroes.ts stubs.
 * Never sets verified: true. Never edits already-verified heroes.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const ROLES = new Set([
  "opener",
  "strip",
  "cleanse",
  "bruiser",
  "cleave",
  "tank",
  "revive",
  "control",
  "soulblock",
  "speedcap",
  "dps",
  "healer",
  "evasion",
]);
const TAGS = new Set([
  "immunity",
  "injury",
  "cr-push",
  "cr-cut",
  "anti-revive",
  "aoe",
  "stun",
  "barrier",
  "counter",
  "dual-attack",
  "soulburn",
  "ignore-er",
  "seal",
  "unhealable",
  "defbreak",
  "extra-turn",
  "invincible",
  "provoke",
  "fixed-dmg",
  "evade",
  "strip",
  "silence",
  "barrier-break",
]);
const EFFECTS = new Set([
  "revive",
  "extinction",
  "increase-cr",
  "decrease-cr",
  "extra-turn",
  "ally-cd-decrease",
  "enemy-cd-increase",
  "increase-hit",
  "increase-evasion",
  "always-crit",
  "damage-reduction",
  "damage-sharing",
  "ignore-damage-sharing",
  "damage-received-limit",
  "increase-crit-resist",
  "increase-pen-resist",
  "soul-removal",
  "resource-reduction",
  "barrier-inversion",
  "buff-dispel",
  "debuff-dispel",
  "buff-duration-decrease",
  "debuff-duration-decrease",
  "dual-attack",
  "injury",
  "counterattack",
  "cannot-counterattack",
]);

const ROLE_ALIAS = {
  "defense-break": null,
  "def-break": null,
  injury: null,
  support: "healer",
  "soul-weaver": "healer",
  knight: "tank",
  assassin: "dps",
};
const TAG_ALIAS = {
  "decrease-defense": "defbreak",
  "def-break": "defbreak",
  "defense-break": "defbreak",
  crpush: "cr-push",
  crcut: "cr-cut",
  "combat-readiness-push": "cr-push",
  "combat-readiness-cut": "cr-cut",
  "anti revive": "anti-revive",
  "extra-attack": null,
  "hp-scaling": null,
  "increase-defense": null,
  "mind-eye": null,
};
const EFFECT_ALIAS = {
  "injuries-on-attack": "injury",
  injuries: "injury",
  "increase-combat-readiness": "increase-cr",
  "decrease-combat-readiness": "decrease-cr",
  "cr-push": "increase-cr",
  "cr-cut": "decrease-cr",
  strip: "buff-dispel",
  cleanse: "debuff-dispel",
  "max-hp-scaled-damage": null,
  "trample-extra-attack": null,
};

function pick(list, allowed, alias) {
  const out = [];
  const seen = new Set();
  for (const raw of list ?? []) {
    const key = String(raw).trim();
    const mapped = Object.prototype.hasOwnProperty.call(alias, key) ? alias[key] : key;
    if (!mapped || !allowed.has(mapped) || seen.has(mapped)) continue;
    seen.add(mapped);
    out.push(mapped);
  }
  return out;
}

function uniqueEffects(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const name = String(item.name ?? "").trim();
    const text = String(item.text ?? item.tooltip ?? "").trim();
    if (!name || !text) continue;
    const scope = String(item.scope ?? "").trim();
    out.push({
      name,
      text: scope ? `${scope.replace(/-/g, " ")}. ${text}` : text,
    });
  }
  return out;
}

function parseKitFile(file) {
  const src = readFileSync(file, "utf8");
  const fence = src.match(/```(?:ts|typescript|js|javascript)?\n([\s\S]*?)```/);
  if (!fence) throw new Error(`no object fence in ${file}`);
  const body = fence[1].trim().replace(/;\s*$/, "");
  return Function(`"use strict"; return (${body});`)();
}

function findObject(src, id) {
  const needle = `id: "${id}"`;
  const i = src.indexOf(needle);
  if (i < 0) return null;
  let start = i;
  while (start > 0 && src[start] !== "{") start--;
  let depth = 0;
  let inStr = false;
  let quote = "";
  let escape = false;
  for (let j = start; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (escape) {
        escape = false;
        continue;
      }
      if (c === "\\") {
        escape = true;
        continue;
      }
      if (c === quote) inStr = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = true;
      quote = c;
      continue;
    }
    if (c === "{") depth++;
    if (c === "}") {
      depth--;
      if (depth === 0) return [start, j + 1];
    }
  }
  return null;
}

function jsStr(value) {
  return JSON.stringify(value);
}

function emit(hero) {
  const lines = ["  {"];
  const field = (k, v) => lines.push(`    ${k}: ${v},`);
  field("id", jsStr(hero.id));
  field("name", jsStr(hero.name));
  field("short", jsStr(hero.short));
  field("element", jsStr(hero.element));
  field("class", jsStr(hero.class));
  field("tier", jsStr(hero.tier));
  if (hero.rarity) field("rarity", String(hero.rarity));
  field("roles", jsStr(hero.roles));
  field("tags", jsStr(hero.tags));
  if (hero.effects?.length) field("effects", jsStr(hero.effects));
  if (hero.buffs?.length) field("buffs", jsStr(hero.buffs));
  if (hero.debuffs?.length) field("debuffs", jsStr(hero.debuffs));
  if (hero.uniqueEffects?.length) {
    lines.push("    uniqueEffects: [");
    for (const u of hero.uniqueEffects) {
      lines.push("      {");
      lines.push(`        name: ${jsStr(u.name)},`);
      lines.push(`        text: ${jsStr(u.text)},`);
      lines.push("      },");
    }
    lines.push("    ],");
  }
  field("kit", jsStr(hero.kit));
  field("defense", String(hero.defense));
  field("offense", String(hero.offense));
  if (Number.isFinite(hero.baseSpeed)) field("baseSpeed", String(hero.baseSpeed));
  field("verified", "false");
  lines.push("  }");
  return lines.join("\n");
}

const kitDir = join(root, "Crownpath_research/crownpath-kits");
const heroPath = join(root, "src/lib/e7/heroes.ts");
let src = readFileSync(heroPath, "utf8");

const files = readdirSync(kitDir).filter((f) => f.endsWith(".md"));
let updated = 0;
let skippedVerified = 0;
const failed = [];

for (const file of files) {
  try {
    const raw = parseKitFile(join(kitDir, file));
    const id = String(raw.id);
    const span = findObject(src, id);
    if (!span) {
      failed.push(`${id}: not in heroes.ts`);
      continue;
    }
    const current = src.slice(span[0], span[1]);
    if (/verified:\s*true/.test(current)) {
      skippedVerified++;
      continue;
    }
    const name = current.match(/name:\s*"([^"]*)"/)?.[1] ?? raw.name;
    const element = current.match(/element:\s*"([^"]*)"/)?.[1] ?? raw.element;
    const klass = current.match(/class:\s*"([^"]*)"/)?.[1] ?? raw.class;
    const tier = current.match(/tier:\s*"([^"]*)"/)?.[1] ?? "B";
    const short = String(raw.short || name).trim() || name;
    const roles = pick(raw.roles, ROLES, ROLE_ALIAS);
    const tags = pick(raw.tags, TAGS, TAG_ALIAS);
    if ((raw.roles ?? []).some((r) => /break/i.test(r)) && !tags.includes("defbreak")) {
      tags.push("defbreak");
    }
    const effects = pick(raw.effects, EFFECTS, EFFECT_ALIAS);
    const hero = {
      id,
      name,
      short,
      element,
      class: klass,
      tier,
      rarity: [3, 4, 5].includes(raw.rarity) ? raw.rarity : undefined,
      roles,
      tags,
      effects,
      buffs: (raw.buffs ?? []).map(String).filter(Boolean),
      debuffs: (raw.debuffs ?? []).map(String).filter(Boolean),
      uniqueEffects: uniqueEffects(raw.uniqueEffects),
      kit: String(raw.kit ?? "").trim(),
      defense: Math.max(1, Math.min(10, Number(raw.defense) || 5)),
      offense: Math.max(1, Math.min(10, Number(raw.offense) || 5)),
      baseSpeed: Number.isFinite(Number(raw.baseSpeed)) ? Number(raw.baseSpeed) : undefined,
    };
    const next = emit(hero);
    src = src.slice(0, span[0]) + next + src.slice(span[1]);
    updated++;
  } catch (err) {
    failed.push(`${file}: ${err.message}`);
  }
}

writeFileSync(heroPath, src);
console.log(JSON.stringify({ updated, skippedVerified, failed }, null, 2));
