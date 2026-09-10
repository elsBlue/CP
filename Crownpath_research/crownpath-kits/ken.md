# Ken

Short: Ken

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 4/13 balance (STOVE Fighting Spirit reliability — Celestial Kick +40 FS; start FS 40; no FS on hit; no 2025–2026 covenant Ken skill balance found)

## Roles

bruiser, defense-break, vigor, stun

## Tags

single-target, vigor, burn, decrease-defense, decrease-attack, stun, soulburn, fighting-spirit, self-speed, max-health-scaling

## Effects

fighting-spirit, vigor-undispellable, ignore-effect-resistance-while-vigor, max-health-scaled-damage

## Buffs

Vigor, Increase Speed

## Debuffs

Decrease Defense, Burn, Stun, Decrease Attack

## Unique effects

### Vigor package

Self-only. Phoenix Flurry grants Vigor for 3 turns (undispellable Attack+Defense up). While Vigor: Knockout also Burns 2 turns; Celestial Kick ignores Effect Resistance on Decrease Defense.

### Fighting Spirit cycle

Self-only. Start of first battle: +40 Fighting Spirit. Celestial Kick acquires 40 Fighting Spirit (post 4/13). Knockout acquires Fighting Spirit (skill-up “+500% Fighting Spirit acquired” — base amount UNSURE). Whether Phoenix Flurry still consumes Fighting Spirit (historical 80–100): UNSURE — current epic7db text omits consume.

## Kit

S1 Knockout (+1 Soul): 50% Decrease Defense 2 turns; if Vigor → Burn 2 turns; damage ∝ max Health. S2 Celestial Kick (+2 Souls, 3 CD): Decrease Defense 2 turns then Increase Speed 2 turns; if Vigor → ignore Effect Resistance; +40 Fighting Spirit; damage ∝ max Health; Soulburn (−20): extra turn. S3 Phoenix Flurry (awakened, +3 Souls, 5→4 CD): stun 1 turn; awakened Decrease Attack 2 turns; grant Vigor 3 turns; damage ∝ max Health; start of first battle +40 Fighting Spirit. Exclusive Equipment options: Knockout +10% Decrease Defense chance / Celestial Kick Dual Attack from highest-Attack ally / Phoenix Flurry recover Health ∝ max Health. Exact FS consume / max FS / Knockout FS gain amount: UNSURE. First-fight opening cooldown of Phoenix Flurry: UNSURE.

## Defense / offense

6 / 6

## Unsure

- Whether Phoenix Flurry still consumes Fighting Spirit (and exact cost)
- Max Fighting Spirit threshold
- Base Fighting Spirit gained on Knockout (before +500% skill-up)
- First-fight (opening) cooldown of Phoenix Flurry
- Exact Vigor Attack/Defense % values

## Object

```ts
{
  id: "ken",
  name: "Ken",
  short: "Ken",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "defense-break", "vigor", "stun"],
  tags: ["single-target", "vigor", "burn", "decrease-defense", "decrease-attack", "stun", "soulburn", "fighting-spirit", "self-speed", "max-health-scaling"],
  effects: ["fighting-spirit", "vigor-undispellable", "ignore-effect-resistance-while-vigor", "max-health-scaled-damage"],
  buffs: ["Vigor", "Increase Speed"],
  debuffs: ["Decrease Defense", "Burn", "Stun", "Decrease Attack"],
  uniqueEffects: [
    {
      name: "Vigor package",
      scope: "self-only",
      tooltip: "Phoenix Flurry → Vigor 3 turns; while Vigor: Knockout Burns; Celestial Kick ignores ER on Decrease Defense."
    },
    {
      name: "Fighting Spirit cycle",
      scope: "self-only",
      tooltip: "First battle +40 FS; Celestial Kick +40 FS; Knockout gains FS (amount UNSURE). S3 FS consume: UNSURE."
    }
  ],
  kit: "S1 Knockout (+1 Soul): Decrease Defense; if Vigor → Burn; dmg ∝ max HP. S2 Celestial Kick (+2 Souls, 3 CD): Decrease Defense + Increase Speed; Vigor → ignore ER; +40 FS; Soulburn (−20) extra turn. S3 Phoenix Flurry awakened (+3 Souls, 5→4 CD): Stun; Decrease Attack; Vigor 3 turns; first battle +40 FS. EE options on S1/S2/S3.",
  defense: 6,
  offense: 6,
  baseSpeed: 102,
  verified: false
}
```
