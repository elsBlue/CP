# Benimaru

Short: Benimaru

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 119

Patch / date used: 2026-09-04 (limited release 2023-05-11; no later balance listing found in 2025–2026 previews checked)

## Roles

dps, control, cleave

## Tags

defbreak, soulburn, barrier, cr-push, aoe, extra-turn

## Effects

debuff-dispel, increase-cr

## Buffs

Multilayer Barrier

## Debuffs

Decrease Defense

## Unique effects

### Multilayer Barrier

Self-only. Granted by Universal Perception after an enemy’s extra turn (among other triggers in that passive). Increases Move Out of the Way damage; doubles Fighting Spirit gained from Show No Mercy; Hell Flare gains additional Defense penetration while Multilayer Barrier is active.

### Fighting Spirit / Hell Flare

Self-only. At the start of the first battle, gains 50 Fighting Spirit. After attacking, when Fighting Spirit is full, consumes all Fighting Spirit to activate Hell Flare: Attacks all enemies with a dark flame sphere. Penetrates the target's Defense by 30%, and when the caster is granted Multilayer Barrier, penetrates the target's Defense by an additional 30%.

### Universal Perception (extra-turn reaction)

Self-only. At the start of an enemy's extra turn, dispels all debuffs from the caster and grants Multilayer Barrier for 2 turns before increasing Combat Readiness (40% base; +3% per S2 enhancement → 55% fully enhanced). Can only be activated once every 2 turns.

## Kit

S1 Move Out of the Way (+1 Soul): cuts the enemy; damage increases when Multilayer Barrier is active. Soulburn (−10 Souls): increases damage dealt. S2 Universal Perception (passive): start of first battle +50 Fighting Spirit; on enemy extra turn (once/2 turns): full self cleanse + Multilayer Barrier 2 turns + CR push; after attacking with full Fighting Spirit, spend all FS for Hell Flare (AoE, 30% pen / +30% pen with Multilayer Barrier). S3 Show No Mercy (awakened, +3 Souls, 5-turn cooldown, −1 → 4): attacks one enemy, Decrease Defense for 2 turns, then increases Combat Readiness of the ally with the highest Combat Readiness except the caster by 15%; Fighting Spirit gain doubled while Multilayer Barrier is active (Fighting Spirit amount per use UNSURE if not on card). First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: reacts to enemy Extra Turn; Hell Flare is a follow-up AoE (not Dual Attack).

## Defense / offense

3 / 8

## Unsure

- First-fight (opening) cooldown of Show No Mercy
- Exact Fighting Spirit gained per Show No Mercy use (community often cites 25; not on epic7db skill card)
- Exact EN tooltip for Multilayer Barrier beyond skill references

## Object

```ts
{
  id: "benimaru",
  name: "Benimaru",
  short: "Benimaru",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "control", "cleave"],
  tags: ["defbreak", "soulburn", "barrier", "cr-push", "aoe", "extra-turn"],
  effects: ["debuff-dispel", "increase-cr"],
  buffs: ["Multilayer Barrier"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Multilayer Barrier",
      scope: "self-only",
      tooltip: "Granted for 2 turns after an enemy's extra turn (with cleanse + CR). Boosts S1 damage; doubles S3 Fighting Spirit gain; Hell Flare gains +30% Defense penetration while active."
    },
    {
      name: "Hell Flare",
      scope: "self-only",
      tooltip: "Attacks all enemies with a dark flame sphere. Penetrates the target's Defense by 30%, and when the caster is granted Multilayer Barrier, penetrates the target's Defense by an additional 30%."
    },
    {
      name: "Universal Perception",
      scope: "self-only",
      tooltip: "At the start of the first battle, gains 50 Fighting Spirit. At the start of an enemy's extra turn, dispels all debuffs from the caster and grants Multilayer Barrier for 2 turns before increasing Combat Readiness. Once every 2 turns. Full Fighting Spirit after attack triggers Hell Flare."
    }
  ],
  kit: "S1 Move Out of the Way (+1 Soul): more damage with Multilayer Barrier; Soulburn (−10) more damage. S2 Universal Perception: +50 FS at first battle; on enemy Extra Turn (2-turn ICD): cleanse + Multilayer Barrier 2 turns + CR; full FS → Hell Flare AoE pen. S3 Show No Mercy awakened (+3 Souls, 5→4 CD): Decrease Defense 2 turns + ally highest-CR (except self) CR +15%; FS gain doubled with Multilayer Barrier.",
  defense: 3,
  offense: 8,
  baseSpeed: 119,
  verified: false
}
```
