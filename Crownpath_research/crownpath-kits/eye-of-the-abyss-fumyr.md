# Eye of the Abyss Fumyr

Short: EotA Fumyr

Element: Earth

Class: Mage

Rarity: 5

Tier: niche

Base Speed: 124

Patch / date used: 2026-06-25 limited release (STOVE) — no post-release skill balance listing found through 2026-09-04; kit checked 2026-09-04

## Roles

strip, cr-push, detain, opener, stealth, barrier

## Tags

single-target, aoe, stun, strip, cr-push, detain, deterrence, barrier, stealth, soulburn, ignore-effect-resistance, extra-turn

## Effects

s1-stun, soulburn-stun-100, s2-strip2-cr-push-extra-turn, s3-detain-foremost, deterrence-on-detain, s3-barrier-stealth

## Buffs

Barrier, Stealth, Deterrence (unique)

## Debuffs

Stun, Detain (unique remove-from-battlefield)

## Unique effects

### Detain

Foremost enemy Hero. Temporarily removes the target from the battlefield. Can apply to only one Hero. Unaffected by Effect Resistance (per build guides / kit summaries). If caster dies, detained target typically returns — edge-case bugs reported: UNSURE official resolution.

### Deterrence

Self. When Detain is inflicted via Eye of the Abyss: grant Deterrence for 2 turns (epic7db; some guides say 3 → UNSURE). Exact Deterrence combat effect text: UNSURE (prefer client).

## Kit

S1 Elemental Magic (+1 Soul): attack; 40% (enhanceable) Stun 1 turn. Soulburn (−10): Stun chance 100%. S2 Blue Despair (+2 Souls, 5→4 CD): AoE dispel two buffs; decrease CR (fully enhanced text cites 25%; enhance path +% CR push); grant extra turn. S3 Eye of the Abyss (+2 Souls, 7 CD base; enhance path incomplete on epic7db → UNSURE final CD): pierce foremost enemy Hero with Detain; on Detain → Deterrence; Barrier (∝ level) + Stealth 2 turns. Awaken skill upgrade present (exact text: UNSURE). epic7db base HP/Def appear swapped (HP 613 / Def 6034) → omit exact HP/Def; Speed 124 kept. Tier niche default despite high RTA pick/preban.

## Defense / offense

4 / 5

## Unsure

- Exact Deterrence duration (2 vs 3 turn source conflict) and full tooltip
- Fully enhanced S3 cooldown / enhance steps (epic7db incomplete)
- Exact Blue Despair base CR decrease before enhance
- Barrier coefficient (proportional to level — exact formula)
- Correct base Health / Defense (epic7db scrape looks swapped)
- Official Detain-on-death / revive edge-case behavior
- First-fight opening cooldowns

## Object

```ts
{
  id: "eye-of-the-abyss-fumyr",
  name: "Eye of the Abyss Fumyr",
  short: "EotA Fumyr",
  element: "earth",
  class: "mage",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "cr-push", "detain", "opener", "stealth", "barrier"],
  tags: ["single-target", "aoe", "stun", "strip", "cr-push", "detain", "deterrence", "barrier", "stealth", "soulburn", "ignore-effect-resistance", "extra-turn"],
  effects: ["s1-stun", "soulburn-stun-100", "s2-strip2-cr-push-extra-turn", "s3-detain-foremost", "deterrence-on-detain", "s3-barrier-stealth"],
  buffs: ["Barrier", "Stealth", "Deterrence"],
  debuffs: ["Stun", "Detain"],
  uniqueEffects: [
    {
      name: "Detain",
      scope: "enemy",
      tooltip: "Removes foremost enemy Hero from battlefield; one target; ignores Effect Resistance (per kit summaries)."
    },
    {
      name: "Deterrence",
      scope: "self",
      tooltip: "Granted when Detain lands via S3; duration 2 turns per epic7db (3 in some guides → UNSURE)."
    }
  ],
  kit: "S1 Elemental Magic: Stun; Soulburn 100% Stun. S2 Blue Despair: strip 2 + CR push + extra turn. S3 Eye of the Abyss: Detain foremost + Deterrence + Barrier/Stealth. Release 2026-06-25; no later balance found.",
  defense: 4,
  offense: 5,
  baseSpeed: 124,
  verified: false
}
```
