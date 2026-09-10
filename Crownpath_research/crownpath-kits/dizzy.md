# Dizzy

Short: Dizzy

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2026-09-04 (no Dizzy hero skill balance listing found in 2025–2026 STOVE previews checked; kit per epic7db 2026-09-04)

## Roles

aoe-control, debuff-extend, cr-push, stun

## Tags

aoe, stun, decrease-speed, decrease-attack, decrease-hit-chance, debuff-extend, cr-push, soulburn, miss-but-debuff

## Effects

aoe-stun-chance, damage-vs-debuffed, extend-debuffs-non-immobile, cr-push-on-awaken-s2, forced-triple-debuff-on-miss-s3, soulburn-extra-turn

## Buffs

(none)

## Debuffs

Stun, Decrease Speed, Decrease Attack, Decrease Hit Chance

## Unique effects

### Emotional Gamma Ray miss-debuff

Targets (AoE). Attack is described as missing, but still inflicts Decrease Speed, Decrease Attack, and Decrease Hit Chance for 2 turns regardless (per epic7db).

### Gamma Ray (awakened)

Targets (AoE). Extends debuff durations by 1 turn except movement-prevention debuffs; awakened also decreases Combat Readiness by 50%.

## Kit

S1 I Used This to Catch Fish (+1 Soul): AoE; 25% chance each to Stun 1 turn; damage increases vs debuffed enemies. Exact amp %: UNSURE. S2 Gamma Ray (+2 Souls, 4 CD → 3 with enhance): AoE; extend debuffs +1 turn (except those preventing movement). Awaken: also CR −50%. S3 Emotional Gamma Ray (+3 Souls, 5 CD → 4 with enhance): AoE; attack misses but inflicts Decrease Speed / Attack / Hit Chance 2 turns regardless. Soulburn (−20): grants an extra turn. First-fight opening CDs: UNSURE.

## Defense / offense

3 / 6

## Unsure

- Exact damage increase % on S1 vs debuffed enemies
- Whether S3 “miss” interacts with counter/miss sets beyond the forced debuffs
- First-fight (opening) cooldowns
- Any silent 2025–2026 kit tweak not listed in searched STOVE previews

## Object

```ts
{
  id: "dizzy",
  name: "Dizzy",
  short: "Dizzy",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-control", "debuff-extend", "cr-push", "stun"],
  tags: ["aoe", "stun", "decrease-speed", "decrease-attack", "decrease-hit-chance", "debuff-extend", "cr-push", "soulburn", "miss-but-debuff"],
  effects: ["aoe-stun-chance", "damage-vs-debuffed", "extend-debuffs-non-immobile", "cr-push-on-awaken-s2", "forced-triple-debuff-on-miss-s3", "soulburn-extra-turn"],
  buffs: [],
  debuffs: ["Stun", "Decrease Speed", "Decrease Attack", "Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Emotional Gamma Ray",
      scope: "targets",
      tooltip: "AoE attack misses but still applies Decrease Speed/Attack/Hit Chance 2 turns regardless; Soulburn extra turn."
    },
    {
      name: "Gamma Ray (Awakened)",
      scope: "targets",
      tooltip: "Extend non-immobile debuffs +1 turn; awaken also CR −50%."
    }
  ],
  kit: "S1 Catch Fish (+1 Soul): AoE 25% Stun; bonus dmg vs debuffed (amp % UNSURE). S2 Gamma Ray (+2 Souls, 4→3 CD): extend debuffs +1; awaken CR −50%. S3 Emotional Gamma Ray (+3 Souls, 5→4 CD): miss but triple decrease debuffs 2 turns; Soulburn (−20) extra turn.",
  defense: 3,
  offense: 6,
  baseSpeed: 115,
  verified: false
}
```
