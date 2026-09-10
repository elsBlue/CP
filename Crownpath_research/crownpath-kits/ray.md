# Ray

Short: Ray

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2026-09-04 (no RGB Ray skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Death Dealer Ray; kit per epic7db)

## Roles

full-cleanse, team-barrier, team-heal, immunity

## Tags

single-target, cleanse, barrier, heal, immunity, soulburn, exclusive-equipment, earth-synergy-ee

## Effects

s1-attack-cleanse-ally, s2-team-barrier, awaken-s2-heal, s3-full-cleanse-immunity-heal, soulburn-heal, ee-earth-cd-or-heal-or-def

## Buffs

Barrier, Immunity, Increase Defense (EE option)

## Debuffs

(none baseline)

## Unique effects

### Flawless Wings EE earth synergy

Conditional. EE option: if all allies are Earth, Extreme Remedies on caster turn decreases Invigorate CD by 1.

## Kit

S1 Extreme Remedies (+1 Soul): attack; dispel 1 debuff from an ally. S2 Light of Rebirth (+2 Souls, 3 CD): Barrier all allies 2 turns ∝ ally max Health; awaken also recovers Health ∝ ally max Health. S3 Invigorate (+3 Souls, 5→4 CD): dispel all debuffs all allies; Immunity 2 turns; heal ∝ ally max Health; Soulburn (−10): increase amount recovered. EE Flawless Wings: Earth-team Invigorate CD −1 on S1; or Light of Rebirth heal +15%; or Invigorate self Defense 2 turns. RGB Ray only (≠ Death Dealer Ray).

## Defense / offense

8 / 2

## Unsure

- Exact barrier / heal coefficients vs ally max Health
- First-fight opening S3 cooldown
- Whether S1 targets enemy always (attack) while cleansing ally — yes per epic7db

## Object

```ts
{
  id: "ray",
  name: "Ray",
  short: "Ray",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["full-cleanse", "team-barrier", "team-heal", "immunity"],
  tags: ["single-target", "cleanse", "barrier", "heal", "immunity", "soulburn", "exclusive-equipment", "earth-synergy-ee"],
  effects: ["s1-attack-cleanse-ally", "s2-team-barrier", "awaken-s2-heal", "s3-full-cleanse-immunity-heal", "soulburn-heal", "ee-earth-cd-or-heal-or-def"],
  buffs: ["Barrier", "Immunity", "Increase Defense"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Flawless Wings EE earth synergy",
      scope: "conditional",
      tooltip: "If all allies Earth: S1 on turn reduces Invigorate CD by 1."
    }
  ],
  kit: "S1: attack + cleanse ally. S2: team Barrier (awaken +heal). S3 Invigorate: full cleanse + Immunity + heal; Soulburn heal↑. EE options. RGB ≠ DDR.",
  defense: 8,
  offense: 2,
  baseSpeed: 111,
  verified: false
}
```
