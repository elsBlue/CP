# Sharun

Short: Sharun

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2025-08-06 STOVE (How Fragile venom 100%; Soulburn ignores Effect Resistance) — epic7db still shows 75% / old Soulburn; kit checked 2026-09-04

## Roles

venom, cd-push, aoe-strip-venom, barrier-support

## Tags

single-target, aoe, venom, skill-cooldown-increase, decrease-speed, barrier, random-buff, cr-push, soulburn, max-health-scaling

## Effects

s1-venom-cd-up, soulburn-ignore-er, s2-cr-from-enemy-buffs, s2-random-buff-barrier-highest-atk, s3-aoe-strip2-venom-cr, awaken-s3-speed-down

## Buffs

Random buff (ally), Barrier

## Debuffs

Venom, Decrease Speed (awaken S3), Skill cooldown increase

## Unique effects

### Just Trust Me

Self + ally. End of enemy turn: 5% chance per buff on that enemy to gain caster CR +20%. End of caster turn: random buff + Barrier (∝ caster max Health) 2 turns to highest-Attack ally except caster.

## Kit

S1 How Fragile (+1 Soul, post 2025-08-06): attack; 100% Venom 1 turn; if target has Venom, skill CD +1; Soulburn (−10): ignores Effect Resistance (STOVE; epic7db lags). S2 Just Trust Me (passive): CR from enemy buffs; end-turn buff+Barrier to highest Atk ally. S3 May You Perish (+3 Souls, 5→4 CD): AoE reduce buff durations by 2; Venom 2 turns; caster CR +50%; awaken also Decrease Speed 2 turns. Prefer STOVE for S1/Soulburn.

## Defense / offense

5 / 5

## Unsure

- Exact Barrier coefficient vs max Health
- Exact random buff pool
- Whether S1 still can enhance effect chance after STOVE 100% base
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "sharun",
  name: "Sharun",
  short: "Sharun",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["venom", "cd-push", "aoe-strip-venom", "barrier-support"],
  tags: ["single-target", "aoe", "venom", "skill-cooldown-increase", "decrease-speed", "barrier", "random-buff", "cr-push", "soulburn", "max-health-scaling"],
  effects: ["s1-venom-cd-up", "soulburn-ignore-er", "s2-cr-from-enemy-buffs", "s2-random-buff-barrier-highest-atk", "s3-aoe-strip2-venom-cr", "awaken-s3-speed-down"],
  buffs: ["Random buff", "Barrier"],
  debuffs: ["Venom", "Decrease Speed"],
  uniqueEffects: [
    {
      name: "Just Trust Me",
      scope: "self+ally",
      tooltip: "CR chance from enemy buffs; end turn random buff+Barrier to highest-Atk ally."
    }
  ],
  kit: "S1: 100% Venom + CD+1 if venomed; Soulburn ignore ER (STOVE). S2: CR + barrier support. S3: strip durations + Venom + CR; awaken Speed down.",
  defense: 5,
  offense: 5,
  baseSpeed: 106,
  verified: false
}
```
