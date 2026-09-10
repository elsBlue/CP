# Bellona

Short: Bellona

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no 2025–2026 STOVE balance listing for RGB Bellona; Seaside Bellona had 2025-04-10 changes — different hero. Kit per epic7db)

## Roles

defense-break, aoe-dps, focus

## Tags

focus, decrease-defense, aoe, enemy-max-hp-damage, soulburn, extra-turn, immunity, strip-ee

## Effects

focus-consume-razorwind, enemy-max-hp-scaling, focus-on-attacked

## Buffs

Immunity

## Debuffs

Decrease Defense

## Unique effects

### Focus → Razorwind Fan

Self / enemies. When stacked Focus ≥5, Windbreak Fan consumes all Focus and activates Razorwind Fan (AoE Decrease Defense). Damage of Focus-triggered Razorwind is increased vs manual cast. Focus gain: when caster is attacked gains Focus (standard RGB Bellona; epic7db skill list omits explicit passive line — treat as current but mark UNSURE if wording drifted).

### Butterfly Fan (awaken Immunity)

Targets (AoE). Damage dealt increases with more enemies (per awaken text). Awakened: grants caster Immunity 1 turn after attacking.

## Kit

S1 Windbreak Fan (+1 Soul): damage proportional to enemy max Health; if Focus ≥5, consume all Focus and activate Razorwind Fan. Soulburn (−20): grants an extra turn. S2 Butterfly Fan (+2 Souls, 3 CD): AoE; damage scales with enemy count; awaken Immunity 1 turn. S3 Razorwind Fan (+2 Souls, 6→5 CD): AoE Decrease Defense 2 turns (100% FE); increased damage when triggered via Focus from S1. EE options: S2 strip 1 from all; S3 +Def Break chance / CR pushback. Exact Focus stacks gained per hit and max-HP coefficient: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact Focus gain rule text (epic7db omits standalone Focus passive; historically +1 Focus when attacked)
- Exact enemy-max-HP damage coefficient on S1
- Exact bonus damage % when Razorwind is Focus-triggered
- No RGB Bellona 2025–2026 STOVE listing found

## Object

```ts
{
  id: "bellona",
  name: "Bellona",
  short: "Bellona",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["defense-break", "aoe-dps", "focus"],
  tags: ["focus", "decrease-defense", "aoe", "enemy-max-hp-damage", "soulburn", "extra-turn", "immunity", "strip-ee"],
  effects: ["focus-consume-razorwind", "enemy-max-hp-scaling", "focus-on-attacked"],
  buffs: ["Immunity"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Focus Razorwind",
      scope: "self",
      tooltip: "At 5+ Focus, S1 consumes Focus and casts Razorwind (stronger). Focus gained when attacked (wording UNSURE)."
    },
    {
      name: "Butterfly Fan",
      scope: "targets",
      tooltip: "AoE; damage scales with enemy count; awaken Immunity 1 turn."
    }
  ],
  kit: "S1 Windbreak Fan (+1): dmg ∝ enemy max HP; Focus≥5 → consume + Razorwind. Soulburn (−20): extra turn. S2 Butterfly Fan (+2, 3 CD): AoE; awaken Immunity 1t. S3 Razorwind (+2, 6→5): AoE Def Break 2t; stronger if Focus-triggered. Focus gain text UNSURE.",
  defense: 3,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
