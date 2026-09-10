# Aria

Short: Aria

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2022-09-29 STOVE balance (Guide of Darkness / Shadow Call / Umbral Hour adjustments) — no 2025–2026 hero skill balance listing found; current kit per epic7db 2026-09-04

## Roles

counter, strip, tank-bruiser, stealth-support, cr-cut

## Tags

dual-hit, decrease-hit-chance, focus, strip, cr-cut, counterattack, stealth, barrier, defense-scaling, soulburn

## Effects

decrease-hit-chance, focus-consume-aoe, buff-dispel, decrease-cr, counterattack-stance, stealth-allies, defense-scaled-damage

## Buffs

Increase Defense, Counterattack, Stealth, Barrier

## Debuffs

Decrease Hit Chance

## Unique effects

### Focus / Dark Shadow Phantom

Self → enemies (AoE). Passive Guide of Darkness: +30% Critical Hit Chance (fully enhanced path; skill-ups add further Crit Chance). After using a skill, when Focus is full, consume all Focus to activate Dark Shadow Phantom: attack all enemies, dispel two buffs, CR −30%; damage ∝ Defense. Focus gain per S1 / counters: typically +1 Focus per skill use (max 5) — exact Focus-per-hit rules if S1 hits two: UNSURE (community treats skill use as +1).

### The Umbral Hour (awakened)

Self + allies except caster. Increase Defense + counterattacking stance on caster 2 turns; Stealth (and Barrier ∝ Defense when awakened) on all allies except caster 2 turns. CD 5→4.

## Kit

S1 Shadow Call (+1 Soul): attack two enemies; Decrease Hit Chance 1 turn (50% base; +effect chance from enhancements; +20% effect chance when not caster’s turn). Damage ∝ Defense. Soulburn (−20 Souls): grants an extra turn. S2 Guide of Darkness (passive): +Crit Chance; full Focus → Dark Shadow Phantom (AoE strip 2 + CR −30%, Def-scaled). S3 The Umbral Hour (+3 Souls, 5→4 CD): Increase Defense + counter stance caster 2 turns; Stealth allies except caster 2 turns; awaken also Barrier ∝ Defense. Exact Focus generation numbers, barrier coefficient, and first-fight opening CD: UNSURE.

## Defense / offense

7 / 6

## Unsure

- Exact Focus gained per Shadow Call / counter (1 per skill vs per hit)
- Exact Barrier coefficient vs Defense on awakened Umbral Hour
- Fully-enhanced Decrease Hit Chance % on-turn vs off-turn
- First-fight (opening) cooldown of The Umbral Hour
- Whether 2022 balance Crit Damage-on-low-HP was fully removed (epic7db passive no longer lists it — treated as removed)

## Object

```ts
{
  id: "aria",
  name: "Aria",
  short: "Aria",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["counter", "strip", "tank-bruiser", "stealth-support", "cr-cut"],
  tags: ["dual-hit", "decrease-hit-chance", "focus", "strip", "cr-cut", "counterattack", "stealth", "barrier", "defense-scaling", "soulburn"],
  effects: ["decrease-hit-chance", "focus-consume-aoe", "buff-dispel", "decrease-cr", "counterattack-stance", "stealth-allies", "defense-scaled-damage"],
  buffs: ["Increase Defense", "Counterattack", "Stealth", "Barrier"],
  debuffs: ["Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Dark Shadow Phantom",
      scope: "targets",
      tooltip: "On full Focus after a skill: AoE attack, dispel 2 buffs, CR −30%; damage ∝ Defense."
    },
    {
      name: "The Umbral Hour",
      scope: "allies",
      tooltip: "Self Increase Defense + counter 2 turns; Stealth (and Barrier ∝ Def when awakened) on allies except caster 2 turns."
    }
  ],
  kit: "S1 Shadow Call (+1 Soul): hit two enemies, Decrease Hit Chance; Def-scaled; +20% effect chance off-turn; Soulburn (−20) extra turn. S2 Guide of Darkness: Crit Chance passive; full Focus → Dark Shadow Phantom (strip 2 + CR −30%). S3 The Umbral Hour (+3 Souls, 5→4 CD): self Def/counter; Stealth allies; awaken + Barrier. Focus/barrier math UNSURE.",
  defense: 7,
  offense: 6,
  baseSpeed: 115,
  verified: false
}
```
