# Summertime Iseria

Short: SIseria

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: pre-release 2021-08 adjustment (STOVE; Suppression Attempt Attack 35%→50% max; Sword of Flowers detonate slightly up). No 2025–2026 Summertime Iseria skill balance found.

## Roles

bomber, strip, cleave, decrease-attack, cr-push

## Tags

single-target, aoe, bomb, detonate, strip, decrease-attack, cannot-crit, attack-passive, soulburn, extra-turn, self-speed

## Effects

cannot-crit-passive, free-first-soulburn, suppress-bomb-plant, bomb-detonate-on-s3, awaken-self-speed

## Buffs

Increase Speed

## Debuffs

Bomb, Decrease Attack

## Unique effects

### Suppression Attempt

Self/allies. Attack increases by 50% (fully enhanced; release notes: 35% base → 50% max). When attacking, cannot trigger a critical hit. First Soulburn costs 0 Souls. After an ally except caster uses an all-enemy attack, activates Suppress! once every 3 turns: all allies Combat Readiness +15%; plant Bomb on two random enemies for 2 turns.

### Sword of Flowers! (awakened)

Targets (AoE). Decrease Attack 2 turns; at end of turn detonates Bombs on the enemy. Awakened: Increase Speed of caster 2 turns.

### Are you the Culprit? strip

Targets. 75%→~100% chance each to dispel one buff twice. Soulburn (−20): extra turn.

## Kit

S1 Are you the Culprit? (+1 Soul): dispel one buff twice (chance skill-ups); Soulburn (−20) extra turn. S2 Suppression Attempt (passive): +50% Attack (enhanced), cannot crit, first Soulburn free; after ally AoE attack → Suppress! (ICD 3 turns): team CR +15% + Bomb on 2 random enemies 2 turns. S3 Sword of Flowers! (awakened, +2 Souls, 4→3 CD): AoE Decrease Attack 2 turns; end of turn detonate Bombs; awaken self Increase Speed 2 turns. Exact bomb detonate damage, Suppress! targeting rules, first-fight S3 opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact Bomb detonation damage formula
- Whether Attack passive is basic Attack only (release notes said “basic Attack”) vs all Attack — epic7db says “Attack increases by 50%”
- Fully enhanced strip chances on S1
- First-fight (opening) cooldown of Sword of Flowers!

## Object

```ts
{
  id: "summertime-iseria",
  name: "Summertime Iseria",
  short: "SIseria",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["bomber", "strip", "cleave", "decrease-attack", "cr-push"],
  tags: ["single-target", "aoe", "bomb", "detonate", "strip", "decrease-attack", "cannot-crit", "attack-passive", "soulburn", "extra-turn", "self-speed"],
  effects: ["cannot-crit-passive", "free-first-soulburn", "suppress-bomb-plant", "bomb-detonate-on-s3", "awaken-self-speed"],
  buffs: ["Increase Speed"],
  debuffs: ["Bomb", "Decrease Attack"],
  uniqueEffects: [
    {
      name: "Suppression Attempt",
      scope: "self-only",
      tooltip: "+50% Attack (enhanced), cannot crit, first Soulburn free; after ally AoE → Suppress! (3-turn ICD): team CR +15% + Bomb×2 random."
    },
    {
      name: "Sword of Flowers! (awakened)",
      scope: "targets",
      tooltip: "AoE Decrease Attack 2 turns; EOT detonate Bombs; awaken self Increase Speed 2 turns."
    }
  ],
  kit: "S1 Are you the Culprit? (+1 Soul): double single-buff strip; Soulburn (−20) extra turn. S2 Suppression Attempt: +50% Atk, no crit, free first SB; ally AoE → bombs + team CR. S3 Sword of Flowers! awakened (+2 Souls, 4→3 CD): AoE Decrease Attack + detonate Bombs; self Increase Speed.",
  defense: 3,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
