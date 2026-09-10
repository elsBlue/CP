# Argent Waves Hwayoung

Short: AW Hwayoung

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 116

Patch / date used: release kit 2025-07-03 (STOVE Limited Summon / 7/3 Update; no later skill balance found for Argent Waves Hwayoung)

## Roles

dps, strip, follow-up, cleave, vigor

## Tags

single-target, aoe, strip, penetration, vigor, extra-turn, cr-push, soulburn, non-attack-trigger

## Effects

buff-dispel, defense-penetration, vigor-extra-turn, swallow-kick-on-ally-non-attack, back-row-cr-push

## Buffs

Vigor, Increase Attack

## Debuffs

(none)

## Unique effects

### Advent of the Sura / Swallow Kick

Self follow-up. After an ally uses a non-attack skill, activates Swallow Kick on the enemy with the highest Defense: leap attack, caster CR +20%, penetrates Defense by 50%. When caster has Vigor, grants an extra turn. Increase Attack 2 turns on Swallow Kick: listed on some guides as part of Swallow Kick / awaken path — epic7db card omits it → treat as UNSURE whether always-on or awaken-only.

### Argent Flash vigor + back-row CR

Self + back-row ally. AoE attack; CR +50% to ally in the back row; grants Vigor to caster 2 turns. Soulburn (−10): increases damage dealt.

## Kit

S1 Lightning Kicks (+1 Soul): kicks one enemy and dispels one buff. S2 Advent of the Sura (passive; some sources list 3-turn ICD — epic7db does not show ICD → UNSURE): after ally non-attack skill → Swallow Kick (highest-Defense enemy; 50% Def pen; caster CR +20%; if Vigor → extra turn). S3 Argent Flash (+3 Souls, 5→4 CD): AoE water-scooter attack; back-row ally CR +50%; Vigor caster 2 turns. Soulburn (−10): increased damage. Awaken skill-upgrade text (exact before/after): UNSURE beyond generic Skill Upgrade node. First-fight opening CD: UNSURE.

## Defense / offense

2 / 8

## Unsure

- Whether Swallow Kick grants Increase Attack 2 turns (epic7guides yes; epic7db card no)
- Whether Advent of the Sura has a 3-turn ICD (guides differ from epic7db)
- Exact awaken skill-upgrade delta for S2/S3
- First-fight (opening) cooldown of Argent Flash
- Exact back-row targeting rules when formation/order changes mid-fight

## Object

```ts
{
  id: "argent-waves-hwayoung",
  name: "Argent Waves Hwayoung",
  short: "AW Hwayoung",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "follow-up", "cleave", "vigor"],
  tags: ["single-target", "aoe", "strip", "penetration", "vigor", "extra-turn", "cr-push", "soulburn", "non-attack-trigger"],
  effects: ["buff-dispel", "defense-penetration", "vigor-extra-turn", "swallow-kick-on-ally-non-attack", "back-row-cr-push"],
  buffs: ["Vigor", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Swallow Kick",
      scope: "self",
      tooltip: "After ally non-attack skill: attack highest-Defense enemy, 50% Def pen, CR +20%; with Vigor, extra turn. Increase Attack on skill UNSURE."
    },
    {
      name: "Argent Flash vigor + back-row CR",
      scope: "self",
      tooltip: "AoE; back-row ally CR +50%; Vigor 2 turns on caster."
    }
  ],
  kit: "S1 Lightning Kicks (+1 Soul): dispel 1 buff. S2 Advent of the Sura (passive; ICD UNSURE): ally non-attack → Swallow Kick (50% pen, CR +20%; Vigor → extra turn). S3 Argent Flash (+3 Souls, 5→4 CD): AoE + back-row CR +50% + Vigor 2 turns; Soulburn (−10) more damage. Awaken/ICD details UNSURE.",
  defense: 2,
  offense: 8,
  baseSpeed: 116,
  verified: false
}
```
