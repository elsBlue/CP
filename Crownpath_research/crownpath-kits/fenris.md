# Fenris

Short: Fenris

Element: Earth

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2026-06-05 STOVE (Magic Arrow FS condition eased; Soaring Arrow cleanse 1→2; Strike of Fate team CR +30%) — epic7db still shows pre-patch Soaring Arrow/Strike text → lag; kit checked 2026-09-04

## Roles

aoe-cleanse, single-target-nuke, cr-push, fighting-spirit

## Tags

single-target, aoe, increase-speed, increase-attack, cleanse, cr-push, fighting-spirit, soulburn, max-hp-scaling

## Effects

s1-speed-fs, soaring-arrow-aoe-cleanse2-cr, s3-atk-buff-team-cr, s3-hp-diff-damage, soulburn-s1-damage

## Buffs

Increase Speed, Increase Attack / Increase Attack (Greater) on awaken

## Debuffs

(none baseline)

## Unique effects

### Soaring Arrow (Unwavering Will)

Enemies + allies. After an ally suffers an extra attack, counterattack, or Dual Attack: gain 50 Fighting Spirit and use Soaring Arrow — AoE attack; dispel two debuffs from all allies (STOVE 2026-06-05; was one); caster CR +30%. Starts first battle with 50 Fighting Spirit. Internal once-every-2-turns lock: still listed on epic7db; STOVE June notes did not remove it → assume present (UNSURE if ever changed).

### Strike of Fate (max-HP difference)

Self vs target. Damage +∝ (target max HP > caster max HP), up to 70%. After attack: all allies CR +30% (STOVE 2026-06-05). Awaken: Increased Attack (Greater) 3 turns instead of Increased Attack.

## Kit

S1 Magic Arrow (+1 Soul): attack; Increase Speed 1 turn; gain 25 Fighting Spirit (STOVE 2026-06-05 removed “when it is the caster's turn” gate). Soulburn (−10): increased damage. S2 Unwavering Will (passive): start 50 FS; on ally extra/counter/Dual → +50 FS + Soaring Arrow (cleanse 2 + self CR +30%). S3 Strike of Fate (+3 Souls; FS skill / CD none on epic7db): Increase Attack (or Greater awaken) 3 turns; attack; all allies CR +30%; HP-diff damage up to +70%. Prefer STOVE over epic7db lag.

## Defense / offense

4 / 7

## Unsure

- Whether Soaring Arrow still once-every-2-turns after 2026-06-05 (epic7db yes; STOVE notes silent)
- Exact Fighting Spirit cost / full threshold for Strike of Fate
- Exclusive Equipment Mistilteinn current options (added around 2025 EE wave; exact current text not re-verified)
- First-fight opening behavior for FS skills

## Object

```ts
{
  id: "fenris",
  name: "Fenris",
  short: "Fenris",
  element: "earth",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["aoe-cleanse", "single-target-nuke", "cr-push", "fighting-spirit"],
  tags: ["single-target", "aoe", "increase-speed", "increase-attack", "cleanse", "cr-push", "fighting-spirit", "soulburn", "max-hp-scaling"],
  effects: ["s1-speed-fs", "soaring-arrow-aoe-cleanse2-cr", "s3-atk-buff-team-cr", "s3-hp-diff-damage", "soulburn-s1-damage"],
  buffs: ["Increase Speed", "Increase Attack", "Increase Attack (Greater)"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Soaring Arrow",
      scope: "allies",
      tooltip: "On ally extra/counter/Dual: AoE hit; cleanse 2 (STOVE 2026-06-05); caster CR +30%."
    },
    {
      name: "Strike of Fate",
      scope: "allies",
      tooltip: "Self Atk buff + attack; team CR +30% (STOVE); damage +∝ HP diff up to 70%."
    }
  ],
  kit: "S1 Magic Arrow: Speed + always gain 25 FS (STOVE eased). S2 Unwavering Will: Soaring Arrow cleanse 2 + CR. S3 Strike of Fate: Atk buff + team CR +30% + HP-diff damage. Prefer 2026-06-05 STOVE.",
  defense: 4,
  offense: 7,
  baseSpeed: 109,
  verified: false
}
```
