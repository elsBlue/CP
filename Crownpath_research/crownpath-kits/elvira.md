# Elvira

Short: Elvira

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: 2024-01-18 STOVE balance + recall (Capturing Sacrifice / Blood Mana / Hit and Run / Exterminate) — no 2025–2026 RGB Elvira skill balance listing found (Tidal Rift Elvira is separate Dark unit); kit per STOVE 2024-01-18 + epic7db 2026-09-04

## Roles

strip, immortality, beguile, provoke, fighting-spirit-deny, penetrate

## Tags

single-target, aoe, strip, provoke, immortality, unhealable, decrease-defense, beguile, no-crit, soulburn, cd-immune-s3

## Effects

provoke-boost-when-immortal, er-increase-no-crit, fighting-spirit-deny-100, exterminate-strip-beguile, s3-full-strip-defbreak-immortality-penetrate, awaken-unhealable, soulburn-extra-turn, s3-immune-to-cd-change

## Buffs

Immortality

## Debuffs

Provoke, Decrease Defense, Unhealable, Beguile

## Unique effects

### Beguile

Target (Heroes only). At end of the bearer’s turn, deals additional damage to all allies except the bearer ∝ their max Health (commonly cited 10% — confirm in-client → UNSURE if not verified). Dispelled once activated. Applied by Exterminate.

### Exterminate

Targets (AoE). After basic skill on caster’s turn while Immortal: once every 2 turns — AoE attack, dispel one buff, inflict Beguile.

### Capturing Sacrifice (awakened, post-recall)

Target + self. Dispel all buffs; Unhealable + Decrease Defense 2 turns; Immortality caster 3 turns; penetrate Defense; vs Hero damage ∝ target current Health; unaffected by cooldown increase/decrease.

## Kit

S1 Hit and Run (+1 Soul): provoke 1 turn (75% base → higher with enhance; +25% chance when Immortal). Soulburn (−20): extra turn. S2 Blood Mana (passive): Effect Resistance up (epic7db shows 50% in skill text vs older 30% cards — exact base/fully-enhanced ER %: UNSURE); cannot crit; Fighting Spirit gain of enemies −100%; after basic on turn while Immortal → Exterminate (once/2 turns). S3 Capturing Sacrifice (+3 Souls, 5→4 CD): full strip; Decrease Defense 2 turns; Immortality 3 turns; penetrate; Hero damage ∝ current HP; CD-change immune. Awaken: also Unhealable 2 turns. Exact penetrate % and current-HP damage coefficient: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

6 / 6

## Unsure

- Exact Blood Mana Effect Resistance % (base vs fully enhanced; sources conflict 30% vs 50%)
- Exact Beguile damage % of max Health
- S3 Defense penetrate % and current-Health damage scaling
- First-fight (opening) Capturing Sacrifice cooldown

## Object

```ts
{
  id: "elvira",
  name: "Elvira",
  short: "Elvira",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "immortality", "beguile", "provoke", "fighting-spirit-deny", "penetrate"],
  tags: ["single-target", "aoe", "strip", "provoke", "immortality", "unhealable", "decrease-defense", "beguile", "no-crit", "soulburn", "cd-immune-s3"],
  effects: ["provoke-boost-when-immortal", "er-increase-no-crit", "fighting-spirit-deny-100", "exterminate-strip-beguile", "s3-full-strip-defbreak-immortality-penetrate", "awaken-unhealable", "soulburn-extra-turn", "s3-immune-to-cd-change"],
  buffs: ["Immortality"],
  debuffs: ["Provoke", "Decrease Defense", "Unhealable", "Beguile"],
  uniqueEffects: [
    {
      name: "Beguile",
      scope: "target",
      tooltip: "Heroes only: end of turn, damage other allies ∝ max HP (exact % UNSURE); dispelled when triggered."
    },
    {
      name: "Exterminate",
      scope: "targets",
      tooltip: "While Immortal after S1 (once/2 turns): AoE strip 1 + Beguile."
    }
  ],
  kit: "S1 Hit and Run (+1 Soul): Provoke (boosted if Immortal); Soulburn extra turn. S2 Blood Mana: ER up (exact % UNSURE), no crit, FS −100%, Exterminate while Immortal. S3 Capturing Sacrifice (+3 Souls, 5→4 CD): full strip + Decrease Defense + Immortality + penetrate + CD-immune; awaken Unhealable.",
  defense: 6,
  offense: 6,
  baseSpeed: 118,
  verified: false
}
```
