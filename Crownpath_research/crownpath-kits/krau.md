# Krau

Short: Krau

Element: Ice

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 100

Patch / date used: 2025-02-13 STOVE balance (Summon Ziegfried gains damage-share while available; awaken barrier → absorb HP; EE option 3 changed) — prefer STOVE over epic7db lag (epic7db still showed pre-share barrier kit as of 2026-09-04 scrape)

## Roles

provoke-tank, cr-push, defense-buff, hp-scaling-nuke, damage-share

## Tags

single-target, provoke, decrease-cr, increase-defense, penetrate, no-crit-s3, damage-share, lifesteal-on-awaken, soulburn, hp-scaling

## Effects

provoke-hp-scaling-s1, cr-pushback-team-increase-defense, s3-lost-hp-penetrate-no-crit, damage-share-while-s3-ready, awaken-absorb-hp, soulburn-extra-turn

## Buffs

Increase Defense, Barrier (pre-2025-02-13 awaken only — replaced per STOVE)

## Debuffs

Provoke

## Unique effects

### Summon Ziegfried (post-2025-02-13 STOVE)

Target + allies. Attack penetrating Defense; cannot crit; damage ∝ caster lost Health. While this skill is available on cooldown count: receive 25% of damage suffered by all allies (strongest share only). Awaken (STOVE after): also absorb some of the damage dealt as Health (prior awaken Barrier removed in this balance). Soulburn (−20): extra turn.

## Kit

S1 Swordstorm (+1 Soul): Provoke 1 turn (75% → higher with enhance); damage ∝ max Health. S2 Charge (+2 Souls, 4→3 CD): CR −50% (enhanceable); Increase Defense all allies 2 turns; damage ∝ max Health. S3 Summon Ziegfried (+2 Souls, 6→5 CD): lost-HP penetrate nuke (no crit) + damage share while available (STOVE); awaken absorbs damage as Health (STOVE). Soulburn (−20): extra turn. Exact lost-HP damage formula, absorb %, and whether Barrier remains anywhere: UNSURE (prefer STOVE: barrier removed from awaken). First-fight opening CD: UNSURE. EE Grace of the Vast Ocean Tide option 3: STOVE changed to −1 CD on Summon Ziegfried (was kill reset).

## Defense / offense

8 / 5

## Unsure

- Exact lost-Health damage coefficient and Defense penetrate % on S3
- Exact absorb-as-Health % on awakened S3 after Feb 2025
- Whether any Barrier remains on current awakened client text (STOVE removed it in preview)
- epic7db lagged pre-Feb-2025 kit at scrape time
- First-fight (opening) cooldown
- S3 skill-enhance “+200% Soul acquired” scrape meaning (likely +2 Soul gain)

## Object

```ts
{
  id: "krau",
  name: "Krau",
  short: "Krau",
  element: "ice",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["provoke-tank", "cr-push", "defense-buff", "hp-scaling-nuke", "damage-share"],
  tags: ["single-target", "provoke", "decrease-cr", "increase-defense", "penetrate", "no-crit-s3", "damage-share", "lifesteal-on-awaken", "soulburn", "hp-scaling"],
  effects: ["provoke-hp-scaling-s1", "cr-pushback-team-increase-defense", "s3-lost-hp-penetrate-no-crit", "damage-share-while-s3-ready", "awaken-absorb-hp", "soulburn-extra-turn"],
  buffs: ["Increase Defense"],
  debuffs: ["Provoke"],
  uniqueEffects: [
    {
      name: "Summon Ziegfried",
      scope: "target",
      tooltip: "Post-2025-02-13: lost-HP penetrate nuke (no crit); while available, 25% team damage share; awaken absorb HP (Barrier removed per STOVE)."
    }
  ],
  kit: "S1 Swordstorm (+1 Soul): Provoke; dmg ∝ max HP. S2 Charge (+2 Souls, 4→3 CD): CR −50% + team Increase Defense. S3 Summon Ziegfried (+2 Souls, 6→5 CD): lost-HP penetrate + 25% damage share while ready; awaken lifesteal (STOVE); Soulburn extra turn.",
  defense: 8,
  offense: 5,
  baseSpeed: 100,
  verified: false
}
```
