# Rem

Short: Rem

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2026-09-04 (no Rem hero skill balance listing found in 2025–2026 STOVE previews checked; Re:Zero collab limited Ice; kit per epic7db 2026-09-04)

## Roles

counter-aoe, demon-mode, defense-break, unhealable, hit-chance-down

## Tags

single-target, aoe, decrease-defense, decrease-hit-chance, increase-attack, unhealable, buff-duration-cut, counter, demon-mode, soulburn, collab, limited

## Effects

s1-def-break-demon-extra-attack, soulburn-100-def-break, death-demon-mode-once-5t, ally-hit-iron-strike-counter, s3-self-atk-aoe-hit-chance-down, awaken-s3-cr-50

## Buffs

Increase Attack, Demon Mode

## Debuffs

Decrease Defense, Decrease Hit Chance, Unhealable

## Unique effects

### Demon Mode

Self. Granted 2 turns when somebody dies (dispels all debuffs from caster first); once every 5 turns. While Demon Mode: S1 grants an extra attack with the same skill.

### Iron Strike

Enemies. Counter when an ally except caster is attacked (20%+enhances): AoE; decrease buff durations by 1; Unhealable 1 turn. Priority over basic-skill counter.

## Kit

S1 Leave it to Me. (+1 Soul): 50% Decrease Defense 2 turns; if Demon Mode → extra attack with same skill. Soulburn (−10): 100% Decrease Defense. S2 A Maid's Pride (passive): on any death → cleanse self + Demon Mode 2 turns (once/5 turns); when ally except self attacked → chance Iron Strike counter. S3 I Will Punish You! (+3 Souls, 5→4 CD): Increase Attack self 3 turns; AoE; Decrease Hit Chance 2 turns; awaken also caster CR +50%. Exact fully-enhanced Iron Strike chance: UNSURE (20% + enhance). First-fight opening CD: UNSURE.

## Defense / offense

4 / 7

## Unsure

- Fully enhanced Iron Strike counter chance
- Exact Demon Mode internal once-per-5-turns timing vs battle start
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "rem",
  name: "Rem",
  short: "Rem",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["counter-aoe", "demon-mode", "defense-break", "unhealable", "hit-chance-down"],
  tags: ["single-target", "aoe", "decrease-defense", "decrease-hit-chance", "increase-attack", "unhealable", "buff-duration-cut", "counter", "demon-mode", "soulburn", "collab", "limited"],
  effects: ["s1-def-break-demon-extra-attack", "soulburn-100-def-break", "death-demon-mode-once-5t", "ally-hit-iron-strike-counter", "s3-self-atk-aoe-hit-chance-down", "awaken-s3-cr-50"],
  buffs: ["Increase Attack", "Demon Mode"],
  debuffs: ["Decrease Defense", "Decrease Hit Chance", "Unhealable"],
  uniqueEffects: [
    {
      name: "Demon Mode",
      scope: "self",
      tooltip: "On death (once/5 turns): cleanse self + Demon Mode 2 turns; enables S1 extra attack."
    },
    {
      name: "Iron Strike",
      scope: "enemies",
      tooltip: "Ally-hit counter AoE: −1 buff duration + Unhealable 1 turn."
    }
  ],
  kit: "S1: Def break; Demon Mode → extra S1; Soulburn (−10) 100% Def break. S2: death → Demon Mode (once/5t); ally-hit Iron Strike counter. S3: self Atk 3t + AoE Hit Chance down; awaken CR +50%.",
  defense: 4,
  offense: 7,
  baseSpeed: 102,
  verified: false
}
```
