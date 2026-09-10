# Tenebria

Short: Tene

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 110

Patch / date used: 2026-05-07 balance (STOVE; Dark Explosion hits two enemies; Ominous Thunder +dispel 1 + Unbuffable instead of Restrict; Nightmare Decrease Defense guaranteed). Prefer STOVE — epic7db still shows pre-patch single-target S1 / Restrict / chance-based Decrease Defense.

## Roles

cleave, sleep, defense-break, strip, cr-push

## Tags

single-target, aoe, sleep, decrease-defense, decrease-speed, unbuffable, strip, cr-push, soulburn, self-attack

## Effects

two-target-sleep-s1, ominous-strip-unbuffable, guaranteed-defense-break-nightmare, awaken-cr-on-sleep

## Buffs

Increase Attack

## Debuffs

Sleep, Decrease Defense, Decrease Speed, Unbuffable

## Unique effects

### Dark Explosion (post 2026-05-07)

Targets (two enemies). Attack two enemies; 70% Sleep 1 turn each; does not trigger Dual Attack. Awakened (prefer STOVE/awaken intent): when an enemy is put to sleep, caster Combat Readiness +50% (epic7db awaken text still single-target — prefer dual-target STOVE + CR-on-sleep awaken).

### Ominous Thunder (post 2026-05-07)

Targets (AoE). Dispel one buff before Combat Readiness −30% and Decrease Speed + Unbuffable (“unable to be buffed”) for 2 turns (STOVE; epic7db still says Restrict — prefer STOVE). Soulburn (−10): increases damage dealt.

### Nightmare (post 2026-05-07)

Targets (AoE). Inflict Decrease Defense 2 turns (guaranteed post-patch) and 85% Sleep 1 turn; then Increase Attack caster 2 turns.

## Kit

S1 Dark Explosion (+1 Soul, post 2026-05-07): attack two enemies; 70% Sleep 1 turn; no Dual Attack; awaken CR +50% when Sleep lands. S2 Ominous Thunder (+2 Souls, 3 CD, post 2026-05-07): AoE dispel 1 → CR −30% → Decrease Speed + Unbuffable 2 turns; Soulburn (−10) more damage. S3 Nightmare (+3 Souls, 4→3 CD, post 2026-05-07): AoE Decrease Defense 2 turns (guaranteed) + 85% Sleep 1 turn; self Increase Attack 2 turns. Exclusive Equipment Shadow King Plushie: Dark Explosion 75% dispel 1 before sleep / Nightmare +15% sleep / Nightmare Increase Attack (Greater). Exact dual-target selection rules, awaken CR text vs STOVE, first-fight S3 opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact dual-target selection (random vs lowest HP etc.)
- Whether awaken CR-on-sleep still matches STOVE dual-target after-text (epic7db lag)
- In-game English Unbuffable vs “unable to be buffed” vs old Restrict naming
- Fully enhanced Sleep chances on S1 after skill-ups
- First-fight (opening) cooldown of Nightmare

## Object

```ts
{
  id: "tenebria",
  name: "Tenebria",
  short: "Tene",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "sleep", "defense-break", "strip", "cr-push"],
  tags: ["single-target", "aoe", "sleep", "decrease-defense", "decrease-speed", "unbuffable", "strip", "cr-push", "soulburn", "self-attack"],
  effects: ["two-target-sleep-s1", "ominous-strip-unbuffable", "guaranteed-defense-break-nightmare", "awaken-cr-on-sleep"],
  buffs: ["Increase Attack"],
  debuffs: ["Sleep", "Decrease Defense", "Decrease Speed", "Unbuffable"],
  uniqueEffects: [
    {
      name: "Dark Explosion (post 2026-05-07)",
      scope: "targets",
      tooltip: "Hits two enemies; Sleep chance; no Dual Attack; awaken CR +50% on Sleep (prefer STOVE over epic7db)."
    },
    {
      name: "Ominous Thunder (post 2026-05-07)",
      scope: "targets",
      tooltip: "AoE dispel 1 → CR −30% → Decrease Speed + Unbuffable 2 turns (STOVE; not Restrict)."
    },
    {
      name: "Nightmare (post 2026-05-07)",
      scope: "targets",
      tooltip: "AoE guaranteed Decrease Defense 2 turns + Sleep chance; self Increase Attack 2 turns."
    }
  ],
  kit: "S1 Dark Explosion (2026-05-07, +1 Soul): two targets Sleep; awaken CR on Sleep. S2 Ominous Thunder (2026-05-07, +2 Souls, 3 CD): dispel 1 + CR push + Decrease Speed + Unbuffable; Soulburn (−10). S3 Nightmare (2026-05-07, +3 Souls, 4→3 CD): guaranteed Decrease Defense + Sleep; self Increase Attack. EE options.",
  defense: 3,
  offense: 7,
  baseSpeed: 110,
  verified: false
}
```
