# Aube

Short: Aube

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: release kit 2026-07-23 (STOVE Limited Summon / Smilegate newsroom; no later skill balance found)

## Roles

opener, control, cascade, skill-nullifier, cr-cut

## Tags

single-target, aoe-control, immobilize, restrict, cascade, skill-nullifier, concealment, strip, extra-turn, soulburn, cr-cut

## Effects

decrease-cr, cascade-allies, skill-nullifier, extra-turn, immobilize, restrict, concealment-untargetable, buff-dispel, ignore-effect-resistance-soulburn

## Buffs

Cascade, Skill Nullifier, Concealment

## Debuffs

Immobilize, Restrict

## Unique effects

### Cascade

Allies. Buff that deals additional fixed damage to attacked targets (Smilegate newsroom). Exact fixed-damage formula: UNSURE.

### Immobilize + Restrict

Targets (AoE). Eternal Moment control pair that locks enemy Combat Readiness advancement (newsroom: “lock the enemy's Combat Readiness”). Exact journal tooltips beyond names: UNSURE — treat as CR-lock control debuffs for 1 turn each.

### Concealment

Self. Eternal Moment: Concealment remains throughout the battle (untargetable / cannot be targeted per newsroom). Exact interaction with AoE and force-target effects: UNSURE.

## Kit

S1 Coral Swell (+1 Soul): coral attack; decrease Combat Readiness by 20% base (+enhancements → higher; exact fully-enhanced % UNSURE, skill-ups list +2%/+3%). S2 Film Fiesta (+1 Soul, 3 CD): 100% chance on card to grant Cascade to all allies; skill nullifier once + extra turn to caster. Skill enhancements list effect-chance ups — base chance before max may be lower → UNSURE; card shows 100%. S3 Eternal Moment (+3 Souls, 7→6 CD): dispel two buffs from all enemies; 100% chance each Immobilize and Restrict 1 turn; Concealment for the rest of battle. Soulburn (−10): Ignore Effect Resistance. First-fight opening CD: UNSURE.

## Defense / offense

4 / 5

## Unsure

- Exact Cascade fixed-damage formula
- Exact Immobilize / Restrict journal tooltip wording and CR-lock rules
- Film Fiesta base Cascade chance before skill enhancements (card 100% vs enhancement lines)
- Fully-enhanced S1 CR cut %
- Concealment vs AoE / provocations / bombs
- First-fight (opening) cooldown of Eternal Moment
- Awaken skill-upgrade delta (epic7db only marks Skill Upgrade)

## Object

```ts
{
  id: "aube",
  name: "Aube",
  short: "Aube",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "control", "cascade", "skill-nullifier", "cr-cut"],
  tags: ["single-target", "aoe-control", "immobilize", "restrict", "cascade", "skill-nullifier", "concealment", "strip", "extra-turn", "soulburn", "cr-cut"],
  effects: ["decrease-cr", "cascade-allies", "skill-nullifier", "extra-turn", "immobilize", "restrict", "concealment-untargetable", "buff-dispel", "ignore-effect-resistance-soulburn"],
  buffs: ["Cascade", "Skill Nullifier", "Concealment"],
  debuffs: ["Immobilize", "Restrict"],
  uniqueEffects: [
    {
      name: "Cascade",
      scope: "allies",
      tooltip: "Additional fixed damage to attacked targets (exact formula UNSURE)."
    },
    {
      name: "Immobilize + Restrict",
      scope: "targets",
      tooltip: "CR-lock control debuffs for 1 turn each (exact tooltips UNSURE)."
    },
    {
      name: "Concealment",
      scope: "self-only",
      tooltip: "Remains throughout battle; prevents being targeted (AoE interaction UNSURE)."
    }
  ],
  kit: "S1 Coral Swell (+1 Soul): CR −20%+. S2 Film Fiesta (+1 Soul, 3 CD): Cascade all allies; self skill nullifier + extra turn. S3 Eternal Moment (+3 Souls, 7→6 CD): AoE strip 2 + Immobilize + Restrict; Concealment for battle; Soulburn (−10) Ignore ER. Cascade/Immobilize/Restrict formulas UNSURE.",
  defense: 4,
  offense: 5,
  baseSpeed: 120,
  verified: false
}
```
