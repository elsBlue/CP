# Festive Eda

Short: FEda

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-04 (kit per official 2025-08-06 balance; epic7db skill card still lagged pre-patch at fetch)

## Roles

control, strip, cleave, opener

## Tags

stun, strip, defbreak, evade, aoe, cr-cut, soulburn, ignore-er

## Effects

buff-dispel, debuff-dispel, decrease-cr, extra-turn

## Buffs

Stealth, Shyness

## Debuffs

Stun, Decrease Defense

## Unique effects

### Shyness

Self-only. Granted for 1 turn at start of turn when not stealthed (with full cleanse). After attacking while granted Shyness, activates Expected Outcome.

### Expected Outcome (post–2025-08-06)

Team-wide (enemies). Attacks all enemies, decreasing Combat Readiness by 50% and inflicting additional damage proportional to the caster's max Health. (No longer strips or Decrease Defense.)

### It's Okay, It Won't Show stealth

Self-only. At the start of battle and at the end of the turn, grants Stealth for 1 turn.

## Kit

S1 I'm Embarrassed (+1 Soul, post–2025-08-06): bubble attack, chance to Stun for 1 turn (40% base; +25% when stealthed). Soulburn Extra Turn removed in this patch. S2 It's Okay, It Won't Show (passive): Stealth at battle start and end of turn; at start of turn when not stealthed, dispel all debuffs and grant Shyness for 1 turn (start-of-turn ICD: UNSURE, sources cite 4 or 5 turns, −1 from enhancement); after attacking with Shyness, Expected Outcome (AoE CR −50% + additional damage ∝ max Health). S3 Let Me Give It a Try (post–2025-08-06, +3 Souls, 4-turn cooldown): AoE bubbles, dispel two buffs, then chance to Decrease Defense for 2 turns (85% on post-patch guides; Seal/unable-to-be-buffed removed). Soulburn (−20 Souls): ignores Effect Resistance. Whether S3 remains immune to CD increase/decrease: UNSURE (pre-patch yes). First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

4 / 6

## Unsure

- First-fight (opening) cooldown of Let Me Give It a Try
- Shyness start-of-turn ICD (4 vs 5 turns across sources)
- Exact fully enhanced Decrease Defense chance on S3
- Whether S3 still ignores cooldown increase/decrease effects post-patch
- Exact EN tooltip for “additional damage proportional to max Health” on Expected Outcome

## Object

```ts
{
  id: "festive-eda",
  name: "Festive Eda",
  short: "FEda",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["control", "strip", "cleave", "opener"],
  tags: ["stun", "strip", "defbreak", "evade", "aoe", "cr-cut", "soulburn", "ignore-er"],
  effects: ["buff-dispel", "debuff-dispel", "decrease-cr"],
  buffs: ["Stealth", "Shyness"],
  debuffs: ["Stun", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Shyness",
      scope: "self-only",
      tooltip: "Granted for 1 turn at the start of the turn when not stealthed (with full cleanse). After attacking while granted Shyness, activates Expected Outcome."
    },
    {
      name: "Expected Outcome",
      scope: "team-wide",
      tooltip: "Attacks all enemies, decreasing Combat Readiness by 50% and inflicting additional damage proportional to the caster's max Health."
    },
    {
      name: "It's Okay, It Won't Show",
      scope: "self-only",
      tooltip: "At the start of battle and at the end of the turn, grants Stealth for 1 turn. Start-of-turn cleanse + Shyness when not stealthed (ICD UNSURE)."
    }
  ],
  kit: "S1 I'm Embarrassed (+1 Soul): Stun 40% (+25% if stealthed); S1 Soulburn Extra Turn removed 2025-08-06. S2 passive: Stealth start/end of turn; if not stealthed at turn start → cleanse + Shyness → Expected Outcome (AoE CR −50% + add'l dmg ∝ max HP). S3 Let Me Give It a Try (+3 Souls, 4 CD): AoE dispel 2 + Decrease Defense chance; Soulburn (−20) ignore ER.",
  defense: 4,
  offense: 6,
  baseSpeed: 120,
  verified: false
}
```
