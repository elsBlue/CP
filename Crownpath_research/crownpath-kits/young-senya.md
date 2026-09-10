# Young Senya

Short: Young Senya

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2026-09-04 (no Young Senya skill balance listing found in 2025–2026 STOVE previews checked — ≠ RGB Senya; kit per epic7db primary, epic7x for Special Friendship tooltip)

## Roles

anti-cleave, dual-attack, team-cleanse, fighting-spirit-aoe, continuous-heal

## Tags

single-target, aoe, dual-attack, cr-push, fighting-spirit, cleanse, continuous-heal, soulburn, special-friendship, max-health-scaling

## Effects

s1-dual-attack-cr, soulburn-team-cr, s2-start-fs-earth-bonus, special-friendship, help-help-aoe-extra-turn, s3-full-cleanse-cr, awaken-s3-continuous-heal

## Buffs

Special Friendship, Continuous Heal (awaken)

## Debuffs

(none baseline)

## Unique effects

### Special Friendship

Foremost ally (except caster). Granted at start if foremost ally is Earth: after attacking on the bearer's turn, a critical hit deals additional damage proportional to the bearer's max Health (exact coefficient UNSURE).

### Help! Help!

Enemies + self. When Fighting Spirit full after being attacked: consume all FS; dispel all debuffs from caster; AoE attack; extra turn; successful attack deals additional damage = 15% of (caster max Health + foremost ally max Health).

## Kit

S1 Oopsie! (+1 Soul): attack; Dual Attack from random ally; caster CR +15% (enhanceable; epic7x shows 20% — UNSURE); Soulburn (−10): CR push all allies. S2 No Bullying! (passive): start first battle 40 FS (epic7db; epic7x 30 — prefer epic7db, note conflict); if foremost ally Earth +40 FS + Special Friendship; on attacked +20 FS → Help! Help! at full. S3 Snack Time! (+3 Souls, 5→4 CD): full cleanse all allies; CR +40% (epic7db; epic7x 15% — CONFLICT → UNSURE, cite both); awaken Continuous Heal 2 turns. Limited Soul Weaver (≠ Senya).

## Defense / offense

7 / 5

## Unsure

- Start FS 40 (epic7db) vs 30 (epic7x)
- S3 CR 40% (epic7db) vs 15% (epic7x) — major conflict; omit certainty
- S1 base CR 15% vs 20%
- Exact Special Friendship additional damage coefficient
- Passive FS enhance amounts (epic7db % display vs epic7x +1/+2 FS)

## Object

```ts
{
  id: "young-senya",
  name: "Young Senya",
  short: "Young Senya",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["anti-cleave", "dual-attack", "team-cleanse", "fighting-spirit-aoe", "continuous-heal"],
  tags: ["single-target", "aoe", "dual-attack", "cr-push", "fighting-spirit", "cleanse", "continuous-heal", "soulburn", "special-friendship", "max-health-scaling"],
  effects: ["s1-dual-attack-cr", "soulburn-team-cr", "s2-start-fs-earth-bonus", "special-friendship", "help-help-aoe-extra-turn", "s3-full-cleanse-cr", "awaken-s3-continuous-heal"],
  buffs: ["Special Friendship", "Continuous Heal"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Special Friendship",
      scope: "foremost-ally",
      tooltip: "On bearer's turn crit: extra dmg ∝ bearer max HP (coeff UNSURE)."
    },
    {
      name: "Help! Help!",
      scope: "enemies+self",
      tooltip: "Full FS after attacked: cleanse self; AoE + extra turn; +15% (self+foremost) max HP damage."
    }
  ],
  kit: "S1: Dual Attack + CR; Soulburn team CR. S2: FS + Special Friendship (Earth front); Help! Help! AoE. S3: full cleanse + CR (value UNSURE vs epic7x); awaken regen. ≠ Senya.",
  defense: 7,
  offense: 5,
  baseSpeed: 102,
  verified: false
}
```
