# Nahkwol

Short: Nahkwol

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: release kit (no 2025–2026 Nahkwol skill balance found in STOVE previews checked; community EE requests only)

## Roles

opener, strip, bind, silence, seal

## Tags

single-target, aoe, silence, seal, bind, strip, cr-push, self-speed, soulburn, ignore-er, extra-turn

## Effects

silence-then-cr-push, seal-before-attack, full-dispel-then-bind, skill-cooldown-increase, ignore-effect-resistance-soulburn, awaken-extra-turn

## Buffs

Increase Speed

## Debuffs

Silence, Seal, Bind

## Unique effects

### Spiritual Devouring lockdown

Targets (AoE). Dispel all buffs before Bind 2 turns and increase skill cooldowns by 1 turn. Awakened grants caster an extra turn. Soulburn (−20): ignores Effect Resistance.

### Seal (Forbidden Incantation)

Targets. Seal (unable to be buffed; exact journal synonym UNSURE) for 2 turns before attacking; then Increase Speed of caster 2 turns.

### Phantom Brush silence CR push

Targets. Silence 1 turn (75%→~100% with skill-ups); if target silenced after attack, decrease Combat Readiness by 20%.

## Kit

S1 Phantom Brush (+1 Soul): 75%→~100% Silence 1 turn; if silenced after attack → CR −20%. S2 Forbidden Incantation (+1 Soul, 2 CD): Seal 2 turns before attacking; Increase Speed caster 2 turns. S3 Spiritual Devouring (awakened, +3 Souls, 5→4 CD): AoE dispel all buffs → Bind 2 turns → skill CD +1; awakened extra turn; Soulburn (−20) ignore Effect Resistance. Exact Bind / Seal journal wording, first-fight S3 opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact in-game English for Seal vs “unable to be buffed”
- Exact Bind combat-readiness lock rules
- Whether Silence chance is fully 100% after all skill-ups
- First-fight (opening) cooldown of Spiritual Devouring
- Exclusive Equipment options (if any)

## Object

```ts
{
  id: "nahkwol",
  name: "Nahkwol",
  short: "Nahkwol",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "strip", "bind", "silence", "seal"],
  tags: ["single-target", "aoe", "silence", "seal", "bind", "strip", "cr-push", "self-speed", "soulburn", "ignore-er", "extra-turn"],
  effects: ["silence-then-cr-push", "seal-before-attack", "full-dispel-then-bind", "skill-cooldown-increase", "ignore-effect-resistance-soulburn", "awaken-extra-turn"],
  buffs: ["Increase Speed"],
  debuffs: ["Silence", "Seal", "Bind"],
  uniqueEffects: [
    {
      name: "Spiritual Devouring lockdown",
      scope: "targets",
      tooltip: "AoE full dispel → Bind 2 turns → skill CD +1; awaken extra turn; Soulburn (−20) ignore ER."
    },
    {
      name: "Seal (Forbidden Incantation)",
      scope: "targets",
      tooltip: "Seal (unable to be buffed) 2 turns before attacking; then self Increase Speed 2 turns."
    }
  ],
  kit: "S1 Phantom Brush (+1 Soul): Silence; if silenced → CR −20%. S2 Forbidden Incantation (+1 Soul, 2 CD): Seal 2 turns then attack; self Increase Speed 2 turns. S3 Spiritual Devouring awakened (+3 Souls, 5→4 CD): AoE full dispel + Bind 2 turns + skill CD +1; extra turn; Soulburn (−20) ignore ER.",
  defense: 3,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
