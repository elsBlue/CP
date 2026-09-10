# Ram

Short: Ram

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (no Ram hero skill balance listing found in 2025–2026 STOVE previews checked; kit per epic7db — Re:Zero limited)

## Roles

single-target-nuke, defense-break, attack-down, cr-immune

## Tags

single-target, aoe-soulburn, decrease-attack, decrease-defense, increase-attack-greater, passive-attack, cr-decrease-resist, soulburn

## Effects

s1-atk-down-buffed-bonus, soulburn-aoe-no-dual, s2-passive-atk30-cr-immune, s3-def-break, awaken-s3-atk-greater

## Buffs

Increase Attack (Greater) (awakened S3)

## Debuffs

Decrease Attack, Decrease Defense

## Unique effects

### What Are You Looking At?

Self. Attack +30%. Reduces the effect of decreased Combat Readiness debuffs inflicted on the caster by 100% (base). Skill enhance further tunes CR-decrease reduction — exact enhanced values UNSURE (epic7db display ambiguous).

## Kit

S1 How Boring. (+1 Soul): attack; 75% Decrease Attack 1 turn (+25% chance if caster buffed); Soulburn (−10): AoE instead (no Dual Attack). S2 What Are You Looking At? (passive): Atk +30%; CR-decrease debuff effects reduced 100%. S3 El Fura (+3 Souls, 5→4 CD): ST Decrease Defense 2 turns; awaken also Increase Attack (Greater) self 2 turns. Limited collab Mage (Re:Zero).

## Defense / offense

2 / 8

## Unsure

- Exact enhanced CR-decrease reduction beyond base 100%
- Exact S3 damage multipliers / Greater Atk value
- First-fight opening S3 cooldown
- Whether any 2025–2026 silent tooltip fixes changed numbers (none found)

## Object

```ts
{
  id: "ram",
  name: "Ram",
  short: "Ram",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["single-target-nuke", "defense-break", "attack-down", "cr-immune"],
  tags: ["single-target", "aoe-soulburn", "decrease-attack", "decrease-defense", "increase-attack-greater", "passive-attack", "cr-decrease-resist", "soulburn"],
  effects: ["s1-atk-down-buffed-bonus", "soulburn-aoe-no-dual", "s2-passive-atk30-cr-immune", "s3-def-break", "awaken-s3-atk-greater"],
  buffs: ["Increase Attack (Greater)"],
  debuffs: ["Decrease Attack", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "What Are You Looking At?",
      scope: "self",
      tooltip: "Atk +30%; CR-decrease debuff effects reduced 100% (enhanced values UNSURE)."
    }
  ],
  kit: "S1: Atk down (better if buffed); Soulburn AoE. S2: +30% Atk; CR-decrease resist. S3 El Fura: Def break; awaken Atk (Greater). Limited Re:Zero.",
  defense: 2,
  offense: 8,
  baseSpeed: 106,
  verified: false
}
```
