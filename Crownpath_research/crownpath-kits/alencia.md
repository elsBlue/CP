# Alencia

Short: Alencia

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (no 2025–2026 STOVE balance listing found; kit per epic7db post–older Alencia remakes: Mind's Eye injuries + Soulburn ignore ER)

## Roles

bruiser, defense-break, strip, injury

## Tags

hp-scaling, decrease-defense, injury, extra-attack, strip, aoe, increase-defense, cr-push, soulburn, mind-eye

## Effects

max-hp-scaled-damage, trample-extra-attack, injuries-on-attack

## Buffs

Mind's Eye, Increase Defense

## Debuffs

Decrease Defense, Injuries

## Unique effects

### Mind's Eye

Self-only. At start of turn, 100% chance grant Mind's Eye 1 turn. While granted Mind's Eye, attacks inflict Injuries (severity max Health; severity ∝ damage; exact per-hit cap UNSURE — older notes cited up to 10% per Trample use). Passive also +20% Critical Hit Chance.

### Trample (extra skill)

Targets (single). After Eradicate while Mind's Eye is granted: strike from above; caster CR +15%; damage ∝ max Health. EE option: +20% Trample damage; another EE recovers HP on Eradicate.

### Genesis (awaken team Defense)

Targets (AoE). Dispel all buffs from all enemies; caster CR +50%; damage ∝ max Health. Awakened: also Increase Defense all allies 2 turns.

## Kit

S1 Eradicate (+1 Soul): Decrease Defense 1 turn (75% base; enhancements → 100% FE); damage ∝ max Health. Soulburn (−10): effect chance 100% and ignores Effect Resistance. S2 Noble Blood (passive): +20% Crit Chance; SoT Mind's Eye 1 turn; after Eradicate with Mind's Eye → Trample (CR +15%, HP-scaled). Mind's Eye: attacks inflict Injuries. S3 Genesis (+3 Souls, 5→4 CD): AoE full strip + caster CR +50%; awaken also team Increase Defense 2 turns. Damage ∝ max Health. Exact Injury % per hit and Trample/Eradicate multipliers: UNSURE.

## Defense / offense

5 / 7

## Unsure

- Exact Injury severity / max Health reduction per hit under current Mind's Eye (epic7db omits Mind's Eye tooltip body)
- Exact HP damage coefficients
- Whether 2022/2024-era Alencia patches are fully reflected (no 2025–2026 listing found)
- First-fight opening CD of Genesis

## Object

```ts
{
  id: "alencia",
  name: "Alencia",
  short: "Alencia",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "defense-break", "strip", "injury"],
  tags: ["hp-scaling", "decrease-defense", "injury", "extra-attack", "strip", "aoe", "increase-defense", "cr-push", "soulburn", "mind-eye"],
  effects: ["max-hp-scaled-damage", "trample-extra-attack", "injuries-on-attack"],
  buffs: ["Mind's Eye", "Increase Defense"],
  debuffs: ["Decrease Defense", "Injuries"],
  uniqueEffects: [
    {
      name: "Mind's Eye",
      scope: "self",
      tooltip: "SoT grant 1 turn; +20% Crit Chance passive. While active, attacks inflict Injuries; enables Trample after Eradicate."
    },
    {
      name: "Trample",
      scope: "targets",
      tooltip: "Extra skill after Eradicate with Mind's Eye: HP-scaled hit + caster CR +15%."
    }
  ],
  kit: "S1 Eradicate (+1): Def Break 1t (75%→100%); Soulburn (−10): 100% + ignore ER. S2 Noble Blood: +20% Crit; SoT Mind's Eye; Eradicate+Mind's Eye → Trample (CR+15%). S3 Genesis (+3, 5→4): AoE full strip + CR+50%; awaken team Def Up 2t. Injury%/coeffs UNSURE.",
  defense: 5,
  offense: 7,
  baseSpeed: 106,
  verified: false
}
```
