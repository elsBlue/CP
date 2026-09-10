# ae-NINGNING

Short: ae-NING

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-09-04 (no balance listing found for ae-NINGNING in 2025–2026 previews checked; collab kit treated as current)

## Roles

strip, control, opener

## Tags

stun, strip, soulburn, cr-push, cr-cut, barrier-break

## Effects

decrease-cr, increase-cr, buff-dispel, barrier-inversion

## Buffs

Increase Attack

## Debuffs

Stun

## Unique effects

### Barrier Inversion

Team-wide (enemies). Applied by System Hacking. Converts enemy barriers (exact journal tooltip phrasing: barrier inversion).

### System Hacking CR (awakened)

Self-only. Increases Combat Readiness of the caster by 40% base (50% fully skill-enhanced). When the target is granted a barrier, Combat Readiness increase amount is doubled.

## Kit

S1 SSAMBEAR (+1 Soul): attacks one enemy with SSAMBEAR, chance to Stun for 1 turn (30% base; +10% from skill enhancements → 40% fully enhanced); after attacking, when the target is stunned, increases the caster’s Combat Readiness by 20%. Soulburn (−10 Souls): stun chance becomes 100%. S2 Butterfly Effect (+1 Soul, 3-turn cooldown, −1 from enhancements → 2): attacks one enemy, decreasing Combat Readiness by 30%; grants Increase Attack for 2 turns to the ally with the highest Attack except the caster and increases that ally’s Combat Readiness by 30%. S3 System Hacking (+3 Souls, 5-turn cooldown, −1 from enhancements → 4): non-attack hack on all enemies, inflicting Barrier Inversion and dispelling two buffs, then increases the caster’s Combat Readiness (40% awakened base / 50% fully enhanced; doubled when the target has a barrier). First-fight starting cooldowns: UNSURE.

## Defense / offense

4 / 3

## Unsure

- First-fight (opening) cooldowns of Butterfly Effect and System Hacking
- epic7db awakening scrape literally says CR increase is “disabled” when the target has a barrier; every other live-aligned source and release text say “doubled” — file uses doubled
- Exact in-game Barrier Inversion tooltip sentence beyond the skill name/effect label
- In-game buff string exact casing: “Increase Attack” vs “Increased Attack”

## Object

```ts
{
  id: "ae-ningning",
  name: "ae-NINGNING",
  short: "ae-NING",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "control", "opener"],
  tags: ["stun", "strip", "soulburn", "cr-push", "cr-cut", "barrier-break"],
  effects: ["decrease-cr", "increase-cr", "buff-dispel", "barrier-inversion"],
  buffs: ["Increase Attack"],
  debuffs: ["Stun"],
  uniqueEffects: [
    {
      name: "Barrier Inversion",
      scope: "team-wide",
      tooltip: "Inflicts barrier inversion (converts enemy barriers)."
    },
    {
      name: "System Hacking CR",
      scope: "self-only",
      tooltip: "Increases Combat Readiness of the caster by 40% (50% fully enhanced). When the target is granted a barrier, Combat Readiness increase amount is doubled."
    }
  ],
  kit: "S1 SSAMBEAR (+1 Soul): Stun chance 30% base / 40% fully enhanced; on stun, caster CR +20%. Soulburn (−10): Stun 100%. S2 Butterfly Effect (+1 Soul, 3→2 CD): enemy CR −30%; highest-Attack ally (except caster) gets Increase Attack 2 turns and CR +30%. S3 System Hacking (+3 Souls, 5→4 CD): non-attack AoE Barrier Inversion + dispel 2 buffs; caster CR +40%/50%, doubled if target has barrier. First-fight CDs UNSURE.",
  defense: 4,
  offense: 3,
  baseSpeed: 114,
  verified: false
}
```
