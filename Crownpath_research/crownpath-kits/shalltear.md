# Shalltear

Short: Shalltear

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 119

Patch / date used: release / collab kit (no 2025–2026 Shalltear skill balance found)

## Roles

dps, strip, injury, stealth, penetrate-utility

## Tags

single-target, injury, strip, stealth, damage-cap, soulburn, hit-chance, ignore-er-vs-lower-attack

## Effects

injury-on-s1, damage-received-cap, stealth-end-of-turn, attack-buff-when-healthy, ignore-er-if-higher-attack, awaken-100-hit-chance

## Buffs

Increase Attack, Stealth

## Debuffs

Injury (max-Health reduction)

## Unique effects

### True Vampire package

Self-only. Damage suffered in one attack does not exceed 51% of max Health (fully enhanced). At start of turn, if Health ≥60%: Increase Attack 1 turn. At end of turn: Stealth 1 turn.

### Purifying Javelin (awakened)

Targets. Dispel all buffs then attack. Ignores Effect Resistance of targets with Attack lower than caster. Awakened: Increases Hit Chance by 100% when using this skill.

### Summon Household injuries

Targets. Inflicts injuries (severity ∝ damage; decreases max Health by up to 10% per use). Soulburn (−10): increases damage and injuries decrease max Health by up to 20%.

## Kit

S1 Summon Household (+1 Soul): injuries (up to 10% max HP cut per use); Soulburn (−10) more damage + injury cap up to 20%. S2 True Vampire (passive): damage cap 51% max HP (enhanced); start of turn if HP ≥60% → Increase Attack 1 turn; end of turn Stealth 1 turn. S3 Purifying Javelin (awakened, +2 Souls, 4→3 CD): full dispel then attack; ignore ER vs lower-Attack targets; awaken +100% Hit Chance. Exact injury formulas, fully enhanced damage-cap path from base, first-fight S3 opening CD: UNSURE.

## Defense / offense

6 / 8

## Unsure

- Exact injury severity formula beyond printed caps
- Base (pre-skill-up) damage-received limit %
- Whether Increase Attack is Greater or normal
- First-fight (opening) cooldown of Purifying Javelin

## Object

```ts
{
  id: "shalltear",
  name: "Shalltear",
  short: "Shalltear",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "injury", "stealth"],
  tags: ["single-target", "injury", "strip", "stealth", "damage-cap", "soulburn", "hit-chance", "ignore-er-vs-lower-attack"],
  effects: ["injury-on-s1", "damage-received-cap", "stealth-end-of-turn", "attack-buff-when-healthy", "ignore-er-if-higher-attack", "awaken-100-hit-chance"],
  buffs: ["Increase Attack", "Stealth"],
  debuffs: ["Injury"],
  uniqueEffects: [
    {
      name: "True Vampire package",
      scope: "self-only",
      tooltip: "Damage cap 51% max HP (enhanced); if HP ≥60% at turn start → Increase Attack 1 turn; end of turn Stealth 1 turn."
    },
    {
      name: "Purifying Javelin (awakened)",
      scope: "targets",
      tooltip: "Full dispel then attack; ignore ER if caster Attack > target; awaken +100% Hit Chance."
    }
  ],
  kit: "S1 Summon Household (+1 Soul): injuries (≤10% max HP/use); Soulburn (−10) more dmg + ≤20% injury. S2 True Vampire: damage cap; healthy → Increase Attack; EOT Stealth. S3 Purifying Javelin awakened (+2 Souls, 4→3 CD): full dispel; ignore ER vs lower Atk; +100% Hit Chance.",
  defense: 6,
  offense: 8,
  baseSpeed: 119,
  verified: false
}
```
