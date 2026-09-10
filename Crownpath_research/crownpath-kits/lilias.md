# Lilias

Short: Lilias

Element: Fire

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2025-02-13 balance (STOVE Update Content; epic7db still shows pre-patch +50% Crit on S1/S3 and one-debuff cleanse)

## Roles

initiator, dual-attack, provoke, cleanse, aoe-cr-push

## Tags

single-target, aoe, dual-attack, provoke, barrier, cleanse, cr-push, soulburn, max-health-scaling, highest-attack-scaling, immunity-ee

## Effects

suppression, dual-attack-ally, highest-attack-damage, provoked-bonus-damage, passive-crit-chance-50

## Buffs

Barrier, Immunity (EE option), Skill Nullifier (none native)

## Debuffs

Provoke

## Unique effects

### That's Far Enough! / Suppression (post 2025-02-13)

Self-only / targets. Passive: Increases Critical Hit Chance by 50% (STOVE preview/update wording on passive; epic7db lags). After an enemy uses a non-attack skill: dispel all debuffs from caster and activate Suppression (once every 2 turns). Suppression: Provoke target 1 turn; grant Barrier to caster 2 turns (strength ∝ caster max Health).

### Ready, Load, Fire! provoked pay-off

Targets (AoE). Damage according to the Attack of the ally with the highest Attack; decrease Combat Readiness by 25%; when target is provoked, damage dealt increases. Awakened: first dispel all debuffs from all allies. Base CD 5. (Post 2025-02-13 removed +50% Crit from this skill and removed old caster CR push on awaken tables that epic7db still shows.)

## Kit

S1 Follow Me! Charge! (+1 Soul, post 2025-02-13): attack; trigger Dual Attack from a random ally; damage ∝ caster max Health (no +50% Crit on skill); Soulburn (−20): extra turn. S2 That's Far Enough! (passive): +50% Critical Hit Chance; on enemy non-attack skill → full self cleanse + Suppression (once/2 turns). S3 Ready, Load, Fire! (awakened, +3 Souls, 5 CD): awakened dispel all ally debuffs; AoE; CR −25%; damage from highest-Attack ally; bonus damage vs provoked. Exclusive Equipment (post 2025-02-13 Effect 3): when Suppression activates, grant Immunity to caster for 2 turns (other EE options include CR push on Suppression / damage — verify current rolls: UNSURE). Exact provoked damage bonus % and Barrier formula: UNSURE. First-fight opening cooldown of S3: UNSURE.

## Defense / offense

6 / 6

## Unsure

- Exact wording whether +50% Crit is always-on passive vs “when attacking”
- Exact provoked damage increase %
- Exact Barrier strength formula
- Current EE option 1–2 text (epic7db lags Effect 3)
- First-fight (opening) cooldown of Ready, Load, Fire!
- Whether awaken still grants caster CR +50% (STOVE after removed; epic7db still shows — omit / UNSURE)

## Object

```ts
{
  id: "lilias",
  name: "Lilias",
  short: "Lilias",
  element: "fire",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["initiator", "dual-attack", "provoke", "cleanse", "aoe-cr-push"],
  tags: ["single-target", "aoe", "dual-attack", "provoke", "barrier", "cleanse", "cr-push", "soulburn", "max-health-scaling", "highest-attack-scaling", "immunity-ee"],
  effects: ["suppression", "dual-attack-ally", "highest-attack-damage", "provoked-bonus-damage", "passive-crit-chance-50"],
  buffs: ["Barrier", "Immunity"],
  debuffs: ["Provoke"],
  uniqueEffects: [
    {
      name: "That's Far Enough! / Suppression",
      scope: "self-only",
      tooltip: "Post 2025-02-13: +50% Crit Chance; on enemy non-attack skill → full self cleanse + Suppression (Provoke + Barrier) once/2 turns."
    },
    {
      name: "Ready, Load, Fire! provoked pay-off",
      scope: "targets",
      tooltip: "AoE dmg from highest-Attack ally; CR −25%; bonus dmg if provoked; awakened full ally cleanse."
    }
  ],
  kit: "S1 Follow Me! Charge! (+1 Soul, 2025-02-13): Dual Attack random ally; dmg ∝ max HP; Soulburn (−20) extra turn. S2 That's Far Enough!: +50% Crit; enemy non-attack → full self cleanse + Suppression. S3 Ready, Load, Fire! awakened (+3 Souls, 5 CD): ally cleanse; AoE CR −25%; dmg from highest-Atk ally; bonus vs provoked. EE: Immunity on Suppression.",
  defense: 6,
  offense: 6,
  baseSpeed: 106,
  verified: false
}
```
