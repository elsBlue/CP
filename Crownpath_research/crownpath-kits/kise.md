# Kise

Short: Kise

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 116

Patch / date used: 2026-09-04 (no RGB Kise hero skill balance listing found in 2025–2026 STOVE previews checked; Judge Kise patches do not apply); kit per epic7db 2026-09-04

## Roles

buffed-target-dps, aoe-penetrate, stealth, skill-cooldown-push

## Tags

single-target, aoe, stealth, barrier, cr-push, penetrate, skill-cooldown-increase, soulburn, damage-vs-buffed

## Effects

damage-amp-vs-buffed, aoe-penetrate-bonus-when-stealthed, stealth-barrier-cr-push, awaken-skill-cd-increase-twice, soulburn-more-damage, hp-ratio-scaling-s3

## Buffs

Stealth, Barrier

## Debuffs

(none baseline; awaken S3 increases skill cooldowns)

## Unique effects

### Nocturne (awakened)

Target + self. Attack; increase target skill cooldowns by 1 turn twice (awaken); grant Stealth + Barrier 2 turns ∝ Attack; caster CR +50%; damage ∝ caster current Health ratio.

### Dark Scar stealth penetrate

Targets (AoE). Penetrate Defense 30%, + additional 30% when caster is stealthed.

## Kit

S1 Full Moon Scythe (+1 Soul): attack; damage +70% if target is buffed. Soulburn (−10): increases damage dealt. S2 Dark Scar (+2 Souls, 4→3 CD): AoE; 30% penetrate (+30% if stealthed). S3 Nocturne (+3 Souls, 5→4 CD): attack; Stealth + Barrier 2 turns; CR +50%; damage ∝ current Health ratio; awaken also skill cooldown +1 twice on target. Exact barrier coefficient and Health-ratio damage formula: UNSURE. First-fight opening CD: UNSURE. EE exists (Moon's Judgment) — optional CR on S1 / damage on S2 / buff-duration cut on S3.

## Defense / offense

3 / 8

## Unsure

- Exact barrier strength vs Attack
- Exact current-Health-ratio damage coefficient on Nocturne
- Whether “increase skill cooldowns by 1 turn twice” is two separate applications
- First-fight (opening) cooldowns

## Object

```ts
{
  id: "kise",
  name: "Kise",
  short: "Kise",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["buffed-target-dps", "aoe-penetrate", "stealth", "skill-cooldown-push"],
  tags: ["single-target", "aoe", "stealth", "barrier", "cr-push", "penetrate", "skill-cooldown-increase", "soulburn", "damage-vs-buffed"],
  effects: ["damage-amp-vs-buffed", "aoe-penetrate-bonus-when-stealthed", "stealth-barrier-cr-push", "awaken-skill-cd-increase-twice", "soulburn-more-damage", "hp-ratio-scaling-s3"],
  buffs: ["Stealth", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Nocturne",
      scope: "target",
      tooltip: "Stealth + Barrier + CR +50%; damage ∝ current HP ratio; awaken skill CD +1 twice."
    }
  ],
  kit: "S1 Full Moon Scythe (+1 Soul): +70% dmg if target buffed; Soulburn more damage. S2 Dark Scar (+2 Souls, 4→3 CD): AoE 30% penetrate (+30% if stealthed). S3 Nocturne (+3 Souls, 5→4 CD): Stealth+Barrier+CR; awaken CD push ×2; HP-ratio damage.",
  defense: 3,
  offense: 8,
  baseSpeed: 116,
  verified: false
}
```
