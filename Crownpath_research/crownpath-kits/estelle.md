# Estelle

Short: Estelle

Element: Earth

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 104

Patch / date used: 2026-04-30 release (STOVE update) — no post-release skill balance listing found through 2026-09-04; kit checked 2026-09-04

## Roles

damage-share, counter, injury, barrier, self-heal, cr-push

## Tags

single-target, injury, barrier, cleanse, counterattack, damage-sharing, fighting-spirit, soulburn, always-crit, defense-penetration

## Effects

s1-injury-heal, off-turn-double-damage-injury, wind-of-protection-barrier-cr, s2-damage-share, s2-conditional-cleanse-counter, s3-injury-def-pen, soulburn-s3-cd

## Buffs

Barrier (Wind of Protection)

## Debuffs

Injury

## Unique effects

### Wind of Protection

Allies + self. After S1 when Fighting Spirit is full: consume all FS; grant Barrier ∝ caster max Health to all allies for 2 turns; caster CR +35%; acquire 10 Soul.

### Protective Nature

Allies. Start of first battle: +50 Fighting Spirit. Damage sharing 40% (enhanceable to 50%) of damage allies receive. After an ally (not caster) is attacked and damage ≥20% of that ally's max Health: full cleanse self + counterattack. Not triggered by extra attacks or counterattacks.

## Kit

S1 Shield Strike (+1 Soul): attack; up to 10% Injury; heal self; always crit; damage/heal ∝ caster max HP; if not caster's turn, damage and Injury doubled; after attack if FS full → Wind of Protection. S2 Protective Nature (passive): start +50 FS; 40%→50% damage share; heavy hit on ally → cleanse self + counter. S3 Dazzling Strike (+2 Souls, 4→3 CD): shield attack; up to 20% Injury; 50% Defense penetration; always crit; damage/heal ∝ caster max HP. Soulburn (−10): S3 CD −2. Awaken skill node present (exact awaken text vs baseline: UNSURE beyond standard skill upgrade slot). Exact Injury % at full enhance and heal coefficients: UNSURE.

## Defense / offense

7 / 5

## Unsure

- Exact S1 skill EN name (Shield Strike used; epic7db omitted name in scrape)
- Exact awaken skill-upgrade text for Protective Nature / Dazzling Strike
- Exact Barrier coefficient vs max Health
- Fully enhanced damage-share % path (40% +10% enhance = 50% assumed)
- First-fight opening S3 cooldown
- Whether S3 always heals (Namu/awaken variants conflict on heal wording)

## Object

```ts
{
  id: "estelle",
  name: "Estelle",
  short: "Estelle",
  element: "earth",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["damage-share", "counter", "injury", "barrier", "self-heal", "cr-push"],
  tags: ["single-target", "injury", "barrier", "cleanse", "counterattack", "damage-sharing", "fighting-spirit", "soulburn", "always-crit", "defense-penetration"],
  effects: ["s1-injury-heal", "off-turn-double-damage-injury", "wind-of-protection-barrier-cr", "s2-damage-share", "s2-conditional-cleanse-counter", "s3-injury-def-pen", "soulburn-s3-cd"],
  buffs: ["Barrier"],
  debuffs: ["Injury"],
  uniqueEffects: [
    {
      name: "Wind of Protection",
      scope: "allies",
      tooltip: "On full Fighting Spirit after S1: team Barrier ∝ max HP 2 turns; caster CR +35%; +10 Soul."
    },
    {
      name: "Protective Nature",
      scope: "allies",
      tooltip: "Damage share ~40–50%. Ally hit ≥20% max HP → self full cleanse + counter (not from extra/counter)."
    }
  ],
  kit: "S1 Shield Strike: Injury + heal; always crit; HP-scale; off-turn double; full FS → Wind of Protection. S2 Protective Nature: FS start + damage share + conditional cleanse/counter. S3 Dazzling Strike: Injury + 50% pen; Soulburn CD −2. Release 2026-04-30; no later balance found.",
  defense: 7,
  offense: 5,
  baseSpeed: 104,
  verified: false
}
```
