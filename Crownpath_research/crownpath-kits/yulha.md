# Yulha

Short: Yulha

Element: Earth

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 104

Patch / date used: 2024-10-24 STOVE (Malicious Smile reflect 40% vs any attack type + self cleanse into Murderous Intent; Symphony Soulburn → damage not extra turn; S3 CD reduced) — kit per epic7db post-patch; checked 2026-09-04

## Roles

reflect-tank, redirected-provoke, pen-execute, self-barrier

## Tags

single-target, redirected-provoke, reflect, barrier, cr-push, defense-penetration, no-crit, soulburn, max-health-scaling, lost-health-scaling, ignore-damage-share

## Effects

s1-redirected-provoke-hp-scale, s2-reflect-40, murderous-intent-barrier-cr, s3-pen-lost-hp-ignore-share, awaken-s3-heal-on-kill, soulburn-damage

## Buffs

Barrier

## Debuffs

Redirected Provoke

## Unique effects

### Malicious Smile / Murderous Intent (post 2024-10-24)

Self. When attacked: reflect 40% damage suffered (capped at caster max Health; reflects non-single-target too per STOVE). After attacked, if Health ≤30%: dispel all debuffs and activate Murderous Intent (once/5 turns) — Barrier 3 turns ∝ max Health; CR +25% (enhanceable).

### Symphony of Agony

Target. Unravel Sphere of Sadism; ignore damage share if not Elite/Boss; penetrate Defense; cannot crit; dmg ∝ lost Health; awaken: on kill heal ∝ max Health; Soulburn (−10): increases damage (was extra turn).

## Kit

S1 Cruel Touch (+1 Soul): attack; high chance Redirected Provoke 1 turn (enhanced ~200%); dmg ∝ max Health. S2 Malicious Smile (passive): reflect 40%; ≤30% HP → Murderous Intent. S3 Symphony of Agony (+3 Souls, 5→4 CD): pen / no-crit / lost-HP scaling; awaken heal on kill; Soulburn damage. RGB Yulha only (≠ School Nurse Yulha).

## Defense / offense

8 / 6

## Unsure

- Exact Barrier coefficient vs max Health
- Exact pen rate on S3
- Exact Murderous Intent CR after full enhance
- Whether any 2025–2026 patch further changed RGB Yulha (none found)
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "yulha",
  name: "Yulha",
  short: "Yulha",
  element: "earth",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["reflect-tank", "redirected-provoke", "pen-execute", "self-barrier"],
  tags: ["single-target", "redirected-provoke", "reflect", "barrier", "cr-push", "defense-penetration", "no-crit", "soulburn", "max-health-scaling", "lost-health-scaling", "ignore-damage-share"],
  effects: ["s1-redirected-provoke-hp-scale", "s2-reflect-40", "murderous-intent-barrier-cr", "s3-pen-lost-hp-ignore-share", "awaken-s3-heal-on-kill", "soulburn-damage"],
  buffs: ["Barrier"],
  debuffs: ["Redirected Provoke"],
  uniqueEffects: [
    {
      name: "Malicious Smile / Murderous Intent",
      scope: "self",
      tooltip: "Post 2024-10-24: reflect 40%; ≤30% HP → cleanse + Barrier + CR (once/5 turns)."
    },
    {
      name: "Symphony of Agony",
      scope: "target",
      tooltip: "Pen; no crit; dmg ∝ lost HP; ignore share non-boss; awaken heal on kill; Soulburn dmg."
    }
  ],
  kit: "S1: Redirected Provoke; dmg∝HP. S2: reflect 40%; Murderous Intent. S3: pen execute ∝ lost HP; Soulburn dmg. RGB ≠ School Nurse Yulha.",
  defense: 8,
  offense: 6,
  baseSpeed: 104,
  verified: false
}
```
