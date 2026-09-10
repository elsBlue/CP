# Shuna

Short: Shuna

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: release / collab kit (no 2025–2026 Shuna skill balance found)

## Roles

healer, barrier, strip, sleep, cleanse, redistribute

## Tags

single-target, aoe, heal, barrier, redistribute-health, strip, sleep, decrease-attack, max-health-scaling, soulburn, extra-attack

## Effects

max-health-scaled-damage-and-heal, health-redistribution, barrier-from-max-health, dual-strip-sleep-atk-down, soulburn-extra-attack

## Buffs

Barrier

## Debuffs

Sleep, Decrease Attack

## Unique effects

### Blooming Lotus (awakened)

Allies. Dispel debuffs from all allies (1 → 2 on awaken), redistribute Health so each ally has equal Health ratio, then Barrier 2 turns ∝ caster max Health.

### Sleeping Spell control

Targets (AoE). Dispel two buffs from all enemies, then Sleep 1 turn and Decrease Attack 2 turns (printed 185% chance each = fully enhanced).

### Magicule Explosion sustain poke

Targets / allies. Attack one enemy and heal all allies; damage and heal ∝ caster max Health. Soulburn (−10): extra attack with the same skill.

## Kit

S1 Magicule Explosion (+1 Soul): attack + heal all allies ∝ max Health; Soulburn (−10) extra attack same skill. S2 Blooming Lotus (awakened, +2 Souls, 4→3 CD): dispel 2 debuffs all allies (awakened) → equalize Health ratios → Barrier 2 turns ∝ max HP. S3 Sleeping Spell (+2 Souls, 4 CD): AoE dispel 2 → Sleep 1 turn + Decrease Attack 2 turns (185% enhanced). Exclusive Equipment Shuna's Shuttle: Blooming Lotus +10% barrier / Blooming Lotus caster CR +30% / Sleeping Spell +15% sleep chance. Exact heal/barrier formulas, first-fight opening CDs: UNSURE.

## Defense / offense

7 / 4

## Unsure

- Exact heal and barrier % of max Health
- Whether Sleep/Decrease Attack base chances before skill-ups
- First-fight (opening) cooldowns of Blooming Lotus and Sleeping Spell
- Whether redistribute is truly ratio-equal (printed “equal Health ratio”)

## Object

```ts
{
  id: "shuna",
  name: "Shuna",
  short: "Shuna",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["healer", "barrier", "strip", "sleep", "cleanse", "redistribute"],
  tags: ["single-target", "aoe", "heal", "barrier", "redistribute-health", "strip", "sleep", "decrease-attack", "max-health-scaling", "soulburn", "extra-attack"],
  effects: ["max-health-scaled-damage-and-heal", "health-redistribution", "barrier-from-max-health", "dual-strip-sleep-atk-down", "soulburn-extra-attack"],
  buffs: ["Barrier"],
  debuffs: ["Sleep", "Decrease Attack"],
  uniqueEffects: [
    {
      name: "Blooming Lotus (awakened)",
      scope: "allies",
      tooltip: "Dispel 2 debuffs (awaken) → equalize Health ratios → Barrier 2 turns ∝ caster max HP."
    },
    {
      name: "Sleeping Spell control",
      scope: "targets",
      tooltip: "AoE dispel 2 then Sleep 1 turn + Decrease Attack 2 turns (185% enhanced)."
    }
  ],
  kit: "S1 Magicule Explosion (+1 Soul): dmg + team heal ∝ max HP; Soulburn (−10) extra attack. S2 Blooming Lotus awakened (+2 Souls, 4→3 CD): cleanse 2 → redistribute HP → Barrier. S3 Sleeping Spell (+2 Souls, 4 CD): AoE strip 2 + Sleep + Decrease Attack. EE options on S2/S3.",
  defense: 7,
  offense: 4,
  baseSpeed: 105,
  verified: false
}
```
