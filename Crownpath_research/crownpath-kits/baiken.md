# Baiken

Short: Baiken

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2026-09-04 (no 2025–2026 balance listing found; Guilty Gear collab kit per epic7db treated as current)

## Roles

dps, bleed, detonator

## Tags

bleed, detonate, cr-push, extra-turn, soulburn, cooldown-reduction, ignore-effect-resistance

## Effects

bleed-detonate, crit-cd-reduction, crit-extra-turn

## Buffs

none

## Debuffs

Bleed

## Unique effects

### Tsurane Sanzu-watashi (bleed stack + awaken extra turn)

Targets (single). Fully enhanced: 80% chance each of three Bleeds 2 turns; one Bleed ignores Effect Resistance. Awakened: critical hit grants an extra turn.

### Garyo Tensei (detonate)

Targets (single). Detonates Bleeds on the enemy at end of turn. Critical hit: all allies CR +25% base (enhancements +5%/+5% → 35% fully enhanced). Soulburn (−10): increases damage dealt.

## Kit

S1 Tatami Gaeshi (+1 Soul): 70% chance each two Bleeds 2 turns (enhancements raise chance); critical hit reduces caster skill cooldowns by 1 turn. S2 Tsurane Sanzu-watashi (+1 Soul, 4 CD): three Bleeds (80% FE each; one ignores ER). Awaken: crit → extra turn. S3 Garyo Tensei (+2 Souls, 7 CD): detonate Bleeds EOT; crit → team CR push (25%→35% FE). Soulburn (−10): more damage. Exact detonation damage formula and whether S2 awaken extra turn is shown on live card: UNSURE (epic7db awaken section has it; main S2 card omits).

## Defense / offense

2 / 8

## Unsure

- Exact bleed detonation damage formula on Garyo Tensei
- Whether main skill card omits awaken extra turn (awaken section confirms it)
- First-fight opening CDs (S2/S3)
- No 2025–2026 STOVE balance listing found

## Object

```ts
{
  id: "baiken",
  name: "Baiken",
  short: "Baiken",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "bleed", "detonator"],
  tags: ["bleed", "detonate", "cr-push", "extra-turn", "soulburn", "cooldown-reduction", "ignore-effect-resistance"],
  effects: ["bleed-detonate", "crit-cd-reduction", "crit-extra-turn"],
  buffs: [],
  debuffs: ["Bleed"],
  uniqueEffects: [
    {
      name: "Tsurane Sanzu-watashi",
      scope: "targets",
      tooltip: "Three Bleeds (one ignores ER). Awaken: crit → extra turn."
    },
    {
      name: "Garyo Tensei",
      scope: "targets",
      tooltip: "Detonate Bleeds EOT; crit → team CR push. Soulburn increases damage."
    }
  ],
  kit: "S1 Tatami Gaeshi (+1): 2× Bleed; crit −1 CD all skills. S2 Tsurane (+1, 4 CD): 3× Bleed (1 ignores ER); awaken crit→extra turn. S3 Garyo Tensei (+2, 7 CD): detonate Bleeds; crit team CR 25%→35%. Soulburn (−10): more dmg. Detonate formula UNSURE.",
  defense: 2,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
