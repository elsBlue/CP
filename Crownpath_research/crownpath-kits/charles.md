# Charles

Short: Charles

Element: Earth

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 103

Patch / date used: 2026-06-05 (STOVE remake — Slash strip+Smash proc; Smash heal+CR; Faithful Strike counter + team Atk/Def; Soulburn −10/−2 CD. Prefer STOVE over epic7db, which still showed pre-remake kit at fetch)

## Roles

bruiser, buffer, strip, counter

## Tags

strip, extra-attack, aoe, increase-attack, increase-defense, counterattack, soulburn, cr-push, lifesteal, fewer-enemies-bonus

## Effects

smash-extra-attack, damage-absorb-heal, fewer-enemies-damage

## Buffs

Increase Attack, Increase Defense, Counterattack

## Debuffs

none

## Unique effects

### Smash (post–2026-06-05)

Targets (single) / allies. Extra attack from Slash (or cast as S2). Attacks repeatedly; absorbs some damage as Health; increases Combat Readiness of all allies by 15% base (skill enhancements +2%/+3% → **20% fully enhanced** per STOVE). No longer full-strips or scales damage with caster buff count.

### Slash → Smash proc (post–2026-06-05)

Targets (single). 75% chance dispel one buff. After attacking, 50% chance activate Smash; when caster has **three or more buffs**, doubles Smash proc chance (100%). EE1: +25% Slash dispel chance. EE2: +10% Smash damage. EE3 (unchanged role): cleanse self before Faithful Strike.

### Faithful Strike (post–2026-06-05)

Targets (AoE) / allies. Grants Increase Attack to all allies 2 turns; grants Counterattack to caster 2 turns. Awakened: also Increase Defense to **all allies** 2 turns (was self-only Defense). Fewer enemies → more damage (≤3). Soulburn (−10): skill cooldown −2 turns (was −20 extend buffs).

## Kit

S1 Slash (+1 Soul): 75% dispel one buff; 50% Smash after (100% if caster has 3+ buffs). S2 Smash (+1 Soul, 3 CD): absorb damage as Health; team CR +15%→20% FE. S3 Faithful Strike (+2 Souls, 5→4 CD): AoE; team Atk Up 2t; caster Counterattack 2t; awaken also team Def Up 2t; fewer-enemies bonus damage. Soulburn (−10): CD −2. Exact absorb % and fewer-enemies damage curve: UNSURE. epic7db skill card/EE still lagged pre-remake at research time.

## Defense / offense

6 / 7

## Unsure

- Exact Smash damage-absorb (lifesteal) percentage
- Exact fewer-enemies damage multipliers on Faithful Strike
- Whether Smash skill enhancements still list old “effect chance” lines in-client (STOVE replaced them with CR%)
- First-fight opening CD

## Object

```ts
{
  id: "charles",
  name: "Charles",
  short: "Charles",
  element: "earth",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "buffer", "strip", "counter"],
  tags: ["strip", "extra-attack", "aoe", "increase-attack", "increase-defense", "counterattack", "soulburn", "cr-push", "lifesteal", "fewer-enemies-bonus"],
  effects: ["smash-extra-attack", "damage-absorb-heal", "fewer-enemies-damage"],
  buffs: ["Increase Attack", "Increase Defense", "Counterattack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Slash Smash proc",
      scope: "targets",
      tooltip: "Post-2026-06-05: 75% dispel 1; 50% Smash (100% if 3+ buffs on caster)."
    },
    {
      name: "Smash",
      scope: "allies",
      tooltip: "Absorb damage as HP; team CR +15%→20% FE. No strip / no buff-count damage scaling."
    },
    {
      name: "Faithful Strike",
      scope: "allies",
      tooltip: "Team Atk Up 2t; Counterattack self 2t; awaken team Def Up 2t. Soulburn −10: −2 CD."
    }
  ],
  kit: "STOVE 2026-06-05 remake. S1 Slash (+1): 75% dispel 1; 50% Smash (100% if 3+ buffs). S2 Smash (+1, 3 CD): heal absorb + team CR 15%→20%. S3 Faithful Strike (+2, 5→4): team Atk Up; Counterattack self; awaken team Def Up; Soulburn (−10) −2 CD. epic7db lagged. Absorb%/fewer-enemy curve UNSURE.",
  defense: 6,
  offense: 7,
  baseSpeed: 103,
  verified: false
}
```
