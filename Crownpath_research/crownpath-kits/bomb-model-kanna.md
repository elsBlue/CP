# Bomb Model Kanna

Short: Kanna

Element: Fire

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-09-04 (no skill balance listing found in 2025–2026 previews checked; Connections unit)

## Roles

cleave, strip, dps

## Tags

aoe, strip, soulburn, dual-attack, cr-push

## Effects

buff-dispel, dual-attack, increase-hit

## Buffs

Increase Attack, Increase Speed, Shelling Stance, Striking Stance

## Debuffs

none

## Unique effects

### Stance Shift — Shelling Stance

Self-only. When Full Bombardment! is available at the start of the turn, takes Shelling Stance: Increases Effectiveness by 65% (plus skill enhancements / EE may raise Striking stats). Can only take one stance at a time.

### Stance Shift — Striking Stance

Self-only. When Full Bombardment! is unavailable at the end of the turn, takes Striking Stance: Increases Speed and Dual Attack chance by 65% (EE option can add +5% to Speed and Dual Attack chance).

### Nana's Game Console (Exclusive Equipment options)

Self-only / on-hit. Quick Bombardment: 50% chance Unable to be Buffed 1 turn. Stance Shift: +5% Speed and Dual Attack chance on Striking Stance. Full Bombardment!: Unhealable 2 turns on targets.

## Kit

S1 Quick Bombardment (+1 Soul): rapidly fires to attack two enemies; damage increases proportional to Speed. S2 Stance Shift (passive): Shelling Stance when Full Bombardment! is available at turn start (Effectiveness +65%); Striking Stance when Full Bombardment! is unavailable at turn end (Speed + Dual Attack chance +65%); one stance at a time. S3 Full Bombardment! (awakened, +3 Souls, 4-turn cooldown): attacks all enemies, chance to dispel one buff (100% on epic7db card / 90% awaken base before enhancements), grants Increase Speed to all allies for 2 turns (awakened) and Increase Attack to the caster for 2 turns. Soulburn (−10 Souls): extends duration of buffs granted by this skill by 1 turn. First-fight starting cooldown: UNSURE. Extra Attack vs Dual Attack: Striking Stance raises Dual Attack chance (true Dual Attack).

## Defense / offense

2 / 7

## Unsure

- First-fight (opening) cooldown of Full Bombardment!
- Whether journal shows dispel chance as 90% (awaken) or 100% (fully enhanced card)
- Exact buff names for stance states in-journal (“Shelling Stance” / “Striking Stance”)
- in-game “unable to be buffed” vs Seal for EE option

## Object

```ts
{
  id: "bomb-model-kanna",
  name: "Bomb Model Kanna",
  short: "Kanna",
  element: "fire",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["cleave", "strip", "dps"],
  tags: ["aoe", "strip", "soulburn", "dual-attack"],
  effects: ["buff-dispel", "dual-attack", "increase-hit"],
  buffs: ["Increase Attack", "Increase Speed"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Shelling Stance",
      scope: "self-only",
      tooltip: "Increases Effectiveness by 65%. Taken when Full Bombardment! is available at the start of the turn."
    },
    {
      name: "Striking Stance",
      scope: "self-only",
      tooltip: "Increases Speed and Dual Attack chance by 65%. Taken when Full Bombardment! is unavailable at the end of the turn."
    }
  ],
  kit: "S1 Quick Bombardment (+1 Soul): hit 2, damage ∝ Speed. S2 Stance Shift: Shelling (+65% Eff) vs Striking (+65% Speed & Dual Attack chance). S3 Full Bombardment! awakened (+3 Souls, 4 CD): AoE dispel 1 buff, Increase Speed allies 2 turns + Increase Attack self 2 turns; Soulburn (−10) buff duration +1.",
  defense: 2,
  offense: 7,
  baseSpeed: 114,
  verified: false
}
```
