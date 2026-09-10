# Fairytale Tenebria

Short: FTene / Fairytale Tenebria

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2026-09-04 (no Fairytale Tenebria hero skill balance listing found in 2025–2026; artifact Fairy Tale for a Nightmare patched 2025-04-10 does not change hero skills); kit per epic7db 2026-09-04

## Roles

redirected-provoke, cannot-buff, shuffle-punish, strip-on-awaken

## Tags

single-target, aoe, redirected-provoke, cannot-buff, random-debuff, strip, soulburn, counter-punish

## Effects

redirected-provoke, shuffle-on-ally-hit-vs-provoked, random-debuff, bonus-damage-vs-provoked, cannot-buff, awaken-strip-one, soulburn-extra-turn

## Buffs

(none)

## Debuffs

Redirected Provoke, Cannot Buff (Unable to be Buffed), (random 1-turn debuff via Shuffle)

## Unique effects

### Shuffle

Targets (AoE). When an ally is attacked by an enemy with Provoke or Redirected Provoke: once per turn — AoE attack + random debuff 1 turn; successful attack vs provoked/redirected-provoke deals additional damage ∝ target max Health.

### Tea Party (awakened)

Targets (AoE). Unable to be buffed 2 turns + Redirected Provoke 1 turn; awaken also dispel one buff.

## Kit

S1 One Pair (+1 Soul): Redirected Provoke 1 turn (75% → higher with enhance). Soulburn (−20): extra turn. S2 Wild Card (passive): on ally hit by provoked/redirected-provoke enemy → Shuffle once/turn (AoE + random debuff; bonus damage vs provoke marks ∝ max HP). S3 Tea Party (+3 Souls, 5→4 CD): AoE Cannot Buff 2 turns + Redirected Provoke 1 turn; awaken also strip one buff. Exact Shuffle bonus damage coefficient and random debuff pool: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

4 / 6

## Unsure

- Exact additional damage coefficient on Shuffle vs provoked targets
- Full list of possible Shuffle random debuffs
- Fully enhanced Redirected Provoke chance on S1
- First-fight (opening) Tea Party cooldown

## Object

```ts
{
  id: "fairytale-tenebria",
  name: "Fairytale Tenebria",
  short: "FTene",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["redirected-provoke", "cannot-buff", "shuffle-punish", "strip-on-awaken"],
  tags: ["single-target", "aoe", "redirected-provoke", "cannot-buff", "random-debuff", "strip", "soulburn", "counter-punish"],
  effects: ["redirected-provoke", "shuffle-on-ally-hit-vs-provoked", "random-debuff", "bonus-damage-vs-provoked", "cannot-buff", "awaken-strip-one", "soulburn-extra-turn"],
  buffs: [],
  debuffs: ["Redirected Provoke", "Cannot Buff"],
  uniqueEffects: [
    {
      name: "Shuffle",
      scope: "targets",
      tooltip: "Once/turn when ally is hit by provoked enemy: AoE + random debuff; bonus damage vs provoke marks ∝ max HP."
    }
  ],
  kit: "S1 One Pair (+1 Soul): Redirected Provoke; Soulburn extra turn. S2 Wild Card: Shuffle punish vs provoke. S3 Tea Party (+3 Souls, 5→4 CD): Cannot Buff 2 + Redirected Provoke; awaken strip 1. Shuffle amp/pool UNSURE.",
  defense: 4,
  offense: 6,
  baseSpeed: 115,
  verified: false
}
```
