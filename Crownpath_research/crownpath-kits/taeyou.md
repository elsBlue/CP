# Taeyou

Short: Taeyou

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 111

Patch / date used: 2026-09-04 (no Taeyou hero skill balance listing found in 2025–2026 STOVE previews checked — do not confuse with Successor Taeyou; kit per epic7db 2026-09-04; Skills vs awaken strip wording conflicts)

## Roles

non-attack-punish, strip, skill-cooldown, speed-scaler, enrage

## Tags

single-target, aoe, strip, skill-cooldown, increase-speed, increase-attack, enrage, skill-nullifier, speed-scaling, soulburn

## Effects

s1-cr-speed-scaling-tidal-crash-when-enraged, soulburn-s1-damage, passive-enrage-nullifier-on-enemy-non-attack, s3-aoe-strip-cd-push-speed-ignore-er-when-enraged, awaken-self-increase-attack

## Buffs

Enrage, Skill Nullifier, Increase Speed, Increase Attack (awaken)

## Debuffs

(none standard — cooldown increase is a skill effect)

## Unique effects

### Enrage (Azure Waves Of The Ocean)

Self. After an enemy uses a non-attack skill: dispel all debuffs from caster; Enrage 3 turns; Skill Nullifier once. Once every 3 turns (−enhance on internal CD).

### Tidal Crash

Enemy. Extra attack from Full Moon Slash when Enraged (once per turn on caster's turn); damage ↑ ∝ caster Speed.

## Kit

S1 Full Moon Slash (+1 Soul): caster CR +15%; damage ↑ ∝ Speed; if Enraged → Tidal Crash extra (once/turn). Soulburn (−10): increase Full Moon Slash damage. S2 Azure Waves Of The Ocean (passive): enemy non-attack skill → cleanse self + Enrage 3 turns + Skill Nullifier once (once/3 turns, enhanceable). S3 Tornado Sweep (+3 Souls, 5→4 CD): AoE; strip (Skills card: all buffs; awaken text: two buffs, all when Enraged → UNSURE); +1 skill cooldown twice on highest-Attack enemy; Increase Speed self 2 turns; if Enraged ignore Effect Resistance; awaken also Increase Attack 2 turns. Exact strip rule: UNSURE (prefer listing both). First-fight opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Whether S3 always full-strips or only full-strips while Enraged (epic7db Skills vs awaken conflict)
- Exact Tidal Crash / S1 Speed-scaling coefficients
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "taeyou",
  name: "Taeyou",
  short: "Taeyou",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["non-attack-punish", "strip", "skill-cooldown", "speed-scaler", "enrage"],
  tags: ["single-target", "aoe", "strip", "skill-cooldown", "increase-speed", "increase-attack", "enrage", "skill-nullifier", "speed-scaling", "soulburn"],
  effects: ["s1-cr-speed-scaling-tidal-crash-when-enraged", "soulburn-s1-damage", "passive-enrage-nullifier-on-enemy-non-attack", "s3-aoe-strip-cd-push-speed-ignore-er-when-enraged", "awaken-self-increase-attack"],
  buffs: ["Enrage", "Skill Nullifier", "Increase Speed", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Enrage",
      scope: "self",
      tooltip: "On enemy non-attack (once/3t): cleanse + Enrage 3 turns + Skill Nullifier once; enables Tidal Crash / S3 ignore ER."
    }
  ],
  kit: "S1: CR + Speed-scaling; Enraged → Tidal Crash; Soulburn (−10) more S1 dmg. S2: enemy non-attack → Enrage + Nullifier. S3: AoE strip (all vs 2/enraged UNSURE) + double CD push on top ATK + Speed; Enraged ignore ER; awaken Atk.",
  defense: 3,
  offense: 7,
  baseSpeed: 111,
  verified: false
}
```
