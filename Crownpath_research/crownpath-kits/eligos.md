# Eligos

Short: Eligos

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-04 (kit per post–2024-12-19 Cleaner/Point-Blank rework; no later 2025–2026 skill listing found)

## Roles

opener, strip, dps, control

## Tags

strip, defbreak, dual-attack, soulburn, cr-cut, ignore-er

## Effects

buff-dispel, dual-attack, decrease-cr, resource-reduction, increase-hit

## Buffs

Increase Attack (Greater), Increase Hit Chance

## Debuffs

Decrease Defense, Target

## Unique effects

### Time Bomb

Self-only then attack. After granting Increase Attack (Greater) to the caster for 2 turns, attacks the enemy with a bomb. Damage dealt increases proportional to the caster's Speed. Triggered by The Cleaner when an ally except the caster defeats an enemy (once every 2 turns; targets lowest Health).

### The Cleaner

Self-only. Hit Chance and Critical Hit Damage increase by 50%. Kill-proc activates Time Bomb (see above).

### Cloak and Trigger (awakened)

Self-only then attack. Increases Hit Chance of the caster for 2 turns, then pistol attack: dispel two buffs, inflict Target and Decrease Defense for 2 turns, decrease Combat Readiness by 50%. Also inflicts resource reduction on the target by 60% (main skill card). Increase Hit Chance: Increases Hit Chance by 50%.

## Kit

S1 Point-Blank Shot (+1 Soul): dash attack; when caster has Increase Attack (Greater), triggers Dual Attack from the ally with the highest Attack; damage ∝ Speed. S2 The Cleaner (passive): +50% Hit Chance and Crit Damage; on ally (except self) kill, Time Bomb vs lowest-Health enemy every 2 turns (enhanced −1 → 1-turn ICD). S3 Cloak and Trigger (awakened, +3 Souls, 5-turn cooldown, −1 → 4): Increase Hit Chance 2 turns, then resource reduction 60%, dispel 2 buffs, Target + Decrease Defense 2 turns, enemy CR −50%. Soulburn (−20 Souls): ignores Effect Resistance. First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: S1 triggers Dual Attack (true Dual Attack).

## Defense / offense

2 / 8

## Unsure

- First-fight (opening) cooldown of Cloak and Trigger
- Whether resource reduction is always on the skill card vs EE-only (epic7db main card includes 60%)
- Exact EN for “Target” debuff name
- Time Bomb ICD after S2 enhancement (−1 from 2)

## Object

```ts
{
  id: "eligos",
  name: "Eligos",
  short: "Eligos",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "strip", "dps", "control"],
  tags: ["strip", "defbreak", "dual-attack", "soulburn", "cr-cut", "ignore-er"],
  effects: ["buff-dispel", "dual-attack", "decrease-cr", "resource-reduction", "increase-hit"],
  buffs: ["Increase Attack (Greater)", "Increase Hit Chance"],
  debuffs: ["Decrease Defense", "Target"],
  uniqueEffects: [
    {
      name: "Time Bomb",
      scope: "self-only",
      tooltip: "After granting Increase Attack (Greater) to the caster for 2 turns, attacks the enemy with a bomb. Damage dealt increases proportional to the caster's Speed."
    },
    {
      name: "The Cleaner",
      scope: "self-only",
      tooltip: "Hit Chance and Critical Hit Damage increase by 50%. When an ally except for the caster defeats an enemy, activates Time Bomb against the enemy with the lowest Health. Once every 2 turns."
    },
    {
      name: "Cloak and Trigger",
      scope: "self-only",
      tooltip: "Increases Hit Chance of the caster for 2 turns, before attacking with a pistol: dispel two buffs, Target + Decrease Defense for 2 turns, CR −50%. Resource reduction 60%. (Awakened.)"
    }
  ],
  kit: "S1 Point-Blank Shot (+1 Soul): damage ∝ Speed; with Increase Attack (Greater) Dual Attack from highest-Atk ally. S2 The Cleaner: +50% Hit & CDMG; ally kill → Time Bomb (Greater Atk + bomb ∝ Speed) every 2 turns. S3 Cloak and Trigger awakened (+3 Souls, 5→4 CD): Hit Chance buff, resource −60%, dispel 2, Target + Decrease Defense, CR −50%; Soulburn (−20) ignore ER.",
  defense: 2,
  offense: 8,
  baseSpeed: 120,
  verified: false
}
```
