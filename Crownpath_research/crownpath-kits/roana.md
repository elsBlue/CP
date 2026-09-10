# Roana

Short: Roana

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2026-09-04 (no Roana skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Requiem Roana; kit per epic7db)

## Roles

anti-extra-attack, team-barrier, revive, team-heal-cr

## Tags

single-target, barrier, revive, heal, cr-push, soulburn, max-health-scaling

## Effects

s1-barrier-lowest-hp, soulburn-team-barrier, s2-heal-cr-on-extra-counter-dual, s3-team-barrier-revive, awaken-s3-heal

## Buffs

Barrier, Revive

## Debuffs

(none baseline)

## Unique effects

### Vigilant Eye

Allies. When an ally is attacked by an extra attack, counterattack, or Dual Attack: heal all allies ∝ caster max Health and number of attacked allies; all allies CR +5% each per attacked ally.

## Kit

S1 Soul Purification (+1 Soul): attack; Barrier to lowest-Health ally 2 turns ∝ caster max Health; Soulburn (−20): Barrier all allies 2 turns. S2 Vigilant Eye (passive): heal + CR on extra/counter/dual. S3 Noble Rekos (+3 Souls, 5→4 CD): Barrier + Revive all allies 2 turns ∝ caster max Health; awaken also heal all allies ∝ caster max Health. RGB Roana only (≠ Requiem Roana).

## Defense / offense

8 / 2

## Unsure

- Exact barrier / heal coefficients vs max Health
- Exact CR gain stacking when multiple allies hit by one AoE extra attack
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "roana",
  name: "Roana",
  short: "Roana",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["anti-extra-attack", "team-barrier", "revive", "team-heal-cr"],
  tags: ["single-target", "barrier", "revive", "heal", "cr-push", "soulburn", "max-health-scaling"],
  effects: ["s1-barrier-lowest-hp", "soulburn-team-barrier", "s2-heal-cr-on-extra-counter-dual", "s3-team-barrier-revive", "awaken-s3-heal"],
  buffs: ["Barrier", "Revive"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Vigilant Eye",
      scope: "allies",
      tooltip: "On extra/counter/dual vs allies: team heal ∝ max HP + CR +5% per attacked ally."
    }
  ],
  kit: "S1: Barrier lowest HP; Soulburn team Barrier. S2: heal+CR on extra/counter/dual. S3: Barrier+Revive (awaken heal). RGB ≠ Requiem Roana.",
  defense: 8,
  offense: 2,
  baseSpeed: 102,
  verified: false
}
```
