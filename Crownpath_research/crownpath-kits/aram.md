# Aram

Short: Aram

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-09-04 (limited release 2025-07-17; no later balance listing found)

## Roles

healer, revive, cleanse, speedcap, control

## Tags

stun, soulburn, immunity, cr-push, aoe

## Effects

increase-cr, ally-cd-decrease

## Buffs

Immunity, Increase Effectiveness, Vigor, Increase Speed

## Debuffs

Stun

## Unique effects

### Warming Up

Team-wide. Gains 10 Soul. Grants Vigor and Increase Speed to all allies for 2 turns. Activated by Coastal Discipline after an attack that targets all allies. Internal cooldown: enhanced −1 turn (base turns UNSURE; commonly 3 → 2).

### Coastal Discipline (first-battle branch)

Team-wide. At the start of the first battle, if an enemy takes the first turn, grants Immunity to all allies for 3 turns; if an ally takes the first turn, grants Increase Effectiveness to all allies for 3 turns.

### Rapid Rescue

Team-wide (one ally except caster). Resets skill cooldowns of an ally except for the caster before increasing Combat Readiness by 100%. This skill is unaffected by cooldown increase and decrease effects.

## Kit

S1 Atten-Tion! (+1 Soul): attacks one enemy by whipping up sand, chance to Stun for 1 turn (35% on epic7db skill card; further effect-chance enhancements may apply), then recovers Health of all allies proportional to the caster’s max Health. Soulburn (−10 Souls): stun chance 100%. S2 Coastal Discipline (passive): first-battle Immunity or Increase Effectiveness branch (see unique); after an AoE that hits all allies, activates Warming Up (10 Soul + Vigor + Increase Speed 2 turns) on internal CD. S3 Rapid Rescue (+3 Souls, 6-turn cooldown, −1 from enhancements → 5): non-attack rescue line on one ally except caster — full skill CD reset for that ally, then Combat Readiness +100%; immune to CD increase/decrease effects. First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: none.

## Defense / offense

5 / 2

## Unsure

- First-fight (opening) cooldown of Rapid Rescue
- Warming Up base internal cooldown turns (enhancement is −1 only)
- Whether S1 stun % on the journal card is base or fully enhanced
- Rapid Rescue CR enhancement lines on epic7db (+% CR) vs a flat 100% push — file uses 100% as skill text
- Roles: “revive” not used (no revive); listed healer/control/speedcap instead — “revive” omitted

## Object

```ts
{
  id: "aram",
  name: "Aram",
  short: "Aram",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["healer", "control", "speedcap"],
  tags: ["stun", "soulburn", "immunity", "cr-push", "aoe"],
  effects: ["increase-cr", "ally-cd-decrease"],
  buffs: ["Immunity", "Increase Effectiveness", "Vigor", "Increase Speed"],
  debuffs: ["Stun"],
  uniqueEffects: [
    {
      name: "Warming Up",
      scope: "team-wide",
      tooltip: "Gains 10 Soul. Grants Vigor and Increase Speed to all allies for 2 turns."
    },
    {
      name: "Coastal Discipline",
      scope: "team-wide",
      tooltip: "At the start of the first battle, if an enemy takes the first turn, grants Immunity to all allies for 3 turns, and if an ally takes the first turn, grants Increase Effectiveness to all allies for 3 turns. After suffering an attack that targets all allies, activates Warming Up."
    },
    {
      name: "Rapid Rescue",
      scope: "team-wide",
      tooltip: "Fires a rescue line launcher, resetting skill cooldowns of an ally except for the caster before increasing Combat Readiness by 100%. This skill is unaffected by cooldown increase and decrease effects."
    }
  ],
  kit: "S1 Atten-Tion! (+1 Soul): sand whip, Stun chance, AoE heal (max HP); Soulburn (−10) Stun 100%. S2 Coastal Discipline: first-battle Immunity or Increase Effectiveness; on ally-AoE hit, Warming Up (10 Soul + Vigor + Increase Speed 2 turns). S3 Rapid Rescue (+3 Souls, 6→5 CD): ally CD full reset (except caster) + CR +100%; ignores CD up/down effects.",
  defense: 5,
  offense: 2,
  baseSpeed: 114,
  verified: false
}
```
