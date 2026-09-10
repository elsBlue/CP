# Uncharted Pioneer Politis

Short: UP Politis

Element: Ice

Class: Ranger

Rarity: 5

Tier: niche

Base Speed: 120

Patch / date used: 2026-09-03 release (STOVE/official preview EN + Game8 JP max-enhanced; ≠ Fire Mage Politis)

## Roles

stripper, cleave, support, cr-denier

## Tags

aoe, strip, skill-cooldown-increase, soulburn, fixed-damage, position, mission, extra-turn

## Effects

buff-dispel, skill-cooldown-increase, ignore-effect-resistance

## Buffs

Knowledge of the Stars, Attack Mission, Defense Mission

## Debuffs

none

## Unique effects

### Attack Mission

Team-wide unique. Front-row at battle start. Grants all allies +10% Attack. Completes after allies attack 10 times.

### Defense Mission

Team-wide unique. Back-row at battle start. Grants all allies +10% Max Health. Completes after allies are attacked 10 times.

### Knowledge of the Stars

Team-wide unique. Increases the damage of additional-damage effects by 100%. Granted by Last Words of a Fallen Star on mission complete. Duration / dispel rules: UNSURE.

### Last Words of a Fallen Star

Self-only proc. On mission complete: dispel all missions and debuffs from Politis; grant Knowledge of the Stars to all allies; grant Extra Turn to Politis.

### Hit-independent additional damage

Self-only on S1/S3. Deals fixed additional damage (1,000 S1 / 3,000 S3 at max-enhanced values) regardless of whether the attack hits.

## Kit

S1 Pulse Deployment (+1 Soul): AoE light attack; chance to dispel one buff (50% preview / 65% fully enhanced); deals 1,000 additional damage regardless of hit/miss. S2 Survivor's Mission (passive): at battle start, front → Attack Mission, back → Defense Mission. On mission complete → clear own missions + debuffs, activate Last Words of a Fallen Star (Knowledge of the Stars to all allies + Extra Turn). S3 Light Piercing the End (+3 Souls, base 7-turn cooldown → 4 fully enhanced): AoE drone attack; dispel all buffs; increase skill cooldowns by 1 turn; deals 3,000 additional damage regardless of hit/miss. Soulburn (−20 Souls): ignores Effect Resistance. First-fight opening cooldown: UNSURE. No Exclusive Equipment. Extra Attack vs Dual Attack: none listed. Changing row mid-battle reassigning mission: not stated (UNSURE / assume no).

## Defense / offense

5 / 6

## Unsure

- Knowledge of the Stars duration and whether undispellable
- Whether mission attack/hit counters include Dual / Extra / Counter the same way
- Awaken skill-upgrade delta (sources only show maxed cards)
- Exact S3 damage-enhancement totals (preview +8 steps vs Game8 +7 table conflict; CD path 7→4 consistent)
- First-fight (opening) cooldown of Light Piercing the End

## Object

```ts
{
  id: "uncharted-pioneer-politis",
  name: "Uncharted Pioneer Politis",
  short: "UP Politis",
  element: "ice",
  class: "ranger",
  tier: "niche",
  rarity: 5,
  roles: ["stripper", "cleave", "support", "cr-denier"],
  tags: ["aoe", "strip", "skill-cooldown-increase", "soulburn", "fixed-damage", "position", "mission", "extra-turn"],
  effects: ["buff-dispel", "skill-cooldown-increase", "ignore-effect-resistance"],
  buffs: ["Knowledge of the Stars", "Attack Mission", "Defense Mission"],
  debuffs: [],
  uniqueEffects: [
    {
      name: "Attack Mission",
      scope: "team-wide",
      tooltip: "Front-row at battle start. +10% Attack to all allies. Completes after allies attack 10 times."
    },
    {
      name: "Defense Mission",
      scope: "team-wide",
      tooltip: "Back-row at battle start. +10% Max Health to all allies. Completes after allies are attacked 10 times."
    },
    {
      name: "Knowledge of the Stars",
      scope: "team-wide",
      tooltip: "Increases additional-damage effects by 100%. Granted on mission complete. Duration: UNSURE."
    },
    {
      name: "Last Words of a Fallen Star",
      scope: "self-only",
      tooltip: "On mission complete: clear own missions + debuffs; Knowledge of the Stars to all allies; Extra Turn."
    },
    {
      name: "Hit-independent additional damage",
      scope: "self-only",
      tooltip: "S1/S3 deal 1,000 / 3,000 fixed additional damage regardless of hit or miss (max-enhanced values)."
    }
  ],
  kit: "S1 Pulse Deployment (+1 Soul): AoE; strip 1 buff (50%→65% FE); +1000 add-dmg ignore hit/miss. S2 Survivor's Mission: front Attack Mission / back Defense Mission; on complete → Last Words of a Fallen Star (Knowledge of the Stars all + Extra Turn). S3 Light Piercing the End (+3 Souls, 7→4 CD): AoE full strip + +1 skill CD; +3000 add-dmg ignore hit/miss; Soulburn (−20) ignore ER.",
  defense: 5,
  offense: 6,
  baseSpeed: 120,
  verified: false
}
```
