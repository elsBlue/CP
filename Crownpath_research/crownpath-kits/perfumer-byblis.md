# Perfumer Byblis

Short: PByblis

Element: Fire

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 106

Patch / date used: release kit 2026-04-02 (STOVE Limited Summon / New Hero Preview; no later skill balance found)

## Roles

sustain, cleanse, barrier, venom, dual-attack, defense-break

## Tags

single-target, aoe, decrease-defense, dual-attack, lingering-fragrance, venom, detonate, cleanse, barrier, max-health-scaling, soulburn

## Effects

lingering-fragrance-on-enemy-turn, la-vie-en-rose-cleanse-heal-barrier, venom-detonate, dual-attack-soulburn, max-health-scaled-heal-barrier

## Buffs

Lingering Fragrance, Barrier, Increase Effectiveness

## Debuffs

Decrease Defense, Venom

## Unique effects

### Lingering Fragrance engine

Allies. At the start of an enemy's turn, grants Lingering Fragrance to all allies for 1 turn. Exact buff stats (Atk/Def/etc.): UNSURE — known to count as a buff for Charlotte-style “has a buff” conditions.

### La Vie en Rose save

Allies. When an ally's Health is 50% or less after being attacked, activates La Vie en Rose: dispel two debuffs from all allies, recover Health, grant Barrier 2 turns. Heal and barrier ∝ caster max Health. Trigger ICD / once-per-battle limits: UNSURE.

### Aura de la Mort venom detonate

Targets (AoE). Grant Increase Effectiveness to caster 3 turns; 100% chance to inflict two Venom for 2 turns on all enemies; at end of turn, detonates Venom on the target(s). Exact Venom / detonate formula (injury vs fixed damage): UNSURE — community often describes injury stacking.

## Kit

S1 Rose Breeze (+1 Soul): 75%→~100% Decrease Defense 1 turn; Soulburn (−10): Dual Attack from highest-Attack ally. S2 Elixir de Belle Nuit (passive): start of enemy turn → Lingering Fragrance all allies 1 turn; ally ≤50% HP after attack → La Vie en Rose (dispel 2 debuffs all allies + heal + Barrier 2 turns ∝ max HP). S3 Aura de la Mort (+2 Souls, 4→3 CD): Increase Effectiveness caster 3 turns; two Venom 2 turns on all enemies (100% on card); end of turn detonate Venom. Exact Venom formula, La Vie en Rose ICD, Lingering Fragrance buff values, first-fight S3 opening CD: UNSURE.

## Defense / offense

8 / 5

## Unsure

- Exact Lingering Fragrance buff values / journal tooltip
- Exact Venom and detonation damage / injury formula
- La Vie en Rose internal cooldown or once-per-turn limits
- Whether Decrease Defense chance is fully 100% after skill-ups
- First-fight (opening) cooldown of Aura de la Mort
- Awaken skill-upgrade text (epic7db lists Skill Upgrade without full after-text)

## Object

```ts
{
  id: "perfumer-byblis",
  name: "Perfumer Byblis",
  short: "PByblis",
  element: "fire",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["sustain", "cleanse", "barrier", "venom", "dual-attack", "defense-break"],
  tags: ["single-target", "aoe", "decrease-defense", "dual-attack", "lingering-fragrance", "venom", "detonate", "cleanse", "barrier", "max-health-scaling", "soulburn"],
  effects: ["lingering-fragrance-on-enemy-turn", "la-vie-en-rose-cleanse-heal-barrier", "venom-detonate", "dual-attack-soulburn", "max-health-scaled-heal-barrier"],
  buffs: ["Lingering Fragrance", "Barrier", "Increase Effectiveness"],
  debuffs: ["Decrease Defense", "Venom"],
  uniqueEffects: [
    {
      name: "Lingering Fragrance engine",
      scope: "allies",
      tooltip: "At start of each enemy turn, Lingering Fragrance 1 turn on all allies (exact buff stats UNSURE)."
    },
    {
      name: "La Vie en Rose save",
      scope: "allies",
      tooltip: "When ally ≤50% HP after attack: dispel 2 debuffs all allies, heal + Barrier 2 turns ∝ caster max HP (ICD UNSURE)."
    },
    {
      name: "Aura de la Mort venom detonate",
      scope: "targets",
      tooltip: "Two Venom 2 turns on all enemies; end of turn detonates Venom (formula UNSURE)."
    }
  ],
  kit: "S1 Rose Breeze (+1 Soul): Decrease Defense; Soulburn (−10) Dual Attack highest-Atk ally. S2 Elixir de Belle Nuit (passive): enemy-turn Lingering Fragrance; ≤50% HP → La Vie en Rose cleanse/heal/barrier. S3 Aura de la Mort (+2 Souls, 4→3 CD): self Increase Effectiveness 3 turns; two Venom AoE; detonate end of turn.",
  defense: 8,
  offense: 5,
  baseSpeed: 106,
  verified: false
}
```
