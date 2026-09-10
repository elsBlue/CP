# Riza Hawkeye

Short: Riza Hawkeye

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no Riza Hawkeye hero skill balance listing found in 2025–2026 STOVE previews checked; Fullmetal Alchemist collab limited; kit per epic7db 2026-09-04)

## Roles

foremost-ally-guard, strip, cr-push-down, immunity, target

## Tags

single-target, target, damage-reduction, cleanse, hawks-eye, strip, cr-push-down, immunity, exploit-weak-point, soulburn, collab, limited

## Effects

s1-target-hawks-eye-foremost-cr, passive-foremost-single-dr, low-hp-cleanse-hawks-eye, s3-full-strip-cr-down-immunity, awaken-exploit-weak-point, soulburn-ignore-er

## Buffs

Hawk's Eye, Immunity, Exploit Weak Point (awaken)

## Debuffs

Target

## Unique effects

### Hawk's Eye

Self. While granted: after S1, increase Combat Readiness of the foremost ally by 20%.

### Devoted Support

Foremost ally + self. On Single Attack vs foremost ally: damage suffered −30% (+enhance). When foremost ally HP ≤50% after attack: cleanse all debuffs from foremost ally + caster; grant Hawk's Eye 2 turns (cleanse/Hawk's Eye once every 3 turns).

## Kit

S1 Stand Back! (+1 Soul): 50% Target 2 turns; if Hawk's Eye → foremost ally CR +20%. S2 Devoted Support (passive): foremost Single Attack DR ~30%+; ≤50% HP trigger cleanse + Hawk's Eye (once/3 turns). S3 All Out! (+3 Souls, 5→4 CD): full strip; CR −50%; Immunity 2 turns to caster + foremost ally; awaken also Exploit Weak Point once to both. Soulburn (−20): ignores Effect Resistance. Exact fully-enhanced DR %: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

7 / 4

## Unsure

- Fully enhanced foremost Single Attack damage-reduction %
- Exact Exploit Weak Point client wording/scope
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "riza-hawkeye",
  name: "Riza Hawkeye",
  short: "Riza Hawkeye",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["foremost-ally-guard", "strip", "cr-push-down", "immunity", "target"],
  tags: ["single-target", "target", "damage-reduction", "cleanse", "hawks-eye", "strip", "cr-push-down", "immunity", "exploit-weak-point", "soulburn", "collab", "limited"],
  effects: ["s1-target-hawks-eye-foremost-cr", "passive-foremost-single-dr", "low-hp-cleanse-hawks-eye", "s3-full-strip-cr-down-immunity", "awaken-exploit-weak-point", "soulburn-ignore-er"],
  buffs: ["Hawk's Eye", "Immunity", "Exploit Weak Point"],
  debuffs: ["Target"],
  uniqueEffects: [
    {
      name: "Hawk's Eye",
      scope: "self",
      tooltip: "After S1: foremost ally CR +20%."
    },
    {
      name: "Devoted Support",
      scope: "allies",
      tooltip: "Foremost Single Attack DR; at ≤50% HP once/3 turns: cleanse foremost+self + Hawk's Eye 2 turns."
    }
  ],
  kit: "S1: Target; with Hawk's Eye foremost CR +20%. S2: foremost Single DR + low-HP cleanse/Hawk's Eye (once/3t). S3: full strip + CR−50% + Immunity (awaken + Exploit Weak Point) to self+foremost; Soulburn (−20) ignore ER.",
  defense: 7,
  offense: 4,
  baseSpeed: 109,
  verified: false
}
```
