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

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const errors = checkE7Core(root);
  if (errors.length) {
    console.error("e7 core guard failed:");
    for (const e of errors) console.error("  -", e);
    process.exit(1);
  }
  console.log("e7 core guard ok");
}
