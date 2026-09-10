# Choux

Short: Choux

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2022-06-09 STOVE balance (Chop soulburn / Fwoooosh! / Help Me, Cream!) — no 2025–2026 skill balance listing found for RGB Choux; kit per epic7db 2026-09-04

## Roles

bruiser, focus, pierce, aoe-freeze, counter

## Tags

single-target, aoe, focus, penetration, lifesteal, freeze, critical-hit-resistance, immunity, counter, max-health-scaling, soulburn, extra-turn

## Effects

max-hp-scaled-damage, focus-on-s1, crit-doubles-focus, defense-penetration, absorb-damage-as-heal, focus5-reset-fwoooosh, freeze-aoe, crit-resistance-allies, counter-when-s3-on-cd

## Buffs

Increase Critical Hit Resistance, Immunity

## Debuffs

Freeze

## Unique effects

### Focus engine

Self. Chop grants Focus (amount UNSURE; critical hit doubles Focus gained). At 5 Focus, Fwoooosh! consumes all Focus, increasing damage and resetting Fwoooosh! cooldown.

### Help Me, Cream! counter window

Self. While S3 is on cooldown, after an ally except caster is attacked, 20% chance to counterattack (builds Focus via Chop counter).

### Fwoooosh! pierce + vamp

Target. 70% Defense penetration; absorbs some damage dealt as Health; damage ∝ max Health.

## Kit

S1 Chop (+1 Soul): spear attack; caster CR +20% base (+enhancements); crit doubles Focus gained; damage ∝ max HP. Soulburn (−20): extra turn. S2 Fwoooosh! (+1 Soul, 3 CD): wild swing; absorb damage as Heal; 70% Def pen; at 5 Focus consume all Focus → more damage + reset Fwoooosh! CD; damage ∝ max HP. S3 Help Me, Cream! (+3 Souls, 5→4 CD): Freeze all enemies then attack; Increase Critical Hit Resistance all allies 2 turns; damage ∝ max HP. Awaken: also Immunity caster 2 turns. While on CD: 20% chance counter when ally (except caster) is attacked. Exact Focus per Chop, absorb %, Focus-5 damage amp: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

6 / 7

## Unsure

- Exact Focus gained per Chop (non-crit / crit)
- Exact damage absorb (lifesteal) % on Fwoooosh!
- Exact damage increase when consuming 5 Focus
- First-fight (opening) cooldown of Help Me, Cream!
- Whether Freeze applies before damage for unbroken freeze setups
- EE Snowy Mountain Horn options exist (not required in object)

## Object

```ts
{
  id: "choux",
  name: "Choux",
  short: "Choux",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "focus", "pierce", "aoe-freeze", "counter"],
  tags: ["single-target", "aoe", "focus", "penetration", "lifesteal", "freeze", "critical-hit-resistance", "immunity", "counter", "max-health-scaling", "soulburn", "extra-turn"],
  effects: ["max-hp-scaled-damage", "focus-on-s1", "crit-doubles-focus", "defense-penetration", "absorb-damage-as-heal", "focus5-reset-fwoooosh", "freeze-aoe", "crit-resistance-allies", "counter-when-s3-on-cd"],
  buffs: ["Increase Critical Hit Resistance", "Immunity"],
  debuffs: ["Freeze"],
  uniqueEffects: [
    {
      name: "Focus engine",
      scope: "self-only",
      tooltip: "Chop gains Focus (crit doubles); at 5 Focus Fwoooosh! consumes Focus for bonus damage and CD reset."
    },
    {
      name: "Help Me, Cream! counter window",
      scope: "self-only",
      tooltip: "While S3 on CD, 20% chance to counter after ally (except caster) is attacked."
    }
  ],
  kit: "S1 Chop (+1 Soul): CR +20%+; Focus (crit doubles); damage ∝ max HP; Soulburn (−20) extra turn. S2 Fwoooosh! (+1 Soul, 3 CD): 70% pen + vamp; at 5 Focus consume → more damage + reset CD. S3 Help Me, Cream! (+3 Souls, 5→4 CD): AoE Freeze + Crit Resistance allies; awaken Immunity self; on CD 20% counter when ally hit. Focus/vamp math UNSURE.",
  defense: 6,
  offense: 7,
  baseSpeed: 102,
  verified: false
}
```
