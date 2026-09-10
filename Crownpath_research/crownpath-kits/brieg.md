# Brieg

Short: Brieg

Element: Ice

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2026-09-04 (no balance listing found for Brieg in 2025–2026 previews checked; release kit treated as current)

## Roles

tank, barrier, strip, defense-break, bruiser

## Tags

single-target, barrier, perception, fighting-spirit, strip, decrease-defense, decrease-speed, max-health-scaling, soulburn, extra-turn, cleanse-self

## Effects

max-hp-scaled-damage, fighting-spirit-proc-s3, barrier-max-hp, perception, buff-dispel-all, decrease-defense, decrease-speed, extra-effectiveness-on-s3

## Buffs

Barrier, Perception

## Debuffs

Decrease Defense, Decrease Speed

## Unique effects

### Perception

Self. Increases Critical Hit Chance and Critical Hit Damage by 15%. Cannot be dispelled.

### Fighting Spirit → Limitless Sword Arts

Self. Shadow Swordsmanship grants Fighting Spirit (+25 per guides); Spirit Lord's Protection grants +50 Fighting Spirit. When Fighting Spirit is full after S1, consume all FS, dispel all debuffs from caster, activate Limitless Sword Arts on highest-Attack enemy. Exact max Fighting Spirit threshold: typically 100 — UNSURE if stated in-client.

### Limitless Sword Arts

Target. Dispel all buffs; Decrease Defense and Decrease Speed 2 turns; +50% Effectiveness on this attack; damage ∝ max Health. Manual CD 6→5.

## Kit

S1 Shadow Swordsmanship (+1 Soul): attack; caster CR +20% on epic7db card (older guides 15%+enhancements — prefer epic7db 20% as current fully-enhanced-looking text; skill-ups still list CR ups → UNSURE exact base). Damage ∝ max HP. Full Fighting Spirit → self-cleanse + auto Limitless Sword Arts on highest-Attack enemy. S2 Spirit Lord's Protection (+2 Souls, 4 CD): Barrier all allies 3 turns ∝ max HP; Perception caster 3 turns. Awaken: extra turn. Soulburn (−10): increases barrier strength. S3 Limitless Sword Arts (+2 Souls, 6→5 CD): full strip + Decrease Defense/Speed 2 turns; +50% Effectiveness; damage ∝ max HP. Barrier coefficient and exact FS gain/max: UNSURE. First-fight opening CDs: UNSURE.

## Defense / offense

8 / 5

## Unsure

- Exact Fighting Spirit gain per skill and max stack (guides: +25 S1 / +50 S2 / max 100)
- Whether S1 CR is 15% base or 20% on current card (sources conflict)
- Exact Barrier coefficient vs max Health
- First-fight (opening) cooldowns
- Whether auto-proc’d Limitless Sword Arts shares cooldown with manual S3

## Object

```ts
{
  id: "brieg",
  name: "Brieg",
  short: "Brieg",
  element: "ice",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["tank", "barrier", "strip", "defense-break", "bruiser"],
  tags: ["single-target", "barrier", "perception", "fighting-spirit", "strip", "decrease-defense", "decrease-speed", "max-health-scaling", "soulburn", "extra-turn", "cleanse-self"],
  effects: ["max-hp-scaled-damage", "fighting-spirit-proc-s3", "barrier-max-hp", "perception", "buff-dispel-all", "decrease-defense", "decrease-speed", "extra-effectiveness-on-s3"],
  buffs: ["Barrier", "Perception"],
  debuffs: ["Decrease Defense", "Decrease Speed"],
  uniqueEffects: [
    {
      name: "Perception",
      scope: "self-only",
      tooltip: "Crit Chance and Crit Damage +15%. Cannot be dispelled."
    },
    {
      name: "Fighting Spirit proc",
      scope: "self-only",
      tooltip: "On full Fighting Spirit after S1: dispel all debuffs from caster and activate Limitless Sword Arts on highest-Attack enemy."
    }
  ],
  kit: "S1 Shadow Swordsmanship (+1 Soul): CR push; damage ∝ max HP; full FS → self-cleanse + Limitless Sword Arts. S2 Spirit Lord's Protection (+2 Souls, 4 CD): Barrier allies ∝ max HP + Perception 3 turns; awaken extra turn; Soulburn (−10) stronger barrier. S3 Limitless Sword Arts (+2 Souls, 6→5 CD): full strip + Decrease Defense/Speed 2 turns; +50% Effectiveness; damage ∝ max HP. FS/barrier math UNSURE.",
  defense: 8,
  offense: 5,
  baseSpeed: 106,
  verified: false
}
```
