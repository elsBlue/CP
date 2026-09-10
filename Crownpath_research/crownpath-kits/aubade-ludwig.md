# Aubade Ludwig

Short: Aubade Ludwig

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: release kit 2026-06-11 (STOVE Covenant Drop Rate Up / New Hero Preview; no later skill balance found)

## Roles

control, soul-spender, strip, barrier, bruiser-support

## Tags

single-target, aoe, dawn, soul-consume, block, silence, stun, strip, barrier, cr-push, soulburn, max-health-scaling

## Effects

dawn-soul-and-stun, light-of-condemnation, soul-scaled-additional-damage, buff-dispel, block, silence, barrier-max-hp, ally-turn-cr-when-souls

## Buffs

Dawn, Barrier, Increase Defense

## Debuffs

Block, Silence, Stun

## Unique effects

### Dawn

Self. Granted by White Night for 3 turns. Increases Soul acquisition by 100%; after attacking, 25% chance to inflict Stun on the target for 1 turn (per official preview narration).

### Light of Condemnation

Targets (AoE). When caster has Dawn, Moonlight activates this as an extra attack once per caster turn: attacks all enemies, consumes all Soul whether hit or miss, inflicts 1,000 additional damage (scales with consumed Soul up to 25,000). Preview lists “Acquire 5 Soul” on the skill header — exact when souls are gained vs consumed: treat acquire-on-cast as listed; confirm in-game UNSURE.

### Night Greeting the Dawn

Self. Passive +30% Defense. At end of an ally’s turn, if Soul ≥ 10, caster CR +20% base (+enhancements up to +5% → ~25% fully enhanced).

## Kit

S1 Moonlight (+1 Soul): attack one enemy; if Dawn, activate Light of Condemnation once per caster turn (AoE; consume all Soul; fixed additional damage 1,000→up to 25,000 ∝ Soul spent). S2 Night Greeting the Dawn (passive): Defense +30%; end of ally turn with Soul ≥10 → CR push. S3 White Night (+3 Souls, 5→4 CD): dispel two buffs from all enemies (official preview; epic7db omits — prefer preview); 85%→100% chance each Block 2 turns and Silence 1 turn; grant Dawn + Barrier ∝ max Health to caster 3 turns. Soulburn (−10): increases barrier strength. First-fight opening CD and exact barrier coefficient: UNSURE.

## Defense / offense

5 / 6

## Unsure

- epic7db White Night text omits AoE strip that official preview includes — file prefers preview; verify in-client
- Exact Barrier coefficient vs max Health; “when 10 Soul consumed, increases barrier strength” phrasing from preview (Soulburn vs Dawn interaction)
- Light of Condemnation “Acquire 5 Soul” timing vs full Soul consume
- Fully-enhanced CR % on S2
- First-fight (opening) cooldown of White Night
- Whether Stun from Dawn can proc on Light of Condemnation hits

## Object

```ts
{
  id: "aubade-ludwig",
  name: "Aubade Ludwig",
  short: "Aubade Ludwig",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["control", "soul-spender", "strip", "barrier", "bruiser-support"],
  tags: ["single-target", "aoe", "dawn", "soul-consume", "block", "silence", "stun", "strip", "barrier", "cr-push", "soulburn", "max-health-scaling"],
  effects: ["dawn-soul-and-stun", "light-of-condemnation", "soul-scaled-additional-damage", "buff-dispel", "block", "silence", "barrier-max-hp", "ally-turn-cr-when-souls"],
  buffs: ["Dawn", "Barrier", "Increase Defense"],
  debuffs: ["Block", "Silence", "Stun"],
  uniqueEffects: [
    {
      name: "Dawn",
      scope: "self-only",
      tooltip: "Soul acquisition +100%; after attacking, 25% chance Stun 1 turn on the target."
    },
    {
      name: "Light of Condemnation",
      scope: "targets",
      tooltip: "With Dawn, once per caster turn: AoE, consume all Soul, 1,000–25,000 additional damage ∝ Soul spent."
    }
  ],
  kit: "S1 Moonlight (+1 Soul): if Dawn → Light of Condemnation (AoE Soul consume + scaled additional damage). S2 Night Greeting the Dawn: Def +30%; ally end-turn if Soul≥10 → CR push. S3 White Night (+3 Souls, 5→4 CD): AoE strip 2 (preview) + Block/Silence; Dawn + Barrier ∝ max HP 3 turns; Soulburn (−10) stronger barrier. Coefficients/opening CD UNSURE.",
  defense: 5,
  offense: 6,
  baseSpeed: 109,
  verified: false
}
```
