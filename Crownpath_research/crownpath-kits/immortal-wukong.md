# Immortal Wukong

Short: Immortal Wukong

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: release kit + EE later added to Steeple — no 2025–2026 Immortal Wukong skill balance listing found; kit checked 2026-09-04 (epic7db slug immortal-king-wukong)

## Roles

bruiser, stun, barrier, crit-resist, penetration-resist

## Tags

single-target, aoe, barrier, stun, increase-attack, critical-hit-resistance, penetration-resistance, soulburn, stacking-buff

## Effects

s1-barrier, s1-turn-aoe, s2-crit-pen-resist, s2-stack-atk-spd-on-noncrit, s3-atk-stun, s3-atk-diff-damage, awaken-ignore-element

## Buffs

Barrier, Increase Attack; Attack/Speed stacks from passive (unique stacking)

## Debuffs

Stun

## Unique effects

### The Immortal One

Self. Critical Hit Resistance and Penetration Resistance +50% (enhanceable higher). When attacked and hit is non-critical: Attack and Speed +20% (stacks up to 3).

### Heavenly Fighter's Strike (Attack difference)

Self vs target. When caster Attack > target Attack, damage +∝ difference up to 70%. Awaken: unaffected by elemental disadvantage.

## Kit

S1 Swing (+1 Soul): attack with Ruyi Bang; Barrier 1 turn ∝ caster Attack; if used on caster's turn → becomes AoE (no Dual Attack). Soulburn (−10): increased damage. S2 The Immortal One (passive): Crit Resist + Pen Resist; non-crit taken → Atk/Spd stack up to 3. S3 Heavenly Fighter's Strike (+2 Souls, 4→3 CD): Increase Attack 2 turns; attack + Stun 1 turn; Atk-diff damage up to +70%; awaken ignore elemental disadvantage. EE exists (Steeple); exact current EE options: UNSURE this pass.

## Defense / offense

5 / 7

## Unsure

- Exact fully enhanced Crit Hit Resistance / Penetration Resistance %
- Exclusive Equipment option texts
- First-fight opening S3 cooldown
- Whether S1 AoE on-turn form keeps Barrier on self only

## Object

```ts
{
  id: "immortal-wukong",
  name: "Immortal Wukong",
  short: "Immortal Wukong",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "stun", "barrier", "crit-resist", "penetration-resist"],
  tags: ["single-target", "aoe", "barrier", "stun", "increase-attack", "critical-hit-resistance", "penetration-resistance", "soulburn", "stacking-buff"],
  effects: ["s1-barrier", "s1-turn-aoe", "s2-crit-pen-resist", "s2-stack-atk-spd-on-noncrit", "s3-atk-stun", "s3-atk-diff-damage", "awaken-ignore-element"],
  buffs: ["Barrier", "Increase Attack"],
  debuffs: ["Stun"],
  uniqueEffects: [
    {
      name: "The Immortal One",
      scope: "self",
      tooltip: "Crit Resist + Pen Resist. Non-crit taken → Atk/Spd +20% stacks (max 3)."
    },
    {
      name: "Heavenly Fighter's Strike",
      scope: "self",
      tooltip: "Damage +∝ caster>target Attack (cap 70%). Awaken: ignore elemental disadvantage."
    }
  ],
  kit: "S1 Swing: Barrier; on-turn AoE. S2 The Immortal One: Crit/Pen resist + stacks on non-crit. S3 Heavenly Fighter's Strike: Atk buff + Stun + Atk-diff damage. No 2025–2026 skill balance found.",
  defense: 5,
  offense: 7,
  baseSpeed: 102,
  verified: false
}
```
