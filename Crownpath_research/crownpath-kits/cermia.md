# Cermia

Short: Cermia

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: 2026-09-04 (no Covenant Cermia skill balance listing found in 2025–2026; Lionheart Cermia patches do not apply)

## Roles

dps

## Tags

unhealable, soulburn, extra-turn, ignore-er

## Effects

extra-turn, ally-cd-decrease

## Buffs

Increase Attack (Greater)

## Debuffs

Unhealable

## Unique effects

### Hot Streak! (awakened)

Self-only. Shoots fire, granting the caster Increase Attack (Greater), resetting the cooldown of All-In!, and granting an extra turn.

### All-In! Defense penetration

Self-only. Attacks with a blazing inferno, penetrating Defense by 50%.

### Lucky Dice (Exclusive Equipment)

Self-only. Playing with Fire: 25% chance Extra Attack with same skill. Hot Streak!: Barrier 2 turns (∝ Attack). All-In!: when an enemy is defeated, Hot Streak! cooldown −2 turns.

## Kit

S1 Playing with Fire (+1 Soul): flaming sword attack, chance to Unhealable for 1 turn (55% on epic7x; enhancements raise chance). S2 Hot Streak! (awakened, +2 Souls, 5-turn cooldown, −1 → 4): grants Increase Attack (Greater), fully resets All-In! cooldown, and grants an Extra Turn (not Dual Attack). S3 All-In! (+3 Souls, 5-turn cooldown): blazing inferno with 50% Defense penetration. Soulburn (−10 Souls): increases damage dealt. First-fight starting cooldowns: UNSURE.

## Defense / offense

2 / 9

## Unsure

- First-fight (opening) cooldowns of Hot Streak! and All-In!
- Exact fully enhanced Unhealable chance on Playing with Fire
- epic7db timed out this pass — Speed 105 from epic7x awakened table (confirm vs journal if needed)

## Object

```ts
{
  id: "cermia",
  name: "Cermia",
  short: "Cermia",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps"],
  tags: ["unhealable", "soulburn", "extra-turn"],
  effects: ["extra-turn", "ally-cd-decrease"],
  buffs: ["Increase Attack (Greater)"],
  debuffs: ["Unhealable"],
  uniqueEffects: [
    {
      name: "Hot Streak!",
      scope: "self-only",
      tooltip: "Shoots fire, granting the caster Increase Attack (Greater), resetting the cooldown of All-In!, and granting an extra turn. (Awakened.)"
    },
    {
      name: "All-In! penetration",
      scope: "self-only",
      tooltip: "Attacks with a blazing inferno, penetrating Defense by 50%."
    }
  ],
  kit: "S1 Playing with Fire (+1 Soul): Unhealable chance. S2 Hot Streak! awakened (+2 Souls, 5→4 CD): Increase Attack (Greater) + All-In! full CD reset + Extra Turn. S3 All-In! (+3 Souls, 5 CD): 50% Defense pen; Soulburn (−10) more damage.",
  defense: 2,
  offense: 9,
  baseSpeed: 105,
  verified: false
}
```
