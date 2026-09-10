# Hwayoung

Short: Hwayoung

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-01-08 balance (STOVE preview; epic7db Prairie Hawk / Soulburn still pre-patch)

## Roles

bruiser, dps, pen

## Tags

single-target, pen, barrier, immunity, soulburn, evasion, extra-attack, no-crit

## Effects

self-cleanse, defense-penetration

## Buffs

Increase Attack, Immunity, Barrier

## Debuffs

none

## Unique effects

### Prairie Hawk

Self-only. Increases Evasion by 50%. When attacking, cannot trigger a critical hit or a heavy blow. At the start of the turn, grants Increase Attack for 1 turn (unconditional after 2026-01-08). Skill enhancements reduce damage received (card shows −1% to −3% steps; exact fully-enhanced DR % and whether DR remains post-patch: UNSURE — 30% crit-DR was removed in favor of Evasion).

### Monarch's Flaming Strike pen

Self-only. When the caster's Attack is greater than the target's Attack, penetrates Defense proportional to the difference, up to 100%. Exact Attack difference for 100% pen after 2026-01-08 reduction: UNSURE. Barrier strength ∝ caster's Attack.

### Exclusive Equipment (post 2026-01-08 option 2)

Self-only. Increases Combat Readiness of the caster by 15% when using Supersonic Kick (replaced old “Prairie Hawk Increase Attack regardless of debuff” option).

## Kit

S1 Supersonic Kick (+1 Soul): kick; additional damage proportional to caster's Attack. Soulburn (−10 Souls): grants an extra attack with the same skill (2026-01-08). S2 Prairie Hawk (passive): +50% Evasion; cannot crit / heavy blow on attack; start of turn → Increase Attack 1 turn. S3 Monarch's Flaming Strike (awakened, +2 Souls, 4-turn cooldown, −1 → 3): dispel all debuffs from caster; secret-technique attack; Immunity + Barrier for 2 turns; Attack-difference Defense penetration up to 100%. First-fight opening cooldown: UNSURE.

## Defense / offense

5 / 8

## Unsure

- Exact Attack difference required for 100% Defense penetration after 2026-01-08
- Whether S2 skill-up damage-reduction lines still exist alongside Evasion
- First-fight (opening) cooldown of Monarch's Flaming Strike
- Exact additional-damage multiplier on Supersonic Kick

## Object

```ts
{
  id: "hwayoung",
  name: "Hwayoung",
  short: "Hwayoung",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "dps", "pen"],
  tags: ["single-target", "pen", "barrier", "immunity", "soulburn", "evasion", "extra-attack", "no-crit"],
  effects: ["self-cleanse", "defense-penetration"],
  buffs: ["Increase Attack", "Immunity", "Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Prairie Hawk",
      scope: "self-only",
      tooltip: "Increases Evasion by 50%. When attacking, cannot trigger a critical hit or a heavy blow. At the start of the turn, grants Increase Attack for 1 turn."
    },
    {
      name: "Monarch's Flaming Strike pen",
      scope: "self-only",
      tooltip: "When the caster's Attack is greater than the target's Attack, penetrates Defense proportional to the difference, up to 100%. Exact Atk gap for 100% pen: UNSURE."
    }
  ],
  kit: "S1 Supersonic Kick (+1 Soul): add-dmg ∝ Atk; Soulburn (−10) extra attack same skill. S2 Prairie Hawk: +50% Eva; no crit/heavy blow; SoT Increase Attack 1 turn. S3 Monarch's Flaming Strike awakened (+2 Souls, 4→3 CD): self full cleanse + Immunity + Barrier 2 turns + Atk-diff pen up to 100%.",
  defense: 5,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
