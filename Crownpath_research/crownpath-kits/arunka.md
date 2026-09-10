# Arunka

Short: Arunka

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2026-09-04 (kit per epic7db incl. barrier bonus damage + awaken Extinction; prior June balance increased barrier damage — year of that patch UNSURE; no 2025–2026 STOVE listing confirmed)

## Roles

dps, barrier-breaker, bleed, sustain

## Tags

bleed, extra-attack, no-crit, barrier-bonus, defense-penetration, extinction, heal, soulburn, cr-push

## Effects

cannot-crit, barrier-end-turn-cr, expose-heal, barrier-bonus-damage

## Buffs

none

## Debuffs

Bleed

## Unique effects

### Wild Instinct

Self-only. Attack +30%. When attacking, cannot trigger a critical hit. At the end of an enemy's turn, if that target is granted a Barrier, caster CR +10% base (enhancements +1%×5 → 15% fully enhanced).

### Expose (extra attack)

Targets (single). From Dagger Throw: heal caster ∝ Attack. Once per turn during caster's turn. Soulburn on S1: 100% Expose.

### A Thrashing In The Prairie (barrier nuke + extinction)

Targets (single). 70% Defense penetration; increased damage if target has Barrier; kill resets this skill's cooldown. Awakened: on defeat, also inflicts Extinction.

## Kit

S1 Dagger Throw (+1 Soul): 50% chance each to inflict two Bleeds 2 turns; successful attack 50% chance activate Expose (heal ∝ Attack; once/turn on caster turn). Soulburn (−10): 100% Expose. S2 Wild Instinct (passive): +30% Attack; cannot crit; enemy end-turn while Barrier → CR push (10%→15% FE). S3 A Thrashing In The Prairie (+3 Souls, 5→4 CD): 70% Def pen; bonus damage vs Barrier; kill resets CD; awaken Extinction on kill. Exact Barrier bonus damage % and Expose heal coeff: UNSURE.

## Defense / offense

4 / 8

## Unsure

- Exact increased-damage % vs Barrier on S3 (buffed in a June patch; exact value not on epic7db card)
- Exact Expose heal coefficient vs Attack
- Year of the June Arunka barrier-damage balance (epic7x undated; no clear 2025–2026 STOVE hit)
- First-fight opening CD

## Object

```ts
{
  id: "arunka",
  name: "Arunka",
  short: "Arunka",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "barrier-breaker", "bleed", "sustain"],
  tags: ["bleed", "extra-attack", "no-crit", "barrier-bonus", "defense-penetration", "extinction", "heal", "soulburn", "cr-push"],
  effects: ["cannot-crit", "barrier-end-turn-cr", "expose-heal", "barrier-bonus-damage"],
  buffs: [],
  debuffs: ["Bleed"],
  uniqueEffects: [
    {
      name: "Wild Instinct",
      scope: "self",
      tooltip: "+30% Attack; cannot crit. Enemy end-turn with Barrier → caster CR push (10%→15% FE)."
    },
    {
      name: "Expose",
      scope: "targets",
      tooltip: "Extra attack from S1: heal ∝ Attack; once per caster turn. Soulburn guarantees."
    }
  ],
  kit: "S1 Dagger Throw (+1): 2× Bleed 50% each; 50% Expose heal. Soulburn (−10): 100% Expose. S2 Wild Instinct: +30% Atk, no crit; barrier end-turn CR. S3 Thrashing (+3, 5→4): 70% pen + barrier bonus dmg; kill reset CD; awaken Extinction. Barrier bonus % UNSURE.",
  defense: 4,
  offense: 8,
  baseSpeed: 102,
  verified: false
}
```
