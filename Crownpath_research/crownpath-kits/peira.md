# Peira

Short: Peira

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 124

Patch / date used: 2026-09-04 (no Peira hero skill balance listing found in 2025–2026 STOVE previews checked; kit per epic7db 2026-09-04)

## Roles

opener, stun, anti-buff, restrict, escort, barrier, attack-buff

## Tags

single-target, aoe, stun, restrict, cannot-buff, strip-duration, increase-attack, stealth, escort, barrier, soulburn, extra-turn

## Effects

s1-stun-barrier-bonus-chance, soulburn-100-stun, s2-aoe-restrict-unbuffable-duration-cut, awaken-extra-turn, s3-team-atk-self-stealth-escort-barrier

## Buffs

Increase Attack, Stealth, Escort, Barrier

## Debuffs

Stun, Restrict, Unbuffable (Unable to be buffed)

## Unique effects

### Escort

Self. Redirects single-target attacks aimed at other allies to the caster (standard Escort behavior).

### Pack Hunt kit

Self + allies. Increase Attack all allies except caster 2 turns; Stealth + Escort + Barrier on caster 3 turns (barrier ∝ level).

## Kit

S1 Wolven Claw (+1 Soul): 40% Stun 1 turn; +25% chance if caster has Barrier. Soulburn (−10): 100% Stun. S2 Punishing Blade (+2 Souls, 6→5 CD): AoE; decrease buff duration by 1; Restrict + Unable to be buffed 2 turns; awaken Extra Turn. S3 Pack Hunt (+2 Souls, 5→4 CD): Increase Attack all allies except caster 2 turns; Stealth + Escort + Barrier on self 3 turns (∝ level). Exact barrier value: UNSURE. First-fight opening CD: UNSURE.

## Defense / offense

4 / 5

## Unsure

- Exact barrier strength vs level
- First-fight (opening) cooldowns
- Whether “Unable to be buffed” client name is Unbuffable / Cannot Buff

## Object

```ts
{
  id: "peira",
  name: "Peira",
  short: "Peira",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "stun", "anti-buff", "restrict", "escort", "barrier", "attack-buff"],
  tags: ["single-target", "aoe", "stun", "restrict", "cannot-buff", "strip-duration", "increase-attack", "stealth", "escort", "barrier", "soulburn", "extra-turn"],
  effects: ["s1-stun-barrier-bonus-chance", "soulburn-100-stun", "s2-aoe-restrict-unbuffable-duration-cut", "awaken-extra-turn", "s3-team-atk-self-stealth-escort-barrier"],
  buffs: ["Increase Attack", "Stealth", "Escort", "Barrier"],
  debuffs: ["Stun", "Restrict", "Unbuffable"],
  uniqueEffects: [
    {
      name: "Escort",
      scope: "self",
      tooltip: "Single-target attacks on other allies redirect to Peira while Escort is active."
    }
  ],
  kit: "S1 Wolven Claw: Stun (boosted with Barrier); Soulburn (−10) 100%. S2 Punishing Blade: AoE −1 buff duration + Restrict + Unbuffable; awaken Extra Turn. S3 Pack Hunt: ally Atk (except self) + Stealth/Escort/Barrier on self.",
  defense: 4,
  offense: 5,
  baseSpeed: 124,
  verified: false
}
```
