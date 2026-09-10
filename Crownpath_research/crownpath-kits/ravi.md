# Ravi

Short: Ravi

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 102

Patch / date used: 2025-05-09 balance (STOVE; Devil Drive injuries + always-crit; Demon's Blood Attack ∝ max Health + crit-hit cleanse). No 2026 covenant Ravi skill balance found. Prefer STOVE over epic7db awaken text that still shows old Defense Penetration / CR-to-0.

## Roles

bruiser, aoe-stun, injury, lifesteal, fighting-spirit

## Tags

single-target, aoe, always-crit, injury, stun, lifesteal, fighting-spirit, max-health-scaling, soulburn, self-cleanse

## Effects

always-critical-on-hit, attack-from-max-health, fighting-spirit-devil-drive, injury-on-devil-drive, cleanse-on-crit-taken, cr-push-on-hit-taken

## Buffs


## Debuffs

Stun, Injury (max-Health reduction)

## Unique effects

### Demon's Blood (post 2025-05-09)

Self-only. Starts first battle with 60 Fighting Spirit. Increases Attack proportional to caster's max Health (rate fixed after activation). After being attacked: Combat Readiness +15% (skill-ups raise; fully enhanced amount UNSURE vs printed 15%+). After suffering a critical hit: dispel one debuff (once per turn).

### Devil Drive injuries (post 2025-05-09)

Targets (AoE). Inflicts injuries then 75% Stun 1 turn; always crit on successful attack. Injury severity ∝ damage; Injuries decrease max Health of the target by up to 10% every time this skill is used (awakened max %: STOVE snippets cite up to 20% — treat as UNSURE if conflicting). Consumes Fighting Spirit (exact cost after “−1000% Fighting Spirit Consumed” skill-up: UNSURE; historically ~100).

### Slaughter always-crit vamp

Targets. Always crit on successful attack; absorbs some damage as Health. Soulburn (−20): greatly increases damage; does not trigger Dual Attack.

## Kit

S1 Slaughter (+1 Soul): always crit; vamp some damage as Health; Soulburn (−20) greatly increases damage, no Dual Attack. S2 Demon's Blood (passive, post 2025-05-09): first battle +60 FS; Attack ∝ max Health; after attacked CR +15% (+skill-ups); after crit taken dispel 1 debuff (1×/turn). S3 Devil Drive (+3 Souls, FS skill): AoE injuries then 75% Stun 1 turn; always crit; injury severity ∝ damage (max Health cut per use — printed up to 10%; awaken ceiling UNSURE). Exclusive Equipment Flame of Life: Slaughter chance to dispel 1 debuff / Slaughter Unbuffable 1 turn / Devil Drive +10% stun chance. epic7db awaken block still shows pre-2025 pen/CR-to-0 — prefer STOVE 2025-05-09. Exact FS cost, Attack% from max HP, first-fight availability: UNSURE.

## Defense / offense

7 / 7

## Unsure

- Exact Fighting Spirit cost of Devil Drive after skill-ups
- Exact Attack% gained from max Health
- Awakened injury max Health cut (10% vs 20% conflict)
- Fully enhanced CR gain on being attacked
- Whether Stun chance reaches 85% with EE option 3 only or also skill-ups
- First-fight (opening) usability / FS gating of Devil Drive

## Object

```ts
{
  id: "ravi",
  name: "Ravi",
  short: "Ravi",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["bruiser", "aoe-stun", "injury", "lifesteal", "fighting-spirit"],
  tags: ["single-target", "aoe", "always-crit", "injury", "stun", "lifesteal", "fighting-spirit", "max-health-scaling", "soulburn", "self-cleanse"],
  effects: ["always-critical-on-hit", "attack-from-max-health", "fighting-spirit-devil-drive", "injury-on-devil-drive", "cleanse-on-crit-taken", "cr-push-on-hit-taken"],
  buffs: [],
  debuffs: ["Stun", "Injury"],
  uniqueEffects: [
    {
      name: "Demon's Blood (post 2025-05-09)",
      scope: "self-only",
      tooltip: "First battle +60 FS; Attack ∝ max HP; after attacked CR up; after crit taken dispel 1 debuff (1×/turn)."
    },
    {
      name: "Devil Drive injuries (post 2025-05-09)",
      scope: "targets",
      tooltip: "AoE injuries then Stun chance; always crit; injury ∝ damage (max-HP cut per use; awaken ceiling UNSURE). FS cost UNSURE."
    }
  ],
  kit: "S1 Slaughter (+1 Soul): always crit + vamp; Soulburn (−20) more damage, no Dual Attack. S2 Demon's Blood (2025-05-09): +60 FS; Attack ∝ max HP; CR on hit taken; cleanse on crit taken. S3 Devil Drive (FS): AoE injuries + Stun; always crit. EE options on Slaughter/Devil Drive.",
  defense: 7,
  offense: 7,
  baseSpeed: 102,
  verified: false
}
```
