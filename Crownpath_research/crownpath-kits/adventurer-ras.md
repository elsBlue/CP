# Adventurer Ras

Short: ARas

Element: Fire

Class: Knight

Rarity: 3

Tier: niche

Base Speed: 95

Patch / date used: 2026-09-04 (kit last officially changed 2025-02-13 balance; not listed in later 2025–2026 balance previews checked)

## Roles

tank, strip, cleave, healer

## Tags

dual-attack, strip, soulburn, barrier, defbreak, immunity, cr-push

## Effects

buff-dispel, dual-attack, increase-cr

## Buffs

Increase Defense, Immunity, Barrier

## Debuffs

Decrease Defense

## Unique effects

### Solitude Rune (specialty, max)

Team-wide (back-row ally). After the ally in the back row is attacked, when Health is 50% or less, grants a barrier to the target for 3 turns. Barrier strength is equivalent to 40% of the caster's max Health. Can only be activated once per battle.

### Wedge Rune (specialty, max)

Team-wide (caster + highest-Attack ally except caster). When using Command Strike, has a 100% chance to grant Immunity to the caster and the ally with the highest Attack except for the caster for 2 turns.

### Speed Rune (specialty, max)

Self-only application on target via Command Strike. When using Command Strike, has an 85% chance to decrease Defense of the target for 1 turn.

### Order Rune (specialty, max)

Self-only. When using X-Slash, has a 100% chance to increase Combat Readiness of the caster by 10%.

### Sun Rune (specialty, max)

Self-only. When using Purifying Flame, has a 100% chance to increase Combat Readiness of the caster by 20%.

### Courage / Health / Obscurity / Achievement / Fruition Runes (specialty)

Self-only or team-wide passives (stat). Courage: +6 Speed (max). Health: increases Health (max ~20%). Obscurity: +25% Effectiveness (max). Achievement: +5% Effect Resistance of all allies (max). Fruition: increases damage dealt by X-Slash by 10% (max).

## Kit

S1 X-Slash (+1 Soul, awakened): attacks one enemy with a sword, 75% chance to dispel a buff; damage increases proportional to max Health. Order Rune (max) may push caster CR by 10%. S2 Command Strike (+2 Souls, 3-turn cooldown): attacks one enemy repeatedly, then triggers a Dual Attack from the ally with the highest Attack (true Dual Attack, not Extra Attack). Soulburn (−10 Souls): skill cooldown decreased by 2 turns. With specialty max: Speed Rune 85% Decrease Defense 1 turn; Wedge Rune 100% Immunity on caster + highest-Attack ally for 2 turns. S3 Purifying Flame (+2 Souls, 4-turn cooldown): attacks all enemies with a swordstorm, recovers the caster’s Health, and grants Increase Defense to all allies for 2 turns; heal and damage scale with max Health. Sun Rune (max) may push caster CR by 20%. First-fight starting cooldowns: UNSURE. 2025-02-13 increased S1/S3 damage and S3 healing (exact multipliers UNSURE).

## Defense / offense

8 / 3

## Unsure

- First-fight (opening) cooldowns of Command Strike and Purifying Flame
- Exact S1/S3 damage and S3 heal multipliers after 2025-02-13 (“Increased” only in notes)
- In-game buff string exact casing: “Increase Defense” vs “Increased Defense”

## Object

```ts
{
  id: "adventurer-ras",
  name: "Adventurer Ras",
  short: "ARas",
  element: "fire",
  class: "knight",
  tier: "niche",
  rarity: 3,
  roles: ["tank", "strip", "cleave", "healer"],
  tags: ["dual-attack", "strip", "soulburn", "barrier", "defbreak", "immunity", "cr-push"],
  effects: ["buff-dispel", "dual-attack", "increase-cr"],
  buffs: ["Increase Defense", "Immunity", "Barrier"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Solitude Rune",
      scope: "team-wide",
      tooltip: "After the ally in the back row is attacked, when Health is 50% or less, grants a barrier to the target for 3 turns. Barrier strength is equivalent to 40% of the caster's max Health. Can only be activated once per battle."
    },
    {
      name: "Wedge Rune",
      scope: "team-wide",
      tooltip: "When using Command Strike, has a 100% chance to grant Immunity to the caster and the ally with the highest Attack except for the caster for 2 turns."
    },
    {
      name: "Speed Rune",
      scope: "self-only",
      tooltip: "When using Command Strike, has an 85% chance to decrease Defense of the target for 1 turn."
    },
    {
      name: "Order Rune",
      scope: "self-only",
      tooltip: "When using X-Slash, has a 100% chance to increase Combat Readiness of the caster by 10%."
    },
    {
      name: "Sun Rune",
      scope: "self-only",
      tooltip: "When using Purifying Flame, has a 100% chance to increase Combat Readiness of the caster by 20%."
    }
  ],
  kit: "S1 X-Slash (+1 Soul, awakened): attacks one enemy with a sword, 75% chance to dispel a buff; damage increases proportional to max Health. S2 Command Strike (+2 Souls, 3-turn cooldown): Dual Attack from highest-Attack ally; Soulburn (−10 Souls) cooldown −2; specialty Speed Rune 85% Decrease Defense 1 turn; Wedge Rune Immunity caster + highest-Attack ally 2 turns. S3 Purifying Flame (+2 Souls, 4-turn cooldown): AoE swordstorm, self heal, Increase Defense all allies 2 turns; scales with max Health. First-fight CDs UNSURE.",
  defense: 8,
  offense: 3,
  baseSpeed: 95,
  verified: false
}
```
