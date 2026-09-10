# Lethe

Short: Lethe

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2026-03-12 STOVE (Dreamer in the Deep omen on extra/counter/dual + +10% Health; Freeze Over ignores ER vs lower max HP; Imprint Concentration → Health; Call of the Abyss damage slightly ↓) — epic7db skill/imprint text still lags pre-buff; kit checked 2026-09-04

## Roles

omen-nuke, aoe-control, frostbite, restrict, extinction, self-sustain

## Tags

single-target, aoe, omen, frostbite, restrict, extinction, increase-speed, penetrate, heal, cr-push, soulburn, limited

## Effects

omen-on-attack-including-extra-counter-dual, call-of-the-abyss-at-3-omen, s3-frostbite-restrict, ignore-er-vs-lower-max-hp, awaken-buff-duration-cut, free-first-soulburn, imprint-concentration-health-per-stove

## Buffs

Increase Speed

## Debuffs

Frostbite, Restrict

## Unique effects

### Omen

Enemy. Stacking mark (up to 3). Unaffected by Effect Resistance; cannot be dispelled/transferred/resisted with Immunity (per prior kit language). At 3 stacks after Wave Slash: consume all → Call of the Abyss.

### Call of the Abyss

Enemy (+ allies on kill). Defense-penetrating non-crit attack ∝ caster max Health; on defeat: Extinction + heal all allies ∝ max Health + caster CR +50%. STOVE 2026-03-12 slightly decreased damage after Health imprint change — exact multiplier: UNSURE.

### Dreamer in the Deep (post-2026-03-12)

Self. +10% Health; first Soulburn costs 0 Soul; on attack (including Extra/Counter/Dual per STOVE) 100% chance to inflict 1 Omen (epic7db still shows “cannot activate on counter/dual/extra” → lag).

## Kit

S1 Wave Slash (+1 Soul): attack; Increase Speed 1 turn; if target Omen = 3 → Call of the Abyss (consume Omen). S2 Dreamer in the Deep (passive): +10% Health (STOVE); free first Soulburn; Omen on attack including Extra/Counter/Dual (STOVE). S3 Freeze Over (+3 Souls, 5→4 CD): AoE; Frostbite + Restrict 2 turns (100% enhanced); ignores ER of targets with lower max Health than caster (STOVE); awaken also decrease buff durations by 1. Soulburn (−20): extra turn. EE Kroscilla's Frost exists (Call of the Abyss dmg/heal options; Freeze Over no-counter option) — exact current option numbers: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

4 / 7

## Unsure

- Exact Call of the Abyss damage/heal coefficients after 2026-03-12 slight damage decrease
- Whether Omen still applies “regardless of hit” post-buff (STOVE after-text omitted that clause)
- Current EE option exact values
- First-fight (opening) S3 cooldown
- Imprint Concentration Health % values post-change (epic7db still shows Effectiveness)

## Object

```ts
{
  id: "lethe",
  name: "Lethe",
  short: "Lethe",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["omen-nuke", "aoe-control", "frostbite", "restrict", "extinction", "self-sustain"],
  tags: ["single-target", "aoe", "omen", "frostbite", "restrict", "extinction", "increase-speed", "penetrate", "heal", "cr-push", "soulburn", "limited"],
  effects: ["omen-on-attack-including-extra-counter-dual", "call-of-the-abyss-at-3-omen", "s3-frostbite-restrict", "ignore-er-vs-lower-max-hp", "awaken-buff-duration-cut", "free-first-soulburn", "imprint-concentration-health-per-stove"],
  buffs: ["Increase Speed"],
  debuffs: ["Frostbite", "Restrict"],
  uniqueEffects: [
    {
      name: "Omen",
      scope: "enemy",
      tooltip: "Stacks to 3; at 3 after Wave Slash consume → Call of the Abyss. Prefer STOVE: also from Extra/Counter/Dual."
    },
    {
      name: "Call of the Abyss",
      scope: "enemy",
      tooltip: "Penetrating non-crit ∝ max HP; on kill Extinction + AoE heal + caster CR +50%. Exact dmg post-2026-03-12 UNSURE."
    }
  ],
  kit: "S1 Wave Slash: Speed buff; at 3 Omen → Call of the Abyss. S2 Dreamer: +10% HP; free first Soulburn; Omen on attack incl. Extra/Counter/Dual (STOVE 2026-03-12; epic7db lags). S3 Freeze Over: AoE Frostbite+Restrict; ignore ER vs lower max HP; awaken −1 buff duration. Soulburn (−20) extra turn.",
  defense: 4,
  offense: 7,
  baseSpeed: 115,
  verified: false
}
```
