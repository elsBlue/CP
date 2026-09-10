# Kawerik

Short: Kawerik

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: epic7db kit 2026-09-04 (no 2025–2026 covenant Kawerik skill balance found — Mediator Kawerik EE/notes only)

## Roles

dps, strip, silence, opener

## Tags

single-target, aoe, silence, strip, skill-cooldown-increase, stealth, speed-scaling, soulburn, pen, self-speed

## Effects

speed-scaled-damage, target-speed-scaled-damage, defense-penetration-30, skill-cooldown-push, ignore-effect-resistance-soulburn

## Buffs

Stealth, Increase Speed

## Debuffs

Silence, Decrease Hit Chance (EE option)

## Unique effects

### Dimensional Corridor strip + CD push

Targets. 100% chance each (fully skilled) to dispel two buffs, then increase skill cooldowns by 1 turn twice (+2 CD total). Grants Stealth (awakened: + Increase Speed) for 2 turns. Damage ∝ target's Speed. Soulburn (−20): ignores Effect Resistance.

### Dimensional Explosion pen silence

Targets (AoE). Silence 1 turn; penetrates Defense by 30%; damage ∝ caster's Speed. Base CD 5 (−1 skill-up → 4).

## Kit

S1 Spatial Relocation (+1 Soul): attack; 75%→100% chance Silence 1 turn; damage ∝ caster Speed. S2 Dimensional Corridor (awakened, +2 Souls, 4 CD): dispel two buffs (100% each fully skilled) then +1 skill CD twice; Stealth + Increase Speed 2 turns; damage ∝ target Speed; Soulburn (−20) ignore Effect Resistance. S3 Dimensional Explosion (+3 Souls, 5→4 CD): AoE Silence 1 turn; 30% Defense penetration; damage ∝ caster Speed. Exclusive Equipment Proof of Choice (Crit Rate): Dimensional Explosion options — Increase Attack 2 turns before attack / Decrease Hit Chance 1 turn / +20% damage. Exact Speed-scaling formulas: UNSURE. First-fight opening cooldown of S3: UNSURE.

## Defense / offense

3 / 8

## Unsure

- Exact Speed→damage formulas on S1/S2/S3
- First-fight (opening) cooldown of Dimensional Explosion
- Whether S2 dispel/CD-push chances are checked separately per buff vs per “each” wording edge cases

## Object

```ts
{
  id: "kawerik",
  name: "Kawerik",
  short: "Kawerik",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "silence", "opener"],
  tags: ["single-target", "aoe", "silence", "strip", "skill-cooldown-increase", "stealth", "speed-scaling", "soulburn", "pen", "self-speed"],
  effects: ["speed-scaled-damage", "target-speed-scaled-damage", "defense-penetration-30", "skill-cooldown-push", "ignore-effect-resistance-soulburn"],
  buffs: ["Stealth", "Increase Speed"],
  debuffs: ["Silence", "Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Dimensional Corridor strip + CD push",
      scope: "targets",
      tooltip: "Dispel 2 buffs (100% each fully skilled) then +1 skill CD twice; Stealth (+Speed awakened) 2 turns; dmg ∝ target Speed; Soulburn ignore ER."
    },
    {
      name: "Dimensional Explosion pen silence",
      scope: "targets",
      tooltip: "AoE Silence 1 turn; 30% Defense pen; dmg ∝ caster Speed."
    }
  ],
  kit: "S1 Spatial Relocation (+1 Soul): Silence 1 turn (75%→100%); dmg ∝ caster Speed. S2 Dimensional Corridor awakened (+2 Souls, 4 CD): dispel 2 buffs + +1 CD×2; Stealth+Increase Speed 2 turns; dmg ∝ target Speed; Soulburn (−20) ignore ER. S3 Dimensional Explosion (+3 Souls, 5→4 CD): AoE Silence; 30% pen; dmg ∝ caster Speed. EE Proof of Choice on S3.",
  defense: 3,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
