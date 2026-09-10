# Eda

Short: Eda

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: 2021-10-28 STOVE balance (Cold Snap / Absolute Zero) — no 2025–2026 RGB Eda skill balance listing found (Festive Eda 2025 patches do not apply); kit per epic7db 2026-09-04 + STOVE 2021 notes

## Roles

strip, stun, cr-push, skill-nullifier, opener-support

## Tags

single-target, aoe, decrease-defense, strip, stun, skill-nullifier, cr-push, soulburn, ally-non-attack-cr

## Effects

decrease-defense, dispel-two-buffs, random-cr-pushback, skill-nullifier-self, stun, ally-cr-on-awaken-s3, self-cr-on-ally-non-attack-while-s3-ready, soulburn-extra-turn

## Buffs

Skill Nullifier

## Debuffs

Decrease Defense, Stun

## Unique effects

### Absolute Zero readiness loop

Self + allies (awaken). While Absolute Zero is available on cooldown count: when an ally uses a non-attack skill, caster CR +20%. Awaken: on cast, also increases Combat Readiness of all allies by 20%.

## Kit

S1 Icy Impact (+1 Soul): Decrease Defense 1 turn (75% card → higher with enhance; fully enhanced chance often treated as 100% — exact fully-enhanced %: UNSURE if not 100%). S2 Cold Snap (+2 Souls, 4→3 CD): AoE; dispel two buffs; CR − random 15–40%; grant caster Skill Nullifier once. Soulburn (−20): extra turn. S3 Absolute Zero (+3 Souls, 5→4 CD): AoE Stun 1 turn (85% fully enhanced per card path); while available, ally non-attack → caster CR +20%. Awaken: also ally CR +20% on cast. First-fight opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Fully enhanced S1 Decrease Defense chance (75% + enhances)
- Exact Skill Nullifier wording vs “Skill Nullification”
- First-fight (opening) Absolute Zero / Cold Snap cooldowns
- Whether any post-2021 silent text polish changed numbers (none found in 2025–2026 listings)

## Object

```ts
{
  id: "eda",
  name: "Eda",
  short: "Eda",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "stun", "cr-push", "skill-nullifier", "opener-support"],
  tags: ["single-target", "aoe", "decrease-defense", "strip", "stun", "skill-nullifier", "cr-push", "soulburn", "ally-non-attack-cr"],
  effects: ["decrease-defense", "dispel-two-buffs", "random-cr-pushback", "skill-nullifier-self", "stun", "ally-cr-on-awaken-s3", "self-cr-on-ally-non-attack-while-s3-ready", "soulburn-extra-turn"],
  buffs: ["Skill Nullifier"],
  debuffs: ["Decrease Defense", "Stun"],
  uniqueEffects: [
    {
      name: "Absolute Zero readiness loop",
      scope: "self",
      tooltip: "While S3 available: ally non-attack → caster CR +20%; awaken also ally CR +20% on cast."
    }
  ],
  kit: "S1 Icy Impact (+1 Soul): Decrease Defense. S2 Cold Snap (+2 Souls, 4→3 CD): dispel 2 + CR −15–40% + Skill Nullifier; Soulburn (−20) extra turn. S3 Absolute Zero (+3 Souls, 5→4 CD): AoE Stun; ally non-attack CR loop; awaken ally CR +20%.",
  defense: 3,
  offense: 7,
  baseSpeed: 106,
  verified: false
}
```
