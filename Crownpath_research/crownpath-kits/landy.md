# Landy

Short: Landy

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2026-01-08 STOVE (Full Burst: remove team Speed buff; allies CR +25%; self Barrier ∝ Attack 2 turns) — epic7db still shows Speed + CR 15% → lag; kit checked 2026-09-04

## Roles

aoe-nuke, cr-push, fighting-spirit, self-barrier

## Tags

single-target, aoe, cr-push, stealth, barrier, fighting-spirit, attack-stack, soulburn, defense-penetration

## Effects

s1-cr-fs-vs-buffed, s2-start-fs-stealth, s2-fs-from-enemy-buffs, s2-full-fs-reset-cd, s2-atk-stack, s3-team-cr25-self-barrier, s3-full-fs-pen, awaken-s3-no-counter, soulburn-extra-turn

## Buffs

Stealth (start), Barrier (self on Full Burst per STOVE), Attack stacks from passive

## Debuffs

(none baseline)

## Unique effects

### The Chief Is on the Scene

Self. Start of first battle: 50 Fighting Spirit + Stealth 1 turn. Start of turn: +10 FS per buff on enemies; when FS full, reset skill cooldown. After attacking: Attack +25% (stacks up to 3; enhanceable).

### Full Burst (post-2026-01-08)

Enemies + allies + self. AoE attack; all allies CR +25%; grant Barrier ∝ Attack to caster 2 turns; if FS full consume all for 50% Defense penetration. Awaken: cannot trigger a counterattack. Soulburn (−20): extra turn. Prefer STOVE over epic7db Speed-buff lag.

## Kit

S1 Fire (+1 Soul): gunfire; caster CR +15% (enhanceable); if target buffed, double CR gain and Fighting Spirit gained. S2 The Chief Is on the Scene (passive): start FS + Stealth; FS from enemy buffs; full FS resets CD; Atk stacks after attack. S3 Full Burst (+3 Souls, 5→4 CD): AoE; team CR +25% + self Barrier (STOVE 2026-01-08); full FS → 50% pen; awaken no counter; Soulburn extra turn. RGB Landy only (not Navy Captain Landy).

## Defense / offense

3 / 8

## Unsure

- Exact Barrier coefficient vs Attack
- Exact Fighting Spirit gained on S1 (base and when target buffed)
- Fully enhanced passive Attack stack % (25% + enhance)
- First-fight opening S3 cooldown
- Whether any later 2026 patches touched Landy after Jan 8 (none found)

## Object

```ts
{
  id: "landy",
  name: "Landy",
  short: "Landy",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-nuke", "cr-push", "fighting-spirit", "self-barrier"],
  tags: ["single-target", "aoe", "cr-push", "stealth", "barrier", "fighting-spirit", "attack-stack", "soulburn", "defense-penetration"],
  effects: ["s1-cr-fs-vs-buffed", "s2-start-fs-stealth", "s2-fs-from-enemy-buffs", "s2-full-fs-reset-cd", "s2-atk-stack", "s3-team-cr25-self-barrier", "s3-full-fs-pen", "awaken-s3-no-counter", "soulburn-extra-turn"],
  buffs: ["Stealth", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "The Chief Is on the Scene",
      scope: "self",
      tooltip: "Start 50 FS + Stealth. FS from enemy buffs; full FS resets CD; Atk stacks after attack."
    },
    {
      name: "Full Burst",
      scope: "allies",
      tooltip: "AoE; team CR +25% + self Barrier ∝ Atk (STOVE 2026-01-08); full FS → 50% pen."
    }
  ],
  kit: "S1 Fire: CR/FS; doubles vs buffed. S2 passive: FS engine + Stealth + Atk stacks. S3 Full Burst: team CR +25% + self Barrier (STOVE); FS pen; Soulburn extra turn. Prefer 2026-01-08 STOVE over epic7db lag.",
  defense: 3,
  offense: 8,
  baseSpeed: 112,
  verified: false
}
```
