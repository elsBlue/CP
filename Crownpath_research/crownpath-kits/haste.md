# Haste

Short: Haste

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-04 (last Covenant Haste skill changes found 2022–2023; no 2025–2026 skill listing found)

## Roles

cleave, strip, healer, dps

## Tags

aoe, strip, defbreak, soulburn, unhealable

## Effects

buff-dispel

## Buffs

none

## Debuffs

Decrease Defense, Bleed, Unhealable, Vampiric Touch

## Unique effects

### Vampiric Touch

Self-only application on target via Blood Rend (awakened). Exact journal tooltip: UNSURE beyond skill name; paired with Unhealable for 2 turns on Blood Rend.

### Vampiric Seal fewer-enemies amp

Self-only. When there are three or fewer enemies, damage dealt increases with fewer enemies. Cannot trigger a counterattack.

### Blood Choker (Exclusive Equipment)

Self-only. Envoy's Scythe: +15% Decrease Defense chance, or 75% Bleed 2 turns. Vampiric Seal: extend Bleed duration by 1 turn.

## Kit

S1 Envoy's Scythe (+1 Soul): enormous scythe, chance to Decrease Defense for 2 turns (50% on card; enhancements raise chance). S2 Blood Rend (awakened, +2 Souls, 3-turn cooldown): scythe attack; Unhealable + Vampiric Touch for 2 turns; recovers Health of all allies proportional to damage dealt. Soulburn (−10 Souls): increases damage dealt. S3 Vampiric Seal (+3 Souls, 5-turn cooldown, −1 → 4): AoE, dispel two buffs, then chance each to inflict two Bleeds for 2 turns (185% on card = fully enhanced); critical hit chance to Decrease Defense for 2 turns (185% on card); amp with fewer enemies; cannot counterattack. First-fight starting cooldowns: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

3 / 7

## Unsure

- First-fight (opening) cooldowns of Blood Rend and Vampiric Seal
- Exact Vampiric Touch tooltip text
- Base (pre-enhance) Bleed / crit-Defbreak chances vs 185% card display
- Whether S1 still steals buffs on any EE path only

## Object

```ts
{
  id: "haste",
  name: "Haste",
  short: "Haste",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "strip", "healer", "dps"],
  tags: ["aoe", "strip", "defbreak", "soulburn", "unhealable"],
  effects: ["buff-dispel"],
  buffs: [],
  debuffs: ["Decrease Defense", "Bleed", "Unhealable", "Vampiric Touch"],
  uniqueEffects: [
    {
      name: "Vampiric Touch",
      scope: "self-only",
      tooltip: "Inflicted by awakened Blood Rend for 2 turns (exact lasting-effect tooltip UNSURE)."
    },
    {
      name: "Vampiric Seal fewer-enemies amp",
      scope: "self-only",
      tooltip: "When there are three or fewer enemies, damage dealt increases with fewer enemies. This skill cannot trigger a counterattack."
    }
  ],
  kit: "S1 Envoy's Scythe (+1 Soul): Decrease Defense chance. S2 Blood Rend awakened (+2 Souls, 3 CD): Unhealable + Vampiric Touch 2 turns + AoE heal ∝ damage; Soulburn (−10) more damage. S3 Vampiric Seal (+3 Souls, 5→4 CD): AoE dispel 2 + two Bleeds; crit → Decrease Defense; fewer-enemy amp; no counter.",
  defense: 3,
  offense: 7,
  baseSpeed: 120,
  verified: false
}
```
