# Luluca

Short: Luluca

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 108

Patch / date used: 2026-09-04 (no RGB Luluca hero skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Top Model Luluca; kit per epic7db 2026-09-04)

## Roles

aoe-defense-break, barrier, defense-buff, execute-scaling

## Tags

single-target, aoe, decrease-defense, increase-defense, barrier, lost-health-scaling, stack-damage, soulburn

## Effects

s1-def-break-lost-hp-scaling, s2-team-defense-barrier, soulburn-cd-reduce-2, s3-aoe-def-break, awaken-s3-damage-stacks-up-to-3, ee-extra-attack-or-atk-down

## Buffs

Increase Defense, Barrier

## Debuffs

Decrease Defense, Decrease Attack (EE option)

## Unique effects

### Wave of Vengeance stacks (awakened)

Self. Damage dealt by Wave of Vengeance increases every time the skill is used; stacks up to 3 times.

## Kit

S1 Wild Wave (+1 Soul): attack; 50% Decrease Defense 2 turns; damage ↑ ∝ enemy lost Health. S2 Rekos's Blessing (+2 Souls, 4→3 CD): Increase Defense + Barrier all allies 2 turns (barrier ∝ caster Attack). Soulburn (−20): all skill cooldowns −2. S3 Wave of Vengeance (+3 Souls, 5→4 CD): AoE; 100% Decrease Defense 2 turns; awaken damage stacks up to 3 uses. EE Communion Lotus: S1 +15% Def-break chance; or S1 35% extra attack once/turn; or S3 75% Decrease Attack 2 turns. Exact barrier coefficient: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

5 / 6

## Unsure

- Exact barrier strength vs Attack
- Exact per-stack S3 damage increase %
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "luluca",
  name: "Luluca",
  short: "Luluca",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-defense-break", "barrier", "defense-buff", "execute-scaling"],
  tags: ["single-target", "aoe", "decrease-defense", "increase-defense", "barrier", "lost-health-scaling", "stack-damage", "soulburn"],
  effects: ["s1-def-break-lost-hp-scaling", "s2-team-defense-barrier", "soulburn-cd-reduce-2", "s3-aoe-def-break", "awaken-s3-damage-stacks-up-to-3", "ee-extra-attack-or-atk-down"],
  buffs: ["Increase Defense", "Barrier"],
  debuffs: ["Decrease Defense", "Decrease Attack"],
  uniqueEffects: [
    {
      name: "Wave of Vengeance stacks",
      scope: "self",
      tooltip: "Awakened S3 damage increases each use; stacks up to 3. Exact % UNSURE."
    }
  ],
  kit: "S1 Wild Wave: Def break chance; dmg ∝ lost HP. S2 Rekos's Blessing: team Defense + Barrier ∝ ATK; Soulburn (−20) CD−2. S3 Wave of Vengeance: AoE Def break; awaken stacks dmg ×3 uses. EE: Def-break chance / extra attack / AoE Atk down.",
  defense: 5,
  offense: 6,
  baseSpeed: 108,
  verified: false
}
```
