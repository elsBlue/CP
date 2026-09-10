# Jenua

Short: Jenua

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2025-07-16 balance (STOVE preview; epic7db / epic7x still show pre-patch Bite crit-gated splash and no extinction)

## Roles

dps, pen, bruiser, extinction

## Tags

single-target, pen, rage, immortality, soulburn, extra-attack, extinction, self-cleanse, cr-push, vamp

## Effects

defense-penetration, extinction-on-kill, plan-a, immortality-once

## Buffs

Increase Attack, Increase Attack (Greater), Rage (Enrage), Immortality

## Debuffs

none

## Unique effects

### Plan A

Self-only. After being attacked, when Health is 50% or less, activate Plan A (once every 5 turns; skill-up −1 → 4). Plan A: dispel all debuffs from caster; become enraged for 2 turns; increase Combat Readiness by 50%. Requires ability to act (hard CC can block Plan A cleanse/enrage/CR).

### Wild Dog Company Captain immortality

Self-only. Upon receiving lethal damage, grant Immortality for 1 turn (once per battle).

### Bite splash + extinction (post 2025-07-16)

Self-only / targets. Bite deals additional damage proportional to caster Attack to all enemies except the primary target (no longer requires a critical hit). When the enemy is defeated, inflict Extinction. Awakened: absorbs some damage dealt as Health (STOVE “absorbing”; older cards said recover ∝ Attack — exact absorb vs recover wording: UNSURE).

## Kit

S1 Taste Test (+1 Soul, post 2025-07-16): first grant Increase Attack to caster for 1 turn, then attack; when caster is already enraged, activate Bite as an extra attack (once per turn, during caster's turn). Soulburn: grant Increase Attack (Greater) for 1 turn (soul cost −10 on epic7db vs −20 on epic7x: UNSURE). S2 Wild Dog Company Captain (passive): lethal → Immortality 1 turn once/battle; after attacked at ≤50% Health → Plan A. S3 Bite (awakened, +2 Souls, 5-turn cooldown, −1 → 4): sword attack; penetrate Defense; additional damage ∝ Attack to all other enemies; Extinction on kill; awakened absorbs some damage as Health. First-fight opening cooldown: UNSURE. Exact Defense penetration % on Bite: UNSURE (full pen vs partial — sources say “penetrates” without %). Exact additional-damage multiplier: UNSURE.

## Defense / offense

5 / 8

## Unsure

- Soulburn soul cost (−10 vs −20)
- Exact Bite Defense penetration percentage
- Exact Bite splash / absorb multipliers
- First-fight (opening) cooldown of Bite
- Whether Plan A internal CD starts at 5 or is displayed differently in-game after skill-up

## Object

```ts
{
  id: "jenua",
  name: "Jenua",
  short: "Jenua",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "pen", "bruiser", "extinction"],
  tags: ["single-target", "pen", "rage", "immortality", "soulburn", "extra-attack", "extinction", "self-cleanse", "cr-push", "vamp"],
  effects: ["defense-penetration", "extinction-on-kill", "plan-a", "immortality-once"],
  buffs: ["Increase Attack", "Increase Attack (Greater)", "Rage", "Immortality"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Plan A",
      scope: "self-only",
      tooltip: "After attacked at ≤50% Health (once every 5→4 turns): full self cleanse, Enrage 2 turns, CR +50%. Blocked if unable to act."
    },
    {
      name: "Bite splash + extinction",
      scope: "targets",
      tooltip: "Post 2025-07-16: additional damage ∝ Attack to all except target (no crit gate); Extinction on kill; awakened absorbs damage as Health."
    }
  ],
  kit: "S1 Taste Test (+1 Soul, 2025-07-16): Increase Attack 1 turn then attack; if already enraged → Bite extra (1×/turn); Soulburn → Increase Attack (Greater). S2 Wild Dog Company Captain: lethal Immortality 1 turn once/battle; ≤50% HP after hit → Plan A. S3 Bite awakened (+2 Souls, 5→4 CD): Defense pen + splash add-dmg all others + Extinction on kill + absorb HP.",
  defense: 5,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
