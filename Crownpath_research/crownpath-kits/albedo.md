# Albedo

Short: Albedo

Element: Earth

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 104

Patch / date used: 2026-09-04 (no 2025–2026 balance listing found for Albedo; Overlord collab kit per epic7db treated as current)

## Roles

tank, counter, defense-break, bruiser

## Tags

hp-scaling, counter, aoe, strip, decrease-defense, unbuffable, increase-speed, damage-reduction, soulburn, dispel

## Effects

max-hp-scaled-damage, ally-crit-damage-reduction, counter-bicorn

## Buffs

Increase Speed

## Debuffs

Unable to be Buffed, Decrease Defense

## Unique effects

### Aegis Unfold (crit damage cut + counter)

Allies. When an ally suffers a critical hit, decreases damage suffered by 20% (further via skill enhancements; fully enhanced value UNSURE, epic7db enhancement text malformed). When an ally except the caster suffers a critical hit, counterattacks with Let's Go, Bicorn! (once every 2 turns). When multiple damage-reduction effects, strongest applies.

### Let's Go, Bicorn!

Targets (AoE). Attacks all enemies, dispels one buff, then Increase Speed on caster 2 turns. Damage ∝ caster max Health.

### Rage of Nazarick (awaken strip)

Targets (single). Fully enhanced: 100% chance each Unable to be Buffed + Decrease Defense 2 turns. Awakened: also dispel all buffs from the target. Damage ∝ max Health. Soulburn (−10): skill cooldown −2 turns.

## Kit

S1 No Need for Words (+1 Soul): bardiche hit; caster CR +20% base (enhancements +2%/+3% → 25% fully enhanced). Successful attack deals additional damage ∝ max Health; main damage ∝ max Health. S2 Aegis Unfold (passive): ally crit → damage reduction; ally-except-self crit → Let's Go, Bicorn! (AoE strip 1 + Speed Up self 2t, ICD 2 turns). S3 Rage of Nazarick (+3 Souls, 5→4 CD): single target; Unable to be Buffed + Decrease Defense 2 turns (chance reaches 100% fully enhanced; base/awaken card shows 75% before enhancements). Awaken: also dispel all buffs. Damage ∝ max Health. Soulburn (−10): CD −2. Exact additional S1 damage coeff, Bicorn multipliers, and fully enhanced damage-reduction %: UNSURE.

## Defense / offense

8 / 5

## Unsure

- Fully enhanced Aegis Unfold damage-reduction % (base 20%; enhancement lines show odd “+-0.5%” formatting)
- Exact S1 additional-damage and Bicorn damage coefficients vs max Health
- Whether S3 effect chances are independent rolls
- No 2025–2026 STOVE balance listing found

## Object

```ts
{
  id: "albedo",
  name: "Albedo",
  short: "Albedo",
  element: "earth",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["tank", "counter", "defense-break", "bruiser"],
  tags: ["hp-scaling", "counter", "aoe", "strip", "decrease-defense", "unbuffable", "increase-speed", "damage-reduction", "soulburn", "dispel"],
  effects: ["max-hp-scaled-damage", "ally-crit-damage-reduction", "counter-bicorn"],
  buffs: ["Increase Speed"],
  debuffs: ["Unable to be Buffed", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Aegis Unfold",
      scope: "allies",
      tooltip: "On ally crit: damage reduction. On ally-except-self crit: Let's Go, Bicorn! (AoE dispel 1 + Speed Up self), ICD 2 turns."
    },
    {
      name: "Rage of Nazarick",
      scope: "targets",
      tooltip: "Unbuffable + Decrease Defense 2 turns; awaken also full strip. HP-scaled. Soulburn −2 CD."
    }
  ],
  kit: "S1 No Need for Words (+1): CR push self 20%→25%; dmg+bonus ∝ max HP. S2 Aegis Unfold: ally crit dmg cut; ally crit → Bicorn AoE strip1 + Speed Up self (ICD 2). S3 Rage of Nazarick (+3, 5→4): Unbuffable+Def Break 2t (100% FE); awaken full strip; Soulburn (−10) −2 CD. Coeffs/DR% UNSURE.",
  defense: 8,
  offense: 5,
  baseSpeed: 104,
  verified: false
}
```
