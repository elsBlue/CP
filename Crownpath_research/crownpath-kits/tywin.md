# Tywin

Short: Tywin

Element: Ice

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-06-05 STOVE (Sword Storm → Decrease Defense 50% base; Commanding Shout once every 1 turn; EE Effect 1 → +15% Decrease Defense chance) — epic7db still shows pre-buff dispel / once-every-2-turns / old EE; prefer STOVE; kit checked 2026-09-04

## Roles

back-row-cleanse, immunity, barrier, aoe-defense-break, defense-buff

## Tags

single-target, aoe, decrease-defense, increase-defense, immunity, barrier, cleanse, movement-immunity, soulburn

## Effects

s1-decrease-defense-hp-scaling, soulburn-100-def-break, passive-move-immune-commanding-shout-1t, awaken-barrier-on-shout, s3-aoe-def-break-team-defense, ee-def-break-chance-15-per-stove

## Buffs

Immunity, Barrier, Increase Defense

## Debuffs

Decrease Defense

## Unique effects

### Tactical Command / Commanding Shout (post-2026-06-05)

Back-row ally + self. Tywin immune to movement-preventing debuffs (Stun, Sleep, etc.). When back-row ally has a movement-preventing debuff after being attacked: Commanding Shout — dispel all debuffs; Immunity 2 turns; awaken also Barrier 2 turns ∝ caster max Health. **Can activate once every 1 turn (STOVE; epic7db still says 2).**

## Kit

S1 Sword Storm (+1 Soul): **50% Decrease Defense 2 turns (STOVE 2026-06-05; epic7db still shows dispel)**; damage ↑ ∝ max Health. Soulburn (−10): 100% effect chance. S2 Tactical Command (passive): movement-debuff immunity; back-row movement-debuff after attack → Commanding Shout (cleanse + Immunity; awaken + Barrier); **once every 1 turn (STOVE)**. S3 All-Out Attack (+3 Souls, 5→4 CD): AoE; 100% Decrease Defense 2 turns; Increase Defense all allies 2 turns; damage ↑ ∝ max Health. EE Estyria Effect 1: **+15% Sword Storm Decrease Defense chance (STOVE)**; Effect 2: back-row CR +10% on Sword Storm; Effect 3: +20% Commanding Shout barrier. Exact barrier coefficient: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

8 / 4

## Unsure

- Exact Commanding Shout barrier vs max Health
- Whether EE Effect 2/3 texts unchanged after 2026-06-05 (STOVE only detailed Effect 1)
- First-fight (opening) S3 cooldown
- Fully enhanced S1 Decrease Defense chance with EE (50%+enhances+15% EE)

## Object

```ts
{
  id: "tywin",
  name: "Tywin",
  short: "Tywin",
  element: "ice",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["back-row-cleanse", "immunity", "barrier", "aoe-defense-break", "defense-buff"],
  tags: ["single-target", "aoe", "decrease-defense", "increase-defense", "immunity", "barrier", "cleanse", "movement-immunity", "soulburn"],
  effects: ["s1-decrease-defense-hp-scaling", "soulburn-100-def-break", "passive-move-immune-commanding-shout-1t", "awaken-barrier-on-shout", "s3-aoe-def-break-team-defense", "ee-def-break-chance-15-per-stove"],
  buffs: ["Immunity", "Barrier", "Increase Defense"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Commanding Shout",
      scope: "allies",
      tooltip: "Back-row movement-debuff after attack (once/1 turn per STOVE): full cleanse + Immunity 2t; awaken + Barrier ∝ max HP."
    }
  ],
  kit: "S1 Sword Storm: Decrease Defense (STOVE 2026-06-05; not dispel); ∝ max HP; Soulburn (−10) 100%. S2 Tactical Command: move-immune; Commanding Shout once/1 turn (STOVE; epic7db lags at 2). S3 All-Out Attack: AoE Def break + team Defense. EE1 +15% Def-break chance (STOVE).",
  defense: 8,
  offense: 4,
  baseSpeed: 106,
  verified: false
}
```
