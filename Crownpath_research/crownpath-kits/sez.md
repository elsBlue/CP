# Sez

Short: Sez

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2026-09-04 (no RGB Sez hero skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Specimen Sez; kit per epic7db Skills card 2026-09-04; awaken section text appears outdated vs Skills)

## Roles

execute, extinction, encroach-aoe, damage-cap, unhealable

## Tags

single-target, aoe, unhealable, extinction, lost-health-scaling, damage-cap, soulburn

## Effects

s1-unhealable-lost-hp-scaling, passive-damage-cap, encroach-after-ally-when-target-low-hp, s3-lethal-extinction-splash, soulburn-increase-s3-damage

## Buffs

(none)

## Debuffs

Unhealable

## Unique effects

### Die Hard damage cap

Self. Damage suffered in one attack does not exceed ~51% of max Health (−enhance toward lower cap).

### Encroach

Enemies. After an ally except caster attacks, if target Health ≤30%: AoE attack; caster CR +30%; damage ↑ ∝ target lost Health. Once every 3 turns. (epic7db awaken text still describes older S1-tied Encroach → treat as lag; prefer Skills card)

## Kit

S1 Dark Shadow (+1 Soul): 50% Unhealable 1 turn; damage ↑ ∝ enemy lost Health. S2 Die Hard (passive): per-hit damage cap (~51%→lower with enhances); Encroach when ally hits a ≤30% HP target (once/3 turns): AoE + caster CR +30%, dmg ∝ lost HP. S3 Conviction (+3 Souls, 6→5 CD): lethal single; on kill Extinction + additional damage ∝ caster Attack to other enemies; damage ↑ ∝ target lost Health. Soulburn (−20): increases damage dealt. Exact damage-cap floor % and Encroach multipliers: UNSURE. First-fight opening CD: UNSURE. Awaken Skill Improvement text conflicts with Skills card → UNSURE what current awaken adds if anything beyond listed Skills.

## Defense / offense

3 / 8

## Unsure

- Fully enhanced Die Hard damage-received cap %
- Exact Encroach / Conviction lost-HP and splash coefficients
- Whether awaken still modifies S1 (epic7db awaken vs Skills conflict)
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "sez",
  name: "Sez",
  short: "Sez",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["execute", "extinction", "encroach-aoe", "damage-cap", "unhealable"],
  tags: ["single-target", "aoe", "unhealable", "extinction", "lost-health-scaling", "damage-cap", "soulburn"],
  effects: ["s1-unhealable-lost-hp-scaling", "passive-damage-cap", "encroach-after-ally-when-target-low-hp", "s3-lethal-extinction-splash", "soulburn-increase-s3-damage"],
  buffs: [],
  debuffs: ["Unhealable"],
  uniqueEffects: [
    {
      name: "Die Hard",
      scope: "self",
      tooltip: "Per-hit damage cap ~51% max HP (enhance lowers). Exact floor UNSURE."
    },
    {
      name: "Encroach",
      scope: "enemies",
      tooltip: "After ally attack if target ≤30% HP (once/3t): AoE + caster CR +30%; dmg ∝ lost HP."
    }
  ],
  kit: "S1 Dark Shadow: Unhealable chance; dmg ∝ lost HP. S2 Die Hard: damage cap + Encroach on ally finishing low targets. S3 Conviction: lethal; kill → Extinction + AoE splash; Soulburn (−20) more damage. Prefer Skills card over lagging awaken text.",
  defense: 3,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
