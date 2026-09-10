# Lua

Short: Lua

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-04 (no Lua hero skill balance listing found in 2025–2026 STOVE previews checked; EE added 2026-06-04 STOVE — exact EE option text not in scraped notice; kit per epic7db 2026-09-04)

## Roles

strip, sleep, skill-cooldown, beguile, speed-buff, defense-break

## Tags

single-target, aoe, strip, sleep, skill-cooldown, beguile, decrease-defense, increase-speed, soulburn, extra-turn

## Effects

s1-decrease-defense, s2-strip-sleep-extra-turn-awaken, s3-aoe-strip-cd-beguile-speed, soulburn-ignore-er-on-s3, ee-added-2026-06-04-text-unsure

## Buffs

Increase Speed

## Debuffs

Decrease Defense, Sleep, Beguile

## Unique effects

### Beguile

Enemy (Heroes only). At end of target's turn: deals additional damage to all allies of the target except the target ≡ 10% of each ally's max Health; then Beguile is dispelled once activated.

## Kit

S1 Folding Fan (+1 Soul): attack; 50% (enhanceable) Decrease Defense 2 turns. S2 Butterfly Reverie (+2 Souls, 4 CD): strip 2 buffs; Sleep 1 turn; awaken grants caster Extra Turn. S3 Sweet Talk (+2 Souls, 5→4 CD): dispel 1 buff all enemies; +1 skill cooldown all; Beguile; Increase Speed all allies 2 turns. Soulburn (−20): ignores Effect Resistance. EE added 2026-06-04 — option effects: UNSURE (notice image-only). Exact S1 enhanced Defense-break % path: card shows 50% base. First-fight opening CD: UNSURE.

## Defense / offense

2 / 6

## Unsure

- Exclusive Equipment option texts (added 2026-06-04; not in text scrape)
- First-fight (opening) S3 cooldown
- Whether Beguile damage % is still exactly 10% max HP in current client

## Object

```ts
{
  id: "lua",
  name: "Lua",
  short: "Lua",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "sleep", "skill-cooldown", "beguile", "speed-buff", "defense-break"],
  tags: ["single-target", "aoe", "strip", "sleep", "skill-cooldown", "beguile", "decrease-defense", "increase-speed", "soulburn", "extra-turn"],
  effects: ["s1-decrease-defense", "s2-strip-sleep-extra-turn-awaken", "s3-aoe-strip-cd-beguile-speed", "soulburn-ignore-er-on-s3", "ee-added-2026-06-04-text-unsure"],
  buffs: ["Increase Speed"],
  debuffs: ["Decrease Defense", "Sleep", "Beguile"],
  uniqueEffects: [
    {
      name: "Beguile",
      scope: "enemy",
      tooltip: "End of target turn: damage to target's allies except target ∝ 10% their max HP; then dispelled. Heroes only."
    }
  ],
  kit: "S1 Folding Fan: Decrease Defense chance. S2 Butterfly Reverie: strip 2 + Sleep; awaken Extra Turn. S3 Sweet Talk: AoE strip 1 + CD+1 + Beguile + ally Speed; Soulburn (−20) ignore ER. EE 2026-06-04 options UNSURE.",
  defense: 2,
  offense: 6,
  baseSpeed: 120,
  verified: false
}
```
