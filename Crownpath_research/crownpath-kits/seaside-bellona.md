# Seaside Bellona

Short: SSB

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2025-04-10 STOVE (damage-share → per-ally DR; You're Not Cute Def-break → 75%; Haven't I Warned You full strip) — no later SSB skill balance listing found in checked 2025–2026 previews; limited; kit per epic7db 2026-09-04 (matches STOVE)

## Roles

focus-aoe-def-break, strip, unhealable, cannot-buff, target

## Tags

single-target, aoe, target, focus, decrease-defense, strip, cannot-buff, unhealable, damage-reduction, soulburn, limited

## Effects

s1-target, passive-dr-per-ally, focus-on-ally-hit, youre-not-cute-at-5-focus, s3-full-strip-unbuffable-unhealable, soulburn-ignore-er

## Buffs

(none baseline)

## Debuffs

Target, Decrease Defense, Unbuffable, Unhealable

## Unique effects

### Focus (I'm with My Friends)

Self. Gain 1 Focus when an ally is attacked; at 5 Focus consume all → You're Not Cute (AoE; 75% Decrease Defense 2 turns).

### I'm with My Friends DR

Self. For every surviving ally, damage suffered −10% (max 40%). Only strongest same-kind DR applies.

## Kit

S1 Watch Out (+1 Soul): 75% Target 1 turn (awaken Target 2 turns). S2 I'm with My Friends (passive): DR 10%/surviving ally (max 40%); ally attacked → +1 Focus; at 5 Focus → You're Not Cute (AoE 75% Def break). S3 Haven't I Warned You? (+3 Souls, 5→4 CD): AoE; dispel all buffs; 100% Cannot Buff + Unhealable 2 turns. Soulburn (−20): ignores Effect Resistance. EE Waltz of Waves: You're Not Cute cleanse 1 before attack; or You're Not Cute damage ↑; or S3 CD −1. Exact EE damage option %: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

5 / 7

## Unsure

- Exact EE “Increases damage dealt by You're Not Cute” percentage
- First-fight (opening) S3 cooldown
- Whether Focus starts at 0 each battle only (standard)

## Object

```ts
{
  id: "seaside-bellona",
  name: "Seaside Bellona",
  short: "SSB",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["focus-aoe-def-break", "strip", "unhealable", "cannot-buff", "target"],
  tags: ["single-target", "aoe", "target", "focus", "decrease-defense", "strip", "cannot-buff", "unhealable", "damage-reduction", "soulburn", "limited"],
  effects: ["s1-target", "passive-dr-per-ally", "focus-on-ally-hit", "youre-not-cute-at-5-focus", "s3-full-strip-unbuffable-unhealable", "soulburn-ignore-er"],
  buffs: [],
  debuffs: ["Target", "Decrease Defense", "Unbuffable", "Unhealable"],
  uniqueEffects: [
    {
      name: "Focus / You're Not Cute",
      scope: "self",
      tooltip: "Ally hit → +1 Focus; at 5 → AoE 75% Decrease Defense 2 turns."
    },
    {
      name: "I'm with My Friends DR",
      scope: "self",
      tooltip: "−10% damage per surviving ally (max 40%)."
    }
  ],
  kit: "S1 Watch Out: Target (awaken 2 turns). S2: DR per ally + Focus → You're Not Cute AoE Def break. S3 Haven't I Warned You?: full strip + Cannot Buff + Unhealable; Soulburn (−20) ignore ER. Prefer 2025-04-10 STOVE kit.",
  defense: 5,
  offense: 7,
  baseSpeed: 114,
  verified: false
}
```
