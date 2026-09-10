# Destina

Short: Destina

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 100

Patch / date used: 2025-04-10 STOVE (Key to an Oath heal up; Destina's Grace revive 30%, CD 5→4, Spirit's Blessing 3 turns) — epic7db still shows revive 20% / CD 6 / Blessing 2 turns → lag; kit checked 2026-09-04

## Roles

heal, cleanse, revive, cr-push, er-tank

## Tags

single-target, aoe, heal, cleanse, revive, cr-push, increase-effect-resistance, soulburn, exclusive-equipment

## Effects

s1-heal-lowest, soulburn-aoe-heal, s2-cleanse-heal-cr, s3-full-cleanse-heal-revive, spirit-blessing-start, ee-s1-cleanse, ee-s2-cd-reset, ee-s2-extra-cr

## Buffs

Spirit's Blessing (unique; Increase Effect Resistance 60%; cannot be dispelled)

## Debuffs

(none)

## Unique effects

### Spirit's Blessing

Self. At start of first battle via Destina's Grace: Effect Resistance +60% for 3 turns (STOVE 2025-04-10; was 2). Cannot be dispelled.

### Destina's Grace (awakened)

Allies. Full cleanse all allies; heal ∝ caster max Health; revive all dead allies to 30% Health (STOVE 2025-04-10; epic7db still 20%). CD 4 turns after enhance path (STOVE reduced base CD by 1 from 5).

## Kit

S1 Key to an Oath (+1 Soul): attack; heal ally with lowest Health ∝ caster max Health (STOVE 2025-04-10 increased heal). Soulburn (−20): attack + greatly heal all allies; no Dual Attack. S2 Regen (+1 Soul, 2 CD): bless one ally — dispel two debuffs, heal ∝ caster max HP, CR +30%. S3 Destina's Grace (+3 Souls, STOVE CD 4 after path): full cleanse all allies + heal ∝ caster max HP; awaken revive dead to 30% HP; start of first battle Spirit's Blessing 3 turns. EE Ruele's Sad Promise: S1 also dispel 1 from lowest-HP ally; S2 30% chance reset Regen CD; or S2 additional CR +20% (prefer in-game if conflict). Exact heal coefficients: UNSURE.

## Defense / offense

9 / 1

## Unsure

- Exact S1/S2/S3 heal coefficients vs caster max Health after 2025-04-10
- Fully enhanced S3 opening (first-fight) cooldown
- Exclusive Equipment option wording vs current client
- Whether Key to an Oath heal is fully ∝ caster max HP in all languages after Apr 2025

## Object

```ts
{
  id: "destina",
  name: "Destina",
  short: "Destina",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["heal", "cleanse", "revive", "cr-push", "er-tank"],
  tags: ["single-target", "aoe", "heal", "cleanse", "revive", "cr-push", "increase-effect-resistance", "soulburn", "exclusive-equipment"],
  effects: ["s1-heal-lowest", "soulburn-aoe-heal", "s2-cleanse-heal-cr", "s3-full-cleanse-heal-revive", "spirit-blessing-start", "ee-s1-cleanse", "ee-s2-cd-reset", "ee-s2-extra-cr"],
  buffs: ["Spirit's Blessing"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Spirit's Blessing",
      scope: "self",
      tooltip: "Start of first battle: ER +60% for 3 turns (STOVE 2025-04-10). Cannot be dispelled."
    },
    {
      name: "Destina's Grace",
      scope: "allies",
      tooltip: "Full cleanse + heal ∝ caster max HP; awaken revive dead to 30% HP (STOVE). CD 4."
    }
  ],
  kit: "S1 Key to an Oath: heal lowest; Soulburn AoE heal. S2 Regen: cleanse 2 + heal + CR +30%. S3 Destina's Grace: full cleanse + heal; awaken revive 30%; Spirit's Blessing 3 turns. Prefer 2025-04-10 STOVE over epic7db lag.",
  defense: 9,
  offense: 1,
  baseSpeed: 100,
  verified: false
}
```
