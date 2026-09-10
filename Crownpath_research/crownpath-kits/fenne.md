# Fenne

Short: Fenne

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 100

Patch / date used: release ~2025-01-23 (no Fenne hero skill balance listing found in later 2025–2026 STOVE previews checked); kit per epic7db 2026-09-04 + epic7x (enrage on S3); revive % sources conflict → UNSURE

## Roles

injury-scaler, heal, revive, enrage-extra-attack, rift-solo

## Tags

single-target, heal, injury, enrage, immunity, revive, barrier, lifesteal, soulburn, crit-chance-passive

## Effects

self-injury-on-attacks, team-heal-from-s1, embrace-extra-when-enraged, injury-scales-atk-spd-damage, lethal-revive-barrier, s3-enrage-lifesteal, soulburn-more-heal

## Buffs

Enrage, Immunity, Barrier

## Debuffs

(none on enemies; self Injuries)

## Unique effects

### Injuries (self)

Self. Attack skills consume 15% current Health and inflict Injuries proportional to consumption. Attack, Speed, and skill damage scale with injury ratio / injuries (wording varies by skill).

### Embrace

Target + self. When S1 used on caster’s turn while Enraged: extra attack; grants Immunity 1 turn; damage ∝ caster’s injuries.

### Love=Pain revive

Self. Once per battle on lethal damage: revive with Health % (epic7db 50% vs epic7x 30% base — UNSURE) + Barrier 2 turns ∝ Attack; enhances raise revive Health %.

## Kit

S1 Intense Welcome (+1 Soul): consume 15% current HP as Injuries; attack; heal all allies ∝ caster max Health and Attack; if Enraged on own turn → Embrace. Soulburn (−10): increases amount recovered. S2 Love=Pain (passive): Crit Chance +30%; Attack/Speed ∝ injury ratio; once/battle lethal → revive + Barrier. S3 Love Bite (+2 Souls, 4 CD; epic7x lists −1 CD enhance and Enrage 2 turns — epic7db omits Enrage on S3 card → prefer Enrage present for Embrace loop, mark if client differs): consume 15% HP as Injuries; attack; absorb damage as Health; damage ∝ injuries; become Enraged 2 turns (per epic7x). Exact injury/heal/barrier coefficients and revive %: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

5 / 7

## Unsure

- Revive Health % (epic7db 50% vs epic7x 30% before enhances)
- Whether Love Bite explicitly grants Enrage in current client (epic7x yes; epic7db S3 text omits)
- Exact injury scaling formulas and heal coefficients
- Love Bite enhance path (−1 CD presence)
- First-fight (opening) cooldown

## Object

```ts
{
  id: "fenne",
  name: "Fenne",
  short: "Fenne",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["injury-scaler", "heal", "revive", "enrage-extra-attack", "rift-solo"],
  tags: ["single-target", "heal", "injury", "enrage", "immunity", "revive", "barrier", "lifesteal", "soulburn", "crit-chance-passive"],
  effects: ["self-injury-on-attacks", "team-heal-from-s1", "embrace-extra-when-enraged", "injury-scales-atk-spd-damage", "lethal-revive-barrier", "s3-enrage-lifesteal", "soulburn-more-heal"],
  buffs: ["Enrage", "Immunity", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Injuries",
      scope: "self",
      tooltip: "Attack skills self-injure (15% current HP consume); ATK/SPD/damage scale with injuries."
    },
    {
      name: "Embrace",
      scope: "target",
      tooltip: "On S1 while Enraged: extra hit + Immunity 1 turn; damage ∝ injuries."
    }
  ],
  kit: "S1 Intense Welcome (+1 Soul): self-injure, team heal, Embrace if Enraged; Soulburn more heal. S2 Love=Pain: +30% Crit, scale off injuries, once/battle revive+Barrier (revive % UNSURE). S3 Love Bite (+2 Souls): self-injure, lifesteal, Enrage 2 turns (epic7x).",
  defense: 5,
  offense: 7,
  baseSpeed: 100,
  verified: false
}
```
