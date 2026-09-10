# Tori

Short: Tori

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 116

Patch / date used: 2026-03-12 balance (STOVE Update Content; Cascade cooldown 2→1 turn; Heart Over Grace grants Increase Hit Chance to caster). Prefer STOVE — epic7db still shows Cascade once every 2 turns and omits Hit Chance on S3.

## Roles

dps, buffer, cascade, barrier, damage-cap

## Tags

single-target, barrier, undispellable-buffs, cascade, damage-cap, soulburn, team-attack, team-speed, self-hit-chance, extra-turn

## Effects

undispellable-self-buffs, cascade-from-buff-count, damage-received-cap, free-soulburn-while-cascade, awaken-extra-turn, self-hit-chance-on-s3

## Buffs

Barrier, Increase Attack, Increase Speed, Increase Hit Chance, Cascade

## Debuffs


## Unique effects

### Cascade (post 2026-03-12)

Self-only. At start of turn, 20% chance per buff on caster to grant Cascade. Cascade cooldown 1 turn (STOVE; epic7db still says every 2 turns — prefer STOVE). Cascade enables chaining stronger attacks / free Soulburn on Overreaction while granted (exact Cascade attack trigger / damage amp journal: UNSURE — STOVE describes chaining powerful attacks through Cascade).

### Delusional Runway

Self-only. Buffs granted to the caster are undispellable. Damage suffered in one attack does not exceed 51% of max Health (fully enhanced path). Cascade roll at turn start as above.

### Heart Over Grace (post 2026-03-12, awakened)

Allies / self. Increase Attack and Increase Speed all allies 3 turns; grants Increase Hit Chance to caster 3 turns (STOVE; missing on epic7db). Awakened: also grants extra turn.

## Kit

S1 Overreaction (+1 Soul): attack + Barrier 1 turn ∝ Attack; Soulburn (−20): greatly increases damage, no Dual Attack; while Cascade granted, Soulburn costs 0 Souls. S2 Delusional Runway (passive, post 2026-03-12 Cascade ICD): undispellable self buffs; damage cap 51% max HP (enhanced); start of turn 20%/buff chance to grant Cascade (1-turn Cascade CD per STOVE). S3 Heart Over Grace (awakened, +3 Souls, 5→4 CD, post 2026-03-12): team Increase Attack + Increase Speed 3 turns; self Increase Hit Chance 3 turns; awaken extra turn. Exact Cascade combat effect beyond free SB / “powerful attacks”, base damage-cap %, first-fight S3 opening CD: UNSURE.

## Defense / offense

6 / 8

## Unsure

- Exact Cascade journal: whether it auto-casts an empowered S1 vs only enables free Soulburn / damage amp
- Base (pre-skill-up) damage-received limit %
- Whether Increase Hit Chance also raises Cascade proc reliability only via more buffs (Hit Chance buff counts as a buff)
- First-fight (opening) cooldown of Heart Over Grace
- epic7db lag on Cascade ICD and S3 Hit Chance — always prefer STOVE 2026-03-12

## Object

```ts
{
  id: "tori",
  name: "Tori",
  short: "Tori",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "buffer", "cascade", "barrier"],
  tags: ["single-target", "barrier", "undispellable-buffs", "cascade", "damage-cap", "soulburn", "team-attack", "team-speed", "self-hit-chance", "extra-turn"],
  effects: ["undispellable-self-buffs", "cascade-from-buff-count", "damage-received-cap", "free-soulburn-while-cascade", "awaken-extra-turn", "self-hit-chance-on-s3"],
  buffs: ["Barrier", "Increase Attack", "Increase Speed", "Increase Hit Chance", "Cascade"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Cascade (post 2026-03-12)",
      scope: "self-only",
      tooltip: "20%/buff chance at turn start; Cascade CD 1 turn (STOVE). Enables free Overreaction Soulburn while granted; exact attack trigger UNSURE."
    },
    {
      name: "Delusional Runway",
      scope: "self-only",
      tooltip: "Self buffs undispellable; damage cap 51% max HP (enhanced); Cascade roll at turn start."
    },
    {
      name: "Heart Over Grace (post 2026-03-12)",
      scope: "allies",
      tooltip: "Team Increase Attack + Speed 3 turns; self Increase Hit Chance 3 turns; awaken extra turn."
    }
  ],
  kit: "S1 Overreaction (+1 Soul): Barrier ∝ Atk; Soulburn (−20) more dmg (free while Cascade). S2 Delusional Runway (2026-03-12): undispellable buffs; damage cap; Cascade 20%/buff (1-turn CD). S3 Heart Over Grace awakened (2026-03-12, +3 Souls, 5→4 CD): team Atk/Speed; self Hit Chance; extra turn.",
  defense: 6,
  offense: 8,
  baseSpeed: 116,
  verified: false
}
```
