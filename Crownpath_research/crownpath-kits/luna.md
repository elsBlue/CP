# Luna

Short: Luna

Element: Ice

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-09-04 (no Luna hero skill balance listing found in 2025–2026 STOVE previews checked; limited; kit per epic7db 2026-09-04)

## Roles

single-target-nuke, defense-break, penetrate, soul-battery

## Tags

single-target, multi-hit, decrease-defense, penetrate, crit-chance, crit-resistance, hp-threshold-stats, soulburn, limited

## Effects

s1-random-hits-cd-reduce, soulburn-max-hits, passive-crit-and-resist-90, hp50-atk-or-def-90, s3-def-break-50pen-advantageous, ee-cr-or-atk-down-or-extra-turn-on-kill

## Buffs

(none baseline)

## Debuffs

Decrease Defense, Decrease Attack (EE option)

## Unique effects

### Dragon Knight's Will

Self. Critical Hit Chance +90% and Critical Hit Resistance +90% (enhanceable). If Health ≥50%: Attack +90%; if Health <50%: Defense +90%.

### Infinity Slash hits

Enemy. Random number of stabs; skill cooldown decreases by 1–3 turns and damage ↑ with hit count. Soulburn: max hits.

## Kit

S1 Infinity Slash (+1 Soul): random multi-hit; CD −1–3 and damage ↑ by hit count. Soulburn (−10): max hits. S2 Dragon Knight's Will (passive): Crit Chance/Resist +90%; ≥50% HP → +90% Attack else +90% Defense. S3 Ragnar Spear (+5 Souls, 10 CD — enhance path does not show −1 CD on card): Decrease Defense 2 turns (100% enhanced); 50% Defense penetration; advantageous element (awaken); +5 Souls on kill. EE Dragon Emerald: S1 CR +15%; or S3 Decrease Attack 2 turns; or S3 kill → Extra Turn. Exact fully-enhanced passive %: card 90% + enhance steps. First-fight opening CD: UNSURE. Whether S3 CD can be reduced by skill ups: card shows no −1 CD enhance — treat as 10: UNSURE if EE/other reduces.

## Defense / offense

3 / 8

## Unsure

- Exact Infinity Slash max hit count
- Fully enhanced Dragon Knight's Will percentages
- First-fight (opening) S3 cooldown
- Whether any S3 CD reduction exists outside EE

## Object

```ts
{
  id: "luna",
  name: "Luna",
  short: "Luna",
  element: "ice",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["single-target-nuke", "defense-break", "penetrate", "soul-battery"],
  tags: ["single-target", "multi-hit", "decrease-defense", "penetrate", "crit-chance", "crit-resistance", "hp-threshold-stats", "soulburn", "limited"],
  effects: ["s1-random-hits-cd-reduce", "soulburn-max-hits", "passive-crit-and-resist-90", "hp50-atk-or-def-90", "s3-def-break-50pen-advantageous", "ee-cr-or-atk-down-or-extra-turn-on-kill"],
  buffs: [],
  debuffs: ["Decrease Defense", "Decrease Attack"],
  uniqueEffects: [
    {
      name: "Dragon Knight's Will",
      scope: "self",
      tooltip: "Crit Chance/Resist ~90%; ≥50% HP +ATK else +DEF (~90% card). Exact enhanced % UNSURE."
    }
  ],
  kit: "S1 Infinity Slash: random multi-hit; CD−1–3 by hits; Soulburn (−10) max hits. S2 Dragon Knight's Will: huge Crit Chance/Resist + HP-threshold ATK/DEF. S3 Ragnar Spear (+5 Souls, ~10 CD): Def break + 50% pen + elemental advantage; +5 Souls on kill. EE: CR / Atk down / Extra Turn on kill.",
  defense: 3,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
