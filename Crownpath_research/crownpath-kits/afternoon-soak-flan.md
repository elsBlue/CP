# Afternoon Soak Flan

Short: ASFlan

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-09-04 (released 2024-10-17; no later balance listing found in 2025–2026 previews checked)

## Roles

dps, control, cleave

## Tags

stun, dual-attack, evade, always-crit, defbreak, soulburn, cr-push, aoe

## Effects

dual-attack, increase-cr, increase-evasion, always-crit, ignore-er

## Buffs

none

## Debuffs

Stun, Decrease Defense

## Unique effects

### Focus (Afternoon Soak Flan)

Self-only. Resource used by I’m Still On Vacation! / It’s a Whopper!. Starts first battle at 3 Focus. It’s a Whopper! gains 1 Focus. Passive Dual Attack consumes 1 Focus when Focus is available.

### It’s a Whopper!

Self-only (replaces S1 on caster’s turn). Attacks all enemies, and gains 1 Focus. A successful attack always results in a critical hit. This skill does not trigger a Dual Attack or counterattack.

### I’m Still On Vacation! evasion

Self-only. Increases Evasion by 50%, and when Focus is 1 or higher, increases Evasion by an additional 50%.

## Kit

S1 Do Not Disturb (+1 Soul): off-turn / dual-attack form attacks one enemy with a gun, chance to Stun for 1 turn (40% on epic7db skill card = fully enhanced; base 30% before +10% effect-chance enhancements), always crits on successful attack. On the caster’s turn, uses It’s a Whopper! instead (AoE always-crit, +1 Focus, cannot trigger Dual Attack or counterattack). S2 I’m Still On Vacation! (passive): at start of first battle gains 3 Focus; +50% Evasion (+50% more when Focus ≥ 1); after an ally uses a basic skill, consumes 1 Focus to trigger a Dual Attack and increases caster Combat Readiness (15% base → 25% fully enhanced). S3 In the Palm of My Hand (+3 Souls, 5-turn cooldown, −1 → 4): attacks one enemy, Decrease Defense for 2 turns, always crits; Combat Readiness push +20% (target: allies per epic7x / release-style comparisons; epic7db lists caster — see Unsure). Soulburn (−10 Souls): ignores Effect Resistance. Extra Attack vs Dual Attack: passive triggers Dual Attack (not Extra Attack).

## Defense / offense

4 / 8

## Unsure

- First-fight (opening) cooldown of In the Palm of My Hand
- Whether S3 CR +20% is caster-only (epic7db) or all allies (epic7x / Requiem-style comparisons) — omitted from Object effects certainty; kit notes both
- Exact in-game apostrophe spelling: I’m / I'm; It's a Whopper! vs It’s a Whopper!

## Object

```ts
{
  id: "afternoon-soak-flan",
  name: "Afternoon Soak Flan",
  short: "ASFlan",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "control", "cleave"],
  tags: ["stun", "dual-attack", "evade", "defbreak", "soulburn", "cr-push", "aoe"],
  effects: ["dual-attack", "increase-cr", "increase-evasion", "always-crit"],
  buffs: [],
  debuffs: ["Stun", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Focus",
      scope: "self-only",
      tooltip: "At the start of the first battle, gains 3 Focus. It’s a Whopper! gains 1 Focus. After an ally uses a basic skill, consumes 1 Focus to Dual Attack."
    },
    {
      name: "It’s a Whopper!",
      scope: "self-only",
      tooltip: "Attacks all enemies, and gains 1 Focus. A successful attack always results in a critical hit. This skill does not trigger a Dual Attack or counterattack."
    },
    {
      name: "I’m Still On Vacation! evasion",
      scope: "self-only",
      tooltip: "Increases Evasion by 50%, and when Focus is 1 or higher, increases Evasion by an additional 50%."
    }
  ],
  kit: "S1 Do Not Disturb / It’s a Whopper! (+1 Soul): off-turn single gun attack with Stun chance + always crit; on own turn AoE always-crit +1 Focus, no Dual/counter. S2 passive: 3 Focus at first battle, evasion 50%/100% with Focus, ally basic skill spends 1 Focus for Dual Attack + caster CR (15→25%). S3 In the Palm of My Hand (+3 Souls, 5→4 CD): Decrease Defense 2 turns, always crit, CR +20% (caster vs allies UNSURE); Soulburn (−10) ignore ER.",
  defense: 4,
  offense: 8,
  baseSpeed: 114,
  verified: false
}
```
