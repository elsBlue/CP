# Celine

Short: Celine

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2026-09-04 (no 2025–2026 STOVE listing for RGB Celine; Spirit Eye Celine had 2025-04-10 changes — different hero. Kit per epic7db)

## Roles

dps, anti-nonattack, stealth

## Tags

stealth, counter-nonattack, ignore-element, cr-push, increase-evasion, barrier, ignore-damage-share, soulburn, lifesteal-awaken

## Effects

blink-on-nonattack, ignore-elemental-disadvantage, ignore-damage-sharing

## Buffs

Stealth, Increase Evasion, Barrier

## Debuffs

none

## Unique effects

### Intuition / Blink

Self / targets. Start of first battle: Stealth 2 turns. After an enemy uses a non-attack skill: dispel all debuffs from caster and attack a random enemy with Blink (ICD once every 2 turns). Blink (+10 Soul acquire): cut; caster CR +30%; unaffected by elemental disadvantage. EE: Stealth after Blink; or target highest Attack + damage.

### Thunderclap (awaken absorb)

Targets (single). Increase Evasion + Barrier (∝ Attack) on caster 2 turns; ignore damage sharing vs non-Elite/Boss. Awakened: also absorbs some damage dealt as Health. Soulburn (−10): increases damage.

## Kit

S1 Uppercut (+1 Soul): sheath attack; Stealth caster 1 turn. S2 Intuition (passive): battle-start Stealth 2 turns; enemy non-attack skill → cleanse self + Blink (random; CR +30%; ignore element; ICD 2 turns; +10 Souls). S3 Thunderclap (+2 Souls, 4→3 CD): Increase Evasion + Barrier 2 turns; ignore share non-boss; awaken lifesteal absorb. Soulburn (−10): more damage. Exact Barrier/absorb coefficients: UNSURE.

## Defense / offense

5 / 8

## Unsure

- Exact Barrier strength vs Attack and awaken absorb %
- Whether Blink target is truly random without EE (EE can force highest Attack)
- First-fight opening CD of Thunderclap
- No RGB Celine 2025–2026 STOVE listing found

## Object

```ts
{
  id: "celine",
  name: "Celine",
  short: "Celine",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "anti-nonattack", "stealth"],
  tags: ["stealth", "counter-nonattack", "ignore-element", "cr-push", "increase-evasion", "barrier", "ignore-damage-share", "soulburn", "lifesteal-awaken"],
  effects: ["blink-on-nonattack", "ignore-elemental-disadvantage", "ignore-damage-sharing"],
  buffs: ["Stealth", "Increase Evasion", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Blink",
      scope: "targets",
      tooltip: "On enemy non-attack skill (ICD 2 turns): cleanse self, hit (random), CR +30%, ignore element, +10 Souls."
    },
    {
      name: "Thunderclap",
      scope: "self",
      tooltip: "Evasion Up + Barrier ∝ Atk 2 turns; ignore share non-boss; awaken absorb HP; Soulburn more dmg."
    }
  ],
  kit: "S1 Uppercut (+1): Stealth 1t. S2 Intuition: open Stealth 2t; enemy non-attack → Blink (CR+30%, ignore element, ICD 2). S3 Thunderclap (+2, 4→3): Evasion+Barrier 2t; ignore share; awaken absorb; Soulburn (−10) more dmg. Barrier/absorb coeffs UNSURE.",
  defense: 5,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
