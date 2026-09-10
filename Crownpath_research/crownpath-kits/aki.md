# Aki

Short: Aki

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2026-09-04 (kit per official 2026-07-16 balance; epic7db skill card still lagged old S3 CD/souls at fetch)

## Roles

dps, strip, bruiser

## Tags

strip, soulburn, defbreak, extra-turn, ignore-er

## Effects

buff-dispel, extra-turn, damage-received-limit, ignore-damage-sharing, ignore-er

## Buffs

none

## Debuffs

Burn, Decrease Defense

## Unique effects

### Final Radiance

Self-only. Increases Attack by 50% (further via skill enhancements). Cannot receive recover Health effects and damage sharing effects. When attacked, damage suffered in one attack does not exceed 51% of max Health. When using Soulburn, if Health exceeds 51%, consumes 51% Health instead of Soul, and grants an extra turn.

### Burn detonation (Baptism of Fire / Karmic Flame)

Self-only application on target. At the end of the turn, detonates burn effects inflicted on the target. (2026-07-16: detonation damage increased; base skill damage decreased — exact multipliers UNSURE.)

## Kit

S1 Baptism of Fire (+1 Soul): attacks one enemy with a blaze, 100% chance to inflict Burn for 1 turn; at end of turn, detonates burns on the target. Soulburn (−20 Souls, or 51% current Health via Final Radiance when HP > 51%): extends Burn duration by 3 turns, ignores Effect Resistance; this attack does not trigger a Dual Attack; grants an extra turn (via Final Radiance). S2 Final Radiance (passive): see unique effects. S3 Karmic Flame (awakened, post–2026-07-16): **Acquire 2 Soul**, **3-turn cooldown** (−1 from enhancements → 2): attacks one enemy, dispels all buffs, inflicts Decrease Defense for 2 turns, then 100% chance each to inflict two Burn effects for 2 turns; at end of turn detonates burns on the target. Soulburn (−20 Souls / HP rule): ignores Effect Resistance. Extra Attack vs Dual Attack: Soulburn grants Extra Turn; S1 soulburn explicitly does not trigger Dual Attack. First-fight starting cooldown: UNSURE.

## Defense / offense

6 / 8

## Unsure

- First-fight (opening) cooldown of Karmic Flame
- Exact base/detonation damage multipliers after 2026-07-16
- Final Radiance Attack % when fully skill-enhanced (base 50% + enhancement steps)
- Whether in-game Burn debuff name is exactly “Burn”

## Object

```ts
{
  id: "aki",
  name: "Aki",
  short: "Aki",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "bruiser"],
  tags: ["strip", "soulburn", "defbreak", "extra-turn", "ignore-er"],
  effects: ["buff-dispel", "extra-turn", "damage-received-limit", "ignore-damage-sharing"],
  buffs: [],
  debuffs: ["Burn", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Final Radiance",
      scope: "self-only",
      tooltip: "Increases Attack by 50%. Cannot receive recover Health effects and damage sharing effects. When attacked, damage suffered in one attack does not exceed 51% of max Health. When using Soulburn, if Health exceeds 51%, consumes 51% Health instead of Soul, and grants an extra turn."
    },
    {
      name: "Burn detonation",
      scope: "self-only",
      tooltip: "At the end of the turn, detonates burn effects inflicted on the target. Detonation damage increased as of 2026-07-16 (exact multipliers UNSURE)."
    }
  ],
  kit: "S1 Baptism of Fire (+1 Soul): 100% Burn 1 turn + end-of-turn detonate. Soulburn (−20 / or 51% HP via Final Radiance): Burn +3 turns, ignore ER, no Dual Attack, Extra Turn. S2 Final Radiance: +Atk, no heal/share, 51% max HP damage cap per hit, Soulburn HP cost + Extra Turn. S3 Karmic Flame awakened (post-2026-07-16): +2 Soul, 3-turn CD (→2 enhanced): full strip, Decrease Defense 2 turns, two Burns 2 turns, detonate; Soulburn ignore ER.",
  defense: 6,
  offense: 8,
  baseSpeed: 112,
  verified: false
}
```
