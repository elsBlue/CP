# Amid

Short: Amid

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2026-09-04 (no balance listing found for Amid in 2025–2026 previews checked; limited kit treated as current)

## Roles

cr-push, skill-nullifier, cleanse, enabler, opener

## Tags

single-target, aoe-cr, skill-nullifier, extra-turn, swift-attack, cleanse, soulburn, increase-attack

## Effects

increase-cr, skill-nullifier, extra-turn, swift-attack-end-of-turn-cr, buff-dispel-ally

## Buffs

Skill Nullifier, Swift Attack, Increase Attack

## Debuffs

(none)

## Unique effects

### Swift Attack

Ally (single). At the end of the target’s turn, increases Combat Readiness by 50%, then is dispelled once the effect activates.

### Forest Blessing nullifier + extra turn

Allies. Grants skill nullifier once to all allies and increases Combat Readiness (25% base on card; +enhancements up to ~35% fully enhanced — exact fully-enhanced %: prefer card 25% + listed skill-ups). Grants an extra turn to the caster.

## Kit

S1 Zephyr (+1 Soul): fan attack one enemy; caster CR +15% base (+2%/+3% from enhancements → 20% fully enhanced). Soulburn (−10 Souls): CR increase applies to all allies. S2 Forest Blessing (+2 Souls, 5→4 CD): skill nullifier once all allies + CR push (~25%+enhancements); extra turn to caster. S3 Touch of Hope (+2 Souls, 5→4 CD): dispel two debuffs from one ally except caster and grant Swift Attack. Awaken: also Increase Attack on target 2 turns. Exact fully-enhanced Forest Blessing CR % and first-fight opening CDs: UNSURE.

## Defense / offense

3 / 2

## Unsure

- Exact fully-enhanced Combat Readiness % on Forest Blessing after all skill enhancements
- First-fight (opening) cooldowns of Forest Blessing and Touch of Hope
- Whether Swift Attack duration is “until end of next turn / consumed on activate” beyond the stated end-of-turn trigger
- In-game buff string casing for Skill Nullifier / Swift Attack

## Object

```ts
{
  id: "amid",
  name: "Amid",
  short: "Amid",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["cr-push", "skill-nullifier", "cleanse", "enabler", "opener"],
  tags: ["single-target", "aoe-cr", "skill-nullifier", "extra-turn", "swift-attack", "cleanse", "soulburn", "increase-attack"],
  effects: ["increase-cr", "skill-nullifier", "extra-turn", "swift-attack-end-of-turn-cr", "buff-dispel-ally"],
  buffs: ["Skill Nullifier", "Swift Attack", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Swift Attack",
      scope: "ally",
      tooltip: "At end of turn, increases Combat Readiness by 50%; dispelled once activated."
    },
    {
      name: "Forest Blessing nullifier + extra turn",
      scope: "allies",
      tooltip: "Skill nullifier once all allies + CR push; extra turn to caster."
    }
  ],
  kit: "S1 Zephyr (+1 Soul): caster CR +15%→20%; Soulburn (−10) CR to all allies. S2 Forest Blessing (+2 Souls, 5→4 CD): skill nullifier all allies + CR push; extra turn. S3 Touch of Hope (+2 Souls, 5→4 CD): dispel 2 debuffs (ally except caster) + Swift Attack; awaken also Increase Attack 2 turns. Opening CDs / exact S2 CR% UNSURE.",
  defense: 3,
  offense: 2,
  baseSpeed: 111,
  verified: false
}
```
