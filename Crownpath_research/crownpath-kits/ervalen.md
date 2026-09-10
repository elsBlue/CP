# Ervalen

Short: Ervalen

Element: Earth

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 113

Patch / date used: 2022-08-04 STOVE rework (Heir to the Throne kill → extra turn + buff extend; Sword of Hatred soulburn) — no 2025–2026 Ervalen skill balance listing found; kit checked 2026-09-04

## Roles

single-target-nuke, execute, counter, barrier

## Tags

single-target, decrease-defense, barrier, counterattack, immunity, extra-turn, soulburn, max-hp-scaling

## Effects

s1-def-break, s2-cr-from-hp-diff, awaken-s2-immunity, s3-barrier-counter-stance, s3-kill-extra-turn, s3-hp-diff-damage, soulburn-s2-damage

## Buffs

Barrier, Counterattack (stance), Immunity (S2 awaken)

## Debuffs

Decrease Defense

## Unique effects

### Heir to the Throne (max-HP difference)

Self vs target. When target max Health > caster max Health, S3 damage increases proportional to difference, up to 70%. Barrier strength ∝ caster Attack. On kill: extend caster buff durations +1 turn and grant extra turn.

### Sword of Hatred (max-HP difference CR)

Self. When target max Health > caster max Health, caster CR increases proportional to difference, up to 30%. Awaken: also Immunity 1 turn.

## Kit

S1 Vengeance (+1 Soul): attack; 50% (enhanceable) Decrease Defense 2 turns. S2 Sword of Hatred (+1 Soul; CD UNSURE — 2022 STOVE mentioned increase to 4; epic7db lists 2): repeated attack; CR push up to 30% from max-HP difference; awaken Immunity 1 turn. Soulburn (−10): increased damage. S3 Heir to the Throne (+3 Souls, 5→4 CD): attack; Counterattack stance + Barrier 2 turns; on kill extend buffs +1 and extra turn; max-HP-diff damage up to +70%.

## Defense / offense

3 / 8

## Unsure

- Current fully enhanced Sword of Hatred cooldown (2022 STOVE said 4 turns; epic7db lists 2)
- Exact CR % formula steps for Sword of Hatred vs HP difference
- Exclusive Equipment current options (if any) not fully verified this pass
- First-fight opening S3 cooldown

## Object

```ts
{
  id: "ervalen",
  name: "Ervalen",
  short: "Ervalen",
  element: "earth",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["single-target-nuke", "execute", "counter", "barrier"],
  tags: ["single-target", "decrease-defense", "barrier", "counterattack", "immunity", "extra-turn", "soulburn", "max-hp-scaling"],
  effects: ["s1-def-break", "s2-cr-from-hp-diff", "awaken-s2-immunity", "s3-barrier-counter-stance", "s3-kill-extra-turn", "s3-hp-diff-damage", "soulburn-s2-damage"],
  buffs: ["Barrier", "Counterattack", "Immunity"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Heir to the Throne",
      scope: "self",
      tooltip: "Damage +∝ target>caster max HP (cap 70%). Kill → extend buffs +1 + extra turn. Barrier ∝ Attack."
    },
    {
      name: "Sword of Hatred",
      scope: "self",
      tooltip: "CR +∝ target>caster max HP (cap 30%). Awaken: Immunity 1 turn."
    }
  ],
  kit: "S1 Vengeance: Decrease Defense. S2 Sword of Hatred: CR from HP diff; awaken Immunity; Soulburn damage. S3 Heir to the Throne: Barrier + counter stance; kill extra turn; HP-diff damage up to 70%. Last major kit change 2022-08-04 STOVE.",
  defense: 3,
  offense: 8,
  baseSpeed: 113,
  verified: false
}
```
