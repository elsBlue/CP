# Yuna

Short: Yuna

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2024-07-18 STOVE (Homing Laser CR rework; Meteor Cannon extra turn moved to Upgrade) — no later RGB Yuna skill balance listing found in checked 2025–2026 previews; kit per epic7db 2026-09-04 (Attack buff duration 2 vs 3 conflict noted)

## Roles

cr-battery, attack-buff, aoe-dps, extra-turn

## Tags

aoe, cr-push, increase-attack, increase-speed, soulburn, extra-turn

## Effects

s1-aoe-self-cr-ally-cr, soulburn-s1-damage, s2-team-atk-extra-turn, awaken-speed-on-s2, s3-aoe-fewer-enemies-scaling, ee-cr-or-greater-atk-or-s3-damage

## Buffs

Increase Attack, Increase Speed (awaken)

## Debuffs

(none)

## Unique effects

### Meteor Cannon fewer-enemies scaling

Enemies. When ≤3 enemies remain, damage increases as enemies become fewer.

### Upgrade extra turn

Self. Grants Extra Turn after buffing allies (post-2024-07-18 design: extra turn on Upgrade, not Meteor Cannon).

## Kit

S1 Homing Laser (+1 Soul): AoE; caster CR +15%; all other allies CR +5% each. Soulburn (−10): increases damage. S2 Upgrade (+1 Soul, 5→4 CD): Increase Attack all allies (Skills card 3 turns; awaken section 2 turns → UNSURE duration); Extra Turn; awaken also Increase Speed (awaken text pairs Attack+Speed for 2 turns). S3 Meteor Cannon (+3 Souls, no CD on card): AoE; fewer-enemies damage scaling. EE Small Drone Tuna: Homing Laser +1% CR per target; or Upgrade 30% each Greater Increase Attack 2 turns; or Meteor Cannon +30% damage. Whether S3 has cooldown: card shows None — UNSURE if client differs. Attack buff duration 2 vs 3: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Increase Attack duration on Upgrade (2 vs 3 turns across epic7db sections)
- Whether Meteor Cannon has a hidden cooldown
- Exact fewer-enemies damage steps
- First-fight availability of Upgrade

## Object

```ts
{
  id: "yuna",
  name: "Yuna",
  short: "Yuna",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["cr-battery", "attack-buff", "aoe-dps", "extra-turn"],
  tags: ["aoe", "cr-push", "increase-attack", "increase-speed", "soulburn", "extra-turn"],
  effects: ["s1-aoe-self-cr-ally-cr", "soulburn-s1-damage", "s2-team-atk-extra-turn", "awaken-speed-on-s2", "s3-aoe-fewer-enemies-scaling", "ee-cr-or-greater-atk-or-s3-damage"],
  buffs: ["Increase Attack", "Increase Speed"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Meteor Cannon scaling",
      scope: "enemies",
      tooltip: "With ≤3 enemies, damage rises as count falls. Exact steps UNSURE."
    }
  ],
  kit: "S1 Homing Laser: AoE + self CR 15% + allies 5%; Soulburn (−10) dmg. S2 Upgrade: team Atk (2t vs 3t UNSURE) + Extra Turn; awaken + Speed. S3 Meteor Cannon: AoE fewer-enemy scaling. EE: CR/target, Greater Atk chance, or +30% S3 dmg. Prefer 2024-07-18 STOVE topology.",
  defense: 3,
  offense: 7,
  baseSpeed: 112,
  verified: false
}
```
