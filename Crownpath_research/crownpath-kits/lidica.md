# Lidica

Short: Lidica

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-05-07 balance (STOVE; Thornbush full dispel — epic7db still shows decrease buff durations / lags). Prior kit rewrite 2025-04-10.

## Roles

opener, strip, bind, cr-push, skill-nullifier

## Tags

single-target, aoe, bleed, detonate, bind, resource-reduction, strip, skill-nullifier, decrease-defense, cr-push, soulburn, ignore-er-on-bind

## Effects

bleed-detonate, resource-reduction-60, full-dispel-thornbush, skill-nullifier-allies, ignore-er-when-bound, cr-push-per-target

## Buffs

Skill Nullifier

## Debuffs

Bleed, Bind, Decrease Defense, Decrease Speed (EE option)

## Unique effects

### Thornbush lockdown (post 2026-05-07)

Targets (AoE). Resource reduction 60% before attacking; dispel all buffs (STOVE; epic7db lag shows decrease buff durations by 1); Bind 2 turns; for every target, caster Combat Readiness +25%. Soulburn (−10): ignores Effect Resistance. CD 3.

### Public Execution setup

Targets. Decrease Defense 2 turns; decrease Combat Readiness by 100%; grant Skill Nullifier once to all allies; if target has Bind, ignores Effect Resistance. Base CD 5 (−1 → 4).

### Wild Rose bleed detonate

Targets. 80% chance each to inflict two Bleeds (1 turn on epic7db; awakened duration UNSURE — 2025-04-10 notes mentioned longer bleed on awaken). At end of turn, detonates Bleeds on the target.

## Kit

S1 Wild Rose (+1 Soul): two Bleeds (80% each, skill-ups); end of turn detonate Bleeds on target. S2 Thornbush (+2 Souls, 3 CD, post 2026-05-07): 60% resource reduction → dispel all buffs → Bind 2 turns; CR +25% per target; Soulburn (−10) ignore Effect Resistance. S3 Public Execution (+2 Souls, 5→4 CD): Decrease Defense 2 turns; CR −100%; Skill Nullifier once to all allies; Bind → ignore Effect Resistance. Exclusive Equipment (post 2026-05-07 Effect 3): Decrease Speed 2 turns on Public Execution (replaced extra buff-duration cut on Thornbush). Exact detonate damage / resource-reduction definition / awaken bleed turns: UNSURE. First-fight opening cooldown of Public Execution: UNSURE.

## Defense / offense

2 / 7

## Unsure

- Wild Rose awakened Bleed duration (1 vs 2 turns)
- Exact Bleed detonate damage formula
- Exact meaning/amount of “resource reduction 60%” (Focus/Fighting Spirit/etc.)
- First-fight (opening) cooldown of Public Execution
- Current full EE option 1–2 text beyond Effect 3 Speed down

## Object

```ts
{
  id: "lidica",
  name: "Lidica",
  short: "Lidica",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "strip", "bind", "cr-push", "skill-nullifier"],
  tags: ["single-target", "aoe", "bleed", "detonate", "bind", "resource-reduction", "strip", "skill-nullifier", "decrease-defense", "cr-push", "soulburn", "ignore-er-on-bind"],
  effects: ["bleed-detonate", "resource-reduction-60", "full-dispel-thornbush", "skill-nullifier-allies", "ignore-er-when-bound", "cr-push-per-target"],
  buffs: ["Skill Nullifier"],
  debuffs: ["Bleed", "Bind", "Decrease Defense", "Decrease Speed"],
  uniqueEffects: [
    {
      name: "Thornbush lockdown",
      scope: "targets",
      tooltip: "Post 2026-05-07: 60% resource reduction, dispel all buffs, Bind 2 turns, CR +25%/target; Soulburn ignore ER."
    },
    {
      name: "Public Execution setup",
      scope: "targets",
      tooltip: "Decrease Defense 2 turns; CR −100%; Skill Nullifier once all allies; Bind → ignore ER."
    }
  ],
  kit: "S1 Wild Rose (+1 Soul): two Bleeds then detonate at end of turn. S2 Thornbush (+2 Souls, 3 CD, 2026-05-07): 60% resource cut + full dispel + Bind 2 turns + CR +25%/target; Soulburn (−10) ignore ER. S3 Public Execution (+2 Souls, 5→4 CD): Decrease Defense; CR −100%; Skill Nullifier all allies; Bind → ignore ER. EE Effect 3: Decrease Speed on S3.",
  defense: 2,
  offense: 7,
  baseSpeed: 120,
  verified: false
}
```
