# Baal & Sezan

Short: Baal

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (skills unchanged in 2026-01-08 balance; Exclusive Equipment effect 3 only: Last Requiem effect chance +5% → +15%)

## Roles

cleave, control, dps

## Tags

aoe, unhealable, defbreak, soulburn, poison

## Effects

increase-cr, ally-cd-decrease, buff-dispel

## Buffs

none

## Debuffs

Poison, Unhealable, Decrease Speed, Decrease Defense

## Unique effects

### Dark Cloud scaling / Last Requiem reset

Self-only. Dark Cloud deals damage proportional to the number of debuffs inflicted on the enemy. When the enemy is defeated by this attack, the cooldown for Last Requiem is reset.

### Cape of Selfish Interest — Last Requiem effect chance (Exclusive Equipment option 3)

Self-only. Increases all of Last Requiem's effect chances by **15%** (as of 2026-01-08; was 5%). epic7db EE card may still show 5%.

### Cape of Selfish Interest — Last Requiem strip (Exclusive Equipment option)

Team-wide (enemies). Dispels one buff from all enemies when using Last Requiem.

## Kit

S1 Ghost Haunt (+1 Soul): summons an evil spirit to attack two enemies, chance to Poison for 2 turns (50% on skill card; enhancements may raise chance). S2 Dark Cloud (+2 Souls, 3-turn cooldown, −1 → 2): attacks all enemies; damage scales with number of debuffs on the target; if this attack defeats the enemy, Last Requiem cooldown is reset. Soulburn (−10 Souls): increases damage dealt. S3 Last Requiem (awakened, +3 Souls, 4-turn cooldown, −1 → 3): attacks all enemies with Strike Magic; chance each to inflict Unhealable, Decrease Defense, and Decrease Speed for 2 turns (awakened adds Decrease Defense; base awaken text 65% each before effect-chance enhancements; epic7db main card shows 85%). First-fight starting cooldowns: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

2 / 7

## Unsure

- First-fight (opening) cooldowns of Dark Cloud and Last Requiem
- Exact fully enhanced Last Requiem effect chances (65% awaken base + skill enhancements ± EE +15%)
- Whether epic7db EE page has updated the +15% text yet

## Object

```ts
{
  id: "baal-and-sezan",
  name: "Baal & Sezan",
  short: "Baal",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "control", "dps"],
  tags: ["aoe", "unhealable", "defbreak", "soulburn", "poison"],
  effects: ["ally-cd-decrease", "buff-dispel"],
  buffs: [],
  debuffs: ["Poison", "Unhealable", "Decrease Speed", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Dark Cloud",
      scope: "self-only",
      tooltip: "Dealing damage proportional to the number of debuffs inflicted on the enemy. When the enemy is defeated by this attack, the cooldown for Last Requiem is reset."
    },
    {
      name: "Cape of Selfish Interest Last Requiem chances",
      scope: "self-only",
      tooltip: "Increases all of Last Requiem's effect chances by 15% (2026-01-08)."
    },
    {
      name: "Cape of Selfish Interest Last Requiem strip",
      scope: "team-wide",
      tooltip: "Dispels one buff from all enemies when using Last Requiem."
    }
  ],
  kit: "S1 Ghost Haunt (+1 Soul): hit 2 enemies, Poison chance. S2 Dark Cloud (+2 Souls, 3→2 CD): AoE damage ∝ debuff count; kill resets Last Requiem CD; Soulburn (−10) more damage. S3 Last Requiem awakened (+3 Souls, 4→3 CD): AoE Unhealable + Decrease Defense + Decrease Speed (chances enhanced; EE +15% as of 2026-01-08).",
  defense: 2,
  offense: 7,
  baseSpeed: 106,
  verified: false
}
```
