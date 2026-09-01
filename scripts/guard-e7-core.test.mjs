import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { checkE7Core, FLOORS } from "./guard-e7-core.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

test("live Crownpath core files pass the truncation guard", () => {
  assert.deepEqual(checkE7Core(ROOT), []);
});

test("a wiped engine.ts fails the floor", () => {
  const root = mkdtempSync(join(tmpdir(), "e7-guard-"));
  mkdirSync(join(root, "src/lib/e7"), { recursive: true });
  for (const rel of Object.keys(FLOORS)) {
    writeFileSync(join(root, rel), "export const HEROES = [];\n");
  }
  const errors = checkE7Core(root);
  assert.ok(errors.some((e) => e.includes("engine.ts") && e.includes("truncated")));
});
