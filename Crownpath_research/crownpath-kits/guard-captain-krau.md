# Guard Captain Krau

Short: GCKrau

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 117

Patch / date used: 2026-09-04 (released ~2025-04 with Episode 6; no later skill balance listing found)

## Roles

bruiser, control, cleave, dps

## Tags

stun, soulburn, aoe, cr-push, cr-cut, ignore-er

## Effects

increase-cr, decrease-cr

## Buffs

Vigor

## Debuffs

Stun

## Unique effects

### Vigor (Scorching Flare / Comet synergy)

Self-only. Scorching Flare grants Vigor for 3 turns. While granted Vigor, Comet ignores Effect Resistance.

### Scorching Flare (awakened)

Team-wide (enemies) / self. After granting Vigor for 3 turns, AoE flames: absorbs some damage dealt as Health; cannot crit; penetrates Defense; damage ∝ Defense; caster CR +50% (awakened). Soulburn (−10 Souls): increases damage dealt and attacks a single target instead.

### Crimson Flame add damage

Self-only. A successful attack deals additional damage proportional to the caster's Defense. Damage dealt increases proportional to Defense. CR push on hit.

## Kit

S1 Crimson Flame (+1 Soul): mystic blade; caster CR +20% (card; enhancements may adjust); additional damage ∝ Defense; damage ∝ Defense. S2 Comet (+2 Souls, 3-turn cooldown): push attack, Stun 1 turn, enemy CR −50% (card; base before CR enhancements may be lower); with Vigor ignores Effect Resistance; damage ∝ Defense. S3 Scorching Flare (awakened, +2 Souls, 4-turn cooldown, −1 → 3): Vigor 3 turns, AoE pen (no crit), lifesteal portion, CR +50%; Soulburn (−10): more damage as single-target. First-fight starting cooldowns: UNSURE. Extra Attack vs Dual Attack: none. Defense penetration %: UNSURE (tooltip says penetrates without stating %).

## Defense / offense

7 / 7

## Unsure

- First-fight (opening) cooldowns of Comet and Scorching Flare
- Exact Defense penetration % on Scorching Flare
- Exact absorb/lifesteal % on Scorching Flare
- Fully enhanced S1 CR % and S2 CR-cut % (card shows enhanced-looking values)

## Object

```ts
{
  id: "guard-captain-krau",
  name: "Guard Captain Krau",
  short: "GCKrau",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "control", "cleave", "dps"],
  tags: ["stun", "soulburn", "aoe", "cr-push", "cr-cut", "ignore-er"],
  effects: ["increase-cr", "decrease-cr"],
  buffs: ["Vigor"],
  debuffs: ["Stun"],
  uniqueEffects: [
    {
      name: "Vigor",
      scope: "self-only",
      tooltip: "Granted for 3 turns by Scorching Flare. While granted Vigor, Comet ignores Effect Resistance."
    },
    {
      name: "Scorching Flare",
      scope: "team-wide",
      tooltip: "After granting Vigor for 3 turns, AoE flames: absorb some damage as Health, cannot crit, penetrates Defense, damage ∝ Defense; awakened CR +50%. Soulburn: increased damage as a single-target attack."
    },
    {
      name: "Crimson Flame",
      scope: "self-only",
      tooltip: "Increases Combat Readiness of the caster. Successful attack deals additional damage proportional to Defense. Damage ∝ Defense."
    }
  ],
  kit: "S1 Crimson Flame (+1 Soul): CR push + Def-scaling hit/add dmg. S2 Comet (+2 Souls, 3 CD): Stun + CR cut; ignore ER with Vigor; Def-scaling. S3 Scorching Flare awakened (+2 Souls, 4→3 CD): Vigor 3 turns, AoE Def-pen no-crit + absorb HP + CR +50%; Soulburn (−10) single-target amp.",
  defense: 7,
  offense: 7,
  baseSpeed: 117,
  verified: false
}
```
