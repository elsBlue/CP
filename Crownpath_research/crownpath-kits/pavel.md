# Pavel

Short: Pavel

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-04 (no RGB Pavel skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Commander Pavel; kit per epic7db)

## Roles

speed-scaling-cleave, aoe-nuke, single-target-nuke, miss-chance

## Tags

single-target, aoe, speed-scaling, decrease-hit-chance, attack-buff, soulburn, no-counter, exclusive-equipment, ignore-damage-share

## Effects

s1-miss-speed-scale, s2-aoe-speed-scale-no-counter, awaken-s2-self-atk, soulburn-extra-turn, s3-st-speed-scale-ignore-share, ee-cleanse-or-atk-or-nullifier

## Buffs

Increase Attack (awakened S2 self; EE option ally)

## Debuffs

Decrease Hit Chance

## Unique effects

### Destructive Pursuit ignore share

Target (non-Elite/Boss). When target is not Elite or Boss, ignore damage sharing; damage ∝ caster Speed.

## Kit

S1 Hurricane Sword (+1 Soul): attack; 75% Decrease Hit Chance 1 turn (enhanceable); dmg ∝ Speed. S2 Storm Bullet (+1 Soul, 4→3 CD): AoE; dmg ∝ Speed; cannot trigger counter; awaken self Increase Attack 2 turns; Soulburn (−20): extra turn. S3 Destructive Pursuit (+2 Souls, 5→4 CD): ST; ignore damage share vs non-Elite/Boss; dmg ∝ Speed. EE Silver Belt of Determination: Storm Bullet self cleanse 2 debuffs; or Atk buff highest-Atk ally; or Skill Nullifier once after Destructive Pursuit. RGB Pavel only (≠ Commander Pavel).

## Defense / offense

2 / 8

## Unsure

- Exact Speed damage coefficients
- First-fight opening cooldowns
- Whether ignore-share also applies to Elites in some modes: omit / UNSURE beyond stated non-Elite/Boss

## Object

```ts
{
  id: "pavel",
  name: "Pavel",
  short: "Pavel",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["speed-scaling-cleave", "aoe-nuke", "single-target-nuke", "miss-chance"],
  tags: ["single-target", "aoe", "speed-scaling", "decrease-hit-chance", "attack-buff", "soulburn", "no-counter", "exclusive-equipment", "ignore-damage-share"],
  effects: ["s1-miss-speed-scale", "s2-aoe-speed-scale-no-counter", "awaken-s2-self-atk", "soulburn-extra-turn", "s3-st-speed-scale-ignore-share", "ee-cleanse-or-atk-or-nullifier"],
  buffs: ["Increase Attack"],
  debuffs: ["Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Destructive Pursuit ignore share",
      scope: "target",
      tooltip: "Non-Elite/Boss: ignore damage share; dmg ∝ Speed."
    }
  ],
  kit: "S1: Miss chance; dmg∝SPD. S2 AoE no-counter; awaken Atk; Soulburn extra turn. S3: ignore share (non-boss); dmg∝SPD. EE options. RGB ≠ Commander Pavel.",
  defense: 2,
  offense: 8,
  baseSpeed: 120,
  verified: false
}
```
