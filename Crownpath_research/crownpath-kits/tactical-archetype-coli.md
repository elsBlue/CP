# Tactical Archetype Coli

Short: TAC Coli

Element: Ice

Class: Thief

Rarity: 5

Tier: niche

Base Speed: 118

Patch / date used: release 2026-03-12 STOVE (new hero) — no later skill balance listing found; kit per epic7db 2026-09-04 (awaken Skill Upgrade details incomplete on page)

## Roles

follow-up-strip, defense-break, bleed-detonate, bomb-detonate, overload

## Tags

single-target, aoe, bleed, bomb, decrease-defense, strip, overload, swift-attack, detonate, soulburn

## Effects

s1-double-bleed-detonate-overload-bonus, soulburn-extra-bleed, passive-flank-strike-after-ally-single, s3-overload-aoe-strip-bomb-detonate

## Buffs

Overload, Swift Attack

## Debuffs

Bleed, Decrease Defense, Bomb

## Unique effects

### Overload

Self. Granted by Assault 2 turns. While Overload: Sweep bleed chance +20%.

### Swift Attack

Ally. Granted to ally target after their Single Attack (via Guard); pairs with Flank Strike on the enemy.

### Flank Strike

Enemy. After ally Single Attack (not Extra/Counter/Dual): dispel 1 buff; Decrease Defense 2 turns; caster CR +20% (+enhance).

## Kit

S1 Sweep (+1 Soul): 80% each two Bleeds 2 turns (+20% chance if Overload); at end of turn detonates Bleeds on target. Soulburn (−10): one additional Bleed. S2 Guard (passive): after ally except caster uses Single Attack → Swift Attack on that ally + Flank Strike on enemy (not from Extra/Counter/Dual). S3 Assault (+5 Souls, 3→2 CD): Overload self 2 turns; AoE; dispel 2 buffs; 100% Bomb 2 turns; end of turn detonates Bombs. Awaken includes Skill Upgrade — exact awakened delta: UNSURE (epic7db incomplete). First-fight opening CD: UNSURE.

## Defense / offense

2 / 7

## Unsure

- Exact awaken Skill Upgrade changes
- Detonation damage coefficients for Bleed/Bomb
- Fully enhanced Flank Strike CR %
- First-fight (opening) S3 cooldown

## Object

```ts
{
  id: "tactical-archetype-coli",
  name: "Tactical Archetype Coli",
  short: "TAC Coli",
  element: "ice",
  class: "thief",
  tier: "niche",
  rarity: 5,
  roles: ["follow-up-strip", "defense-break", "bleed-detonate", "bomb-detonate", "overload"],
  tags: ["single-target", "aoe", "bleed", "bomb", "decrease-defense", "strip", "overload", "swift-attack", "detonate", "soulburn"],
  effects: ["s1-double-bleed-detonate-overload-bonus", "soulburn-extra-bleed", "passive-flank-strike-after-ally-single", "s3-overload-aoe-strip-bomb-detonate"],
  buffs: ["Overload", "Swift Attack"],
  debuffs: ["Bleed", "Decrease Defense", "Bomb"],
  uniqueEffects: [
    {
      name: "Flank Strike",
      scope: "enemy",
      tooltip: "After ally Single Attack: strip 1 + Decrease Defense 2 turns + caster CR ~20%+."
    },
    {
      name: "Overload",
      scope: "self",
      tooltip: "From Assault 2 turns; +20% Sweep bleed chance."
    }
  ],
  kit: "S1 Sweep: double Bleed (+Overload chance); detonate Bleeds EOT; Soulburn (−10) +1 Bleed. S2 Guard: ally Single → Swift Attack + Flank Strike. S3 Assault: Overload + AoE strip 2 + Bomb + detonate Bombs. Awaken delta UNSURE.",
  defense: 2,
  offense: 7,
  baseSpeed: 118,
  verified: false
}
```
