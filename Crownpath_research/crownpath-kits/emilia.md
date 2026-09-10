# Emilia

Short: Emilia

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: 2026-09-04 (no Emilia hero skill balance listing found in 2025–2026 STOVE previews checked; limited Re:Zero SW; kit per epic7db 2026-09-04)

## Roles

cleanse, heal, barrier, cr-push, attack-buff

## Tags

single-target, aoe, cleanse, heal, barrier, cr-push, increase-attack, soulburn

## Effects

s1-heal-lowest, s2-cleanse-cr-push-self-cr, awaken-increase-attack, s3-aoe-cleanse-heal-barrier, soulburn-heal-on-s2

## Buffs

Barrier, Increase Attack

## Debuffs

(none)

## Unique effects

### Spirit's Blessing (awakened)

Ally (except caster) + self. Dispel two debuffs; Increase Attack 2 turns (awaken); target CR up (card ~50% path with enhances from lower awaken base — exact fully-enhanced CR %: UNSURE between awaken base and enhances); caster CR +25%. Soulburn: also heal target ∝ caster max Health.

### Divine Protection of the Great Spirit

Allies. Dispel two debuffs from all allies; recover Health + Barrier 2 turns ∝ caster max Health.

## Kit

S1 Huma (+1 Soul): attack; heal ally with lowest Health ∝ caster max Health. S2 Spirit's Blessing (+1 Soul, 3→2 CD): cleanse 2 from ally except caster; CR push ally + caster CR +25%; awaken also Increase Attack 2 turns. Soulburn (−10): recover target Health ∝ max Health. S3 Divine Protection of the Great Spirit (+3 Souls, 5→4 CD): cleanse 2 all allies; heal + Barrier 2 turns ∝ max Health. Exact heal/barrier/CR coefficients: UNSURE where not fully stated. First-fight opening CD: UNSURE.

## Defense / offense

8 / 2

## Unsure

- Exact S2 ally CR % fully enhanced (epic7db shows 50% on main card vs 40% in awaken before/after)
- Exact heal and barrier coefficients vs max Health
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "emilia",
  name: "Emilia",
  short: "Emilia",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["cleanse", "heal", "barrier", "cr-push", "attack-buff"],
  tags: ["single-target", "aoe", "cleanse", "heal", "barrier", "cr-push", "increase-attack", "soulburn"],
  effects: ["s1-heal-lowest", "s2-cleanse-cr-push-self-cr", "awaken-increase-attack", "s3-aoe-cleanse-heal-barrier", "soulburn-heal-on-s2"],
  buffs: ["Barrier", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Divine Protection of the Great Spirit",
      scope: "allies",
      tooltip: "Cleanse 2 all allies; heal + Barrier 2 turns ∝ caster max HP."
    }
  ],
  kit: "S1 Huma (+1 Soul): heal lowest HP ally. S2 Spirit's Blessing (+1 Soul, 3→2 CD): cleanse 2 + CR pushes; awaken Increase Attack; Soulburn (−10) heal. S3 Divine Protection (+3 Souls, 5→4 CD): cleanse 2 + heal + Barrier. Exact coeffs/CR % UNSURE.",
  defense: 8,
  offense: 2,
  baseSpeed: 105,
  verified: false
}
```
