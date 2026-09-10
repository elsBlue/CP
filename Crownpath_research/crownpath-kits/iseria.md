# Iseria

Short: Iseria

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2026-05-07 STOVE (Oathkeeper + Increase Attack (Greater) 2 turns; unaffected by CD increase/decrease; AI priority) — epic7db still shows old Oathkeeper without Atk Greater → lag; kit checked 2026-09-04

## Roles

cooldown-reset, strip, defense-break, unbuffable, dual-support

## Tags

single-target, decrease-defense, strip, unbuffable, cooldown-reset, increase-attack, extra-turn, soulburn, ignore-cooldown-manipulation

## Effects

s1-def-break, soulburn-s1, s2-cd-reset-atk-greater, s2-unaffected-cd-manip, awaken-s2-extra-turn, s3-full-strip-defbreak-unbuffable

## Buffs

Increase Attack (Greater) on Oathkeeper target (STOVE 2026-05-07)

## Debuffs

Decrease Defense, Unbuffable

## Unique effects

### Oathkeeper (post-2026-05-07)

Ally (not self). Reset skill cooldowns of one ally; grant Increase Attack (Greater) 2 turns. Unaffected by cooldown increase and decrease effects. Awaken: also grant extra turn to caster.

## Kit

S1 Refined Flower (+1 Soul): throw swords; 50% (enhanceable) Decrease Defense 2 turns. Soulburn (−10): +50% effect chance and increased damage; no Dual Attack. S2 Oathkeeper (+2 Souls, 6→5 CD): reset ally CDs + Increase Attack (Greater) 2 turns (STOVE); immune to CD manip; awaken extra turn. S3 Full Bloom (+2 Souls, 5→4 CD): giant Magic Sword; dispel all buffs; Decrease Defense + Unbuffable 2 turns. Prefer STOVE May 2026 over epic7db lag. RGB Iseria only (not Briar Witch / Summertime / Monarch of the Sword).

## Defense / offense

2 / 7

## Unsure

- Exact fully enhanced S1 Decrease Defense chance
- First-fight opening S2/S3 cooldowns
- Whether any older EE options still exist / current EE text
- Soulburn exact wording on damage vs chance after modern text cleanup

## Object

```ts
{
  id: "iseria",
  name: "Iseria",
  short: "Iseria",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["cooldown-reset", "strip", "defense-break", "unbuffable", "dual-support"],
  tags: ["single-target", "decrease-defense", "strip", "unbuffable", "cooldown-reset", "increase-attack", "extra-turn", "soulburn", "ignore-cooldown-manipulation"],
  effects: ["s1-def-break", "soulburn-s1", "s2-cd-reset-atk-greater", "s2-unaffected-cd-manip", "awaken-s2-extra-turn", "s3-full-strip-defbreak-unbuffable"],
  buffs: ["Increase Attack (Greater)"],
  debuffs: ["Decrease Defense", "Unbuffable"],
  uniqueEffects: [
    {
      name: "Oathkeeper",
      scope: "ally",
      tooltip: "Reset ally CDs + Increase Attack (Greater) 2 turns; unaffected by CD manip (STOVE 2026-05-07). Awaken: extra turn."
    }
  ],
  kit: "S1 Refined Flower: Decrease Defense; Soulburn stronger. S2 Oathkeeper: CD reset + Atk Greater (STOVE 2026-05-07); awaken extra turn. S3 Full Bloom: full strip + Def break + Unbuffable. Prefer STOVE over epic7db lag.",
  defense: 2,
  offense: 7,
  baseSpeed: 112,
  verified: false
}
```
