# Ludwig

Short: Ludwig

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: 2025-02-13 STOVE (Moonlight Blow: Invincibility + CR +50% always, not only on stun; EE opt1 → Increase Attack 2 turns; EE opt2 → Decrease Defense always) — epic7db still shows CR-only-on-stun + old EE → lag; kit checked 2026-09-04

## Roles

aoe-nuke, stun, strip-duration, invincibility, cleave

## Tags

single-target, aoe, buff-steal, stun, invincibility, cr-push, defense-penetration, soulburn, ignore-effect-resistance, exclusive-equipment

## Effects

s1-buff-steal-cr-if-buffed, s2-buff-duration-cut-stun-invincibility-cr, soulburn-s2-ignore-er, s3-aoe-pen-extend-buffs-on-kill, awaken-s3-extra-pen-when-invincible, ee-s2-atk, ee-s2-defbreak

## Buffs

Invincibility; Increase Attack (via EE option 1 on Moonlight Blow per STOVE)

## Debuffs

Stun; Decrease Defense (via EE option 2 per STOVE)

## Unique effects

### Moonlight Blow (post-2025-02-13)

Target + self. Decrease buff durations by 1; 100% Stun 1 turn; Invincibility 1 turn; CR +50% (STOVE — no longer gated on stun). Soulburn (−20): Ignore Effect Resistance. EE: may grant Increase Attack 2 turns and/or Decrease Defense 2 turns (STOVE EE retune).

### Call of the Full Moon

Enemies + self. AoE Nocturne; on enemy defeated extend caster buff durations +1; Defense penetration 30%; if Invincible, +15% pen (awaken +30% instead of +15%).

## Kit

S1 Starlight (+1 Soul): magic attack; 75% (enhanceable) steal one buff; if buffed after attack, caster CR +15%. S2 Moonlight Blow (+2 Souls, 4→3 CD): buff duration −1; Stun; Invincibility + CR +50% (STOVE 2025-02-13); Soulburn Ignore ER. S3 Call of the Full Moon (+3 Souls, 5→4 CD): AoE; kill → extend buffs; 30% pen (+15%/30% awaken when Invincible). EE Everlasting Lapis: prefer STOVE Feb 2025 options (Atk buff / Def break) over epic7db Ice-only Def break lag. RGB Ludwig only (not Aubade / Prelude of Dawn / Eternal Wanderer variants).

## Defense / offense

3 / 8

## Unsure

- Exact EE option 3 (Call of the Full Moon +10% damage) still current
- Whether EE option 1 stun-chance +50% text on epic7db was fully replaced (STOVE says opt1 → Atk buff)
- First-fight opening cooldowns
- Fully enhanced S1 steal chance

## Object

```ts
{
  id: "ludwig",
  name: "Ludwig",
  short: "Ludwig",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-nuke", "stun", "strip-duration", "invincibility", "cleave"],
  tags: ["single-target", "aoe", "buff-steal", "stun", "invincibility", "cr-push", "defense-penetration", "soulburn", "ignore-effect-resistance", "exclusive-equipment"],
  effects: ["s1-buff-steal-cr-if-buffed", "s2-buff-duration-cut-stun-invincibility-cr", "soulburn-s2-ignore-er", "s3-aoe-pen-extend-buffs-on-kill", "awaken-s3-extra-pen-when-invincible", "ee-s2-atk", "ee-s2-defbreak"],
  buffs: ["Invincibility", "Increase Attack"],
  debuffs: ["Stun", "Decrease Defense"],
  uniqueEffects: [
    {
      name: "Moonlight Blow",
      scope: "self",
      tooltip: "Buff duration −1 + Stun + Invincibility + CR +50% (STOVE 2025-02-13). EE may Atk buff / Def break."
    },
    {
      name: "Call of the Full Moon",
      scope: "enemies",
      tooltip: "AoE 30% pen; +15%/30% awaken pen if Invincible; kill extends buffs."
    }
  ],
  kit: "S1 Starlight: steal buff; CR if buffed. S2 Moonlight Blow: stun + invincibility + CR +50% (STOVE); Soulburn ignore ER. S3 Call of the Full Moon: AoE pen cleave. Prefer 2025-02-13 STOVE over epic7db lag.",
  defense: 3,
  offense: 8,
  baseSpeed: 112,
  verified: false
}
```
