# Melissa

Short: Melissa

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2024-10-24 balance (STOVE; Manifestation lost-Health damage removed + base damage up; EE option 3 → Increase Attack on Blood Bloom). No 2025–2026 Melissa skill balance found.

## Roles

dps, strip, curse, immortality, extinction-adjacent

## Tags

single-target, strip, curse, immortality, immunity, unhealable, soulburn, extra-turn, elemental-neutral, lost-health-scaling-s1

## Effects

curse, strip-before-attack, immortality-on-manifestation, cooldown-reset-on-kill, ignore-effect-resistance-soulburn, elemental-disadvantage-immunity-blood-bloom

## Buffs

Immortality, Immunity, Increase Attack (EE option)

## Debuffs

Unhealable, Curse

## Unique effects

### Curse (Blood Bloom)

Targets. Curse 2 turns regardless of whether the attack hits. Elite/Boss cannot be cursed. Curse: a portion of damage inflicted on allies except the target by single attacks is also suffered by the cursed target as additional damage at the end of the turn (exact portion: UNSURE).

### Manifestation immortality loop (post 2024-10-24)

Self/targets. Grant Immortality + Immunity 1 turn; cooldown reset when enemy defeated. Lost-Health damage scaling removed (STOVE); base damage increased. epic7db may still show lost-Health line — prefer STOVE.

### Blood Bloom awaken chain

Targets. Dispel all buffs before attacking; Curse 2 turns regardless of hit; unaffected by elemental disadvantage; awakened grants extra turn. Soulburn (−20): ignores Effect Resistance.

## Kit

S1 Might (+1 Soul): 75%→~100% Unhealable 1 turn; damage ∝ caster's lost Health. S2 Manifestation (+1 Soul, 4 CD, post 2024-10-24): attack; Immortality + Immunity 1 turn; reset CD on kill; no lost-Health scaling. S3 Blood Bloom (awakened, +3 Souls, 6 CD): dispel all buffs; Curse 2 turns regardless of hit; elemental-neutral; awakened extra turn; Soulburn (−20) ignore Effect Resistance. Exclusive Equipment (post 2024-10-24 Effect 3): Increase Attack of caster for 2 turns when using Blood Bloom. Exact Curse damage share %, Manifestation multipliers, first-fight S3 CD: UNSURE.

## Defense / offense

5 / 7

## Unsure

- Exact Curse additional-damage portion / formula
- Exact Manifestation post-buff multipliers
- First-fight (opening) cooldown of Blood Bloom
- Current EE options 1–2 text
- Whether Unhealable chance is fully 100% after all skill-ups

## Object

```ts
{
  id: "melissa",
  name: "Melissa",
  short: "Melissa",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "curse", "immortality"],
  tags: ["single-target", "strip", "curse", "immortality", "immunity", "unhealable", "soulburn", "extra-turn", "elemental-neutral", "lost-health-scaling-s1"],
  effects: ["curse", "strip-before-attack", "immortality-on-manifestation", "cooldown-reset-on-kill", "ignore-effect-resistance-soulburn", "elemental-disadvantage-immunity-blood-bloom"],
  buffs: ["Immortality", "Immunity", "Increase Attack"],
  debuffs: ["Unhealable", "Curse"],
  uniqueEffects: [
    {
      name: "Curse",
      scope: "targets",
      tooltip: "Curse 2 turns regardless of hit (not on Elite/Boss); shares a portion of single-attack damage allies take as end-of-turn damage (portion UNSURE)."
    },
    {
      name: "Manifestation immortality loop",
      scope: "self-only",
      tooltip: "Post 2024-10-24: Immortality+Immunity 1 turn; CD reset on kill; lost-HP scaling removed."
    }
  ],
  kit: "S1 Might (+1 Soul): Unhealable; dmg ∝ lost HP. S2 Manifestation (+1 Soul, 4 CD, 2024-10-24): Immortality+Immunity 1 turn; reset CD on kill. S3 Blood Bloom awakened (+3 Souls, 6 CD): full strip + Curse 2 turns regardless of hit + elemental-neutral + extra turn; Soulburn (−20) ignore ER. EE: Increase Attack on Blood Bloom.",
  defense: 5,
  offense: 7,
  baseSpeed: 112,
  verified: false
}
```
