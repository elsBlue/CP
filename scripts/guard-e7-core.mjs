#!/usr/bin/env node
/**
 * Fail if Crownpath core matcher files were truncated or rewritten empty.
 * A whole-file overwrite of engine.ts / recipes.ts is fatal.
 *
 *   node scripts/guard-e7-core.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const FLOORS = {
  "src/lib/e7/engine.ts": 1000,
  "src/lib/e7/recipes.ts": 200,
  "src/lib/e7/threats.ts": 400,
  "src/lib/e7/heroes.ts": 3000,
};

export const REQUIRED = {
  "src/lib/e7/engine.ts": [
    "export function classifyDefense",
    "export function recommendCounters",
    "export function searchHeroes",
    "function jobFor(",
    "function whyFor(",
    "function pitfallsFor(",
    "function setupFor(",
    "function fillRecipe(",
  ],
  "src/lib/e7/recipes.ts": [
    "export const ARCHETYPE_META",
    "export const PRESET_DEFENSES",
    "export const RECIPES",
  ],
  "src/lib/e7/threats.ts": [
    "export function wallThreats",
    "export function unansweredThreats",
  ],
  "src/lib/e7/heroes.ts": ["export const HEROES"],
};

export function checkE7Core(root) {
  const errors = [];
  for (const [rel, floor] of Object.entries(FLOORS)) {
    const text = readFileSync(join(root, rel), "utf8");
    const lines = text.split("\n").length;
    if (lines < floor) {
      errors.push(`${rel} is ${lines} lines (floor ${floor}) — truncated, restore from git`);
    }
    for (const needle of REQUIRED[rel] ?? []) {
      if (!text.includes(needle)) {
        errors.push(`${rel} is missing \`${needle}\``);
      }
    }
  }
  return errors;
}

function parseVerified(heroesText) {
  const catalog = heroesText.split("export const SAMPLE_ROSTER")[0] ?? heroesText;
  const map = new Map();
  const re = /\bid:\s*"([^"]+)"[\s\S]*?\bverified:\s*(true|false)/g;
  let m;
  while ((m = re.exec(catalog))) {
    if (!map.has(m[1])) map.set(m[1], m[2] === "true");
  }
  return map;
}

function parseQuotedList(block) {
  return [...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

function parsePreferIds(recipesText) {
  const ids = [];
  const re = /prefer:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(recipesText))) ids.push(...parseQuotedList(m[1]));
  return ids;
}

function parseConstArray(heroesText, name) {
  const m = heroesText.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`));
  return m ? parseQuotedList(m[1]) : null;
}

/** Prefer lists and roster presets may only name in-game verified heroes. */
export function checkCatalogHygiene(root) {
  const heroesText = readFileSync(join(root, "src/lib/e7/heroes.ts"), "utf8");
  const recipesText = readFileSync(join(root, "src/lib/e7/recipes.ts"), "utf8");
  const verified = parseVerified(heroesText);
  const errors = [];

  function checkList(label, ids) {
    if (!ids) {
      errors.push(`${label} is missing`);
      return;
    }
    for (const id of ids) {
      if (!verified.has(id)) errors.push(`${label}: unknown id "${id}"`);
      else if (!verified.get(id)) errors.push(`${label}: "${id}" is not in-game verified`);
    }
  }

  checkList("prefer", parsePreferIds(recipesText));
  checkList("SAMPLE_ROSTER", parseConstArray(heroesText, "SAMPLE_ROSTER"));
  checkList("STARTER_ROSTER", parseConstArray(heroesText, "STARTER_ROSTER"));
  return errors;
}

/** Exclusive equipment keys must be real catalog ids. No leftover dump flags. */
export function checkLoadoutHygiene(root) {
  const heroesText = readFileSync(join(root, "src/lib/e7/heroes.ts"), "utf8");
  const eeText = readFileSync(join(root, "src/lib/e7/exclusive-equipment.ts"), "utf8");
  const verified = parseVerified(heroesText);
  const errors = [];
  const keys = [...eeText.matchAll(/^\s+"([^"]+)": \{/gm)].map((m) => m[1]);
  if (keys.length < 50) errors.push(`EE_BY_HERO is too small (${keys.length})`);
  for (const id of keys) {
    if (!verified.has(id)) errors.push(`EE_BY_HERO: unknown id "${id}"`);
  }
  if (/\brecommended\s*:/.test(eeText)) errors.push("exclusive-equipment.ts still has recommended flags");
  if (eeText.includes("????")) errors.push("exclusive-equipment.ts still has broken option text");
  return errors;
}

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const errors = [...checkE7Core(root), ...checkCatalogHygiene(root), ...checkLoadoutHygiene(root)];
  if (errors.length) {
    console.error("e7 core guard failed:");
    for (const e of errors) console.error("  -", e);
    process.exit(1);
  }
  console.log("e7 core guard ok");
}
