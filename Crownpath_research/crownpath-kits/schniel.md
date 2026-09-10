# Schniel

Short: Schniel

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2026-07-16 STOVE / Game8 mirror (S1 CR push; S2 start-turn cleanse 2 + Cleanse grants Indomitable; S3 Barrier + fixed dmg rework, CD 3, Soulburn barrier↑) — epic7db still shows pre-patch; kit checked 2026-09-04

## Roles

poison-answer, full-cleanse, immunity-indomitable, aoe-fixed-damage, cr-push

## Tags

single-target, aoe, cleanse, immunity, indomitable, barrier, fixed-damage, cr-push, soulburn, max-health-scaling

## Effects

s1-cr-self-and-highest-atk, s2-start-cleanse-2, cleanse-on-poison-venom, s3-aoe-def-barrier-fixed, soulburn-barrier, indomitable-fixed-bonus

## Buffs

Immunity, Indomitable, Increase Defense, Barrier

## Debuffs

(none baseline)

## Unique effects

### I Know a Thing About Poison / Cleanse (post 2026-07-16)

Allies + self. Start of turn: dispel 1 debuff from 2 allies. After an enemy skill, if an ally has Poison or Venom: full self cleanse + Cleanse (once/1 turn enhanced). Cleanse: dispel all ally debuffs; Immunity + Indomitable 1 turn; reset caster skill cooldowns.

### You May Walk Yourself Out (post 2026-07-16)

Enemies + allies. AoE; grant Increase Defense + Barrier (∝ caster max Health) all allies 2 turns; 5000 fixed damage (regardless of hit); if caster Indomitable, fixed damage greatly increased (exact amount UNSURE). CD 3 (was 4/5 tables). Soulburn (−10): Barrier effect increased.

## Kit

S1 Is This How You Do It (+1 Soul, post 2026-07-16): attack; CR +15% (enhanceable) to caster and highest-Attack ally except caster; Soulburn (−10): dispel 1 debuff all allies. S2 I Know a Thing About Poison (passive): start-turn cleanse 2 allies; poison/venom → Cleanse (Immunity+Indomitable + CD reset). S3 You May Walk Yourself Out (+2 Souls post-patch, 3 CD): AoE + team Defense/Barrier + fixed dmg; Indomitable bonus fixed; Soulburn barrier↑. Prefer STOVE/Game8 over epic7db lag.

## Defense / offense

7 / 5

## Unsure

- Exact Indomitable fixed-damage bonus amount
- Exact Barrier coefficient vs max Health
- Exact enhanced S1 CR % path
- Awaken skill target after rework (Game8 lists enhanced/awakened combined — awaken-specific delta UNSURE)
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "schniel",
  name: "Schniel",
  short: "Schniel",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["poison-answer", "full-cleanse", "immunity-indomitable", "aoe-fixed-damage", "cr-push"],
  tags: ["single-target", "aoe", "cleanse", "immunity", "indomitable", "barrier", "fixed-damage", "cr-push", "soulburn", "max-health-scaling"],
  effects: ["s1-cr-self-and-highest-atk", "s2-start-cleanse-2", "cleanse-on-poison-venom", "s3-aoe-def-barrier-fixed", "soulburn-barrier", "indomitable-fixed-bonus"],
  buffs: ["Immunity", "Indomitable", "Increase Defense", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "I Know a Thing About Poison / Cleanse",
      scope: "allies",
      tooltip: "Post 2026-07-16: start-turn cleanse 2; on ally Poison/Venom → full cleanse + Immunity + Indomitable + CD reset."
    },
    {
      name: "You May Walk Yourself Out",
      scope: "enemies+allies",
      tooltip: "AoE; team Def+Barrier; 5000 fixed (↑ if Indomitable); Soulburn barrier↑."
    }
  ],
  kit: "S1: CR self+highest Atk ally; Soulburn team cleanse1. S2: start cleanse2; poison→Cleanse+Indomitable. S3: AoE Def+Barrier+fixed; Indomitable bonus. STOVE 2026-07-16.",
  defense: 7,
  offense: 5,
  baseSpeed: 111,
  verified: false
}
```
