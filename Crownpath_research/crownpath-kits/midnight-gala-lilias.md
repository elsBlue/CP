# Midnight Gala Lilias

Short: MG Lilias

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 117

Patch / date used: 2026-01-08 STOVE (Go Kyla Soulburn → damage; Now or Never ally Atk except caster + CR 20% + caster CR 50%; Take the Lead Atk 3 turns + ignore DR/share vs Heroes; awaken CR moved off S3) — epic7db still shows pre-patch; kit checked 2026-09-04

## Roles

assassin, tank-killer, damage-limit, team-cr-push, attack-buff

## Tags

single-target, always-crit, damage-limit, defense-penetration, attack-buff, cr-push, soulburn, heal-on-hit, ignore-damage-reduction, ignore-damage-share

## Effects

s1-always-crit-heal-atk, s2-damage-limit, now-or-never-on-le50hp, s3-hp-diff-pen-up-to-100, s3-ignore-dr-share-vs-heroes, soulburn-damage

## Buffs

Increase Attack (self on S3; allies except caster on Now or Never), Damage Limit (self)

## Debuffs

(none baseline)

## Unique effects

### Elaborate Scheme / Now or Never! (post 2026-01-08)

Self + allies. Start of battle and end of turn: Damage Limit 1 turn. After attacking on caster turn, if target Health ≤50%: Now or Never! (once/3 turns) — Increase Attack all allies except caster 2 turns; allies CR +20%; caster CR +50%. Damage Limit: damage from one attack does not exceed a % of max Health (exact % UNSURE; commonly cited 35%).

### Take the Lead HP-diff pen (post 2026-01-08)

Target (Hero). Self Atk buff 3 turns; always crit; Defense pen ∝ (target max HP − caster max HP) up to 100%; vs Heroes ignores damage reduction and damage sharing. Awaken no longer adds caster CR on S3 (moved to Now or Never).

## Kit

S1 Go, Kyla! (+1 Soul): attack; heal ∝ Attack; always crit; Soulburn (−10): increases damage dealt (STOVE 2026-01-08; was heal). S2 Elaborate Scheme (passive): Damage Limit; Now or Never on ≤50% HP (once/3 turns) — Atk allies except self 2 turns, ally CR +20%, self CR +50%. S3 Take the Lead (+2 Souls, 4→3 CD): self Atk 3 turns; always crit; HP-diff pen up to 100%; ignore DR/share vs Heroes. Limited Earth Thief (≠ Conqueror Lilias / RGB Lilias).

## Defense / offense

4 / 8

## Unsure

- Exact Damage Limit % of max Health
- Exact Now or Never internal CD after enhance (base once/3 turns)
- Exact heal coefficient on S1
- Exact pen formula vs HP difference
- Whether epic7db awakening CR +35% on S3 was fully removed (STOVE says transferred)

## Object

```ts
{
  id: "midnight-gala-lilias",
  name: "Midnight Gala Lilias",
  short: "MG Lilias",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["assassin", "tank-killer", "damage-limit", "team-cr-push", "attack-buff"],
  tags: ["single-target", "always-crit", "damage-limit", "defense-penetration", "attack-buff", "cr-push", "soulburn", "heal-on-hit", "ignore-damage-reduction", "ignore-damage-share"],
  effects: ["s1-always-crit-heal-atk", "s2-damage-limit", "now-or-never-on-le50hp", "s3-hp-diff-pen-up-to-100", "s3-ignore-dr-share-vs-heroes", "soulburn-damage"],
  buffs: ["Increase Attack", "Damage Limit"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Elaborate Scheme / Now or Never!",
      scope: "self+allies",
      tooltip: "Post 2026-01-08: Damage Limit; on ≤50% HP after attack → Atk allies except self + CR 20% + self CR 50% (once/3 turns)."
    },
    {
      name: "Take the Lead HP-diff pen",
      scope: "target",
      tooltip: "Self Atk 3 turns; pen up to 100% by HP gap; ignore DR/share vs Heroes; always crit."
    }
  ],
  kit: "S1 Go Kyla: heal∝ATK always crit; Soulburn dmg. S2: Damage Limit; Now or Never ≤50% HP. S3 Take the Lead: Atk 3t; HP-diff pen≤100%; ignore DR/share vs Heroes. Limited ≠ Conqueror Lilias.",
  defense: 4,
  offense: 8,
  baseSpeed: 117,
  verified: false
}
```
