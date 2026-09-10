# Tamarinne

Short: Tama

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: long-standing idol kit (no 2025–2026 Tamarinne skill balance found; PvE staple). Prefer epic7db awaken: Shining Star☆ grants extra turn.

## Roles

healer, cleanse, cr-push, strip, dual-attack, idol

## Tags

single-target, aoe, heal, cleanse, idol-form, dual-attack, strip, attack-buff, cr-push, soulburn, max-health-scaling, extra-turn

## Effects

idol-form-skill-swap, shining-star-full-cleanse, cooldown-reduction-on-s1-s2, dual-attack-in-idol, soulburn-team-heal

## Buffs

Idol, Increase Attack

## Debuffs


## Unique effects

### Idol form (Shining Star☆)

Self/allies. Dispel all debuffs from all allies; recover caster to max Health; become Idol for 3 turns. Awakened: also grants extra turn. Begins every battle with full cooldown count (printed). While Idol, S1/S2 use Idol variants.

### Idol Serene Tune

Targets / allies. AoE attack that dispels all buffs; Dual Attack from highest-Attack ally. Soulburn (−20): greatly recovers Health of all allies after attacking.

### Idol Song of the Forest

Allies. Increase Attack all allies 2 turns; Combat Readiness +50% (base + skill-ups); recover Health ∝ caster max Health.

## Kit

S1 Serene Tune (+1 Soul): (base) attack + heal lowest-HP ally ∝ ally max Health; S3 CD −1. (Idol) AoE full dispel + Dual Attack highest-Atk ally; Soulburn (−20) big team heal. S2 Song of the Forest (+1 Soul, 2 CD): (base) heal all allies ∝ caster max Health; S3 CD −1. (Idol) Increase Attack 2 turns + CR +50% (enhanced path) + heal ∝ max Health. S3 Shining Star☆ (awakened, +2 Souls, 9→8 CD): full cleanse all allies; self to max HP; Idol 3 turns; awaken extra turn; starts every battle on full CD. Exact heal %, Idol CR fully enhanced value, whether “full cooldown count” means max CD stacks: UNSURE.

## Defense / offense

8 / 5

## Unsure

- Exact heal percentages (ally max HP vs caster max HP lines)
- Fully enhanced Idol Song Combat Readiness %
- Whether battle-start “full cooldown count” still applies in all modes
- First usable turn for Shining Star☆ after battle start (explicitly starts on full CD)

## Object

```ts
{
  id: "tamarinne",
  name: "Tamarinne",
  short: "Tama",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["healer", "cleanse", "cr-push", "strip", "dual-attack", "idol"],
  tags: ["single-target", "aoe", "heal", "cleanse", "idol-form", "dual-attack", "strip", "attack-buff", "cr-push", "soulburn", "max-health-scaling", "extra-turn"],
  effects: ["idol-form-skill-swap", "shining-star-full-cleanse", "cooldown-reduction-on-s1-s2", "dual-attack-in-idol", "soulburn-team-heal"],
  buffs: ["Idol", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Idol form (Shining Star☆)",
      scope: "self-only",
      tooltip: "Full team cleanse + self full heal → Idol 3 turns; awaken extra turn; starts battles on full CD; swaps S1/S2 to Idol versions."
    },
    {
      name: "Idol Serene Tune",
      scope: "targets",
      tooltip: "AoE full dispel + Dual Attack highest-Atk ally; Soulburn (−20) large team heal."
    }
  ],
  kit: "S1 Serene Tune (+1 Soul): base heal lowest + S3 CD −1; Idol AoE full strip + Dual Attack; Soulburn (−20) team heal. S2 Song of the Forest (+1 Soul, 2 CD): base team heal + S3 CD −1; Idol Atk up + CR push + heal. S3 Shining Star☆ awakened (+2 Souls, 9→8 CD): full cleanse, Idol 3 turns, extra turn; starts on full CD.",
  defense: 8,
  offense: 5,
  baseSpeed: 105,
  verified: false
}
```
