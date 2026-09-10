# Command Model Laika

Short: CM Laika

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-09-04 (no 2025–2026 STOVE balance listing found; kit per epic7db treated as current)

## Roles

enabler, dual-attack, control, buffer

## Tags

target, dual-attack, increase-attack, cr-push, decrease-speed, sleep, immunity, soulburn, cooldown-reduction

## Effects

dual-attack-trigger, target-mark

## Buffs

Increase Attack, Immunity

## Debuffs

Target, Decrease Speed, Sleep

## Unique effects

### Strike Order (dual + Target)

Targets / allies. 100% Target enemy 2 turns (FE); Increase Attack on ally with highest Attack except caster 2 turns; decrease that ally's skill cooldown by 1 turn; trigger Dual Attack.

### Volley Fire! (awaken Immunity)

Targets (AoE). Fully enhanced: 100% chance each Decrease Speed 2 turns + Sleep 1 turn. Awakened: also Immunity all allies 2 turns. Soulburn (−10): skill cooldown −2 turns.

## Kit

S1 Supporting Fire (+1 Soul): attacks; CR +15% base to caster and a random ally except caster (enhancements +2%/+3% → 20% FE). EE1: CR push goes to highest-Attack ally instead of random. S2 Strike Order (+2 Souls, 4→3 CD): Target 2t; Atk Up highest-Atk ally 2t; ally CD −1; Dual Attack. S3 Volley Fire! (+3 Souls, 5→4 CD): AoE Decrease Speed + Sleep; awaken team Immunity 2t. Soulburn (−10): CD −2. Exact base Target/Sleep chances before FE and whether Dual Attack partner is the Atk-buffed ally: treat as yes (standard) but mark UNSURE if client differs.

## Defense / offense

4 / 5

## Unsure

- Whether Dual Attack is always with the Attack-buffed ally (expected yes)
- Pre-enhancement Target/Sleep chances (awaken card shows 75%/50% before FE; top card shows 100%)
- First-fight opening CDs
- No 2025–2026 STOVE balance listing found

## Object

```ts
{
  id: "command-model-laika",
  name: "Command Model Laika",
  short: "CM Laika",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["enabler", "dual-attack", "control", "buffer"],
  tags: ["target", "dual-attack", "increase-attack", "cr-push", "decrease-speed", "sleep", "immunity", "soulburn", "cooldown-reduction"],
  effects: ["dual-attack-trigger", "target-mark"],
  buffs: ["Increase Attack", "Immunity"],
  debuffs: ["Target", "Decrease Speed", "Sleep"],
  uniqueEffects: [
    {
      name: "Strike Order",
      scope: "allies",
      tooltip: "Target enemy 2t; Atk Up highest-Atk ally 2t; ally CD −1; Dual Attack."
    },
    {
      name: "Volley Fire!",
      scope: "targets",
      tooltip: "AoE Speed Down 2t + Sleep 1t; awaken team Immunity 2t. Soulburn −2 CD."
    }
  ],
  kit: "S1 Supporting Fire (+1): CR push self + random ally 15%→20% (EE: highest Atk). S2 Strike Order (+2, 4→3): Target; Atk Up best DPS; CD−1; Dual Attack. S3 Volley Fire! (+3, 5→4): AoE Speed Down+Sleep; awaken Immunity team; Soulburn (−10) −2 CD. Dual partner/base chances UNSURE.",
  defense: 4,
  offense: 5,
  baseSpeed: 114,
  verified: false
}
```
