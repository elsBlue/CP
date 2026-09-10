# Violet

Short: Violet

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2026-09-04 (no Violet skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Remnant Violet; kit per epic7db)

## Roles

evasion-counter, focus-nuke, self-cleanse, perception

## Tags

single-target, decrease-attack, focus, perception, evasion, counter, soulburn, heal

## Effects

s1-atk-down-focus-offturn, soulburn-atk-down-2t, s2-cleanse-perception-heal-extra-turn, s3-focus-scale-nuke, evade-counter-while-s3-ready, awaken-s3-reset-on-5-focus

## Buffs

Perception

## Debuffs

Decrease Attack

## Unique effects

### Perception

Self. Granted by Duel Accepted for 3 turns (standard Perception: increases Critical Hit Chance and Critical Hit Damage — exact values UNSURE if tooltip-changed).

### Butterfly Cut evade-counter

Self. While Butterfly Cut is available (not on cooldown): Evasion +35%; after successful evade, counterattack with Graceful Cut. Awaken: if 5 Focus consumed on Butterfly Cut, reset Butterfly Cut cooldown.

## Kit

S1 Graceful Cut (+1 Soul): attack; 75% Decrease Attack 1 turn; off-turn: CR +15% and double Focus gain; Soulburn (−10): 100% Decrease Attack 2 turns. S2 Duel Accepted (+2 Souls, 5→4 CD): dispel 2 debuffs self; Perception 3 turns; heal 15%; extra turn. S3 Butterfly Cut (+3 Souls, 6→5 CD): consume all Focus; dmg ∝ Focus; evade-counter while ready; awaken reset CD if 5 Focus spent. RGB Violet only (≠ Remnant Violet).

## Defense / offense

5 / 7

## Unsure

- Exact Perception Crit Chance / Crit Damage values
- Exact Focus damage scaling on S3
- Max Focus (commonly 5)
- First-fight opening cooldowns

## Object

```ts
{
  id: "violet",
  name: "Violet",
  short: "Violet",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["evasion-counter", "focus-nuke", "self-cleanse", "perception"],
  tags: ["single-target", "decrease-attack", "focus", "perception", "evasion", "counter", "soulburn", "heal"],
  effects: ["s1-atk-down-focus-offturn", "soulburn-atk-down-2t", "s2-cleanse-perception-heal-extra-turn", "s3-focus-scale-nuke", "evade-counter-while-s3-ready", "awaken-s3-reset-on-5-focus"],
  buffs: ["Perception"],
  debuffs: ["Decrease Attack"],
  uniqueEffects: [
    {
      name: "Perception",
      scope: "self",
      tooltip: "From S2: Crit Chance/Damage up (exact % UNSURE)."
    },
    {
      name: "Butterfly Cut evade-counter",
      scope: "self",
      tooltip: "While S3 ready: +35% Evasion; evade → Graceful Cut counter; awaken reset if 5 Focus spent."
    }
  ],
  kit: "S1: Atk down; off-turn Focus/CR. S2: cleanse + Perception + heal + extra turn. S3: Focus nuke + evade counter. RGB ≠ Remnant Violet.",
  defense: 5,
  offense: 7,
  baseSpeed: 113,
  verified: false
}
```
