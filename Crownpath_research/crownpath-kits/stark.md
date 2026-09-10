# Stark

Short: Stark

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: release / collab kit (no 2025–2026 Stark skill balance found)

## Roles

bruiser, provoke, fighting-spirit, counter-bruiser

## Tags

single-target, provoke, fighting-spirit, max-health-scaling, soulburn, cooldown-reset, stacking-damage

## Effects

fighting-spirit-warriors-strike, lightning-strike-stack-amp, cooldown-reset-on-warriors-strike, max-health-scaled-damage

## Buffs


## Debuffs

Provoke

## Unique effects

### Master's Lessons / Warrior's Strike

Self/targets. When an ally is attacked, gain 10 Fighting Spirit; when Fighting Spirit is full, activates Warrior's Strike on the attacker (consumes 100 Fighting Spirit): consecutive attacks; caster Combat Readiness +50%; resets Lightning Strike cooldown. Damage ∝ caster max Health.

### Lightning Strike stacks

Targets. Damage ∝ caster max Health; damage increases every time this skill is used, stacking up to 3 times. Soulburn (−10): increases damage dealt.

### Vanguard's Strike provoke

Targets. Provoke 1 turn; damage ∝ caster max Health.

## Kit

S1 Vanguard's Strike (+1 Soul): Provoke 1 turn; dmg ∝ max Health. S2 Master's Lessons (passive): ally attacked → +10 FS; at full FS → Warrior's Strike (consume 100 FS): consecutive attacks, CR +50%, reset Lightning Strike CD; dmg ∝ max Health. S3 Lightning Strike (+3 Souls, 5→4 CD): dmg ∝ max Health; stacks damage up to 3 uses; Soulburn (−10) more damage. Awaken Skill Upgrade text: UNSURE (epic7db incomplete). Exact stack amp %, Provoke chance if not 100%, first-fight S3 opening CD: UNSURE.

## Defense / offense

6 / 7

## Unsure

- Exact Lightning Strike per-stack damage amp %
- Awaken skill-upgrade full after-text
- Whether Provoke chance is 100% or lower before skill-ups
- Starting Fighting Spirit (assumed 0)
- First-fight (opening) cooldown of Lightning Strike

## Object

```ts
{
  id: "stark",
  name: "Stark",
  short: "Stark",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "provoke", "fighting-spirit", "counter-bruiser"],
  tags: ["single-target", "provoke", "fighting-spirit", "max-health-scaling", "soulburn", "cooldown-reset", "stacking-damage"],
  effects: ["fighting-spirit-warriors-strike", "lightning-strike-stack-amp", "cooldown-reset-on-warriors-strike", "max-health-scaled-damage"],
  buffs: [],
  debuffs: ["Provoke"],
  uniqueEffects: [
    {
      name: "Warrior's Strike",
      scope: "self-only",
      tooltip: "On full FS after allies are hit: consume 100 FS, consecutive attacks, CR +50%, reset Lightning Strike CD; dmg ∝ max HP."
    },
    {
      name: "Lightning Strike stacks",
      scope: "targets",
      tooltip: "Damage rises each use up to 3 stacks; Soulburn (−10) more damage; dmg ∝ max HP."
    }
  ],
  kit: "S1 Vanguard's Strike (+1 Soul): Provoke; dmg ∝ max HP. S2 Master's Lessons: ally hit → +10 FS; full FS → Warrior's Strike (CR +50%, reset S3 CD). S3 Lightning Strike (+3 Souls, 5→4 CD): stacking dmg up to 3; Soulburn (−10).",
  defense: 6,
  offense: 7,
  baseSpeed: 102,
  verified: false
}
```
