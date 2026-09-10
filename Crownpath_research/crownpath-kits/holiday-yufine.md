# Holiday Yufine

Short: HYufine

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-06-05 balance (STOVE / official update; epic7db hero page still showed pre-patch)

## Roles

cleanser, cr-pusher, dps, evasion-tank

## Tags

aoe, cleanse, atkup, cr-push, burn, soulburn, evasion, no-dual

## Effects

debuff-dispel, cr-push-mitigation

## Buffs

Increase Attack

## Debuffs

Burn

## Unique effects

### Just One Bite! ♡ turn-AoE

Self-only. When used on the caster's turn, becomes an attack that targets all enemies. Changed attack is unaffected by elemental disadvantage and does not trigger a Dual Attack.

### Let's Eat Together!

Team-wide (allies). Reduces the effect of Combat Readiness decreases inflicted on all allies by 50% (does not stack with same-name passives). Self: Increases Evasion by 35%, and when Health is 50% or more, increases Evasion by an additional 35%. Skill enhancements further reduce CR decrease effect (card listed +2–6% steps; exact fully-enhanced ally mitigation beyond base 50%: UNSURE).

## Kit

S1 Just One Bite! ♡ (+1 Soul): food-market attack; 100% chance (fully enhanced per 2026-06-05 notes) Burn for 1 turn. On caster's turn → AoE, ignore elemental disadvantage, no Dual Attack. S2 Let's Eat Together! (passive): ally CR-decrease mitigation 50%; self Evasion 35% + additional 35% at ≥50% Health. S3 Yufine's ☆ Special (awakened, +3 Souls, 5-turn cooldown, −1 → 4): dispel two debuffs from all allies; AoE attack; Increase Attack to all allies for 2 turns; increase Combat Readiness by 25%. Soulburn (−10 Souls): skill cooldown decreased by 2 turns. First-fight opening cooldown: UNSURE. Extra Attack vs Dual Attack: S1 turn-AoE blocks Dual Attack only.

## Defense / offense

6 / 5

## Unsure

- First-fight (opening) cooldown of Yufine's ☆ Special
- Exact fully-enhanced CR-decrease mitigation % after S2 skill-ups beyond base 50%
- Pre-enhance Burn chance if not fully skilled (notes quote fully enhanced)

## Object

```ts
{
  id: "holiday-yufine",
  name: "Holiday Yufine",
  short: "HYufine",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["cleanser", "cr-pusher", "dps", "evasion-tank"],
  tags: ["aoe", "cleanse", "atkup", "cr-push", "burn", "soulburn", "evasion", "no-dual"],
  effects: ["debuff-dispel", "cr-push-mitigation"],
  buffs: ["Increase Attack"],
  debuffs: ["Burn"],
  uniqueEffects: [
    {
      name: "Just One Bite! ♡ turn-AoE",
      scope: "self-only",
      tooltip: "When used on the caster's turn, becomes an all-enemy attack unaffected by elemental disadvantage that does not trigger a Dual Attack."
    },
    {
      name: "Let's Eat Together!",
      scope: "team-wide",
      tooltip: "Reduces Combat Readiness decreases on all allies by 50% (no same-name stack). Self: +35% Evasion, and +35% more when Health is 50% or more."
    }
  ],
  kit: "S1 Just One Bite! ♡ (+1 Soul): 100% Burn 1 turn (2026-06-05 fully enhanced); on own turn → AoE, ignore elemental disadvantage, no Dual Attack. S2 Let's Eat Together! (passive): ally CR-decrease −50%; self Eva 35% +35% at ≥50% HP. S3 Yufine's ☆ Special awakened (+3 Souls, 5→4 CD): cleanse 2 all allies + AoE + Increase Attack 2 turns + CR +25%; Soulburn (−10) −2 CD.",
  defense: 6,
  offense: 5,
  baseSpeed: 109,
  verified: false
}
```
