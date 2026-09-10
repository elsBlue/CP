# Sigret

Short: Sigret

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no RGB Sigret hero skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Operator / Swift Flagbearer Sigret; kit per epic7db 2026-09-04)

## Roles

bleed, unhealable, penetrate-vs-debuffs, extinction, wyvern-pve

## Tags

single-target, bleed, unhealable, penetrate, extinction, soulburn, extra-attack

## Effects

s1-double-bleed, s2-unhealable-bleed-extra-sever, soulburn-extra-turn-on-s2, s3-pen-scales-with-debuffs-extinction, awaken-pen-per-debuff-10, ee-sever-dmg-or-bleed-or-smash-threshold

## Buffs

(none)

## Debuffs

Bleed, Unhealable

## Unique effects

### Guillotine penetration

Enemy. Penetrates Defense by 30%, plus additional penetration per debuff on the enemy (5% base / 10% awakened per debuff). Extinction on kill.

### Smash → Sever

Enemy. After Smash, if target Health ≤50% (EE option can raise to 75%): activate Sever as extra attack with 100% bleed chance.

## Kit

S1 Sever (+1 Soul): 50% chance each to inflict two Bleeds 2 turns. S2 Smash (+2 Souls, 3 CD): 100% Unhealable + Bleed 2 turns; if target ≤50% HP after → Sever extra (100% bleed). Soulburn (−20): Extra Turn. S3 Guillotine (+3 Souls, 5→4 CD): lethal; 30% pen + 5%/debuff (awaken 10%/debuff); Extinction on kill. EE Queen's Keepsake: Sever +20% damage; or Sever +20% bleed chance; or Smash Sever threshold 50%→75%. Exact max pen cap: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

2 / 8

## Unsure

- Whether Guillotine penetration has a listed maximum cap in current client
- Exact Sever EE damage option interaction with multipliers
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "sigret",
  name: "Sigret",
  short: "Sigret",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bleed", "unhealable", "penetrate-vs-debuffs", "extinction", "wyvern-pve"],
  tags: ["single-target", "bleed", "unhealable", "penetrate", "extinction", "soulburn", "extra-attack"],
  effects: ["s1-double-bleed", "s2-unhealable-bleed-extra-sever", "soulburn-extra-turn-on-s2", "s3-pen-scales-with-debuffs-extinction", "awaken-pen-per-debuff-10", "ee-sever-dmg-or-bleed-or-smash-threshold"],
  buffs: [],
  debuffs: ["Bleed", "Unhealable"],
  uniqueEffects: [
    {
      name: "Guillotine penetration",
      scope: "enemy",
      tooltip: "30% pen + 5%/debuff (awaken 10%/debuff); Extinction on kill. Cap UNSURE."
    }
  ],
  kit: "S1 Sever: two Bleed chances. S2 Smash: Unhealable+Bleed; ≤50% HP → Sever extra; Soulburn (−20) Extra Turn. S3 Guillotine: pen scales with debuffs; Extinction on kill. EE: Sever dmg/bleed or Smash threshold 75%.",
  defense: 2,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
