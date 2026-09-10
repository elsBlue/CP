# Kane

Short: Kane

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 105

Patch / date used: 2024-05-09 balance (STOVE; no 2025–2026 skill balance found — community buff requests only)

## Roles

dps, bleed, rage, pve-carry

## Tags

single-target, aoe, bleed, rage, immortality, vampirism, soulburn, extra-attack, fighting-spirit, atkup-greater

## Effects

fighting-spirit, ignore-effect-resistance-bleed, debuff-scaled-damage

## Buffs

Increase Attack (Greater), Rage (Enrage), Immortality, Vampirism

## Debuffs

Bleed

## Unique effects

### Force Awakening Fighting Spirit

Self-only. After an ally attacks, if the target has a debuff, gain 10 Fighting Spirit; when Fighting Spirit is full, consume all to become enraged for 2 turns. Max Fighting Spirit value: UNSURE (commonly 100). Start-of-battle +50 Fighting Spirit was removed in the 2024-05-09 after-kit.

### Rock Smash

Self-only (extra from Hammer Time while enraged). AoE slam; inflict Bleed for 2 turns; ignores Effect Resistance. Can activate once per turn during caster's turn. (Post-2024-05-09: bleed moved here from S1; self-dispel on Rock Smash removed; damage slightly reduced per STOVE notes.)

### Force Awakening lethal

Self-only. Upon receiving lethal damage, grant Immortality and Vampirism for 1 turn and reset Feast of Predation cooldown (once every 6 turns base; skill-ups −1×3 → once every 3 turns fully enhanced — confirm display: UNSURE if UI shows 6→3).

## Kit

S1 Hammer Time! (+1 Soul): hammer attack; increase caster Combat Readiness by 15%; when enraged, activate Rock Smash as an extra attack (once per turn). Rock Smash: AoE; Bleed 2 turns; ignore Effect Resistance. S2 Force Awakening (passive): lethal → Immortality + Vampirism 1 turn + reset S3 CD (gated turns as above); ally attacks debuffed target → +10 Fighting Spirit → full FS spends into Enrage 2 turns. S3 Feast of Predation (awakened, +3 Souls, +50 Fighting Spirit, 4-turn cooldown): attack; grant Increase Attack (Greater) for 2 turns (awakened); damage increases proportional to number of debuffs on the target. Soulburn (−10 Souls): skill cooldown decreased by 2 turns. First-fight opening cooldown: UNSURE. Exact debuff-count damage formula: UNSURE. Exclusive Equipment options (if any current EE skill options): UNSURE — verify in-game / STOVE EE page.

## Defense / offense

4 / 7

## Unsure

- Max Fighting Spirit threshold (assumed 100)
- Exact fully-enhanced lethal-immortality gate (6→3 turns)
- Exact Feast of Predation damage scaling per debuff
- First-fight (opening) cooldown of Feast of Predation
- Current Exclusive Equipment skill-option text
- Whether enraged still increases bleeding damage taken by enemies (wishlist / fan notes only — not in epic7db kit)

## Object

```ts
{
  id: "kane",
  name: "Kane",
  short: "Kane",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "bleed", "rage", "pve-carry"],
  tags: ["single-target", "aoe", "bleed", "rage", "immortality", "vampirism", "soulburn", "extra-attack", "fighting-spirit", "atkup-greater"],
  effects: ["fighting-spirit", "ignore-effect-resistance-bleed", "debuff-scaled-damage"],
  buffs: ["Increase Attack (Greater)", "Rage", "Immortality", "Vampirism"],
  debuffs: ["Bleed"],
  uniqueEffects: [
    {
      name: "Force Awakening Fighting Spirit",
      scope: "self-only",
      tooltip: "After ally hits a debuffed target: +10 Fighting Spirit; at full FS consume all for Enrage 2 turns. Max FS: UNSURE."
    },
    {
      name: "Rock Smash",
      scope: "self-only",
      tooltip: "While enraged, Hammer Time extras AoE Bleed 2 turns ignoring Effect Resistance (once per turn)."
    }
  ],
  kit: "S1 Hammer Time! (+1 Soul): CR +15%; if enraged → Rock Smash AoE Bleed 2 turns ignore ER. S2 Force Awakening: lethal Immortality+Vampirism 1 turn + reset S3 (once/6→3 turns); ally hit on debuffed → +10 FS → Enrage 2 turns. S3 Feast of Predation awakened (+3 Souls, +50 FS, 4 CD): Increase Attack (Greater) 2 turns; dmg ∝ debuff count; Soulburn (−10) −2 CD.",
  defense: 4,
  offense: 7,
  baseSpeed: 105,
  verified: false
}
```
