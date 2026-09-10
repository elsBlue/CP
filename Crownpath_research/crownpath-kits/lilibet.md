# Lilibet

Short: Lilibet

Element: Earth

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: older Soul Cutter / Snip-Snip kit (Skill Nullifier + extinction era) — no 2025–2026 RGB Lilibet skill balance listing found (Designer Lilibet patches are separate); kit checked 2026-09-04

## Roles

extinction, bleed, unbuffable, skill-nullifier

## Tags

single-target, unbuffable, bleed, extinction, skill-nullifier, cr-push, soulburn, exclusive-equipment

## Effects

s1-unbuffable, s2-bleed-cr, awaken-s2-extra-cr-on-bleed, s3-skill-nullifier, s3-kill-extinction-cd, s3-hit-chance, soulburn-s3-damage, ee-options

## Buffs

Skill Nullifier

## Debuffs

Unbuffable, Bleed

## Unique effects

### Soul Cutter (extinction)

Target. Slash with Cho & Mal; grant caster Skill Nullifier once; if enemy defeated → Extinction and caster skill cooldown −1; Hit Chance +20% with this skill.

### Snip-Snip (awaken)

Target. Three Bleed chances; caster CR +50%; awaken: if target is bleeding after attack, additional CR +50%.

## Kit

S1 Slice-Slice (+1 Soul): strike; 50% (enhanceable) Unbuffable 2 turns. S2 Snip-Snip (+1 Soul, 3 CD): cut; ~55% (enhanceable) chance each for three Bleeds 2 turns; CR +50%; awaken extra +50% CR if bleeding after. S3 Soul Cutter (+2 Souls, 5→4 CD): attack; Skill Nullifier once; kill → Extinction + CD −1; +20% Hit Chance. Soulburn (−10): increased damage. EE Soul Tailor: S1 +20% damage; or S2 dispel 2 debuffs from caster before effect; or S3 +10% damage. Exact Bleed count historically varied (older notes cited four) — current epic7db three: keep three; mark older four as outdated.

## Defense / offense

2 / 8

## Unsure

- Whether any quiet 2025–2026 RGB Lilibet tweak was missed (Vortex Aug 2025 claims look unreliable vs STOVE absence)
- Exact fully enhanced Bleed / Unbuffable chances
- First-fight opening S3 cooldown
- EE option 2 cleanse timing vs current client wording

## Object

```ts
{
  id: "lilibet",
  name: "Lilibet",
  short: "Lilibet",
  element: "earth",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["extinction", "bleed", "unbuffable", "skill-nullifier"],
  tags: ["single-target", "unbuffable", "bleed", "extinction", "skill-nullifier", "cr-push", "soulburn", "exclusive-equipment"],
  effects: ["s1-unbuffable", "s2-bleed-cr", "awaken-s2-extra-cr-on-bleed", "s3-skill-nullifier", "s3-kill-extinction-cd", "s3-hit-chance", "soulburn-s3-damage", "ee-options"],
  buffs: ["Skill Nullifier"],
  debuffs: ["Unbuffable", "Bleed"],
  uniqueEffects: [
    {
      name: "Soul Cutter",
      scope: "enemy",
      tooltip: "Skill Nullifier once; on kill Extinction + CD −1; +20% Hit Chance."
    },
    {
      name: "Snip-Snip",
      scope: "self",
      tooltip: "Three Bleed chances + CR +50%; awaken +50% CR if bleeding after."
    }
  ],
  kit: "S1 Slice-Slice: Unbuffable. S2 Snip-Snip: Bleeds + CR; awaken extra CR if bleeding. S3 Soul Cutter: Skill Nullifier; kill Extinction. No 2025–2026 RGB balance found.",
  defense: 2,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
