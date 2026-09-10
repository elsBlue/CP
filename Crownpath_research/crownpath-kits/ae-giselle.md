# ae-GISELLE

Short: ae-GISELLE

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 103

Patch / date used: 2026-09-04 (no 2025–2026 balance listing found; aespa collab kit per epic7db treated as current)

## Roles

dps, buffer, single-target

## Tags

single-target, cr-push, increase-attack, cr-amplify, dispel, soulburn, ignore-damage-share, extra-turn

## Effects

current-hp-ratio-damage, cr-increase-amplify, ignore-damage-sharing

## Buffs

Increase Attack

## Debuffs

none

## Unique effects

### Linguistic Wisdom (CR amplify)

Self-only. Amplifies Combat Readiness increases the caster receives by 50%. At the start of the turn, 100% chance to dispel one debuff from the caster.

### Frame of Light (ignore share + awaken extra turn)

Targets (single). Grants Increase Attack 2 turns to caster and the ally with highest Attack except caster. When target is not Elite/Boss, ignores damage sharing. Awakened: when the enemy is defeated, grants an extra turn to the caster.

## Kit

S1 Surging Light (+1 Soul): attacks one enemy; increases CR of the ally with highest Attack except caster by 15% base (enhancements +2%/+3% → 20% fully enhanced). Damage increases proportional to the target's current Health ratio. Soulburn (−10): increases damage dealt. S2 Linguistic Wisdom (passive): amplifies CR increases caster receives by 50%; start of turn 100% dispel one debuff. S3 Frame of Light (+3 Souls, 5→4 CD): light attack; Increase Attack caster + highest-Atk ally 2 turns; ignore damage share vs non-Elite/Boss. Awaken: defeat → extra turn. Exact current-HP damage coefficient and whether S1 CR push can miss: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact S1 damage coefficient vs target current Health ratio
- Whether Frame of Light ignore-share also ignores damage cut (older guides said yes; epic7db lists damage sharing only)
- First-fight opening CD of Frame of Light
- No 2025–2026 STOVE balance listing found; kit may still match release

## Object

```ts
{
  id: "ae-giselle",
  name: "ae-GISELLE",
  short: "ae-GISELLE",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "buffer", "single-target"],
  tags: ["single-target", "cr-push", "increase-attack", "cr-amplify", "dispel", "soulburn", "ignore-damage-share", "extra-turn"],
  effects: ["current-hp-ratio-damage", "cr-increase-amplify", "ignore-damage-sharing"],
  buffs: ["Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Linguistic Wisdom",
      scope: "self",
      tooltip: "Amplifies CR increases caster receives by 50%. Start of turn: 100% dispel one debuff."
    },
    {
      name: "Frame of Light",
      scope: "targets",
      tooltip: "Atk Up self + highest-Atk ally 2 turns; ignore damage share vs non-Elite/Boss; awaken kill → extra turn."
    }
  ],
  kit: "S1 Surging Light (+1): CR push highest-Atk ally 15%→20%; dmg ∝ target current HP ratio. Soulburn (−10): more dmg. S2 Linguistic Wisdom: +50% CR amplify received; SoT 100% cleanse 1. S3 Frame of Light (+3, 5→4 CD): Atk Up self+ally 2t; ignore share non-boss; awaken kill→extra turn. Coefficients UNSURE.",
  defense: 3,
  offense: 7,
  baseSpeed: 103,
  verified: false
}
```
