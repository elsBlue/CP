# Ivana

Short: Ivana

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: release kit May 2026 (STOVE New Hero Preview / official trailer transcript; May 27 2026 Seal bugfix only — no skill balance). epic7db Requiem Prayer text incomplete vs trailer.

## Roles

cleanser, anti-immortality, cr-pusher, support

## Tags

cleanse, immunity, ignore-sharing, cr-push, cr-immune, immortality-strip, radiance, soulburn

## Effects

immortality-dispel, combat-readiness-decrease-immunity, ignore-effect-resistance

## Buffs

Immunity, Ignore Sharing, Radiance

## Debuffs

none

## Unique effects

### Radiance

Team-wide (allies). Granted by Light of Repose for 2 turns when an enemy has Immortality at end of a turn. When attacked, grants 50% damage reduction. Undispellable status: UNSURE (guide claims undispellable; official short notes do not always state it).

### Ignore Sharing

Team-wide (allies / heroes only per trailer). Granted by Requiem Prayer for 3 turns. Attacks ignore damage-sharing effects (e.g. Aurius / share passives). epic7db hero page omits this buff — prefer STOVE trailer.

### Light of Repose CR push

Self-only. After Radiance cleanse trigger, increases caster Combat Readiness (up to 50% fully enhanced per skill-ups; base before skill-ups: UNSURE — card shows enhancement steps).

## Kit

S1 Holy Light (+1 Soul): attack one enemy; recover Health of allies proportional to the target's max Health. Soulburn (−10 Souls): increases the amount recovered. S2 Light of Repose (passive): unaffected by Combat Readiness decreases; at start of turn, dispel Immortality from all enemies (ignores Effect Resistance); at end of someone's turn, if an enemy has Immortality → dispel all debuffs from all allies, grant Radiance for 2 turns, then increase caster Combat Readiness (up to +50% fully enhanced). S3 Requiem Prayer (+3 Souls, 5-turn cooldown, −1 → 4): dispel two debuffs from all allies; grant Immunity for 2 turns and Ignore Sharing for 3 turns; increase Combat Readiness (up to +30% fully enhanced per trailer; epic7db shows +20% base line — flag conflict). First-fight opening cooldown: UNSURE. Base Speed 115 (epic7db) vs 117 (third-party guide): prefer epic7db, listed as UNSURE if contested.

## Defense / offense

7 / 2

## Unsure

- Whether Radiance is undispellable
- Exact base (pre–skill-up) CR% on S2 and S3 vs fully enhanced caps (50% / 30%)
- Base Speed 115 vs 117 conflict
- Exact ally heal multipliers on Holy Light / Soulburn
- First-fight (opening) cooldown of Requiem Prayer

## Object

```ts
{
  id: "ivana",
  name: "Ivana",
  short: "Ivana",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["cleanser", "anti-immortality", "cr-pusher", "support"],
  tags: ["cleanse", "immunity", "ignore-sharing", "cr-push", "cr-immune", "immortality-strip", "radiance", "soulburn"],
  effects: ["immortality-dispel", "combat-readiness-decrease-immunity", "ignore-effect-resistance"],
  buffs: ["Immunity", "Ignore Sharing", "Radiance"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Radiance",
      scope: "team-wide",
      tooltip: "When attacked, 50% damage reduction. Granted 2 turns via Light of Repose when an enemy has Immortality at end of turn. Undispellable: UNSURE."
    },
    {
      name: "Ignore Sharing",
      scope: "team-wide",
      tooltip: "Attacks ignore damage-sharing effects for 3 turns (heroes only per trailer). Granted by Requiem Prayer."
    }
  ],
  kit: "S1 Holy Light (+1 Soul): heal allies ∝ target max HP; Soulburn (−10) ↑ heal. S2 Light of Repose: CR-decrease immune; SoT strip Immortality all enemies (ignore ER); end of turn if enemy Immortality → full ally cleanse + Radiance 2 turns + self CR up to +50%. S3 Requiem Prayer (+3 Souls, 5→4 CD): cleanse 2 all allies + Immunity 2 turns + Ignore Sharing 3 turns + CR up to +30% (trailer; epic7db incomplete).",
  defense: 7,
  offense: 2,
  baseSpeed: 115,
  verified: false
}
```
