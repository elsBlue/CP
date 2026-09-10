# Chloe

Short: Chloe

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 119

Patch / date used: 2026-09-04 (no balance listing found for Chloe in 2025–2026 previews checked; Maid Chloe patches do not apply; RGB kit treated as current)

## Roles

dps, stun, magic-nail, single-target

## Tags

single-target, magic-nail, stun, increase-attack, cr-push, soulburn, ignore-effect-resistance-on-nail

## Effects

magic-nail-amp, increase-attack, cr-push, stun, ignore-er-when-nailed, unreSIST-nail-on-awaken

## Buffs

Increase Attack

## Debuffs

Magic Nail, Stun

## Unique effects

### Magic Nail

Target. Mark applied by Magic Bolt for 3 turns. Heavy Strike deals increased damage vs Magic Nail. Hyper Strike ignores Effect Resistance when target has Magic Nail. Awakened Magic Bolt: Magic Nail cannot be resisted.

## Kit

S1 Heavy Strike (+1 Soul): hammer attack; increased damage if target has Magic Nail. S2 Magic Bolt (+1 Soul, 3 CD): Increase Attack caster 3 turns; inflict Magic Nail 3 turns; caster CR +50%. Awaken: Magic Nail cannot be resisted. S3 Hyper Strike (+2 Souls, 4→3 CD): soar attack; Stun 1 turn; if Magic Nail, Ignore Effect Resistance. Soulburn (−20): increases damage dealt. Exact Magic Nail damage amp coefficient: UNSURE. First-fight opening CDs: UNSURE.

## Defense / offense

2 / 8

## Unsure

- Exact damage increase % on Heavy Strike vs Magic Nail
- First-fight (opening) cooldowns
- Whether Magic Nail is classified as a debuff for cleanse/immunity interactions beyond “cannot be resisted” when awakened
- Exclusive Equipment option text not required for kit object but EE exists (Prototype Crown)

## Object

```ts
{
  id: "chloe",
  name: "Chloe",
  short: "Chloe",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "stun", "magic-nail", "single-target"],
  tags: ["single-target", "magic-nail", "stun", "increase-attack", "cr-push", "soulburn", "ignore-effect-resistance-on-nail"],
  effects: ["magic-nail-amp", "increase-attack", "cr-push", "stun", "ignore-er-when-nailed", "unresist-nail-on-awaken"],
  buffs: ["Increase Attack"],
  debuffs: ["Magic Nail", "Stun"],
  uniqueEffects: [
    {
      name: "Magic Nail",
      scope: "target",
      tooltip: "3-turn mark: amps Heavy Strike; Hyper Strike ignores ER while nailed; awaken Magic Bolt nail cannot be resisted."
    }
  ],
  kit: "S1 Heavy Strike (+1 Soul): bonus damage vs Magic Nail. S2 Magic Bolt (+1 Soul, 3 CD): Increase Attack 3 turns + Magic Nail 3 turns + CR +50%; awaken nail unreSIST. S3 Hyper Strike (+2 Souls, 4→3 CD): Stun; Ignore ER if nailed; Soulburn (−20) more damage. Nail amp % / opening CDs UNSURE.",
  defense: 2,
  offense: 8,
  baseSpeed: 119,
  verified: false
}
```
