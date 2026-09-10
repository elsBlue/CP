# Elphelt

Short: Elphelt

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (last major skill rework found ~2021-04 Guilty Gear patch; no 2025–2026 skill listing found)

## Roles

control, strip, dps

## Tags

seal, strip, soulburn, defbreak, extra-turn, ignore-er, aoe

## Effects

buff-dispel, extra-turn

## Buffs

Increase Attack

## Debuffs

Seal, Sleep, Decrease Defense

## Unique effects

### Judge Better Half sleep payoff

Team-wide (enemies). When the enemy is asleep, decreases Defense of all enemies for 2 turns. Damage dealt increases proportional to the number of debuffs inflicted on the enemy.

### Magnum Wedding (awakened)

Self-only then attack. Dispels two buffs from the enemy before shooting a bullet of love, with chance to Sleep and Decrease Defense for 2 turns (75% awaken base; main card shows 100% Sleep when fully enhanced). Grants the caster an Extra Turn.

## Kit

S1 Barrage (+1 Soul): barrage of bullets, chance to Seal (unable to be buffed) for 1 turn (75% on card; enhancements raise chance). S2 Judge Better Half (+2 Souls, 4-turn cooldown): cake trap attack; Increase Attack all allies 2 turns; if target is asleep, Decrease Defense all enemies 2 turns; damage ∝ number of debuffs on target. S3 Magnum Wedding (awakened, +2 Souls, 5-turn cooldown, −1 → 4): dispel two buffs, Sleep (+ Decrease Defense awakened) for 2 turns, Extra Turn. Soulburn (−20 Souls): ignores Effect Resistance. First-fight starting cooldowns: UNSURE. Extra Attack vs Dual Attack: Extra Turn on S3 (not Dual Attack).

## Defense / offense

2 / 6

## Unsure

- First-fight (opening) cooldowns of Judge Better Half and Magnum Wedding
- Exact fully enhanced Sleep % (awaken 75% vs card 100%)
- In-game “unable to be buffed” vs Seal naming
- Full in-game name “Elphelt” vs “Elphelt Valentine”

## Object

```ts
{
  id: "elphelt",
  name: "Elphelt",
  short: "Elphelt",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["control", "strip", "dps"],
  tags: ["seal", "strip", "soulburn", "defbreak", "extra-turn", "ignore-er", "aoe"],
  effects: ["buff-dispel", "extra-turn"],
  buffs: ["Increase Attack"],
  debuffs: ["Seal", "Sleep", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Judge Better Half sleep payoff",
      scope: "team-wide",
      tooltip: "When the enemy is asleep, decreases Defense of all enemies for 2 turns. Damage dealt increases proportional to the number of debuffs inflicted on the enemy."
    },
    {
      name: "Magnum Wedding",
      scope: "self-only",
      tooltip: "Dispels two buffs from the enemy before shooting a bullet of love, chance to Sleep and Decrease Defense for 2 turns. Grants the caster an extra turn. (Awakened.)"
    }
  ],
  kit: "S1 Barrage (+1 Soul): Seal chance. S2 Judge Better Half (+2 Souls, 4 CD): Increase Attack allies 2 turns; if asleep, AoE Decrease Defense; damage ∝ debuff count. S3 Magnum Wedding awakened (+2 Souls, 5→4 CD): dispel 2, Sleep + Decrease Defense 2 turns, Extra Turn; Soulburn (−20) ignore ER.",
  defense: 2,
  offense: 6,
  baseSpeed: 109,
  verified: false
}
```
