# Blooming Lidica

Short: BLidica

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: 2026-07-16 (STOVE: Thorned Vine ICD 3→2 turns; epic7db still showed 3-turn ICD at fetch — prefer STOVE)

## Roles

strip, unbuffable, control, dps

## Tags

hp-scaling, stun, unbuffable, buff-duration-cut, speed-scaling, skill-nullifier, defense-penetration, no-crit, soulburn, thorned-vine

## Effects

speed-from-enemy-debuffs, thorned-vine-followup, speed-diff-penetration

## Buffs

Skill Nullifier

## Debuffs

Stun, Unable to be Buffed

## Unique effects

### Seductive Scent / Thorned Vine (post–2026-07-16)

Self / enemies. Speed increases proportional to number of debuffs on all enemies (max +70%). After an ally except caster attacks a debuffed target, activates Thorned Vine (ICD **2 turns** per STOVE 2026-07-16; epic7db lagged at 3). Thorned Vine: AoE attack; decrease buff durations by 1 turn; Unable to be Buffed 2 turns; damage ∝ max Health.

### Fruit of Ecstasy (speed-diff pen)

Targets (single). Grants Skill Nullifier once to caster. Base 50% Defense penetration; if caster Speed > target Speed, penetration increases with difference up to 100%. Damage ∝ max Health. Cannot crit.

## Kit

S1 Twirling Thorns (+1 Soul): Stun 1 turn (40% base; Soulburn −10 → 100%); damage ∝ max Health. S2 Seductive Scent (passive): Speed from enemy debuff count (cap 70%); ally attack on debuffed target → Thorned Vine (AoE buff-duration −1 + Unbuffable 2t; ICD 2 turns post-patch). S3 Fruit of Ecstasy (+3 Souls, 5→4 CD): Skill Nullifier self; Def pen 50%→up to 100% by Speed diff; no crit; HP-scaled. Whether Fruit of Ecstasy had additional 07/16 changes beyond Thorned Vine ICD: UNSURE (preview snippet truncated). Exact Speed-per-debuff and HP coeffs: UNSURE.

## Defense / offense

4 / 7

## Unsure

- Exact Speed % gained per enemy debuff (only cap 70% confirmed)
- Exact HP damage coefficients
- Whether Fruit of Ecstasy text changed on 2026-07-16 beyond Thorned Vine ICD (STOVE page partial)
- epic7db still listed 3-turn Thorned Vine ICD at research time

## Object

```ts
{
  id: "blooming-lidica",
  name: "Blooming Lidica",
  short: "BLidica",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "unbuffable", "control", "dps"],
  tags: ["hp-scaling", "stun", "unbuffable", "buff-duration-cut", "speed-scaling", "skill-nullifier", "defense-penetration", "no-crit", "soulburn", "thorned-vine"],
  effects: ["speed-from-enemy-debuffs", "thorned-vine-followup", "speed-diff-penetration"],
  buffs: ["Skill Nullifier"],
  debuffs: ["Stun", "Unable to be Buffed"],
  uniqueEffects: [
    {
      name: "Thorned Vine",
      scope: "targets",
      tooltip: "After ally hits debuffed foe (ICD 2 turns post-2026-07-16): AoE buff duration −1 + Unbuffable 2 turns; HP-scaled."
    },
    {
      name: "Fruit of Ecstasy",
      scope: "targets",
      tooltip: "Skill Nullifier self; 50–100% Def pen by Speed diff; no crit; HP-scaled."
    }
  ],
  kit: "S1 Twirling Thorns (+1): Stun (40%; Soulburn 100%); dmg ∝ HP. S2 Seductive Scent: Speed from enemy debuffs (cap 70%); Thorned Vine ICD 2t (STOVE 2026-07-16). S3 Fruit of Ecstasy (+3, 5→4): Nullifier; pen 50–100% by Spd diff; no crit. Coeffs/other 07-16 Fruit edits UNSURE.",
  defense: 4,
  offense: 7,
  baseSpeed: 118,
  verified: false
}
```
