# Roy Mustang

Short: Mustang

Element: Fire

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 112

Patch / date used: release / collab kit (no 2025–2026 Roy Mustang skill balance found; Mage constellation base-stat listing only). Prefer epic7db fully enhanced damage cap (51%) over older guides citing 70%.

## Roles

dps, cleave, penetrate, fighting-spirit, execute

## Tags

single-target, aoe, flame-alchemist, fighting-spirit, defense-penetration, damage-cap, soulburn, extra-turn, fewer-enemies-amp, self-attack

## Effects

flame-alchemist-heat-wave, fighting-spirit-scorching-heat, damage-received-cap, fewer-enemies-damage-amp, ice-can-remove-flame-alchemist

## Buffs

Flame Alchemist, Increase Attack

## Debuffs


## Unique effects

### Flame Alchemist

Self-only (undispellable except by Ice attacks per guides). Increases Hit Chance and Attack by 20% (guide values; confirm journal). Enables Heat Wave instead of Ignite on caster's turn. Guides: removed when attacked by Ice elemental — treat as signature weakness.

### Heat Wave conversion

Self/targets. On caster's turn while Flame Alchemist: Ignite becomes Heat Wave — attack; Combat Readiness +30%; penetrate Defense 50%; does not trigger Dual Attack.

### Hero of Ishval damage cap

Self-only. First battle: +40 Fighting Spirit and Flame Alchemist. Damage suffered in one attack does not exceed 51% of max Health (fully enhanced epic7db; base before skill-ups historically ~70% — prefer card/enhanced text).

## Kit

S1 Ignite (+1 Soul): CR +15%; if Flame Alchemist on caster's turn → Heat Wave (CR +30%, 50% Defense Penetration, no Dual Attack); Soulburn (−20): extra turn. S2 Hero of Ishval (passive): first battle +40 FS + Flame Alchemist; damage cap 51% max HP (enhanced). S3 Scorching Heat (awakened, +3 Souls, consumes 80 Fighting Spirit): awakened Increase Attack 2 turns then AoE barrage; grant Flame Alchemist; damage increases with fewer enemies (≤3). Exact Flame Alchemist Atk/Hit % if journal differs, fewer-enemy multipliers, FS gain rate outside S2 start: UNSURE.

## Defense / offense

5 / 8

## Unsure

- Exact journal tooltip for Flame Alchemist Atk/Hit Chance %
- Whether Ice attack removal is still current wording
- Exact fewer-enemy damage multipliers
- How Fighting Spirit is gained after the opening 40 (if at all beyond S3 consume)
- First-fight readiness for Scorching Heat (needs 80 FS; starts with 40)

## Object

```ts
{
  id: "roy-mustang",
  name: "Roy Mustang",
  short: "Mustang",
  element: "fire",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "cleave", "penetrate", "fighting-spirit", "execute"],
  tags: ["single-target", "aoe", "flame-alchemist", "fighting-spirit", "defense-penetration", "damage-cap", "soulburn", "extra-turn", "fewer-enemies-amp", "self-attack"],
  effects: ["flame-alchemist-heat-wave", "fighting-spirit-scorching-heat", "damage-received-cap", "fewer-enemies-damage-amp", "ice-can-remove-flame-alchemist"],
  buffs: ["Flame Alchemist", "Increase Attack"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Flame Alchemist",
      scope: "self-only",
      tooltip: "Hit Chance + Attack up (~20% guides); enables Heat Wave; typically stripped by Ice attacks."
    },
    {
      name: "Heat Wave conversion",
      scope: "self-only",
      tooltip: "On own turn with Flame Alchemist: Ignite → Heat Wave (CR +30%, 50% Defense Penetration, no Dual Attack)."
    }
  ],
  kit: "S1 Ignite (+1 Soul): CR +15%; with Flame Alchemist → Heat Wave (50% pen, CR +30%); Soulburn (−20) extra turn. S2 Hero of Ishval: first battle +40 FS + Flame Alchemist; damage cap 51% max HP (enhanced). S3 Scorching Heat awakened (80 FS): Increase Attack then AoE; fewer-enemy amp; re-grants Flame Alchemist.",
  defense: 5,
  offense: 8,
  baseSpeed: 112,
  verified: false
}
```
