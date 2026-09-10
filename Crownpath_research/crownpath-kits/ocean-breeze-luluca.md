# Ocean Breeze Luluca

Short: OB Luluca

Element: Earth

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: 2026-09-04 (no OB Luluca skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Top Model Luluca / RGB Luluca; kit per epic7db + epic7x)

## Roles

anti-nonattack, cleanse, defense-buff, aoe-strip-silence, cr-push

## Tags

single-target, aoe, focus, cleanse, increase-defense, ice-cream, silence, decrease-hit-chance, dispel, cr-push, soulburn

## Effects

s1-cr-push-highest, soulburn-team-cr, s2-focus-on-nonattack, special-delivery-strip-silence-miss, s3-cleanse-def-icecream

## Buffs

Increase Defense, Ice Cream

## Debuffs

Silence, Decrease Hit Chance

## Unique effects

### Ice Cream

Allies. After being attacked, recover 20% of max Health; then Ice Cream is dispelled.

### Luluca's Special Delivery

Enemies. When Focus full after using a skill: consume all Focus; AoE dispel 2 buffs; 85% Silence 1 turn; 100% Decrease Hit Chance 2 turns; caster skill CD −1.

## Kit

S1 Order's In, Just Wait! (+1 Soul): attack; CR +15% (enhanceable) to ally with highest CR except caster; Soulburn (−10): CR push applies to all allies. S2 One Luluca's Special! (passive): after enemy non-attack skill → +2 Focus + caster CR +25% (enhanceable; once/2 turns); full Focus → Special Delivery. S3 This One's On Me (+3 Souls, 5→4 CD): awaken dispel 2 debuffs all allies (1 before awaken); Increase Defense 2 turns + Ice Cream. Limited Earth Soul Weaver (≠ RGB Luluca / Top Model Luluca).

## Defense / offense

7 / 4

## Unsure

- Exact max Focus (Special Delivery consumes “all”; commonly 5)
- Exact enhanced S2 CR % (epic7db enhance path)
- First-fight opening S3 cooldown
- Whether Ice Cream heals once per attack instance only

## Object

```ts
{
  id: "ocean-breeze-luluca",
  name: "Ocean Breeze Luluca",
  short: "OB Luluca",
  element: "earth",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["anti-nonattack", "cleanse", "defense-buff", "aoe-strip-silence", "cr-push"],
  tags: ["single-target", "aoe", "focus", "cleanse", "increase-defense", "ice-cream", "silence", "decrease-hit-chance", "dispel", "cr-push", "soulburn"],
  effects: ["s1-cr-push-highest", "soulburn-team-cr", "s2-focus-on-nonattack", "special-delivery-strip-silence-miss", "s3-cleanse-def-icecream"],
  buffs: ["Increase Defense", "Ice Cream"],
  debuffs: ["Silence", "Decrease Hit Chance"],
  uniqueEffects: [
    {
      name: "Ice Cream",
      scope: "allies",
      tooltip: "After attacked: heal 20% max HP then dispel Ice Cream."
    },
    {
      name: "Luluca's Special Delivery",
      scope: "enemies",
      tooltip: "Full Focus: AoE dispel 2; Silence chance; Decrease Hit Chance; self CD −1."
    }
  ],
  kit: "S1: CR push highest ally; Soulburn team CR. S2: non-attack → Focus+CR; full Focus Special Delivery. S3: cleanse + Defense + Ice Cream. Limited ≠ RGB/TML Luluca.",
  defense: 7,
  offense: 4,
  baseSpeed: 105,
  verified: false
}
```
