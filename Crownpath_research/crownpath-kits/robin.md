# Robin

Short: Robin

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-03-12 balance (STOVE; Say Hello To My Little Friends Soulburn 20→10). Prefer STOVE 100% Decrease Defense on S3 over epic7db 85%.

## Roles

cleave, strip, burn, bleed, detonate, defense-break

## Tags

single-target, aoe, bleed, burn, strip, decrease-defense, debuff-extend, detonate, swift-attack, cr-push, soulburn

## Effects

debuff-duration-extend, bleed-burn-detonate-soulburn, swift-attack-on-ally-extra-turn, strip-then-double-burn

## Buffs

Swift Attack

## Debuffs

Bleed, Burn, Decrease Defense

## Unique effects

### Say Hello To My Little Friends (post 2026-03-12)

Targets (AoE). Extends durations of debuffs except those which prevent movement by 1 turn, then Decrease Defense 2 turns (STOVE awakened text: 100%; epic7db still shows 85% — prefer STOVE). While this skill is not on cooldown, at the start of an ally's extra turn: grant Swift Attack to caster and Combat Readiness +25%. Soulburn (−10 post-patch; was −20): at end of turn, detonates Bleed and Burn on the target.

### Clear The Back strip burns

Targets (AoE). Dispel two buffs before 100% chance each to inflict two Burn for 1 turn; caster Combat Readiness +50%.

### Swift Attack proc

Self-only. When S3 is off cooldown and an ally takes an extra turn, grants Swift Attack (immediate action / turn — exact journal wording UNSURE) and CR +25%.

## Kit

S1 Neutralize (+1 Soul): 100% Bleed 2 turns (skill-ups raise chance from lower base — printed 100% on card). S2 Clear The Back (+2 Souls, 4 CD): AoE dispel 2 → two Burns 1 turn each; caster CR +50%. S3 Say Hello To My Little Friends (+2 Souls, 5→4 CD, post 2026-03-12): AoE extend non-movement debuffs +1 → Decrease Defense 2 turns (prefer STOVE 100%); while off CD, ally extra turn → Swift Attack + CR +25%; Soulburn (−10) detonate Bleed/Burn. Exact Swift Attack journal text, non-awakened Decrease Defense %, first-fight S3 opening CD: UNSURE.

## Defense / offense

3 / 8

## Unsure

- Exact Swift Attack journal wording / whether it is an immediate turn
- Non-awakened Decrease Defense chance if different from STOVE 100% awakened
- Whether Neutralize Bleed chance needs skill-ups to reach 100%
- First-fight (opening) cooldown of Say Hello To My Little Friends
- Awaken skill-upgrade full after-text (epic7db only says Skill Upgrade)

## Object

```ts
{
  id: "robin",
  name: "Robin",
  short: "Robin",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "strip", "burn", "bleed", "detonate", "defense-break"],
  tags: ["single-target", "aoe", "bleed", "burn", "strip", "decrease-defense", "debuff-extend", "detonate", "swift-attack", "cr-push", "soulburn"],
  effects: ["debuff-duration-extend", "bleed-burn-detonate-soulburn", "swift-attack-on-ally-extra-turn", "strip-then-double-burn"],
  buffs: ["Swift Attack"],
  debuffs: ["Bleed", "Burn", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Say Hello To My Little Friends (post 2026-03-12)",
      scope: "targets",
      tooltip: "Extend non-movement debuffs +1 then Decrease Defense 2 turns (STOVE 100%); Soulburn (−10) detonate Bleed/Burn; off-CD ally extra turn → Swift Attack + CR +25%."
    },
    {
      name: "Swift Attack proc",
      scope: "self-only",
      tooltip: "While S3 off CD, ally extra turn grants Swift Attack (exact wording UNSURE) + CR +25%."
    }
  ],
  kit: "S1 Neutralize (+1 Soul): Bleed 2 turns. S2 Clear The Back (+2 Souls, 4 CD): AoE dispel 2 + two Burns 1 turn; CR +50%. S3 Say Hello (2026-03-12, +2 Souls, 5→4 CD): extend debuffs + Decrease Defense; off-CD ally extra turn → Swift Attack + CR +25%; Soulburn (−10) detonate Bleed/Burn.",
  defense: 3,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
