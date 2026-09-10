# Sol

Short: Sol

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 119

Patch / date used: 2021-03-31 balance (STOVE Sol/Elphelt; Volcanic Viper on AoE hit + FS on enemy non-attack). No 2025–2026 Sol skill balance found.

## Roles

dps, strip, silence, anti-non-attack, fighting-spirit

## Tags

single-target, strip, silence, fighting-spirit, roman-cancel, extra-turn, soulburn, ignore-er, unbuffable, max-health-scaling

## Effects

roman-cancel-extra-turn, volcanic-viper-counter, fighting-spirit-gain, additional-damage-regardless-of-hit, awaken-unbuffable

## Buffs


## Debuffs

Silence, Unbuffable

## Unique effects

### Roman Cancel

Self-only. After Gunflame, if Fighting Spirit is 100: consume all Fighting Spirit, extend durations of buffs on caster by 1 turn, grant extra turn. Cannot be triggered by a counterattack.

### Volcanic Viper (post 2021-03-31)

Self/targets. When an enemy uses a non-attack skill: caster CR +20% and +20 Fighting Spirit. When suffering an attack that targets all allies: activates Volcanic Viper vs attacker (silence 2 turns; damage ∝ enemy max Health; acquire 2 Souls). Each effect once every 2 turns; not from counter/Dual/extra attack.

### Tyrant Rave ver. Beta (awakened)

Targets. Full dispel; damage ∝ enemy max Health; after attacking, additional damage regardless of hit. Awakened: Unbuffable 2 turns. Soulburn (−10): ignores Effect Resistance.

## Kit

S1 Gunflame (+1 Soul): damage up if enemy isn't buffed; if FS=100 after attack → Roman Cancel (consume FS, extend self buffs +1, extra turn). S2 Volcanic Viper (passive): enemy non-attack → CR +20% +20 FS; when hit by ally-targeting AoE → Volcanic Viper (Silence 2 turns, dmg ∝ enemy max HP, +2 Souls); 2-turn ICD each. S3 Tyrant Rave ver. Beta (awakened, +3 Souls, 5→4 CD): full dispel; dmg ∝ enemy max HP; additional damage regardless of hit; awaken Unbuffable 2 turns; Soulburn (−10) ignore Effect Resistance. Exact additional-damage formula, FS gain on Gunflame (STOVE: always gain FS — amount UNSURE), first-fight S3 opening CD: UNSURE.

## Defense / offense

4 / 8

## Unsure

- Exact Fighting Spirit gained per Gunflame
- Exact additional-damage formula on Tyrant Rave
- Whether “unable to be buffed” vs Unbuffable naming
- First-fight (opening) cooldown of Tyrant Rave ver. Beta
- Current max Fighting Spirit (assumed 100)

## Object

```ts
{
  id: "sol",
  name: "Sol",
  short: "Sol",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "strip", "silence", "anti-non-attack", "fighting-spirit"],
  tags: ["single-target", "strip", "silence", "fighting-spirit", "roman-cancel", "extra-turn", "soulburn", "ignore-er", "unbuffable", "max-health-scaling"],
  effects: ["roman-cancel-extra-turn", "volcanic-viper-counter", "fighting-spirit-gain", "additional-damage-regardless-of-hit", "awaken-unbuffable"],
  buffs: [],
  debuffs: ["Silence", "Unbuffable"],
  uniqueEffects: [
    {
      name: "Roman Cancel",
      scope: "self-only",
      tooltip: "At 100 FS after Gunflame: consume all FS, extend self buffs +1 turn, extra turn (not from counter)."
    },
    {
      name: "Volcanic Viper (post 2021-03-31)",
      scope: "self-only",
      tooltip: "Enemy non-attack → CR +20% +20 FS; ally-AoE hit → Silence 2 turns vs attacker (dmg ∝ enemy max HP); 2-turn ICD."
    }
  ],
  kit: "S1 Gunflame (+1 Soul): amp if unbuffed; FS=100 → Roman Cancel. S2 Volcanic Viper: non-attack → CR/FS; AoE-hit → Silence poke. S3 Tyrant Rave awakened (+3 Souls, 5→4 CD): full dispel + additional damage; Unbuffable 2 turns; Soulburn (−10) ignore ER.",
  defense: 4,
  offense: 8,
  baseSpeed: 119,
  verified: false
}
```
