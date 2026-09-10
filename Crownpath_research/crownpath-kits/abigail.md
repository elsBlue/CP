# Abigail

Short: Abi

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 117

Patch / date used: 2026-09-04 (kit last officially changed 2024-09-12 balance; not listed in 2025–2026 balance previews checked)

## Roles

bruiser, strip, revive, cleanse

## Tags

injury, strip, soulburn, cr-push

## Effects

increase-cr, buff-dispel, debuff-dispel, injury

## Buffs

Immortality, Vampirism

## Debuffs

Curse

## Unique effects

### Might

Team-wide. Increases Combat Readiness of all allies by 15%.

### Injuries

Self-only application on target via Scarlet Garden. The severity of injuries increases proportional to damage dealt. Injuries decrease max Health of the target by up to 25% every time this skill is used.

### Vampirism (Blood Banquet grant)

Team-wide (back-row ally). Absorbs 30% of damage dealt as Health.

### Blood Banquet save restriction

Self-only. Can only be activated once every 4 turns (fully enhanced), and this effect does not stack with other passive effects of the same name.

## Kit

S1 Ambush (+1 Soul): attacks one enemy with bloodied wings, increases the caster’s Combat Readiness by 15%, and when used on the caster’s turn has a 35% chance to activate Might; damage increases proportional to max Health. Soulburn (−10 Souls): Might chance becomes 100%. Might is an extra effect (not Dual Attack / Extra Attack). S2 Blood Banquet (passive): at the start of the turn, curses the enemy with the highest Attack for 1 turn; when the ally in the back row except the caster receives lethal damage, consumes 30% of the caster’s current Health, dispels all debuffs from that ally, then grants Immortality and Vampirism for 1 turn (4-turn internal CD when enhanced). S3 Scarlet Garden (+3 Souls, 5-turn cooldown, −1 from enhancements → 4): after dispelling all buffs from one enemy, attacks with a field of bloody thorns, inflicting Injuries; Effectiveness of this attack +50%; damage increases proportional to max Health. First-fight starting cooldown: UNSURE.

## Defense / offense

7 / 5

## Unsure

- First-fight (opening) cooldown of Scarlet Garden (journal lists skill CD only)
- Whether in-journal Injuries is labeled exactly “Injuries” vs “Injury” as the status name
- Current PvP tier label beyond niche (low RTA pick rate as of 2026-09 Fribbels / RTA snapshots)

## Object

```ts
{
  id: "abigail",
  name: "Abigail",
  short: "Abi",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "strip", "revive", "cleanse"],
  tags: ["injury", "strip", "soulburn", "cr-push"],
  effects: ["increase-cr", "buff-dispel", "debuff-dispel", "injury"],
  buffs: ["Immortality", "Vampirism"],
  debuffs: ["Curse"],
  uniqueEffects: [
    {
      name: "Might",
      scope: "team-wide",
      tooltip: "Increases Combat Readiness of all allies by 15%."
    },
    {
      name: "Injuries",
      scope: "self-only",
      tooltip: "The severity of injuries increases proportional to damage dealt. Injuries decrease max Health of the target by up to 25% every time this skill is used."
    },
    {
      name: "Vampirism",
      scope: "team-wide",
      tooltip: "Absorbs 30% of damage dealt as Health."
    },
    {
      name: "Blood Banquet save restriction",
      scope: "self-only",
      tooltip: "Can only be activated once every 4 turns, and this effect does not stack with other passive effects of the same name."
    }
  ],
  kit: "S1 Ambush (+1 Soul): attacks one enemy with bloodied wings, increases the caster’s Combat Readiness by 15%, and when used on the caster’s turn has a 35% chance to activate Might; damage increases proportional to max Health. Soulburn (−10 Souls): Might chance becomes 100%. Might is an extra effect (not Dual Attack / Extra Attack). S2 Blood Banquet (passive): at the start of the turn, curses the enemy with the highest Attack for 1 turn; when the ally in the back row except the caster receives lethal damage, consumes 30% of the caster’s current Health, dispels all debuffs from that ally, then grants Immortality and Vampirism for 1 turn (4-turn internal CD when enhanced). S3 Scarlet Garden (+3 Souls, 5-turn cooldown, −1 from enhancements → 4): after dispelling all buffs from one enemy, attacks with a field of bloody thorns, inflicting Injuries; Effectiveness of this attack +50%; damage increases proportional to max Health. First-fight starting cooldown: UNSURE.",
  defense: 7,
  offense: 5,
  baseSpeed: 117,
  verified: false
}
```
