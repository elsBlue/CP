# Senya

Short: Senya

Element: Earth

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 100

Patch / date used: 2026-09-04 (no RGB Senya skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Young Senya / Dragon Bride Senya; kit per epic7db)

## Roles

counter-bruiser, provoke, aoe-miss-provoke, team-barrier

## Tags

single-target, aoe, provoke, decrease-hit-chance, barrier, speed-buff, counter, no-crit, soulburn, exclusive-equipment, attack-scaling

## Effects

s1-provoke, s2-atk30-crit-resist-no-crit, grace-of-battlefield-barrier-speed, s3-aoe-miss-provoke, awaken-s3-counter-stance, soulburn-cd-reduce-2, ee-heal-or-barrier-or-atk-greater

## Buffs

Barrier, Increase Speed, Counterattack stance (awaken), Increase Attack (Greater) (EE)

## Debuffs

Provoke, Decrease Hit Chance

## Unique effects

### Indomitable Spirit / Grace of the Battlefield

Self + allies. Atk +30%; Critical Hit Resistance +50% (enhanceable); attacks cannot crit. When attacked with a non-critical hit: damage attacker ∝ caster Attack, then Grace of the Battlefield (once/2 turns) — Barrier all allies 2 turns ∝ Attack; Increase Speed caster 2 turns.

## Kit

S1 Spear of Vengeance (+1 Soul): attack; 75% Provoke 1 turn (+25% chance off-turn). S2 Indomitable Spirit (passive): Atk/Crit Resist/no-crit; non-crit hit → retaliate + Grace. S3 Dragon Slayer's Strike (+3 Souls, 5→4 CD): AoE; high chance Decrease Hit Chance 2 turns + Provoke 1 turn (enhanced ~185%); awaken Counterattack stance 2 turns; Soulburn (−10): CD −2. EE Grace of Madness: S1 heal ∝ Atk; or Grace barrier +20%; or S3 Increase Attack (Greater) 3 turns. RGB Senya only (≠ Young Senya / Dragon Bride Senya).

## Defense / offense

7 / 6

## Unsure

- Exact retaliate damage coefficient vs Attack
- Exact Barrier coefficient vs Attack
- Fully enhanced Crit Resist % (50% + enhance)
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "senya",
  name: "Senya",
  short: "Senya",
  element: "earth",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["counter-bruiser", "provoke", "aoe-miss-provoke", "team-barrier"],
  tags: ["single-target", "aoe", "provoke", "decrease-hit-chance", "barrier", "speed-buff", "counter", "no-crit", "soulburn", "exclusive-equipment", "attack-scaling"],
  effects: ["s1-provoke", "s2-atk30-crit-resist-no-crit", "grace-of-battlefield-barrier-speed", "s3-aoe-miss-provoke", "awaken-s3-counter-stance", "soulburn-cd-reduce-2", "ee-heal-or-barrier-or-atk-greater"],
  buffs: ["Barrier", "Increase Speed", "Counterattack", "Increase Attack (Greater)"],
  debuffs: ["Provoke", "Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Indomitable Spirit / Grace of the Battlefield",
      scope: "self+allies",
      tooltip: "Atk +30%; Crit Resist; no crit; non-crit hit → retaliate + team Barrier + self Speed (once/2 turns)."
    }
  ],
  kit: "S1: Provoke. S2: bruiser passive + Grace Barrier/Speed. S3 AoE Miss+Provoke; awaken counter stance; Soulburn CD−2. EE options. RGB ≠ Young/DB Senya.",
  defense: 7,
  offense: 6,
  baseSpeed: 100,
  verified: false
}
```
