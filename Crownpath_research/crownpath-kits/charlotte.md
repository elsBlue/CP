# Charlotte

Short: Charlotte

Element: Fire

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 99

Patch / date used: 2026-09-04 (kit per official 2026-03-12 balance; epic7db/epic7x were still pre-rework at fetch)

## Roles

bruiser, cleave, dps, tank

## Tags

aoe, unhealable, soulburn, always-crit, barrier, counter, cr-push

## Effects

increase-cr, always-crit, damage-reduction

## Buffs

Barrier

## Debuffs

Unhealable

## Unique effects

### Dual Swords (post–2026-03-12)

Self-only. Attacks the enemy with dual swords, and increases Combat Readiness of the caster by 25%. A successful attack always results in a critical hit. Acquires 25 Fighting Spirit (doubled when the AoE conversion triggers). When this skill is used, if it was not triggered by a Dual Attack and the caster has a buff, Dual Swords changes into an attack that targets all enemies.

### Will of the Swamp (post–2026-03-12)

Self-only. At the start of battle and at the end of the turn, grants a Barrier (proportional to Attack) for 1 turn. When the caster has a buff and attacking, increases damage dealt by 50%, and when attacked, grants 50% damage reduction.

### Vortex (awakened, post–2026-03-12)

Team-wide (enemies). Cuts all enemies while spinning, making them Unhealable for 2 turns. Penetrates Defense of the target with the highest Defense. A successful attack always results in a critical hit. Consumes 100 Fighting Spirit (no turn cooldown).

## Kit

S1 Dual Swords (+1 Soul): always-crit dual swords, caster CR +25%, +25 Fighting Spirit; if not a Dual Attack and caster has a buff, becomes AoE (FS gain doubled). Decrease Attack removed in 2026-03-12. S2 Will of the Swamp (passive): Barrier at battle start and end of turn (∝ Attack); while buffed, +50% damage dealt on attack and 50% damage reduction when attacked. S3 Vortex (awakened, +2 Souls, Fighting Spirit skill — consumes 100 FS, no turn CD): AoE Unhealable 2 turns, penetrates Defense of highest-Defense target, always crit; Soulburn (−10 Souls): acquires 100 Fighting Spirit after using this skill. Extra Attack vs Dual Attack: S1 AoE conversion explicitly does not apply when triggered by Dual Attack; counters/other non-Dual attacks can AoE while buffed. First-fight: Vortex needs FS (Soulburn can refill).

## Defense / offense

6 / 7

## Unsure

- Exact Barrier strength multiplier (∝ Attack only in notes)
- Exact Defense penetration % on highest-Defense target (tooltip does not state a %; community often treats as full — omit number)
- Exclusive Equipment absorb % on Dual Swords option 2
- Exact EN string for Fighting Spirit acquire line on Dual Swords

## Object

```ts
{
  id: "charlotte",
  name: "Charlotte",
  short: "Charlotte",
  element: "fire",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "cleave", "dps", "tank"],
  tags: ["aoe", "unhealable", "soulburn", "barrier", "cr-push"],
  effects: ["increase-cr", "always-crit", "damage-reduction"],
  buffs: ["Barrier"],
  debuffs: ["Unhealable"],
  uniqueEffects: [
    {
      name: "Dual Swords",
      scope: "self-only",
      tooltip: "Attacks the enemy with dual swords, and increases Combat Readiness of the caster by 25%. A successful attack always results in a critical hit. When this skill is used, if it was not triggered by a Dual Attack and the caster has a buff, Dual Swords changes into an attack that targets all enemies, and the amount of Fighting Spirit gained is doubled. (Acquires Fighting Spirit.)"
    },
    {
      name: "Will of the Swamp",
      scope: "self-only",
      tooltip: "At the start of battle and at the end of the turn, grants a barrier (proportional to Attack) for 1 turn. When the caster has a buff and attacking, increases damage dealt by 50%, and when attacked, grants 50% damage reduction."
    },
    {
      name: "Vortex",
      scope: "team-wide",
      tooltip: "Cuts all enemies while spinning, making them unhealable for 2 turns. Penetrates Defense of the target with the highest Defense. A successful attack always results in a critical hit. (Awakened; consumes 100 Fighting Spirit.)"
    }
  ],
  kit: "S1 Dual Swords (+1 Soul): always crit, CR +25%, +25 FS; buffed + not Dual Attack → AoE and double FS. S2 Will of the Swamp: Barrier start/end of turn (∝ Atk); while buffed +50% damage dealt / 50% DR taken. S3 Vortex awakened (+2 Souls, 100 FS): AoE Unhealable 2 turns, pen highest-Def target, always crit; Soulburn (−10) gain 100 FS after use.",
  defense: 6,
  offense: 7,
  baseSpeed: 99,
  verified: false
}
```
