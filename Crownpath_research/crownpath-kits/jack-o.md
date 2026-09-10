# Jack-O'

Short: Jack-O'

Element: Fire

Class: Warrior

Rarity: 5

Tier: niche

Base Speed: 109

Patch / date used: 2023-06-08 balance (STOVE; no 2025–2026 skill balance found). Limited collab hero.

## Roles

dps, pen, cr-battery, backline-enabler

## Tags

single-target, pen, stun, stealth, atkup, cr-push, soulburn, extra-attack, extra-turn, chain-of-chiron

## Effects

defense-penetration, debuff-synergy, combat-readiness-push

## Buffs

Increase Attack, Stealth, Chain of Chiron

## Debuffs

Stun; Chain of Chiron random (Stun / Unbuffable / Decrease Hit Chance / Restrict)

## Unique effects

### Chain of Chiron

Ally (back row at battle start, 2 turns). Cannot be dispelled. After attacking, inflicts a random debuff (Stun, Cannot Buff / Unbuffable, Decrease Hit Chance, Restrict) on the target for 1 turn. Post-2023-06-08 STOVE text lists no proc % (was 25% stun before); treat as guaranteed random debuff — if sources still show a %, mark UNSURE.

### Dust Attack

Self-only (extra from Throw Servant). After S1 on caster's turn, if target has a debuff → Dust Attack: throw attack; grant Stealth to caster for 1 turn.

### Forever Elysion Driver kill push

Team-wide. On defeating the enemy with S3: increase Combat Readiness of all allies by 20%; awakened also grants an extra turn to the caster.

## Kit

S1 Throw Servant (+1 Soul): servant attack; chance to Stun for 1 turn (40% base → higher with skill-ups; Soulburn (−10 Souls) sets effect chance to 100%). After attacking on caster's turn, if target has a debuff → Dust Attack (extra) + Stealth 1 turn. S2 Trick-or-Treat (passive, internal 3-turn gate): at start of battle, grant Chain of Chiron to back-row ally for 2 turns; after an ally attacks, when the target has a debuff, increase caster Combat Readiness by 30% (fully enhanced; activates after attacker's effects; once every 3 turns). S3 Forever Elysion Driver (awakened, +2 Souls, 4-turn cooldown, −1 → 3): Increase Attack to caster for 2 turns; jack-o'-lantern attack; 50% Defense penetration; damage increased if target has a debuff; on kill → ally CR +20% + caster extra turn (awakened). First-fight opening cooldown: UNSURE. Exact debuff-conditional damage multiplier on S3: UNSURE.

## Defense / offense

3 / 8

## Unsure

- Exact Chain of Chiron random-debuff proc rate if not 100%
- Exact S3 damage increase when target has a debuff
- First-fight (opening) cooldown of Forever Elysion Driver
- Pre–skill-up Stun chance on Throw Servant if not fully enhanced / Soulburned

## Object

```ts
{
  id: "jack-o",
  name: "Jack-O'",
  short: "Jack-O'",
  element: "fire",
  class: "warrior",
  tier: "niche",
  rarity: 5,
  roles: ["dps", "pen", "cr-battery", "backline-enabler"],
  tags: ["single-target", "pen", "stun", "stealth", "atkup", "cr-push", "soulburn", "extra-attack", "extra-turn", "chain-of-chiron"],
  effects: ["defense-penetration", "debuff-synergy", "combat-readiness-push"],
  buffs: ["Increase Attack", "Stealth", "Chain of Chiron"],
  debuffs: ["Stun", "Unbuffable", "Decrease Hit Chance", "Restrict"],
  uniqueEffects: [
    {
      name: "Chain of Chiron",
      scope: "ally",
      tooltip: "Undispellable. After attacking, inflicts a random debuff (Stun / Unbuffable / Decrease Hit Chance / Restrict) for 1 turn. Granted to back-row ally for 2 turns at battle start."
    },
    {
      name: "Dust Attack",
      scope: "self-only",
      tooltip: "After Throw Servant on own turn if target has a debuff: extra attack and Stealth for 1 turn."
    }
  ],
  kit: "S1 Throw Servant (+1 Soul): Stun chance; on own turn if target debuffed → Dust Attack + Stealth; Soulburn (−10) 100% effect chance. S2 Trick-or-Treat: Chain of Chiron to back row 2 turns; after ally hits debuffed target → self CR +30% (max, once/3 turns). S3 Forever Elysion Driver awakened (+2 Souls, 4→3 CD): Increase Attack 2 turns + 50% pen; more dmg if debuffed; on kill ally CR +20% + extra turn.",
  defense: 3,
  offense: 8,
  baseSpeed: 109,
  verified: false
}
```
