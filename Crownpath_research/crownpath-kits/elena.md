# Elena

Short: Elena

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: 2024-01-18 STOVE (S3 cleanse) + 2024-10-24 STOVE (EE option moved to Consecrated Ground) — no 2025–2026 Elena skill balance listing found; prefer STOVE over epic7db EE lag; kit checked 2026-09-04

## Roles

aoe-mitigation, cleanse, invincibility, heal, cr-push

## Tags

single-target, aoe, cleanse, invincibility, increase-effect-resistance, heal, cr-push, damage-reduction, soulburn

## Effects

ally-cleanse-s1, soulburn-full-cleanse, aoe-damage-reduction, consecrated-ground-heal-cr, s3-cleanse-invincibility, awaken-increase-er, ee-consecrated-cleanse-per-stove

## Buffs

Invincibility, Increase Effect Resistance, Barrier (none baseline — EE/other only)

## Debuffs

(none)

## Unique effects

### Consecrated Ground

Allies + self. When an ally suffers an attack that targets all enemies: damage received −20% (enhanceable; only strongest damage-reduction applies) and activate Consecrated Ground once every 2 turns — recover Health of all allies ∝ caster max Health, then caster CR +20% (EE option may add cleanse / extra CR per STOVE 2024-10-24; epic7db EE text lags).

### Eternally Shining Comet (awakened)

Allies. AoE attack; dispel one debuff from all allies; Invincibility 1 turn; awaken also Increase Effect Resistance 2 turns. Jan 2024 STOVE added the cleanse on S3.

## Kit

S1 Starlight's Will (+1 Soul): attack; dispel one debuff each from two allies. Soulburn (−20): dispel all debuffs from all allies. S2 Guardian's Authority (passive, 2-turn internal on Consecrated Ground): on enemy all-target attack → −20% damage taken (enhanceable) + Consecrated Ground heal + caster CR +20%. S3 Eternally Shining Comet (+3 Souls, 6→5 CD): AoE; dispel one debuff all allies; Invincibility 1 turn; awaken + Increase Effect Resistance 2 turns. EE: prefer STOVE 2024-10-24 — option that cleanses via Consecrated Ground (epic7db still shows old S3-tied cleanse → lag). Exact heal/DR enhance totals and EE option numbers: UNSURE where sources conflict. First-fight opening CD: UNSURE.

## Defense / offense

8 / 2

## Unsure

- Exact Consecrated Ground heal coefficient vs max Health
- Fully enhanced AoE damage-reduction % (card shows 20% + enhance steps)
- Current Exclusive Equipment option 2 exact client text (STOVE moved cleanse to Consecrated Ground; epic7db lags)
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "elena",
  name: "Elena",
  short: "Elena",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-mitigation", "cleanse", "invincibility", "heal", "cr-push"],
  tags: ["single-target", "aoe", "cleanse", "invincibility", "increase-effect-resistance", "heal", "cr-push", "damage-reduction", "soulburn"],
  effects: ["ally-cleanse-s1", "soulburn-full-cleanse", "aoe-damage-reduction", "consecrated-ground-heal-cr", "s3-cleanse-invincibility", "awaken-increase-er", "ee-consecrated-cleanse-per-stove"],
  buffs: ["Invincibility", "Increase Effect Resistance"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Consecrated Ground",
      scope: "allies",
      tooltip: "On enemy all-target attack (once/2 turns): AoE heal ∝ max HP + caster CR +20%; EE may cleanse per STOVE 2024-10-24."
    }
  ],
  kit: "S1 Starlight's Will (+1 Soul): cleanse 1 from two allies; Soulburn (−20) full team cleanse. S2 Guardian's Authority: AoE hit → DR + Consecrated Ground heal/CR. S3 Eternally Shining Comet (+3 Souls, 6→5 CD): cleanse 1 + Invincibility; awaken + Increase ER. Prefer STOVE EE cleanse on Consecrated Ground.",
  defense: 8,
  offense: 2,
  baseSpeed: 105,
  verified: false
}
```
