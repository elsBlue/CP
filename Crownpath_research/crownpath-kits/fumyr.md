# Fumyr

Short: Fumyr

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2025-09-25 STOVE balance (Elemental Wisdom → Focus; Fruit of Knowledge condition eased; Light/Dark count) — prefer STOVE over epic7db/epic7x which still showed Elemental Wisdom as of 2026-09-04 scrapes

## Roles

strip, sleep, defense-break, fixed-damage, buff-duration-cut

## Tags

single-target, aoe, decrease-attack, sleep, decrease-defense, decrease-speed, buff-duration-cut, fixed-damage, focus, soulburn, ignore-effect-resistance

## Effects

decrease-attack, focus-from-ally-elements, fruit-of-knowledge-strip-sleep-defbreak, buff-duration-decrease, decrease-speed, fixed-damage-with-resource, awaken-cr-push, soulburn-ignore-er

## Buffs

(none baseline; Focus is a resource)

## Debuffs

Decrease Attack, Sleep, Decrease Defense, Decrease Speed

## Unique effects

### Focus / Fruit of Knowledge (post-2025-09-25 STOVE)

Self → enemies (AoE). At start of battle: gain 1 Focus per ally element. At start of turn: gain 1 Focus. After attacking, when Focus is full: consume all and activate Fruit of Knowledge — dispel all buffs from all enemies; Sleep 2 turns (STOVE cites 100%); Decrease Defense 2 turns (STOVE cites 85%). Replaces prior Elemental Wisdom Fire/Earth-only stacking.

### Sensory Dissection fixed damage

Target. On successful attack, deals fixed damage when caster has the stacking resource (STOVE replaced Elemental Wisdom with Focus — whether fixed damage now scales with Focus stacks: UNSURE; pre-patch scaled 3,000–9,000 with wisdom stacks). Awaken: also CR −30%. Soulburn: Ignore Effect Resistance (soul cost cited −20 on epic7db / −10 on older epic7x — UNSURE).

## Kit

S1 Substratal Experimentation (+1 Soul): Decrease Attack 2 turns (50% base → higher with enhance). S2 Elemental Inquiry (passive, post-STOVE Focus version): Focus gain from ally elements + per turn; full Focus → Fruit of Knowledge (full strip + Sleep + Decrease Defense). S3 Sensory Dissection (+3 Souls, 5→4 CD): buff duration −1 turn; Decrease Speed 2 turns; fixed damage with resource stacks; awaken also CR −30%. Soulburn: Ignore Effect Resistance. Prefer STOVE Focus kit; ignore lagging Elemental Wisdom text on wikis. Exact Focus max, fixed-damage scaling after rework, and soulburn cost: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

3 / 6

## Unsure

- Exact Focus maximum / “full” threshold after rework (pre-patch wisdom capped at 3)
- Whether S3 fixed damage still 3000–9000 and now keys off Focus
- Soulburn soul cost (−10 vs −20 source conflict)
- Whether Fruit of Knowledge still has an internal once-per-N-turns lock after Focus rework
- First-fight (opening) cooldown
- epic7db/epic7x lagged pre-9/25 kit at scrape time

## Object

```ts
{
  id: "fumyr",
  name: "Fumyr",
  short: "Fumyr",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "sleep", "defense-break", "fixed-damage", "buff-duration-cut"],
  tags: ["single-target", "aoe", "decrease-attack", "sleep", "decrease-defense", "decrease-speed", "buff-duration-cut", "fixed-damage", "focus", "soulburn", "ignore-effect-resistance"],
  effects: ["decrease-attack", "focus-from-ally-elements", "fruit-of-knowledge-strip-sleep-defbreak", "buff-duration-decrease", "decrease-speed", "fixed-damage-with-resource", "awaken-cr-push", "soulburn-ignore-er"],
  buffs: [],
  debuffs: ["Decrease Attack", "Sleep", "Decrease Defense", "Decrease Speed"],
  uniqueEffects: [
    {
      name: "Fruit of Knowledge",
      scope: "targets",
      tooltip: "Post-2025-09-25: on full Focus after attack — full AoE strip, Sleep (100% STOVE), Decrease Defense (85% STOVE)."
    }
  ],
  kit: "S1 Substratal Experimentation (+1 Soul): Decrease Attack. S2 (STOVE Focus): Focus per ally element + per turn; full → Fruit of Knowledge strip/Sleep/Decrease Defense. S3 Sensory Dissection (+3 Souls, 5→4 CD): buff cut + Decrease Speed + fixed dmg (Focus scaling UNSURE); awaken CR −30%; Soulburn Ignore ER.",
  defense: 3,
  offense: 6,
  baseSpeed: 115,
  verified: false
}
```
