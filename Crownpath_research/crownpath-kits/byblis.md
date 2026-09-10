# Byblis

Short: Byblis

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2023-12-21 STOVE balance (Gardener's Secret / I'm Warning You / A Larunda's Hospitality) — no 2025–2026 hero skill balance listing found; kit per epic7db 2026-09-04 + STOVE 2023 notes

## Roles

counter-punish, strip, defense-break, heal, soul-drain

## Tags

single-target, aoe, silence, decrease-defense, buff-duration-cut, heal, soul-remove, decrease-hit-chance, barrier, soulburn, counter-trigger

## Effects

silence, decrease-cr-on-silence, counter-trigger-warning, buff-duration-decrease, decrease-defense, ally-heal-max-hp, decrease-hit-chance, soul-remove, barrier-on-awaken-s3

## Buffs

Barrier

## Debuffs

Silence, Decrease Defense, Decrease Hit Chance

## Unique effects

### Gardener's Secret / I'm Warning You

Self → enemies (AoE) + allies heal. When an ally suffers a counterattack: caster CR +20%; once per turn activate I'm Warning You — AoE attack, decrease buff durations by 2 turns, Decrease Defense 2 turns (80% card / +enhancements → 100% fully enhanced per enhancement sum), recover Health of all allies ∝ target max Health.

### A Larunda's Hospitality (awakened)

Targets (AoE) + allies. Decrease buff durations 1 turn; Decrease Hit Chance 2 turns; remove 10 Soul. Awaken (epic7x): also Barrier all allies 2 turns ∝ target Health — epic7db awaken scrape incomplete → Barrier on awaken treated as likely; mark UNSURE if omitted in-client.

## Kit

S1 Floral Arrangement (+1 Soul): magical flower; Silence 1 turn (75% base → 100% fully enhanced); if silenced, target CR −20%. Soulburn (−10): effect chance 100%. S2 Gardener's Secret (passive): on ally counterattack → CR +20% + I'm Warning You once/turn (buff duration −2 turns; Decrease Defense; AoE heal ∝ max HP). S3 A Larunda's Hospitality (+2 Souls, 4→3 CD): AoE buff duration −1 turn; Decrease Hit Chance 2 turns; remove 10 Soul; awaken may add Barrier allies 2 turns ∝ Health. Exact heal/barrier coefficients and awaken barrier confirmation: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

5 / 5

## Unsure

- Whether awakened S3 still grants Barrier (epic7x yes; epic7db awaken text incomplete)
- Exact heal and barrier coefficients vs max Health
- Fully-enhanced I'm Warning You Decrease Defense % (80%+20% enhancements = 100% assumed)
- First-fight (opening) cooldown of A Larunda's Hospitality
- Exact in-game wording of “decreasing buff durations”

## Object

```ts
{
  id: "byblis",
  name: "Byblis",
  short: "Byblis",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["counter-punish", "strip", "defense-break", "heal", "soul-drain"],
  tags: ["single-target", "aoe", "silence", "decrease-defense", "buff-duration-cut", "heal", "soul-remove", "decrease-hit-chance", "barrier", "soulburn", "counter-trigger"],
  effects: ["silence", "decrease-cr-on-silence", "counter-trigger-warning", "buff-duration-decrease", "decrease-defense", "ally-heal-max-hp", "decrease-hit-chance", "soul-remove", "barrier-on-awaken-s3"],
  buffs: ["Barrier"],
  debuffs: ["Silence", "Decrease Defense", "Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "I'm Warning You",
      scope: "targets",
      tooltip: "On ally counterattack (once/turn): AoE buff duration −2, Decrease Defense, heal allies ∝ max HP; caster CR +20%."
    },
    {
      name: "A Larunda's Hospitality",
      scope: "targets",
      tooltip: "AoE buff duration −1, Decrease Hit Chance 2 turns, remove 10 Soul; awaken Barrier allies UNSURE."
    }
  ],
  kit: "S1 Floral Arrangement (+1 Soul): Silence; if silenced CR −20%; Soulburn (−10) 100% chance. S2 Gardener's Secret: ally counter → CR +20% + I'm Warning You (buff cut 2 / Decrease Defense / AoE heal). S3 A Larunda's Hospitality (+2 Souls, 4→3 CD): buff cut 1 + Decrease Hit Chance + −10 Soul; awaken Barrier UNSURE.",
  defense: 5,
  offense: 5,
  baseSpeed: 120,
  verified: false
}
```
