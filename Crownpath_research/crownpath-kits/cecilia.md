# Cecilia

Short: Cecilia

Element: Fire

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (no Covenant Cecilia skill balance listing found in 2025–2026 previews checked; do not confuse with Fallen Cecilia)

## Roles

tank, strip, control, cleave

## Tags

aoe, strip, defbreak, provoke, soulburn, barrier, immunity

## Effects

buff-dispel

## Buffs

Immunity, Barrier

## Debuffs

Decrease Defense, Decrease Attack, Provoke

## Unique effects

### Deliverance conditional

Self-only application. When the target is inflicted with Decrease Attack, Deliverance effect chance increases by 25%. Damage dealt increases proportional to the caster's max Health.

### Steel Cloudburst (awakened)

Team-wide (enemies). Attacks all enemies with a magical spear, with a 100% chance to Decrease Attack for 2 turns, before dispelling one buff. Damage dealt increases proportional to the caster's max Health.

### Black Winter Spear (Exclusive Equipment)

Self-only / on-skill. Deliverance: +10% Decrease Defense chance. Steel Cloudburst options: Decrease Speed all enemies 2 turns, or Unhealable all enemies 2 turns.

## Kit

S1 Deliverance (+1 Soul): spear attack, chance to Decrease Defense for 2 turns (50% base on card; enhancements raise chance); +25% effect chance if target has Decrease Attack; damage ∝ max Health. S2 Steel Cloudburst (awakened, +2 Souls, 3-turn cooldown): AoE, 100% Decrease Attack for 2 turns, then dispel one buff; damage ∝ max Health. Soulburn (−10 Souls): skill cooldown decreased by 2 turns. S3 Ruinous Retribution (+2 Souls, 5-turn cooldown, −1 → 4): AoE dark-energy spear, 100% Provoke for 1 turn, then Immunity to all allies for 2 turns and Barrier to the caster for 2 turns; damage and barrier ∝ max Health. First-fight starting cooldowns: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

7 / 4

## Unsure

- First-fight (opening) cooldowns of Steel Cloudburst and Ruinous Retribution
- Non-awakened Steel Cloudburst HP≤50% chance bonus (replaced by awaken 100% Decrease Attack)
- Exact Barrier strength formula beyond “proportional to max Health”

## Object

```ts
{
  id: "cecilia",
  name: "Cecilia",
  short: "Cecilia",
  element: "fire",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["tank", "strip", "control", "cleave"],
  tags: ["aoe", "strip", "defbreak", "provoke", "soulburn", "barrier", "immunity"],
  effects: ["buff-dispel"],
  buffs: ["Immunity", "Barrier"],
  debuffs: ["Decrease Defense", "Decrease Attack", "Provoke"],
  uniqueEffects: [
    {
      name: "Deliverance conditional",
      scope: "self-only",
      tooltip: "When the target is inflicted with Decrease Attack, effect chance increases by 25%. Damage dealt increases proportional to the caster's max Health."
    },
    {
      name: "Steel Cloudburst",
      scope: "team-wide",
      tooltip: "Attacks all enemies with a magical spear, with a 100% chance to Decrease Attack for 2 turns, before dispelling one buff. Damage dealt increases proportional to the caster's max Health. (Awakened.)"
    }
  ],
  kit: "S1 Deliverance (+1 Soul): Decrease Defense chance (+25% if target has Decrease Attack); damage ∝ max HP. S2 Steel Cloudburst awakened (+2 Souls, 3 CD): AoE 100% Decrease Attack + dispel 1; Soulburn (−10) CD −2. S3 Ruinous Retribution (+2 Souls, 5→4 CD): AoE Provoke 1 turn + Immunity allies 2 turns + self Barrier 2 turns; scales with max HP.",
  defense: 7,
  offense: 4,
  baseSpeed: 106,
  verified: false
}
```
