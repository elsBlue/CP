# Basar

Short: Basar

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 108

Patch / date used: 2026-09-04 (no 2025–2026 STOVE balance listing for covenant Basar; kit per epic7db — older speed/kit buffs predate 2025)

## Roles

strip, opener, control, transfer

## Tags

strip, aoe, cr-pushback, unbuffable, decrease-hit-chance, decrease-attack, soulburn, ignore-effect-resistance, debuff-transfer

## Effects

buff-dispel, combat-readiness-decrease, random-debuff-transfer

## Buffs

none

## Debuffs

Decrease Hit Chance, Decrease Attack, Unable to be Buffed

## Unique effects

### Sand Wind (transfer + random debuff)

Targets (single). When caster is debuffed: 75% chance transfer one debuff from caster to enemy and inflict a random debuff 2 turns (chance raised by enhancements). Exact random-debuff pool: UNSURE.

### Sandstorm (awaken Unbuffable)

Targets (AoE). Dispel all buffs; decrease Combat Readiness by 30%. Awakened: also Unable to be Buffed 2 turns. Soulburn (−20): ignores Effect Resistance.

## Kit

S1 Sand Wind (+1 Soul): wind hit; if caster debuffed, 75%+ chance transfer 1 debuff + random debuff 2 turns. S2 Hurricane (+2 Souls, 3 CD): AoE; Decrease Hit Chance + Decrease Attack 2 turns (75% base each → higher FE). S3 Sandstorm (+3 Souls, 5→4 CD): AoE full strip + CR −30%; awaken also Unbuffable 2 turns. Soulburn (−20): ignores Effect Resistance. Exact S1 random debuff table and whether strip is chance-based: UNSURE (card reads as guaranteed strip).

## Defense / offense

3 / 5

## Unsure

- Exact random debuff pool on Sand Wind
- Whether Sandstorm strip/CR pushback are guaranteed vs chance
- No covenant Basar listing in 2025–2026 STOVE previews checked (DJ Basar is separate)

## Object

```ts
{
  id: "basar",
  name: "Basar",
  short: "Basar",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "opener", "control", "transfer"],
  tags: ["strip", "aoe", "cr-pushback", "unbuffable", "decrease-hit-chance", "decrease-attack", "soulburn", "ignore-effect-resistance", "debuff-transfer"],
  effects: ["buff-dispel", "combat-readiness-decrease", "random-debuff-transfer"],
  buffs: [],
  debuffs: ["Decrease Hit Chance", "Decrease Attack", "Unable to be Buffed"],
  uniqueEffects: [
    {
      name: "Sand Wind transfer",
      scope: "targets",
      tooltip: "If caster debuffed: chance to transfer 1 debuff + inflict a random debuff 2 turns."
    },
    {
      name: "Sandstorm",
      scope: "targets",
      tooltip: "AoE full strip + CR −30%; awaken Unbuffable 2 turns. Soulburn ignores ER."
    }
  ],
  kit: "S1 Sand Wind (+1): if debuffed, transfer 1 + random debuff. S2 Hurricane (+2, 3 CD): AoE Hit Chance Down + Atk Down 2t. S3 Sandstorm (+3, 5→4): AoE full strip + CR−30%; awaken Unbuffable 2t; Soulburn (−20) ignore ER. Random pool UNSURE.",
  defense: 3,
  offense: 5,
  baseSpeed: 108,
  verified: false
}
```
