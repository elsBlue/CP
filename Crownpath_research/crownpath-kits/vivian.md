# Vivian

Short: Vivian

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2026-09-04 (no Vivian skill balance listing found in 2025–2026 STOVE previews checked; kit per epic7db)

## Roles

aoe-cleave, team-immunity, attack-buff, cr-battery

## Tags

single-target, aoe, cr-push, immunity, increase-attack, increase-attack-greater, soulburn, exclusive-equipment, kill-retrigger

## Effects

s1-cr-push, awaken-s1-crit-extra-cr, s2-aoe-retrigger-on-kill, soulburn-s2-damage, s3-team-immunity-atk, ee-cr-or-cleanse

## Buffs

Immunity, Increase Attack, Increase Attack (Greater) (self on S3)

## Debuffs

(none baseline)

## Unique effects

### Thunder God's Cry retrigger

Enemies. AoE thunderstorm; if an enemy is defeated, activate Thunder God's Cry again (up to 3 times); subsequent activations deal decreased damage.

## Kit

S1 Vitality Drain (+1 Soul): attack; caster CR +15% (enhanceable); awaken: crit grants additional CR +10% (base tables vary — epic7db awaken text shows +10% base path; enhanced S1 CR path preferred). S2 Thunder God's Cry (+2 Souls, 2 CD): AoE; retrigger on kill up to 3; Soulburn (−10): increases damage. S3 Mana Amplification (+3 Souls, 6→5 CD): Immunity all allies 3 turns; Increase Attack (Greater) self 3 turns; Increase Attack other allies 3 turns. EE True Sight: S1 extra CR +5%; or S3 caster CR +50%; or S3 dispel 1 debuff all allies first. RGB Vivian.

## Defense / offense

4 / 8

## Unsure

- Exact decreased damage % on subsequent Thunder God's Cry activations
- Exact awaken S1 CR wording vs enhance path (epic7db awaken shows older +10% base)
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "vivian",
  name: "Vivian",
  short: "Vivian",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-cleave", "team-immunity", "attack-buff", "cr-battery"],
  tags: ["single-target", "aoe", "cr-push", "immunity", "increase-attack", "increase-attack-greater", "soulburn", "exclusive-equipment", "kill-retrigger"],
  effects: ["s1-cr-push", "awaken-s1-crit-extra-cr", "s2-aoe-retrigger-on-kill", "soulburn-s2-damage", "s3-team-immunity-atk", "ee-cr-or-cleanse"],
  buffs: ["Immunity", "Increase Attack", "Increase Attack (Greater)"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Thunder God's Cry retrigger",
      scope: "enemies",
      tooltip: "On kill, retrigger AoE up to 3 times with decreased damage."
    }
  ],
  kit: "S1: CR push (awaken crit bonus). S2 AoE retrigger on kill; Soulburn dmg. S3: team Immunity + Atk (Greater self). EE options.",
  defense: 4,
  offense: 8,
  baseSpeed: 111,
  verified: false
}
```
