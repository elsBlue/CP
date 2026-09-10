# Flan

Short: Flan

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2025-08-06 STOVE balance (Communication Breakdown → Decrease Defense; Advantageous Deal awaken CD-increase replaces Unhealable; CD shortened) — prefer STOVE over epic7db lag (epic7db still showed old dispel/Unhealable as of 2026-09-04 scrape)

## Roles

defense-break, cr-push, ally-buff, skill-cooldown-push

## Tags

single-target, aoe, decrease-defense, increase-attack, increase-crit-damage, cr-push, skill-cooldown-increase, soulburn

## Effects

s1-decrease-defense-per-stove, s2-atk-cdmg-cr-push, s3-aoe-defbreak-cr-push, awaken-skill-cd-increase, soulburn-extra-turn

## Buffs

Increase Attack, Increase Critical Hit Damage

## Debuffs

Decrease Defense, (Skill Cooldown Increase on awaken S3 — treated as cooldown push, not a lasting named debuff icon in all UIs)

## Unique effects

### Advantageous Deal (awakened, post-2025-08-06)

Targets (AoE). Increase skill cooldown of all enemies by 1 turn; Decrease Defense 2 turns; CR −15%. Soulburn grants extra turn. STOVE replaced prior Unhealable awaken effect.

## Kit

S1 Communication Breakdown (+1 Soul): attack; Decrease Defense (STOVE 2025-08-06 replaced buff dispel; chance path formerly ~75%+enhances — exact post-patch chance: UNSURE; EE option adjusted to +10% Decrease Defense chance). S2 Data Monopoly (+2 Souls, 3 CD): ally Increase Attack + Increase Critical Hit Damage 2 turns; CR +40% (+enhances). S3 Advantageous Deal (+3 Souls, CD fully enhanced 4 turns per STOVE after patch — was 5; enhance −1 may apply → exact base/enhanced pair: UNSURE): AoE Decrease Defense 2 turns + CR −15%; awaken also skill cooldown +1 turn all enemies. Soulburn (−20): extra turn. First-fight opening CD: UNSURE.

## Defense / offense

3 / 7

## Unsure

- Exact S1 Decrease Defense chance after Aug 2025 rewrite
- Exact S3 base vs fully-enhanced CD after STOVE shortened it (fully enhanced cited as 4)
- Whether cooldown increase is resistible / cleansable like a debuff
- Exclusive Equipment option text currently in client
- First-fight (opening) cooldowns
- epic7db still lagged old kit at scrape time — prefer STOVE

## Object

```ts
{
  id: "flan",
  name: "Flan",
  short: "Flan",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["defense-break", "cr-push", "ally-buff", "skill-cooldown-push"],
  tags: ["single-target", "aoe", "decrease-defense", "increase-attack", "increase-crit-damage", "cr-push", "skill-cooldown-increase", "soulburn"],
  effects: ["s1-decrease-defense-per-stove", "s2-atk-cdmg-cr-push", "s3-aoe-defbreak-cr-push", "awaken-skill-cd-increase", "soulburn-extra-turn"],
  buffs: ["Increase Attack", "Increase Critical Hit Damage"],
  debuffs: ["Decrease Defense"],
  uniqueEffects: [
    {
      name: "Advantageous Deal (Awakened)",
      scope: "targets",
      tooltip: "Post-2025-08-06: AoE skill CD +1, Decrease Defense 2 turns, CR −15%; Soulburn extra turn (Unhealable removed)."
    }
  ],
  kit: "S1 Communication Breakdown (+1 Soul): Decrease Defense (STOVE; was dispel). S2 Data Monopoly (+2 Souls, 3 CD): ATK+CDMG + CR push. S3 Advantageous Deal (+3 Souls): AoE Decrease Defense + CR −15%; awaken skill CD +1; Soulburn extra turn. Prefer STOVE over lagging epic7db.",
  defense: 3,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
