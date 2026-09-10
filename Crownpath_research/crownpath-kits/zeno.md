# Zeno

Short: Zeno

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 115

Patch / date used: 2026-03-12 STOVE remake (Black Thorn → Frostbite ∝ Defense + Soulburn Extra Turn; Star's Armor → −50% enemy Evasion + Rage/Defense on frostbite; Ancient Beast → strip 2 + Rupture [/ Cannot Buff awaken] ∝ Defense, ignore ER when Rage) — epic7db still shows pre-remake kit; prefer STOVE; kit checked 2026-09-04

## Roles

evasion-down, frostbite, rupture, strip, rage-tank

## Tags

single-target, aoe, frostbite, rupture, cannot-buff, strip, increase-defense, rage, evasion-down, soulburn

## Effects

s1-frostbite-defense-scaling, soulburn-extra-turn-on-s1, passive-evasion-down-50, frostbite-start-rage-defense, s3-strip-rupture-defense-scaling, awaken-cannot-buff, rage-ignore-er

## Buffs

Rage, Increase Defense

## Debuffs

Frostbite, Rupture, Unbuffable (Cannot Buff, awaken)

## Unique effects

### Star's Armor (post-2026-03-12)

Enemies + self. Decreases enemy Evasion by 50%. At start of turn, if an enemy has Frostbite: grant Rage + Increase Defense to caster for 2 turns.

### Rage (Zeno)

Self. While Rage: Ancient Beast ignores Effect Resistance. Granted via Star's Armor when any enemy is Frostbitten at turn start.

## Kit

S1 Black Thorn (+1 Soul): **inflict Frostbite 1 turn; damage ↑ ∝ caster Defense (STOVE; epic7db still shows Stun ∝ max HP)**. Soulburn (−20): Extra Turn (moved to S1 per STOVE). S2 Star's Armor (passive): **enemy Evasion −50%; turn-start if any Frostbite → Rage + Increase Defense 2 turns (STOVE; epic7db still shows old stack-on-non-attack)**. S3 Ancient Beast (+2 Souls, 4 CD unless changed — STOVE did not state CD change): AoE; dispel 2 buffs; Rupture 2 turns; damage ↑ ∝ Defense; if Rage ignore ER; awaken also Cannot Buff 2 turns. Exact Defense-scaling coefficients and whether Soulburn cost/CD numbers unchanged: UNSURE where STOVE omitted. First-fight opening CD: UNSURE.

## Defense / offense

5 / 6

## Unsure

- Exact Black Thorn / Ancient Beast Defense-scaling damage coefficients (STOVE said “Damage Dealt Increased” without numbers)
- Whether Ancient Beast CD / Soul cost unchanged (STOVE silent)
- Whether S3 still grants Soulburn Extra Turn anywhere (STOVE moved Extra Turn Soulburn to S1)
- First-fight (opening) S3 cooldown
- Imprint / skill-enhance paths after remake (epic7db lag)

## Object

```ts
{
  id: "zeno",
  name: "Zeno",
  short: "Zeno",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["evasion-down", "frostbite", "rupture", "strip", "rage-tank"],
  tags: ["single-target", "aoe", "frostbite", "rupture", "cannot-buff", "strip", "increase-defense", "rage", "evasion-down", "soulburn"],
  effects: ["s1-frostbite-defense-scaling", "soulburn-extra-turn-on-s1", "passive-evasion-down-50", "frostbite-start-rage-defense", "s3-strip-rupture-defense-scaling", "awaken-cannot-buff", "rage-ignore-er"],
  buffs: ["Rage", "Increase Defense"],
  debuffs: ["Frostbite", "Rupture", "Unbuffable"],
  uniqueEffects: [
    {
      name: "Star's Armor",
      scope: "enemies",
      tooltip: "Enemy Evasion −50%. Turn-start if any Frostbite: Rage + Increase Defense 2 turns (STOVE 2026-03-12)."
    }
  ],
  kit: "S1 Black Thorn: Frostbite; dmg ∝ Defense; Soulburn (−20) Extra Turn (STOVE remake). S2 Star's Armor: −50% Evasion; Frostbite → Rage+Defense. S3 Ancient Beast: strip 2 + Rupture (awaken + Cannot Buff); ∝ Defense; Rage ignores ER. Prefer STOVE; epic7db lags pre-remake.",
  defense: 5,
  offense: 6,
  baseSpeed: 115,
  verified: false
}
```
