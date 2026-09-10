# Kayron

Short: Kayron

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 123

Patch / date used: 2025-04-10 balance (STOVE; Immortal Will Evasion 2 turns + Apocalypse absorb HP + skill damage up + Imprint Concentration → Crit Chance)

## Roles

dps, bruiser, immortality, cleave

## Tags

single-target, aoe, immortality, evasion, unhealable-hit-chance, soulburn, lost-health-scaling, absorb, buff-extend, silence-ee

## Effects

lost-health-scaled-damage, immortality-reset-apocalypse, void-slash-aoe-when-buffed, absorb-on-apocalypse

## Buffs

Immortality, Increase Evasion

## Debuffs

Decrease Hit Chance, Silence (EE option)

## Unique effects

### Void Slash buffed AoE

Self/targets. If not Dual Attack and caster has a buff, Void Slash becomes an all-enemies attack (does not trigger Dual Attack). Damage ∝ caster's lost Health; 50%→~65%+ Decrease Hit Chance 1 turn (skill-ups). Soulburn (−10): increases damage dealt.

### Immortal Will

Self-only. On lethal damage: Immortality 1 turn + Increase Evasion 2 turns (post 2025-04-10) and reset Apocalypse cooldown. Once every 6 turns (skill-ups −1×3 → once every 3 turns fully enhanced — confirm UI: UNSURE).

### Apocalypse absorb + buff extend

Targets. Absorb some damage dealt as Health (post 2025-04-10); on kill extend caster buff durations by 1 turn; damage ∝ lost Health. Base CD 6 (−1 → 5).

## Kit

S1 Void Slash (+1 Soul): Decrease Hit Chance 1 turn; damage ∝ lost Health; if buffed and not Dual Attack → AoE (no Dual Attack); Soulburn (−10) damage up. S2 Immortal Will (passive): lethal → Immortality 1 turn + Increase Evasion 2 turns + reset Apocalypse (gated turns as above). S3 Apocalypse (+3 Souls, 6→5 CD): attack; absorb some damage as Health; kill → extend own buffs 1 turn; damage ∝ lost Health. Exclusive Equipment Grudge Marble (Crit Rate): Void Slash +10% damage / +10% damage / Silence 1 turn. Exact absorb % and lost-Health formulas: UNSURE. Exact fully-skilled Immortal Will gate: UNSURE. First-fight opening cooldown of Apocalypse: UNSURE.

## Defense / offense

6 / 7

## Unsure

- Exact lost-Health damage formulas on Void Slash / Apocalypse
- Exact Apocalypse absorb percentage
- Immortal Will internal CD display after full skill-ups (6→3 assumed)
- First-fight (opening) cooldown of Apocalypse
- Whether EE Silence is chance-based or guaranteed

## Object

```ts
{
  id: "kayron",
  name: "Kayron",
  short: "Kayron",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "bruiser", "immortality", "cleave"],
  tags: ["single-target", "aoe", "immortality", "evasion", "unhealable-hit-chance", "soulburn", "lost-health-scaling", "absorb", "buff-extend", "silence-ee"],
  effects: ["lost-health-scaled-damage", "immortality-reset-apocalypse", "void-slash-aoe-when-buffed", "absorb-on-apocalypse"],
  buffs: ["Immortality", "Increase Evasion"],
  debuffs: ["Decrease Hit Chance", "Silence"],
  uniqueEffects: [
    {
      name: "Void Slash buffed AoE",
      scope: "self-only",
      tooltip: "If buffed and not Dual Attack, Void Slash hits all enemies (no Dual Attack); dmg ∝ lost Health."
    },
    {
      name: "Immortal Will",
      scope: "self-only",
      tooltip: "Lethal → Immortality 1 turn + Increase Evasion 2 turns + reset Apocalypse (once/6→3 turns UNSURE)."
    }
  ],
  kit: "S1 Void Slash (+1 Soul): Decrease Hit Chance; dmg ∝ lost HP; if buffed → AoE; Soulburn (−10) dmg up. S2 Immortal Will: lethal Immortality+Evasion 2 turns + reset S3. S3 Apocalypse (+3 Souls, 6→5 CD): absorb HP; kill extend buffs 1 turn; dmg ∝ lost HP. EE Grudge Marble.",
  defense: 6,
  offense: 7,
  baseSpeed: 123,
  verified: false
}
```
