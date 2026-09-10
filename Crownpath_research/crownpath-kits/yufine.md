# Yufine

Short: Yufine

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2024-12-19 STOVE (Dragon Charge: Atk buff + extra turn on kill; CR/dmg on any debuff not silence; CD +1; Dragon's Roar CD +1 + Def break) — epic7db awaken section lags old silence/pen text; kit checked 2026-09-04

## Roles

strip-defbreak-silence, single-target-execute, cr-from-debuffs

## Tags

single-target, aoe, decrease-defense, silence, dispel, attack-buff, cr-push, soulburn, exclusive-equipment, extra-turn

## Effects

s1-def-break, s2-aoe-dispel-defbreak-silence, soulburn-ignore-er, s3-self-atk-extra-turn-on-kill, s3-cr-when-enemy-debuffed, awaken-s3-dmg-vs-debuffed, ee-extend-or-dmg-or-silence

## Buffs

Increase Attack (self on S3)

## Debuffs

Decrease Defense, Silence

## Unique effects

### Dragon Charge (post 2024-12-19)

Target + self. Self Increase Attack 2 turns; ST attack; on kill extra turn; if target has a debuff, damage increases (awaken; exact % UNSURE). While skill available: after an ally except caster uses a skill, if an enemy has a debuff, caster CR +20%.

## Kit

S1 Double Slash (+1 Soul): attack; 50% Decrease Defense 2 turns (enhanceable). S2 Dragon's Roar (+2 Souls, 5→4 CD post-rework): AoE dispel 1; chance Decrease Defense 2 turns + Silence 1 turn (enhanced ~155%); Soulburn (−20): ignores Effect Resistance. S3 Dragon Charge (+2 Souls, 5→4 CD): self Atk 2 turns; kill → extra turn; CR push while ready if enemy debuffed; awaken bonus dmg vs debuffed. EE Azure Dragon's Spirit: S1 35% extend buffs; or S1 +30% damage; or Dragon's Roar Silence chance +15%. RGB Yufine only (≠ Abyssal / Holiday Yufine).

## Defense / offense

3 / 8

## Unsure

- Exact awaken bonus damage % vs debuffed
- Exact fully enhanced S2 effect chances
- Whether any 2025–2026 patch further changed RGB Yufine (none found)
- First-fight opening cooldowns

## Object

```ts
{
  id: "yufine",
  name: "Yufine",
  short: "Yufine",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["strip-defbreak-silence", "single-target-execute", "cr-from-debuffs"],
  tags: ["single-target", "aoe", "decrease-defense", "silence", "dispel", "attack-buff", "cr-push", "soulburn", "exclusive-equipment", "extra-turn"],
  effects: ["s1-def-break", "s2-aoe-dispel-defbreak-silence", "soulburn-ignore-er", "s3-self-atk-extra-turn-on-kill", "s3-cr-when-enemy-debuffed", "awaken-s3-dmg-vs-debuffed", "ee-extend-or-dmg-or-silence"],
  buffs: ["Increase Attack"],
  debuffs: ["Decrease Defense", "Silence"],
  uniqueEffects: [
    {
      name: "Dragon Charge",
      scope: "target+self",
      tooltip: "Post 2024-12-19: self Atk; kill extra turn; bonus dmg if debuffed (awaken); CR +20% while ready when ally acts vs debuffed enemy."
    }
  ],
  kit: "S1: Def break chance. S2 AoE dispel+Def break+Silence; Soulburn ignore ER. S3: Atk + kill extra turn + CR on debuffs. RGB ≠ Abyssal/Holiday.",
  defense: 3,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
