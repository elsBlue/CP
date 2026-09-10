# Summer Break Charlotte

Short: SBC

Element: Ice

Class: Knight

Rarity: 5

Tier: niche

Base Speed: 103

Patch / date used: 2026-09-04 (EE listed among 2026-03-12 update Exclusive Equipment additions/changes — exact option text not scraped; no later SBC skill balance listing found in checked previews; limited; kit per epic7db 2026-09-04)

## Roles

dual-attack-enabler, stun-nuke, penetrate, defense-break, speed-buff

## Tags

single-target, aoe-on-dual, decrease-defense, stun, penetrate, increase-speed, fighting-spirit, enhanced-dual-attack, soulburn, limited

## Effects

s1-def-break-dual-becomes-aoe, soulburn-aoe-s1, passive-crit-fighting-spirit-enhanced-dual, s3-cleanse-self-stun-50pen, awaken-team-speed

## Buffs

Enhanced Dual Attack, Increase Speed (awaken)

## Debuffs

Decrease Defense, Stun

## Unique effects

### Enhanced Dual Attack

Self. Granted at start of first battle (with 60 Fighting Spirit) and every 4 ally turns end: enables enhanced Dual Attack behavior for Charlotte's kit.

### Caught A Big One Dual form

Enemies. When activated as Dual Attack: becomes AoE; does not trigger counterattack; caster CR +25%.

### Fighting Spirit

Self. Starts first battle with 60 Fighting Spirit (An Adult's Responsibility). Exact other FS gain/spend rules beyond card: UNSURE.

## Kit

S1 Caught A Big One (+1 Soul): two hits; 60% Decrease Defense 1 turn; as Dual Attack → AoE (no counter) + caster CR +25%. Soulburn (−10): AoE; does not trigger Dual or counter. S2 An Adult's Responsibility (passive): Crit Chance +30% (+enhance); battle start 60 FS + Enhanced Dual Attack; every 4 ally turns → Enhanced Dual Attack. S3 Whale, Hello There (+3 Souls, no CD on card): cleanse all debuffs from self; Stun 1 turn; 50% Defense penetration; awaken also Increase Speed all allies 2 turns. EE options (2026-03-12 change listed): UNSURE exact text. First-fight / whether S3 starts available: card shows no cooldown — treat as none unless client differs: UNSURE.

## Defense / offense

3 / 8

## Unsure

- Current Exclusive Equipment option texts after 2026-03-12 listing
- Full Fighting Spirit gain/consume rules
- Whether S3 truly has no cooldown
- Exact Crit Chance fully enhanced

## Object

```ts
{
  id: "summer-break-charlotte",
  name: "Summer Break Charlotte",
  short: "SBC",
  element: "ice",
  class: "knight",
  tier: "niche",
  rarity: 5,
  roles: ["dual-attack-enabler", "stun-nuke", "penetrate", "defense-break", "speed-buff"],
  tags: ["single-target", "aoe-on-dual", "decrease-defense", "stun", "penetrate", "increase-speed", "fighting-spirit", "enhanced-dual-attack", "soulburn", "limited"],
  effects: ["s1-def-break-dual-becomes-aoe", "soulburn-aoe-s1", "passive-crit-fighting-spirit-enhanced-dual", "s3-cleanse-self-stun-50pen", "awaken-team-speed"],
  buffs: ["Enhanced Dual Attack", "Increase Speed"],
  debuffs: ["Decrease Defense", "Stun"],
  uniqueEffects: [
    {
      name: "Enhanced Dual Attack",
      scope: "self",
      tooltip: "Start battle + every 4 ally turns: Enhanced Dual Attack for Dual-form S1."
    }
  ],
  kit: "S1: Def break; Dual → AoE + CR; Soulburn (−10) forced AoE. S2: Crit + FS start + Enhanced Dual cadence. S3: self cleanse + Stun + 50% pen; awaken team Speed. EE post-2026-03-12 UNSURE.",
  defense: 3,
  offense: 8,
  baseSpeed: 103,
  verified: false
}
```
