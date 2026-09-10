# Rimuru

Short: Rimuru

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no Rimuru skill balance listing found in 2025–2026 STOVE previews checked; kit per epic7db — Tensura limited)

## Roles

buff-copy, counter-cr, fixed-damage-nuke, aoe-def-break

## Tags

single-target, random-buff, buff-copy, counter, cr-push, fixed-damage, decrease-defense, soulburn, elemental-neutral

## Effects

s1-random-buff, s2-copy-buffs-to-allies, be-ready-counter-cr, s3-fixed-dmg-by-buff-count, awaken-s3-aoe-def-break, soulburn-cd-reduce-2

## Buffs

Random buff (S1 self), copied buffs (team)

## Debuffs

Decrease Defense (awakened S3, all enemies when target buffed)

## Unique effects

### Analyze and Assess / Be Ready!

Self + allies. After attacking with a non-basic skill, if target buffed: copy 2 buffs to all allies (not undispellable). When an ally is attacked by a buffed enemy: Be Ready! (once/3 turns) — attack attacker; caster CR +30%.

### Devour It, Black Flame! fixed damage

Target. Successful attack: +5000 fixed damage, scaling with number of buffs on all allies up to 10000 fixed; unaffected by elemental disadvantage. Awaken: if target buffed, Decrease Defense all enemies 2 turns.

## Kit

S1 Okay, Shall I Get Started? (+1 Soul): attack; random buff self 1 turn. S2 Analyze and Assess (passive / Be Ready once/3 turns): buff copy after non-basic; Be Ready counter + CR. S3 Devour It, Black Flame! (+3 Souls, 5→4 CD): ST + fixed dmg; awaken AoE Def break if target buffed; Soulburn (−10): CD −2. Limited Tensura Warrior.

## Defense / offense

4 / 8

## Unsure

- Exact random buff pool on S1
- Exact Be Ready damage / whether S2 shows as active CD on some UIs
- Exact fixed-damage scaling per ally buff
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "rimuru",
  name: "Rimuru",
  short: "Rimuru",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["buff-copy", "counter-cr", "fixed-damage-nuke", "aoe-def-break"],
  tags: ["single-target", "random-buff", "buff-copy", "counter", "cr-push", "fixed-damage", "decrease-defense", "soulburn", "elemental-neutral"],
  effects: ["s1-random-buff", "s2-copy-buffs-to-allies", "be-ready-counter-cr", "s3-fixed-dmg-by-buff-count", "awaken-s3-aoe-def-break", "soulburn-cd-reduce-2"],
  buffs: ["Random buff", "Copied buffs"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Analyze and Assess / Be Ready!",
      scope: "self+allies",
      tooltip: "Copy 2 buffs after non-basic if target buffed; Be Ready counter + CR 30% once/3 turns vs buffed attacker."
    },
    {
      name: "Devour It, Black Flame! fixed damage",
      scope: "target",
      tooltip: "5000–10000 fixed ∝ ally buff count; elemental-neutral; awaken AoE Def break if target buffed."
    }
  ],
  kit: "S1: random buff. S2: copy buffs; Be Ready counter. S3: fixed dmg by buff count; awaken AoE Def break; Soulburn CD−2. Limited Tensura.",
  defense: 4,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
