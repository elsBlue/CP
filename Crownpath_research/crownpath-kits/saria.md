# Saria

Short: Saria

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no Saria skill balance listing found since release ~2025-11; kit per epic7db)

## Roles

extra-turn-punisher, aoe-focus-nuke, team-invincibility, attack-buff

## Tags

single-target, aoe, focus, dispel, invincibility, attack-buff, cr-push, soulburn, elemental-neutral

## Effects

s1-dual-target-dispel, soulburn-ignore-er, s2-focus-on-ally-extra-turn, wings-of-liberation-aoe, s3-team-invincibility-atk

## Buffs

Invincibility, Increase Attack

## Debuffs

(none baseline; S1 dispels enemy buffs)

## Unique effects

### Guidance of Nature / Wings of Liberation

Self. At start of an ally's extra turn: +2 Focus; caster CR +30%. After using a skill, when Focus full: Wings of Liberation (consume 5 Focus) — AoE; +50% Hit Chance; unaffected by elemental disadvantage.

## Kit

S1 Spirit Burst (+1 Soul): attack two enemies; 65% dispel one buff each; Soulburn: effect chance 100% and ignores Effect Resistance. S2 Guidance of Nature (passive): Focus + CR on ally extra turns; full Focus → Wings of Liberation. S3 Blossoming Hope (+3 Souls, 5 CD): Invincibility all allies 1 turn; Increase Attack all allies 2 turns. Exact CD enhance / Focus max confirm: UNSURE beyond consume 5.

## Defense / offense

5 / 7

## Unsure

- Exact S3 cooldown after enhance / first-fight opening CD
- Whether S3 also grants Focus (community claims — omit / UNSURE)
- Exact Wings of Liberation damage coefficients
- Skill enhance paths sparsely shown on epic7db

## Object

```ts
{
  id: "saria",
  name: "Saria",
  short: "Saria",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["extra-turn-punisher", "aoe-focus-nuke", "team-invincibility", "attack-buff"],
  tags: ["single-target", "aoe", "focus", "dispel", "invincibility", "attack-buff", "cr-push", "soulburn", "elemental-neutral"],
  effects: ["s1-dual-target-dispel", "soulburn-ignore-er", "s2-focus-on-ally-extra-turn", "wings-of-liberation-aoe", "s3-team-invincibility-atk"],
  buffs: ["Invincibility", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Guidance of Nature / Wings of Liberation",
      scope: "self",
      tooltip: "Ally extra turn → +2 Focus + CR 30%; full Focus (5) → AoE +50% Hit Chance, elemental-neutral."
    }
  ],
  kit: "S1: hit 2; dispel chance; Soulburn ignore ER. S2: Focus on ally extra turns → Wings of Liberation. S3: team Invincibility + Atk.",
  defense: 5,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
