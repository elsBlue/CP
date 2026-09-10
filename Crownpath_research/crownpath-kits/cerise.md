# Cerise

Short: Cerise

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: 2026-09-04 (no balance listing found for Cerise in 2025–2026 previews checked; post-release Restrict rewrite treated as current)

## Roles

opener, control, restrict, stun, unbuffable

## Tags

single-target, aoe, stun, unbuffable, restrict, decrease-speed, buff-duration-cut, dual-attack, soulburn, ignore-effect-resistance, invincibility, elemental-advantage-force

## Effects

increase-cr, dual-attack-when-s3-on-cd, stun, unbuffable, buff-duration-decrease, decrease-speed, restrict, ignore-er-soulburn, advantageous-element-attack

## Buffs

Invincibility

## Debuffs

Stun, Unbuffable, Decrease Speed, Restrict

## Unique effects

### Restrict

Targets. Target receives no Combat Readiness increase effects other than from their Speed stat (and cannot be CR-pushed/cut by skills per original Restrict rewrite intent). Exact current journal tooltip: prefer “no CR increase other than Speed” — full modern wording UNSURE.

### Frost Storm elemental force

Targets (AoE). Attacks using an advantageous element regardless of element matchup.

### Mystical Arrow dual-attack bridge

Self/ally. When Frost Storm is unavailable due to cooldown, S1 triggers a Dual Attack from a random ally.

## Kit

S1 Mystical Arrow (+1 Soul): attack; caster CR +15% base (+enhancements); if Frost Storm on CD → Dual Attack from random ally. S2 Luminous Explosion (+2 Souls, 4→3 CD): Stun 1 turn + Unbuffable 2 turns; caster CR +50%. Soulburn (−20): Ignore Effect Resistance. S3 Frost Storm (+3 Souls, 5→4 CD): AoE; decrease buff durations 1 turn; Decrease Speed + Restrict 2 turns (100% on card / awaken base 75%+enhancements); attacks as advantageous element. Awaken: also Invincibility caster 1 turn. First-fight opening CDs: UNSURE.

## Defense / offense

3 / 6

## Unsure

- Exact modern Restrict journal tooltip (CR increase block only vs also blocking CR decrease)
- Fully-enhanced Decrease Speed / Restrict chances vs card “100%”
- First-fight (opening) cooldowns
- Whether Dual Attack from S1 counts as Cerise’s turn for other passives
- Exact Unbuffable in-game string (“Unable to be buffed” vs “Unbuffable”)

## Object

```ts
{
  id: "cerise",
  name: "Cerise",
  short: "Cerise",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "control", "restrict", "stun", "unbuffable"],
  tags: ["single-target", "aoe", "stun", "unbuffable", "restrict", "decrease-speed", "buff-duration-cut", "dual-attack", "soulburn", "ignore-effect-resistance", "invincibility", "elemental-advantage-force"],
  effects: ["increase-cr", "dual-attack-when-s3-on-cd", "stun", "unbuffable", "buff-duration-decrease", "decrease-speed", "restrict", "ignore-er-soulburn", "advantageous-element-attack"],
  buffs: ["Invincibility"],
  debuffs: ["Stun", "Unbuffable", "Decrease Speed", "Restrict"],
  uniqueEffects: [
    {
      name: "Restrict",
      scope: "targets",
      tooltip: "No Combat Readiness increase effects other than from Speed (full modern tooltip UNSURE)."
    },
    {
      name: "Frost Storm elemental force",
      scope: "targets",
      tooltip: "Attacks using an advantageous element."
    }
  ],
  kit: "S1 Mystical Arrow (+1 Soul): CR push; if S3 on CD → Dual Attack random ally. S2 Luminous Explosion (+2 Souls, 4→3 CD): Stun + Unbuffable; CR +50%; Soulburn (−20) Ignore ER. S3 Frost Storm (+3 Souls, 5→4 CD): buff duration −1 + Decrease Speed + Restrict; advantageous element; awaken Invincibility 1 turn. Restrict tooltip / opening CDs UNSURE.",
  defense: 3,
  offense: 6,
  baseSpeed: 118,
  verified: false
}
```
