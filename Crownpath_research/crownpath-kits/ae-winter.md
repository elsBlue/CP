# ae-WINTER

Short: ae-WIN

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: 2026-09-04 (no balance listing found for ae-WINTER in 2025–2026 previews checked; collab kit treated as current)

## Roles

opener, control, dps, cleanse

## Tags

stun, soulburn, fixed-dmg, immunity, evade, cr-push, extra-turn

## Effects

debuff-dispel, increase-cr, ally-cd-decrease

## Buffs

Stealth, Immunity

## Debuffs

Stun

## Unique effects

### Level Up

Self-only. Grants Immunity to the caster for 2 turns and fully resets skill cooldown of Black Out.

### Next Level (passive)

Self-only. At the start of the battle and at the end of the turn, grants Stealth for 1 turn. After an enemy uses a non-attack skill, dispels all debuffs from the caster and activates Level Up. The debuff dispelling effect and Level Up can only be activated once every 2 turns (fully enhanced; base internal CD 3 before S2 enhancement).

### Black Out fixed damage stacks

Self-only. A critical hit deals an additional 5000 fixed damage. Increases fixed damage by 5000 every time this skill is used, stacking up to 3 times.

## Kit

S1 Rapid Cut (+1 Soul): attacks one enemy with a sword; chance to Stun for 1 turn (fully enhanced 40% on epic7db; base before effect-chance enhancements UNSURE, commonly 30%). Soulburn (−10 Souls): stun chance 100%. S2 Next Level (passive): Stealth at battle start and end of turn; on enemy non-attack skill, cleanse all debuffs on caster and activate Level Up (Immunity 2 turns + full Black Out CD reset), once every 2 turns when enhanced. S3 Black Out (+3 Souls, 6-turn cooldown, −1 from enhancements → 5): attacks one enemy with various weapons, Stuns for 2 turns, and (awakened) increases caster Combat Readiness by 50%; critical hits add stacking fixed damage (5000 + 5000 per prior use, max 3 stacks). First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

5 / 6

## Unsure

- First-fight (opening) cooldown of Black Out
- Exact base (pre-enhancement) Rapid Cut stun % (epic7db lists 40% on the skill card consistent with fully enhanced)
- Whether “evade” tag is appropriate for Stealth (Stealth is listed as buff; evade is in the allowed tags list)
- ally-cd-decrease used for Black Out full reset via Level Up (closest allowed effect; not a generic ally CD decrease)

## Object

```ts
{
  id: "ae-winter",
  name: "ae-WINTER",
  short: "ae-WIN",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "control", "dps", "cleanse"],
  tags: ["stun", "soulburn", "fixed-dmg", "immunity", "evade", "cr-push"],
  effects: ["debuff-dispel", "increase-cr", "ally-cd-decrease"],
  buffs: ["Stealth", "Immunity"],
  debuffs: ["Stun"],
  uniqueEffects: [
    {
      name: "Level Up",
      scope: "self-only",
      tooltip: "Grants Immunity to the caster for 2 turns and fully resets skill cooldown of Black Out."
    },
    {
      name: "Next Level",
      scope: "self-only",
      tooltip: "At the start of the battle and at the end of the turn, grants Stealth for 1 turn. After an enemy uses a non-attack skill, dispels all debuffs from the caster and activates Level Up. The debuff dispelling effect and Level Up can only be activated once every 2 turns."
    },
    {
      name: "Black Out fixed damage stacks",
      scope: "self-only",
      tooltip: "A critical hit will deal an additional 5000 fixed damage. Increases fixed damage by 5000 every time this skill is used, stacking up to 3 times."
    }
  ],
  kit: "S1 Rapid Cut (+1 Soul): sword attack, Stun (40% fully enhanced on epic7db); Soulburn (−10) Stun 100%. S2 Next Level (passive): Stealth at start/end of turn; on enemy non-attack, cleanse + Level Up (Immunity 2 turns + Black Out full CD reset) every 2 turns enhanced. S3 Black Out (+3 Souls, 6→5 CD): Stun 2 turns, caster CR +50% awakened, crit fixed damage 5000 stacking ×3. First-fight CD UNSURE.",
  defense: 5,
  offense: 6,
  baseSpeed: 118,
  verified: false
}
```
