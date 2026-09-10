# Vildred

Short: Vildred

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 116

Patch / date used: 2026-09-04 (no RGB Vildred skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Arbiter Vildred; kit per epic7db)

## Roles

aoe-farmer, cleave, kill-reset-aoe

## Tags

single-target, aoe, speed-scaling, attack-buff, kill-trigger, soulburn, exclusive-equipment, cr-push

## Effects

s1-dual-target-speed-scale, s2-atk-on-kill-dancing-blade, awaken-s2-cr-on-kill, s3-aoe-speed-scale, soulburn-damage, ee-cr-or-dmg-or-cdmg

## Buffs

Increase Attack (on kill via passive)

## Debuffs

(none baseline)

## Unique effects

### Dancing Blade

Enemies. When an enemy is defeated by Sweep or Blade Ascent: Increase Attack caster 2 turns; activate Dancing Blade (+1 Soul) — AoE swordstorm. Awaken: also caster CR +20% on enemy defeated.

## Kit

S1 Sweep (+1 Soul): attack two enemies; dmg ∝ Speed. S2 Dancing Blade (passive): on kill from Sweep/Blade Ascent → Atk buff + AoE; awaken +CR 20% on kill. S3 Blade Ascent (+2 Souls, 5→4 CD): AoE; dmg ∝ Speed; Soulburn (−10): increases damage dealt. EE Blade Insignia: Dancing Blade extra CR +5% on kill; or Blade Ascent +10% damage; or Crit Damage buff 2 turns after Blade Ascent. RGB Vildred only (≠ Arbiter Vildred).

## Defense / offense

2 / 8

## Unsure

- Exact Speed damage coefficients
- Whether Dancing Blade AoE can chain further kills into another Dancing Blade in one sequence: UNSURE / omit procedural detail
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "vildred",
  name: "Vildred",
  short: "Vildred",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-farmer", "cleave", "kill-reset-aoe"],
  tags: ["single-target", "aoe", "speed-scaling", "attack-buff", "kill-trigger", "soulburn", "exclusive-equipment", "cr-push"],
  effects: ["s1-dual-target-speed-scale", "s2-atk-on-kill-dancing-blade", "awaken-s2-cr-on-kill", "s3-aoe-speed-scale", "soulburn-damage", "ee-cr-or-dmg-or-cdmg"],
  buffs: ["Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Dancing Blade",
      scope: "enemies",
      tooltip: "On kill from Sweep/Blade Ascent: self Atk 2 turns + AoE; awaken also CR +20%."
    }
  ],
  kit: "S1 Sweep: 2 targets dmg∝SPD. S2: kill → Atk + AoE (awaken CR). S3 Blade Ascent AoE∝SPD; Soulburn dmg. EE options. RGB ≠ Arbiter Vildred.",
  defense: 2,
  offense: 8,
  baseSpeed: 116,
  verified: false
}
```
