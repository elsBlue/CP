# Beehoo

Short: Beehoo

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (kit per official 2026-01-08 balance; epic7db skill card still lagged pre-patch Flame Keeper / Symphony at fetch)

## Roles

strip, opener, dps, control

## Tags

strip, seal, soulburn, cr-push, aoe

## Effects

buff-dispel, increase-cr

## Buffs

none

## Debuffs

Burn, Seal

## Unique effects

### Incinerate

Self-only (replaces Scorching Flare on caster’s turn). Attacks the enemy with an explosion of flames and burns for 1 turn, before detonating burn effects inflicted on the target at the end of the turn. This skill cannot trigger a Dual Attack.

### Flame Keeper (post–2026-01-08)

Self-only. Increases Attack and Effectiveness by 30% (further via skill enhancements / EE). When attacking, cannot trigger a critical hit or a heavy blow. Increases burn damage suffered by enemies by 30%. This skill effect does not stack with other passive skills of the same name. Constellation changed Capricorn → Pisces with this patch.

### Symphony of Radiance — additional EE burn

Team-wide (enemies). Exclusive Equipment effect 3 (post–2026-01-08): Inflicts an additional Burn effect on all enemies for 2 turns when using Symphony of Radiance.

## Kit

S1 Scorching Flare (+1 Soul): attacks one enemy with flames, Burn for 1 turn. On the caster’s turn, uses Incinerate instead (Burn 1 turn + end-of-turn burn detonation; cannot Dual Attack). S2 Flame Keeper (passive, post–2026-01-08): +30% Attack and Effectiveness; cannot crit/heavy blow on attack; enemies take +30% burn damage (non-stacking same-name passive). S3 Symphony of Radiance (awakened, +3 Souls, 5-turn cooldown, −1 → 4): non-attack light on all enemies — dispel two buffs, Seal (unable to be buffed) for 2 turns, and Burn for 2 turns (added 2026-01-08); increases caster Combat Readiness by 50% and (awakened) all allies except caster by 20%. Soulburn (−10 Souls): skill cooldown decreased by 2 turns. Extra Attack vs Dual Attack: none (Incinerate blocks Dual Attack). First-fight starting cooldown: UNSURE. Note: “always-crit” is inverted here — Beehoo cannot crit; tag omitted from tags list intentionally.

## Defense / offense

4 / 7

## Unsure

- First-fight (opening) cooldown of Symphony of Radiance
- Exact in-game English for “unable to be buffed” vs “Seal”
- Whether Flame Keeper enhancement “+N% all stats” still applies post-patch (Atk/Eff focus)
- Heavy blow wording exact EN journal string

## Object

```ts
{
  id: "beehoo",
  name: "Beehoo",
  short: "Beehoo",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "opener", "dps", "control"],
  tags: ["strip", "seal", "soulburn", "cr-push", "aoe"],
  effects: ["buff-dispel", "increase-cr"],
  buffs: [],
  debuffs: ["Burn", "Seal"],
  uniqueEffects: [
    {
      name: "Incinerate",
      scope: "self-only",
      tooltip: "Attacks the enemy with an explosion of flames and burns for 1 turn, before detonating burn effects inflicted on the target at the end of the turn. This skill cannot trigger a Dual Attack."
    },
    {
      name: "Flame Keeper",
      scope: "self-only",
      tooltip: "Increases Attack and Effectiveness by 30%. When attacking, cannot trigger a critical hit or a heavy blow. Increases burn damage suffered by enemies by 30%. This skill effect does not stack with other passive skills of the same name."
    },
    {
      name: "Symphony EE additional burn",
      scope: "team-wide",
      tooltip: "Inflicts an additional burn effect on all enemies for 2 turns when using Symphony of Radiance. (Exclusive Equipment effect 3, post-2026-01-08.)"
    }
  ],
  kit: "S1 Scorching Flare / Incinerate (+1 Soul): Burn; on own turn detonate burns, no Dual Attack. S2 Flame Keeper (2026-01-08): +30% Atk & Effectiveness, no crit/heavy blow, +30% enemy burn damage. S3 Symphony of Radiance awakened (+3 Souls, 5→4 CD): AoE dispel 2 + Seal 2 turns + Burn 2 turns; caster CR +50%, other allies +20%; Soulburn (−10) CD −2.",
  defense: 4,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
