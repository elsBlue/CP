# Ilynav

Short: Ilynav

Element: Fire

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 103

Patch / date used: 2023-04-13 balance (STOVE; no 2025–2026 skill balance found for Covenant Ilynav — Empyrean Ilynav is a separate ML hero)

## Roles

bruiser, injury, aoe-support

## Tags

single-target, aoe, injury, hp-scaling, soulburn, immunity, crit-dmg-buff, no-dual

## Effects

injuries, additional-damage-from-injuries, max-hp-scaling

## Buffs

Increase Critical Hit Damage, Immunity

## Debuffs

Injury (max HP reduction)

## Unique effects

### Injuries (Punish / Repel)

Target. Severity scales with damage dealt. Each use of Punish or Repel decreases the target's max Health by up to 20%.

### Punish add-dmg

Self-only (on Punish). A successful attack deals additional damage equivalent to 50% of injuries inflicted on the target.

### Exclusive Equipment Bloody Jewel

Self-only options. Crit Rate (6–12%); Punish −1 CD; Repel grants Barrier ∝ max Health for 2 turns; or Repel increases caster Combat Readiness by 50%.

## Kit

S1 Rush (+1 Soul): spear attack; damage ∝ caster max Health; if not triggered by Dual Attack, 50% chance to use Punish instead of Rush; does not trigger Dual Attack. S2 Punish (+1 Soul, 4-turn cooldown, −1 → 3): pierce attack; inflict injuries; on successful attack, additional damage = 50% of injuries on target; damage ∝ max Health. Soulburn (−10 Souls): increase damage dealt. S3 Repel (awakened, +3 Souls, 5-turn cooldown, −1 → 4): AoE attack; inflict injuries; Increase Critical Hit Damage to all allies for 2 turns; Immunity to caster for 2 turns; damage ∝ max Health. First-fight opening cooldowns: UNSURE. Exact injury % of damage dealt: UNSURE.

## Defense / offense

6 / 7

## Unsure

- First-fight (opening) cooldowns of Punish and Repel
- Exact injury severity formula beyond “proportional to damage” / 20% max-HP cap per use
- Whether any stealth 2025–2026 number tweaks exist beyond Empyrean Ilynav notes (Covenant Ilynav not listed in 2025–2026 STOVE balance targets found)

## Object

```ts
{
  id: "ilynav",
  name: "Ilynav",
  short: "Ilynav",
  element: "fire",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "injury", "aoe-support"],
  tags: ["single-target", "aoe", "injury", "hp-scaling", "soulburn", "immunity", "crit-dmg-buff", "no-dual"],
  effects: ["injuries", "additional-damage-from-injuries", "max-hp-scaling"],
  buffs: ["Increase Critical Hit Damage", "Immunity"],
  debuffs: ["Injury"],
  uniqueEffects: [
    {
      name: "Injuries (Punish / Repel)",
      scope: "target",
      tooltip: "Severity scales with damage. Each Punish/Repel use decreases target max Health by up to 20%."
    },
    {
      name: "Punish add-dmg",
      scope: "self-only",
      tooltip: "Successful Punish deals additional damage equal to 50% of injuries on the target."
    }
  ],
  kit: "S1 Rush (+1 Soul): dmg ∝ max HP; 50% Punish instead if not Dual Attack; no Dual Attack. S2 Punish (+1 Soul, 4→3 CD): injuries + add-dmg 50% of injuries; Soulburn (−10) ↑ dmg. S3 Repel awakened (+3 Souls, 5→4 CD): AoE injuries + ally Increase Crit Damage 2 turns + self Immunity 2 turns; dmg ∝ max HP.",
  defense: 6,
  offense: 7,
  baseSpeed: 103,
  verified: false
}
```
