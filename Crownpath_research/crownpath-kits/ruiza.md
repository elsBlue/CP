# Ruiza

Short: Ruiza

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: release kit (no 2025–2026 Ruiza skill balance found in STOVE previews checked)

## Roles

opener, strip, laceration, silence, stealth, cr-push

## Tags

single-target, aoe-strip, laceration, silence, stealth, spread-debuffs, injury-scaling, soulburn, ignore-er, self-speed

## Effects

injury-bonus-damage-s1, spread-selected-target-debuffs, full-dispel-then-laceration-silence, stealth-open, ignore-effect-resistance-soulburn

## Buffs

Increase Speed, Stealth

## Debuffs

Laceration, Silence

## Unique effects

### Laceration (Demolition)

Targets. Laceration 2 turns: increases damage taken (~15% per community/journal summaries) and applies injury when Health decreases (exact journal: UNSURE — prefer in-game tooltip). Paired with Silence 2 turns on Demolition.

### Deflection spread

Targets (AoE). Dispel two buffs from all enemies and decrease Combat Readiness (20% base + skill-ups); then spreads the selected target's debuffs. Grants Stealth to caster 2 turns.

### Liquidation injury amp

Targets. Increase Speed caster 1 turn; deals additional damage equivalent to 50% of injuries inflicted on the target.

## Kit

S1 Liquidation (+1 Soul): Increase Speed caster 1 turn; additional damage = 50% of injuries on target. S2 Deflection (+2 Souls, 4 CD): AoE dispel 2 + CR push (20%+); spread selected target's debuffs; Stealth caster 2 turns. S3 Demolition (+3 Souls, 5→4 CD): full dispel target → CR −50% → Laceration + Silence 2 turns (100% each on card); caster CR +50%; first battle Stealth 2 turns; Soulburn (−20) ignore Effect Resistance. Awaken Skill Upgrade text: UNSURE (epic7db incomplete). Exact Laceration journal, fully enhanced Deflection CR%, first-fight S3 opening CD: UNSURE.

## Defense / offense

4 / 7

## Unsure

- Exact Laceration journal tooltip (damage amp % / injury conversion)
- Awaken skill-upgrade full after-text
- Fully enhanced Deflection Combat Readiness decrease
- Whether Demolition effect chances need skill-ups beyond printed 100%
- First-fight (opening) cooldown of Demolition

## Object

```ts
{
  id: "ruiza",
  name: "Ruiza",
  short: "Ruiza",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "strip", "laceration", "silence", "stealth", "cr-push"],
  tags: ["single-target", "aoe-strip", "laceration", "silence", "stealth", "spread-debuffs", "injury-scaling", "soulburn", "ignore-er", "self-speed"],
  effects: ["injury-bonus-damage-s1", "spread-selected-target-debuffs", "full-dispel-then-laceration-silence", "stealth-open", "ignore-effect-resistance-soulburn"],
  buffs: ["Increase Speed", "Stealth"],
  debuffs: ["Laceration", "Silence"],
  uniqueEffects: [
    {
      name: "Laceration (Demolition)",
      scope: "targets",
      tooltip: "Laceration 2 turns with Silence; damage-taken amp + injury on HP loss (exact journal UNSURE)."
    },
    {
      name: "Deflection spread",
      scope: "targets",
      tooltip: "AoE dispel 2 + CR push, then spread selected target debuffs; self Stealth 2 turns."
    }
  ],
  kit: "S1 Liquidation (+1 Soul): self Increase Speed; +50% injuries as bonus damage. S2 Deflection (+2 Souls, 4 CD): AoE dispel 2 + CR push + spread debuffs; Stealth 2 turns. S3 Demolition (+3 Souls, 5→4 CD): full dispel + CR −50% + Laceration/Silence 2 turns; CR +50%; first battle Stealth; Soulburn (−20) ignore ER.",
  defense: 4,
  offense: 7,
  baseSpeed: 120,
  verified: false
}
```
