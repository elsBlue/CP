# ae-KARINA

Short: ae-KARINA

Element: Ice

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (no balance listing found for ae-KARINA in 2025–2026 previews checked; aespa collab kit treated as current)

## Roles

bruiser, defense-break, barrier, tank

## Tags

single-target, aoe-splash, decrease-defense, defense-scaling, barrier, cr-push, soulburn, increase-defense, increase-speed

## Effects

defense-scaled-damage, ally-low-hp-trigger, leave-it-to-me-barrier, additional-aoe-damage

## Buffs

Increase Defense, Barrier, Increase Speed

## Debuffs

Decrease Defense

## Unique effects

### Leave It To Me!

Allies (barrier) / self (Increase Defense). Triggered by Rocket Punch when an ally except the caster is ≤50% Health after being attacked: CR push on caster, then Increase Defense on caster 2 turns + Barrier on all allies 2 turns (barrier ∝ caster Defense). ICD: once every 3 turns.

### Defense-scaled splash (I'll Blow You Away!)

Targets (primary + AoE splash). Main hit Decrease Defense 2 turns; on successful attack, additional damage ∝ caster Defense to all enemies. Awakened: also Increase Speed on caster 2 turns. Miss prevents splash.

## Kit

S1 Exposed! (+1 Soul): punch one enemy, Decrease Defense 1 turn (75% base; +10% from enhancements → 100% fully enhanced); damage ∝ caster Defense. Soulburn (−10 Souls): effect chance 100% and Decrease Defense 2 turns. S2 Rocket Punch (passive, 3-turn ICD): when ally except caster ≤50% HP after attack → caster CR +50% fully enhanced (35% base per older guides; epic7db lists 50% at card) and activate Leave It To Me! (Increase Defense caster 2 turns + Barrier all allies 2 turns ∝ Defense). S3 I'll Blow You Away! (+3 Souls, 4→3 CD): slam one enemy, Decrease Defense 2 turns; on hit, additional Def-scaled damage to all enemies; damage ∝ Defense. Awaken: also Increase Speed caster 2 turns. Exact additional-damage coefficient and barrier coefficient: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

7 / 6

## Unsure

- Exact S2 base CR before skill enhancements (epic7db shows 50% on card; older wiki/guides show 35% + enhancements to 50%)
- Exact additional AoE damage coefficient on S3
- Exact Barrier strength coefficient vs Defense
- First-fight (opening) cooldown of I'll Blow You Away!
- Whether Decrease Defense on S3 is chance-based or guaranteed (card text reads as guaranteed)

## Object

```ts
{
  id: "ae-karina",
  name: "ae-KARINA",
  short: "ae-KARINA",
  element: "ice",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "defense-break", "barrier", "tank"],
  tags: ["single-target", "aoe-splash", "decrease-defense", "defense-scaling", "barrier", "cr-push", "soulburn", "increase-defense", "increase-speed"],
  effects: ["defense-scaled-damage", "ally-low-hp-trigger", "leave-it-to-me-barrier", "additional-aoe-damage"],
  buffs: ["Increase Defense", "Barrier", "Increase Speed"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Leave It To Me!",
      scope: "allies",
      tooltip: "On ally ≤50% HP after attack (ICD 3 turns): caster CR push, Increase Defense 2 turns on caster, Barrier all allies 2 turns ∝ Defense."
    },
    {
      name: "Defense-scaled splash",
      scope: "targets",
      tooltip: "S3: Decrease Defense 2 turns on primary; on hit, additional Def-scaled damage to all enemies; awaken adds Increase Speed 2 turns on caster."
    }
  ],
  kit: "S1 Exposed! (+1 Soul): Decrease Defense 1 turn (75%→100%); damage ∝ Defense. Soulburn (−10): 100% + Decrease Defense 2 turns. S2 Rocket Punch (passive, 3-turn ICD): ally ≤50% HP → CR push + Leave It To Me (Increase Defense self + Barrier allies ∝ Defense). S3 I'll Blow You Away! (+3 Souls, 4→3 CD): Decrease Defense 2 turns + Def-scaled AoE splash on hit; awaken Increase Speed 2 turns. Coefficients/opening CD UNSURE.",
  defense: 7,
  offense: 6,
  baseSpeed: 106,
  verified: false
}
```
