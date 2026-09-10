# Laia

Short: Laia

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 117

Patch / date used: limited-release kit — no 2025–2026 Laia skill balance listing found; kit checked 2026-09-04

## Roles

hp-nuke, cleanse, cr-push, dual-attack-enabler, cooldown-support

## Tags

single-target, aoe-cleanse, cr-push, dual-attack, defense-penetration, no-crit, soulburn, max-hp-scaling, extra-turn

## Effects

s1-cr-dual-when-s3-down, s2-full-cleanse-cr, awaken-s2-ally-cd, s3-pen-no-crit-hp-scale, s3-kill-heal-extra-turn, s3-starts-full-cd, s3-down-tick-cds

## Buffs

(none baseline)

## Debuffs

(none baseline)

## Unique effects

### The Spirit of Rock (cooldown cadence)

Self. Begins first battle with full S3 cooldown. While S3 unavailable due to cooldown: at start of every turn, decrease all skill cooldowns by 1. Damage penetrates Defense; cannot crit; damage/heal ∝ caster max Health. On kill: heal self + extra turn.

### Sing with Me! (S3-down Dual)

Self / ally. When The Spirit of Rock is on cooldown: S1 triggers a Dual Attack from a random ally.

## Kit

S1 Sing with Me! (+1 Soul): melody attack; caster CR +15% (enhanceable); damage ∝ max HP; if S3 on CD → random ally Dual Attack. S2 Sweet Cheers (+2 Souls, 7 CD): full cleanse all allies; CR +25% fully enhanced (base 15% + enhance). Awaken: also decrease skill cooldowns of all allies except caster by 1. S3 The Spirit of Rock (+3 Souls, 7→6 CD): bass attack; Defense penetration; no crit; HP-scale; kill → heal + extra turn; starts full CD; while down, tick all CDs −1 each turn start. Soulburn (−10): increased S3 damage. Exact pen % and heal coefficient: UNSURE.

## Defense / offense

5 / 7

## Unsure

- Exact Defense penetration % on The Spirit of Rock
- Exact heal coefficient on kill
- Fully enhanced S1 CR % and S2 CR % (25% cited as enhanced S2)
- First-fight exact S2 opening CD
- Whether Dual Attack from S1 respects standard Dual rules / artifacts

## Object

```ts
{
  id: "laia",
  name: "Laia",
  short: "Laia",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["hp-nuke", "cleanse", "cr-push", "dual-attack-enabler", "cooldown-support"],
  tags: ["single-target", "aoe-cleanse", "cr-push", "dual-attack", "defense-penetration", "no-crit", "soulburn", "max-hp-scaling", "extra-turn"],
  effects: ["s1-cr-dual-when-s3-down", "s2-full-cleanse-cr", "awaken-s2-ally-cd", "s3-pen-no-crit-hp-scale", "s3-kill-heal-extra-turn", "s3-starts-full-cd", "s3-down-tick-cds"],
  buffs: [],
  debuffs: [],
  uniqueEffects: [
    {
      name: "The Spirit of Rock",
      scope: "self",
      tooltip: "Starts full CD; while down ticks all CDs −1/turn. Pen + no crit + HP-scale; kill → heal + extra turn."
    },
    {
      name: "Sing with Me!",
      scope: "ally",
      tooltip: "When S3 on CD: S1 triggers Dual Attack from a random ally."
    }
  ],
  kit: "S1 Sing with Me!: CR + Dual when S3 down. S2 Sweet Cheers: full cleanse + CR; awaken ally CD −1. S3 The Spirit of Rock: pen HP-nuke; starts full CD; ticks CDs while down. No 2025–2026 balance found.",
  defense: 5,
  offense: 7,
  baseSpeed: 117,
  verified: false
}
```
