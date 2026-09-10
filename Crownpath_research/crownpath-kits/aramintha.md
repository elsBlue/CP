# Aramintha

Short: Aramintha

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (kit per post–2023-11-23 balance; not listed in later 2025–2026 hero balance previews checked)

## Roles

cleave, strip, control, dps

## Tags

aoe, strip, unhealable, stun, soulburn, cr-push, barrier, ignore-er

## Effects

buff-dispel, increase-cr

## Buffs

Increase Attack, Barrier

## Debuffs

Burn, Unhealable, Stun

## Unique effects

### Catalyst CR

Self-only. For each Unhealable inflicted, increases Combat Readiness of the caster by 30%.

### Scarlet Tear — Ignite detonation (Exclusive Equipment option)

Self-only. After using Ignite, at the end of the turn, detonates burn effects inflicted on the target. (Optional EE; not innate post–2023-11-23.)

## Kit

S1 Ignite (+1 Soul): attacks one enemy with an explosion of flames, chance to Burn for 1 turn (50% on epic7db skill card; further effect-chance enhancements). No innate detonation (moved to Exclusive Equipment option). S2 Catalyst (+2 Souls, 5-turn cooldown, −1 → 4): attacks all enemies, dispels two buffs, inflicts Unhealable for 2 turns, then grants Increase Attack to all allies for 2 turns; +30% caster CR per Unhealable inflicted. S3 Fire Pillar (+2 Souls, 5-turn cooldown, −1 → 4): attacks all enemies; official post-2023-11-23 base: 100% chance each to inflict two Burns for 2 turns and 70% chance to Stun for 1 turn (epic7db card shows 170% — see Unsure); grants Barrier to the caster for 2 turns (strength ∝ Attack). Soulburn (−20 Souls): ignores Effect Resistance. Extra Attack vs Dual Attack: none.

## Defense / offense

3 / 7

## Unsure

- First-fight (opening) cooldowns of Catalyst and Fire Pillar
- Fire Pillar effect chances as displayed fully enhanced (epic7db 170%) vs official base 100%/70%
- Exact Exclusive Equipment Catalyst line text after CR +5% was moved to base kit
- Whether Ignite burn duration on fully awakened journal is 1 turn only (current card) vs older 2-turn awaken scrapes

## Object

```ts
{
  id: "aramintha",
  name: "Aramintha",
  short: "Aramintha",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "strip", "control", "dps"],
  tags: ["aoe", "strip", "unhealable", "stun", "soulburn", "cr-push", "barrier", "ignore-er"],
  effects: ["buff-dispel", "increase-cr"],
  buffs: ["Increase Attack", "Barrier"],
  debuffs: ["Burn", "Unhealable", "Stun"],
  uniqueEffects: [
    {
      name: "Catalyst CR",
      scope: "self-only",
      tooltip: "For each Unhealable inflicted, increases Combat Readiness of the caster by 30%."
    },
    {
      name: "Scarlet Tear Ignite detonation",
      scope: "self-only",
      tooltip: "After using Ignite, at the end of the turn, detonates burn effects inflicted on the target. (Exclusive Equipment option.)"
    }
  ],
  kit: "S1 Ignite (+1 Soul): Burn chance (1 turn); detonate optional via EE. S2 Catalyst (+2 Souls, 5→4 CD): AoE dispel 2 + Unhealable 2 turns + Increase Attack allies 2 turns; +30% CR per Unhealable. S3 Fire Pillar (+2 Souls, 5→4 CD): AoE two Burns + Stun + self Barrier (∝ Atk); Soulburn (−20) ignore ER. Official base chances 100%/70%; epic7db may show enhanced.",
  defense: 3,
  offense: 7,
  baseSpeed: 106,
  verified: false
}
```
