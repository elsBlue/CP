# Milim

Short: Milim

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 110

Patch / date used: release / collab kit via epic7db 2026-09-04 (no 2025–2026 Milim skill balance found)

## Roles

dps, extinction, anti-stealth, soul-drain

## Tags

single-target, aoe, extinction, evasion, attack-up, vamp, soulburn, focus, dragon-eye, ignore-damage-share, stealth-dispel

## Effects

dragon-eye, focus-dragon-buster, extinction-on-kill, ignore-damage-sharing-non-boss, stealth-dispel-ignore-er

## Buffs

Increase Attack, Dragon Eye (Milim Eye), Increase Evasion

## Debuffs

none

## Unique effects

### Dragon Eye (Milim Eye)

Self-only. At start of battle and end of turn: chance to grant Dragon Eye for 1 turn (base ~70%; skill-ups → 100% on epic7db fully skilled). Undispellable; increases Hit Chance and Evasion by 20%. When granted Dragon Eye at start of turn: dispel Stealth from all enemies (ignores Effect Resistance).

### Dragon Buster (Focus)

Self/targets. After attacking, when Focus is full, consume all Focus to activate Dragon Buster: AoE attack removing 10 Souls. Focus gain per attack / max Focus: UNSURE (commonly implied fill-over-attacks; EE can +1 Focus on Dragon Fear kill).

### Dragon Fear extinction + anti-share

Targets. Extinction when enemy defeated; Increase Evasion 3 turns; awakened: if target is not Elite/Boss, ignore damage-sharing effects. Base CD 5.

## Kit

S1 Dragon Dive (+1 Soul): recover Health ∝ damage dealt; Increase Attack 1 turn; Soulburn (−20): extra turn. S2 Dragon Eye (Milim Eye) (passive): Dragon Eye proc; stealth strip; Focus → Dragon Buster AoE −10 Souls. S3 Dragon Fear (awakened, +3 Souls, 5 CD): Extinction on kill; Increase Evasion 3 turns; awakened ignore damage share vs non-Elite/Boss. Exclusive Equipment Asura (Crit Rate): Dragon Dive +20% recovered / Dragon Buster +10% damage / Dragon Fear kill → +1 Focus. Exact Focus max/gain, heal formula, first-fight S3 CD: UNSURE.

## Defense / offense

4 / 8

## Unsure

- Max Focus and Focus gained per attack
- Exact Dragon Dive heal proportion
- First-fight (opening) cooldown of Dragon Fear
- Whether Dragon Buster can crit / inherits buffs normally
- Limited-banner availability windows (collab)

## Object

```ts
{
  id: "milim",
  name: "Milim",
  short: "Milim",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "extinction", "anti-stealth", "soul-drain"],
  tags: ["single-target", "aoe", "extinction", "evasion", "attack-up", "vamp", "soulburn", "focus", "dragon-eye", "ignore-damage-share", "stealth-dispel"],
  effects: ["dragon-eye", "focus-dragon-buster", "extinction-on-kill", "ignore-damage-sharing-non-boss", "stealth-dispel-ignore-er"],
  buffs: ["Increase Attack", "Dragon Eye (Milim Eye)", "Increase Evasion"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Dragon Eye (Milim Eye)",
      scope: "self-only",
      tooltip: "Undispellable +20% Hit Chance/Evasion; start-of-turn Stealth dispel all enemies ignore ER; procs start of battle / end of turn."
    },
    {
      name: "Dragon Buster",
      scope: "targets",
      tooltip: "On full Focus after attacking: consume Focus for AoE that removes 10 Souls. Focus gain/max UNSURE."
    }
  ],
  kit: "S1 Dragon Dive (+1 Soul): vamp heal + Increase Attack 1 turn; Soulburn (−20) extra turn. S2 Dragon Eye passive: Dragon Eye; stealth strip; Focus → Dragon Buster AoE −10 Souls. S3 Dragon Fear awakened (+3 Souls, 5 CD): Extinction on kill; Evasion 3 turns; ignore damage share vs non-Elite/Boss. EE Asura.",
  defense: 4,
  offense: 8,
  baseSpeed: 110,
  verified: false
}
```
