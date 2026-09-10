# Frida

Short: Frida

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: limited release kit (Oasis Land) — no Frida hero skill balance listing found in checked STOVE previews; epic7db vs epic7x CR % conflict → omit contested numbers as UNSURE; awaken cleanse per epic7x; checked 2026-09-04

## Roles

soulburn-enabler, cr-push, attack-buff, cleanse-barrier

## Tags

single-target, aoe, cr-push, increase-attack, cleanse, barrier, soulburn, free-soulburn-pass

## Effects

s1-ally-cr-push, soulburn-aqua-ride-cleanse-barrier, oasis-all-ride-pass, cr-on-ally-soulburn, s3-team-cr-atk, awaken-s3-cleanse

## Buffs

Barrier, Increase Attack, Oasis All-Ride Pass

## Debuffs

(none)

## Unique effects

### Oasis All-Ride Pass

Self + foremost ally. Undispellable. At start of first battle: first Soulburn costs 0 Soul; dispelled once activated.

### Aqua Ride (S1 Soulburn)

Allies. Instead of Tube Throw: dispel one debuff from all allies + Barrier 2 turns ∝ caster max Health (−20 Souls).

## Kit

S1 Tube Throw (+1 Soul): attack; increase CR of ally with highest CR except caster (epic7db 15% vs epic7x 10% base — UNSURE). Soulburn (−20): Aqua Ride cleanse+barrier. S2 Invitation to a Fantasy (passive): grant Oasis All-Ride Pass to caster + foremost ally; when an ally Soulburns, caster CR up (epic7db 20% vs epic7x 15% — UNSURE; enhances add more). S3 Oasis Land, Grand Opening! (+2 Souls, 5→4 CD): team CR up + Increase Attack 2 turns; awaken also dispel one debuff from all allies (epic7x). Contested CR percentages omitted as UNSURE. Barrier coefficient: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

5 / 5

## Unsure

- S1 / S2 / S3 Combat Readiness percentages (epic7db vs epic7x conflict)
- Barrier strength coefficient vs max Health
- Whether S3 cleanse is awaken-only in current client (epic7x yes; epic7db awaken text missing)
- First-fight (opening) cooldown

## Object

```ts
{
  id: "frida",
  name: "Frida",
  short: "Frida",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["soulburn-enabler", "cr-push", "attack-buff", "cleanse-barrier"],
  tags: ["single-target", "aoe", "cr-push", "increase-attack", "cleanse", "barrier", "soulburn", "free-soulburn-pass"],
  effects: ["s1-ally-cr-push", "soulburn-aqua-ride-cleanse-barrier", "oasis-all-ride-pass", "cr-on-ally-soulburn", "s3-team-cr-atk", "awaken-s3-cleanse"],
  buffs: ["Barrier", "Increase Attack", "Oasis All-Ride Pass"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Oasis All-Ride Pass",
      scope: "allies",
      tooltip: "Undispellable on caster + foremost ally: first Soulburn costs 0 Soul; removed when used."
    },
    {
      name: "Aqua Ride",
      scope: "allies",
      tooltip: "S1 Soulburn: cleanse 1 all allies + Barrier 2 turns ∝ max HP."
    }
  ],
  kit: "S1 Tube Throw (+1 Soul): CR push highest-CR ally (exact % UNSURE); Soulburn Aqua Ride cleanse+barrier. S2 Invitation: Oasis All-Ride Pass + CR on ally Soulburn (% UNSURE). S3 Oasis Land (+2 Souls, 5→4 CD): team CR + Increase Attack; awaken cleanse 1 (epic7x).",
  defense: 5,
  offense: 5,
  baseSpeed: 111,
  verified: false
}
```
