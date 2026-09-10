# Mui

Short: Mui

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2025-08-06 STOVE (Lash Target 100%/1 turn; Punishment dmg ↑; Grand Finale CR +30% per crit) — epic7db still shows pre-patch Target 75%/2t and CR 25%; kit checked 2026-09-04

## Roles

aoe-strip, aoe-bleed-stun, target, attack-buff, cr-chain

## Tags

single-target, aoe, target, bleed, stun, dispel, attack-buff, cr-push, soulburn, exclusive-equipment

## Effects

s1-target, s2-aoe-double-bleed-stun, soulburn-cd-reduce-2, s3-aoe-dispel2-cr-per-crit, awaken-s3-team-atk, ee-extra-turn-or-silence

## Buffs

Increase Attack (awakened S3, all allies 3 turns)

## Debuffs

Target, Bleed, Stun, Silence (EE option)

## Unique effects

### Grand Finale CR chain (post 2025-08-06)

Self. AoE; dispel 2 buffs; caster CR +30% per critical hit (was 25%). Awaken: also Increase Attack all allies 3 turns.

## Kit

S1 Lash (+1 Soul, post 2025-08-06): attack; 100% Target 1 turn (STOVE; epic7db lags 75%/2t). S2 Punishment (+2 Souls, 4 CD): AoE; chance each for two Bleeds 2 turns + Stun 1 turn (enhanced ~130%); Soulburn (−20): all skill CD −2. S3 Grand Finale (+2 Souls, 6→5 CD): AoE dispel 2; CR +30%/crit; awaken team Atk 3 turns. EE A Rabbit's Wild Nature: Punishment effect chance +10%; or Grand Finale 35% extra turn; or silence highest-CR enemy 1 turn.

## Defense / offense

3 / 7

## Unsure

- Exact fully enhanced Bleed/Stun % after 2025-08-06 damage bump
- Whether Lash enhance still adds effect chance after STOVE set base to 100%
- First-fight opening S3 cooldown
- Exact EE silence targeting wording

## Object

```ts
{
  id: "mui",
  name: "Mui",
  short: "Mui",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-strip", "aoe-bleed-stun", "target", "attack-buff", "cr-chain"],
  tags: ["single-target", "aoe", "target", "bleed", "stun", "dispel", "attack-buff", "cr-push", "soulburn", "exclusive-equipment"],
  effects: ["s1-target", "s2-aoe-double-bleed-stun", "soulburn-cd-reduce-2", "s3-aoe-dispel2-cr-per-crit", "awaken-s3-team-atk", "ee-extra-turn-or-silence"],
  buffs: ["Increase Attack"],
  debuffs: ["Target", "Bleed", "Stun", "Silence"],
  uniqueEffects: [
    {
      name: "Grand Finale CR chain",
      scope: "self",
      tooltip: "Post 2025-08-06: AoE dispel 2; CR +30% per crit; awaken team Atk 3 turns."
    }
  ],
  kit: "S1 Lash: 100% Target 1t (STOVE). S2 Punishment: AoE double Bleed + Stun; Soulburn CD−2. S3 Grand Finale: dispel 2; CR +30%/crit; awaken team Atk. EE: effect chance / extra turn / silence.",
  defense: 3,
  offense: 7,
  baseSpeed: 111,
  verified: false
}
```
