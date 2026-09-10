# Swift Flagbearer Sigret

Short: SFSigret

Element: Fire

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: release kit ~2025-11 (limited; no later SF Sigret skill balance found in 2026 STOVE previews checked). Operator Sigret 2025-09-25 balance is a different hero.

## Roles

opener, strip, fear, target, dual-basic-attack, silence

## Tags

single-target, aoe, silence, target, fear, strip, team-basic-attack, cr-push, self-evasion, team-speed, soulburn, ignore-er

## Effects

silence-then-cr-push, target-then-team-basics, fear-cr-push-strip, first-battle-evasion, ignore-effect-resistance-soulburn

## Buffs

Increase Speed, Increase Evasion

## Debuffs

Silence, Target, Fear

## Unique effects

### Target (Target Lock)

Targets. After full dispel, inflict Target for 2 turns (printed 100% on card) and make all allies except caster attack with a basic skill; caster Combat Readiness +30%. Soulburn (−10): ignores Effect Resistance. Target debuff: increases damage taken (~15%) and decreases Evasion (~15%) per common journal summaries — confirm in-game.

### Flag of Victory open

Targets (AoE). Dispel two buffs from all enemies; Fear 2 turns + Combat Readiness −20%; Increase Speed all allies 2 turns; first battle Increase Evasion caster 2 turns. Base cooldown: UNSURE (epic7db shows “None” but skill-ups include −1 turn cooldown).

### Strike of Flagbearer silence push

Targets. Silence 1 turn (75%+ skill-ups); if target is silenced after attack, decrease Combat Readiness by 25%. Note: some guides claim CR push requires Target instead of Silence — sources conflict → treat Silence condition per epic7db; flag conflict under Unsure.

## Kit

S1 Strike of Flagbearer (+1 Soul): Silence 1 turn; if silenced → CR −25% (epic7db; conflict with some guides). S2 Target Lock (+1 Soul, 4→3 CD): full dispel → Target 2 turns → all other allies basic-attack; caster CR +30%; Soulburn (−10) ignore Effect Resistance. S3 Flag of Victory (+1 Soul, CD UNSURE, −1 from skill-up): AoE dispel 2 → Fear 2 turns + CR −20%; team Increase Speed 2 turns; first battle self Increase Evasion 2 turns. Awaken Skill Upgrade text: UNSURE. Exact Fear chance before/after skill-ups (printed 95%), Flag of Victory base CD, S1 CR condition conflict: UNSURE.

## Defense / offense

4 / 7

## Unsure

- Flag of Victory base cooldown (epic7db “None” vs −1 CD skill-up)
- Whether S1 CR push keys off Silence (epic7db) or Target (some guides)
- Awaken skill-upgrade full after-text
- Exact Target debuff journal numbers
- Fully enhanced Fear chance (95% printed + skill-ups)
- First-fight (opening) cooldown of Flag of Victory / Target Lock

## Object

```ts
{
  id: "swift-flagbearer-sigret",
  name: "Swift Flagbearer Sigret",
  short: "SFSigret",
  element: "fire",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["opener", "strip", "fear", "target", "dual-basic-attack", "silence"],
  tags: ["single-target", "aoe", "silence", "target", "fear", "strip", "team-basic-attack", "cr-push", "self-evasion", "team-speed", "soulburn", "ignore-er"],
  effects: ["silence-then-cr-push", "target-then-team-basics", "fear-cr-push-strip", "first-battle-evasion", "ignore-effect-resistance-soulburn"],
  buffs: ["Increase Speed", "Increase Evasion"],
  debuffs: ["Silence", "Target", "Fear"],
  uniqueEffects: [
    {
      name: "Target (Target Lock)",
      scope: "targets",
      tooltip: "Full dispel → Target 2 turns → other allies basic-attack; caster CR +30%; Soulburn (−10) ignore ER."
    },
    {
      name: "Flag of Victory open",
      scope: "targets",
      tooltip: "AoE dispel 2 → Fear + CR −20%; team Increase Speed; first battle self Increase Evasion. Base CD UNSURE."
    }
  ],
  kit: "S1 Strike of Flagbearer (+1 Soul): Silence; if silenced → CR −25% (conflict UNSURE). S2 Target Lock (+1 Soul, 4→3 CD): full dispel + Target + team basics; Soulburn (−10) ignore ER. S3 Flag of Victory (+1 Soul, CD UNSURE): AoE strip 2 + Fear + CR push; team Speed; open Evasion.",
  defense: 4,
  offense: 7,
  baseSpeed: 118,
  verified: false
}
```
