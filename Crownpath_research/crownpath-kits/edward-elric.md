# Edward Elric

Short: Edward

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 117

Patch / date used: 2026-09-04 (last skill change found: 2022-09-01 Equivalent Exchange / Rise!; no later 2025–2026 skill listing found)

## Roles

bruiser, strip, dps, cleanse

## Tags

aoe, strip, barrier, soulburn, cr-push

## Effects

buff-dispel, debuff-dispel, increase-cr, ignore-damage-sharing

## Buffs

Barrier

## Debuffs

(random via Rise! — see unique)

## Unique effects

### Rise!

Team-wide (enemies) / self CR. Attacks all enemies with ground thorns, dispelling one buff and inflicting a random debuff for 2 turns, before increasing Combat Readiness by 20%. Damage dealt increases proportional to the caster's max Health. Triggered by Equivalent Exchange; once per turn.

### Equivalent Exchange

Self-only. After being attacked, when the caster has a debuff, dispels one debuff and activates Rise!. Rise! can only be activated once per turn. (Debuff dispel has no separate ICD after 2022-09-01; Rise! remains once/turn.)

### I'll Show You Our Difference! stacks

Self-only. Damage dealt increases every time this skill is used and can stack up to 3 times. Awakened: also increases caster Combat Readiness by 50%. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored. Damage ∝ max Health.

## Kit

S1 I'll Take You On! (+1 Soul): transmuted blade attack; grants Barrier to the caster for 1 turn; damage and barrier ∝ max Health. S2 Equivalent Exchange (passive): on being attacked while debuffed, dispel one debuff and activate Rise! (once/turn). S3 I'll Show You Our Difference! (awakened, +3 Souls, 5-turn cooldown, −1 → 4): attacks with Alphonse; caster CR +50%; ignore damage sharing vs non-Elite/Boss; damage ∝ max Health and stacks up to 3 uses. Soulburn (−10 Souls): skill cooldown decreased by 2 turns. First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: none (Rise! is a counter-style follow-up AoE).

## Defense / offense

6 / 7

## Unsure

- First-fight (opening) cooldown of I'll Show You Our Difference!
- Exact random debuff pool for Rise! (commonly includes Decrease Hit Chance, Decrease Attack, Provoke, Silence, Restrict — confirm in journal)
- Exact Barrier strength formula beyond ∝ max Health

## Object

```ts
{
  id: "edward-elric",
  name: "Edward Elric",
  short: "Edward",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "strip", "dps", "cleanse"],
  tags: ["aoe", "strip", "barrier", "soulburn", "cr-push"],
  effects: ["buff-dispel", "debuff-dispel", "increase-cr", "ignore-damage-sharing"],
  buffs: ["Barrier"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Rise!",
      scope: "team-wide",
      tooltip: "Attacks all enemies with ground thorns, dispelling one buff and inflicting a random debuff for 2 turns, before increasing Combat Readiness by 20%. Damage dealt increases proportional to the caster's max Health."
    },
    {
      name: "Equivalent Exchange",
      scope: "self-only",
      tooltip: "After being attacked, when the caster has a debuff, dispels one debuff and activates Rise!. Rise! can only be activated once per turn."
    },
    {
      name: "I'll Show You Our Difference! stacks",
      scope: "self-only",
      tooltip: "Damage dealt increases every time this skill is used and can stack up to 3 times. Awakened also increases Combat Readiness of the caster by 50%. Ignores damage sharing vs non-Elite/Boss."
    }
  ],
  kit: "S1 I'll Take You On! (+1 Soul): self Barrier 1 turn; scales with max HP. S2 Equivalent Exchange: when hit while debuffed, cleanse 1 + Rise! (AoE strip 1 + random debuff 2 turns + CR +20%, once/turn). S3 I'll Show You Our Difference! awakened (+3 Souls, 5→4 CD): Alphonse nuke, CR +50%, ignore share vs non-boss, damage stacks ×3; Soulburn (−10) CD −2.",
  defense: 6,
  offense: 7,
  baseSpeed: 117,
  verified: false
}
```
