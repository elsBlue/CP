# Fern

Short: Fern

Element: Ice

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 103

Patch / date used: release ~2025-09-25 (Frieren collab) — no Fern hero skill balance listing found afterward in checked 2025–2026 previews; kit per epic7db 2026-09-04 (Focus enhance scrape mangled)

## Roles

evasion-dps, speed-scaler, penetrate, focus-cooldown

## Tags

single-target, aoe-soulburn, increase-attack, focus, evasion, penetrate, speed-scaling, soulburn

## Effects

self-increase-attack, speed-scaling-damage, focus-start, evasion-and-speed-per-focus, evade-consume-focus-cd-reduce, s3-penetrate, soulburn-aoe-no-dual-no-counter, s3-starts-full-cd

## Buffs

Increase Attack

## Debuffs

(none)

## Unique effects

### Focus (Exceptional Magical Talent)

Self. At start of first battle gains Focus (3 base; skill enhance increases starting Focus — epic7db scrape shows “+200% Focus” → treat as +2 Focus → 5 when enhanced, UNSURE exact enhance text). Each Focus: Speed +15% and Evasion +20%. On successful evade: consume 1 Focus and decrease skill cooldowns by 1 turn.

### The Spell to Kill Demons - Release

Target. Self Increase Attack 1 turn; attack with 70% Defense penetrate; damage ∝ Speed; begins first battle with full skill cooldown count.

## Kit

S1 The Spell to Kill Demons (+1 Soul): Increase Attack self 1 turn; attack; damage ∝ Speed; if Focus ≥ 3, decrease skill cooldowns by 1 turn. Soulburn (−10): attack all enemies; does not trigger Dual Attack or counterattack. S2 Exceptional Magical Talent (passive): starting Focus; Speed/Evasion per Focus; evade → −1 Focus + −1 skill CDs. S3 The Spell to Kill Demons - Release (+3 Souls, 6→5 CD): Increase Attack 1 turn; 70% penetrate; damage ∝ Speed; starts first battle on full CD. Exact Focus enhance amount and damage coefficients: UNSURE. First-fight: S3 starts full CD (cannot open with it).

## Defense / offense

4 / 8

## Unsure

- Exact S2 skill-enhance Focus gain text (scraped “+200%”; commonly +2 → 5 total)
- Damage multipliers vs Speed
- Whether Focus Speed % affects initial CR (STOVE release note said it does not affect start-of-battle CR)
- Opening CD beyond “starts full” on S3

## Object

```ts
{
  id: "fern",
  name: "Fern",
  short: "Fern",
  element: "ice",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["evasion-dps", "speed-scaler", "penetrate", "focus-cooldown"],
  tags: ["single-target", "aoe-soulburn", "increase-attack", "focus", "evasion", "penetrate", "speed-scaling", "soulburn"],
  effects: ["self-increase-attack", "speed-scaling-damage", "focus-start", "evasion-and-speed-per-focus", "evade-consume-focus-cd-reduce", "s3-penetrate", "soulburn-aoe-no-dual-no-counter", "s3-starts-full-cd"],
  buffs: ["Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Focus",
      scope: "self",
      tooltip: "Start with Focus (3, enhance likely +2→5 UNSURE); +15% SPD +20% Evasion each; evade consumes 1 Focus and −1 skill CDs."
    }
  ],
  kit: "S1 Spell to Kill Demons (+1 Soul): self Increase Attack; SPD-scaling hit; if Focus≥3 −1 CDs; Soulburn AoE no dual/counter. S2 Exceptional Magical Talent: Focus evasion/SPD loop. S3 Release (+3 Souls, 6→5 CD): 70% penetrate SPD hit; starts battle on full CD.",
  defense: 4,
  offense: 8,
  baseSpeed: 103,
  verified: false
}
```
