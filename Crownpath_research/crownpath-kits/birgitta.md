# Birgitta

Short: Birgitta

Element: Ice

Class: Soul Weaver

Rarity: 5

Tier: niche

Base Speed: 114

Patch / date used: 2026-03-12 STOVE balance (Subterfuge gains Swift Attack; Nothing Personal, Kid fully-enhanced CD 5→4) — prefer STOVE over lagging epic7db

## Roles

strip, control, cleanse, cr-push, enabler

## Tags

single-target, strip, bind, block, cr-cut, cleanse, swift-attack, soulburn, ignore-effect-resistance, extra-turn

## Effects

decrease-cr, block-amplified-cr-cut, buff-dispel-all, bind, block, ally-cleanse, swift-attack, ignore-effect-resistance-soulburn

## Buffs

Swift Attack

## Debuffs

Bind, Block

## Unique effects

### Block-amplified Baseless Rumor

Target. S1 CR cut doubles when the target is inflicted with Block.

### Subterfuge (2026-03-12)

Ally. Dispel two debuffs, grant Swift Attack, CR +50%. Awakened: also grants an extra turn to the caster.

### Swift Attack

Ally. At end of turn, CR +50%; dispelled once activated (same unique as Amid).

## Kit

S1 Baseless Rumor (+1 Soul): attack; CR −15% base (+enhancements); doubled if target has Block. S2 Subterfuge (+1 Soul, 3 CD): dispel two debuffs from an ally; grant Swift Attack; CR +50% (STOVE post-balance; epic7db still missing Swift Attack — prefer STOVE). Awaken: extra turn to caster. Skill enhancements on epic7db still show CR ups from a lower base — fully-enhanced CR treated as 50% per STOVE card text. S3 Nothing Personal, Kid (+3 Souls): dispel all buffs from one enemy; 100% chance each Bind and Block 2 turns. Fully-enhanced CD 4 turns after 2026-03-12 (was 5). Soulburn (−20): Ignore Effect Resistance. First-fight opening CD: UNSURE.

## Defense / offense

3 / 4

## Unsure

- epic7db still shows pre-balance Subterfuge (no Swift Attack) and older awaken CR 35% — file uses STOVE 2026-03-12
- Whether S3 base CD is 5 with −1 enhancement (=4) or listed 4 fully enhanced another way
- Fully-enhanced S1 CR cut % when not blocked / when blocked
- First-fight (opening) cooldown of Nothing Personal, Kid
- Whether Subterfuge skill enhancements still add CR above 50%

## Object

```ts
{
  id: "birgitta",
  name: "Birgitta",
  short: "Birgitta",
  element: "ice",
  class: "soul-weaver",
  tier: "niche",
  rarity: 5,
  roles: ["strip", "control", "cleanse", "cr-push", "enabler"],
  tags: ["single-target", "strip", "bind", "block", "cr-cut", "cleanse", "swift-attack", "soulburn", "ignore-effect-resistance", "extra-turn"],
  effects: ["decrease-cr", "block-amplified-cr-cut", "buff-dispel-all", "bind", "block", "ally-cleanse", "swift-attack", "ignore-effect-resistance-soulburn"],
  buffs: ["Swift Attack"],
  debuffs: ["Bind", "Block"],
  uniqueEffects: [
    {
      name: "Block-amplified Baseless Rumor",
      scope: "target",
      tooltip: "S1 CR decrease is doubled if the target has Block."
    },
    {
      name: "Subterfuge (post-2026-03-12)",
      scope: "ally",
      tooltip: "Dispel 2 debuffs, grant Swift Attack, CR +50%; awaken also extra turn."
    }
  ],
  kit: "S1 Baseless Rumor (+1 Soul): CR cut (doubled if Block). S2 Subterfuge (+1 Soul, 3 CD): cleanse 2 + Swift Attack + CR +50%; awaken extra turn (STOVE 2026-03-12). S3 Nothing Personal, Kid (+3 Souls, fully-enhanced CD 4): full strip + Bind + Block 2 turns; Soulburn (−20) Ignore ER. Opening CD UNSURE.",
  defense: 3,
  offense: 4,
  baseSpeed: 114,
  verified: false
}
```
