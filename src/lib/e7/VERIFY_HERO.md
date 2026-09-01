# Verify-hero protocol

Run this **every time** a hero is marked in-game verified (Journal screenshots
or a kit pass). This replaces “audit the whole system.”

Copy-grounding rules stay in [`SCOUT_AUDIT.md`](SCOUT_AUDIT.md). Run that
**only on one wall that includes this hero**, not on every recipe.

**Never rewrite** `engine.ts` / `recipes.ts` / `threats.ts` / `heroes.ts`.
Targeted patch only. After edits: `node scripts/guard-e7-core.mjs`.

---

## Do not do

- Do not add an `ArchetypeId`. Eight wall types is the ceiling.
- Do not add a new seed recipe unless this kit is a **different plan**
  (cleave vs injury vs anti-revive). Unique spice is a Watch, not a recipe.
- Do not dump every unique onto Watch. Only if it **changes how you play**.
- Do not put wall-conditional warnings in `jobFor`.
- Do not full-catalog simulate. One wall is enough.

---

## 1. Kit (screenshots only)

Read Journal pages. Do not invent from memory.

Write the object in `heroes.ts` (edit that hero only):

| Field | Rule |
|---|---|
| `roles` | What they **do in a draft**, not class. `opener` / `strip` / `tank` / `bruiser` / `revive` / `speedcap` / `soulblock` / `control` / `cleave` / `dps` / `healer` / `cleanse` / `evasion` |
| `tags` | Mechanics: `injury`, `aoe`, `strip`, `anti-revive`, `evade`, `counter`, `extra-turn`, `soulburn`, `ignore-er`, … |
| `effects` | Normal effects the engine already knows |
| `buffs` / `debuffs` | Exact in-game names. Seal ≠ Cannot Buff. Skill Effect Nullifier ≠ Skill Nullifier |
| `uniqueEffects` | Name + short text from the tooltip. Self-only vs team-wide must be obvious |
| `kit` | One paragraph: S1 / S2 / S3, Soulburn, extra attack vs Dual Attack, first-fight cooldowns |
| `verified` | `true` |
| `checkedAt` | Today `YYYY-MM-DD` |
| `tier` | SS / S / A / B from current PvP use, not star rarity |
| `rarity` | 5 / 4 / 3 via `heroRarity` if not default 5 |

Call out in `kit` / unique text:

- Extra attack **is not** Dual Attack
- Self evasion **is not** a miss nest
- Buff duration −1 **is not** a strip
- CR reduction **is not** a Speed cap
- Self Skill Nullifier **is not** Fallen Cecilia

---

## 2. Automatic (no extra code if the kit is right)

These fire from roles / tags / uniques already:

- Pool: Scout and Roster can pick them
- Wall score: injury, revive, opener+cleave, soulblock, speedcap, …
- Generic Watch: Speed cap, Revive, Injury, Seal, Cannot Buff, Sleep, …

If the hero only does those, you may skip 3–6.

---

## 3. Watch — add only if play changes

File: `threats.ts`. One `add({ key, label, note })` next to similar kits.
Add a `rank` entry.

**Add** when the unique is team-wide or a first-cycle trap, for example:

- Force target, Offering, Sanctuary, miss nest, soul lock, Dark Moon
- Cannot-die window, Illusion, Death Sentence
- Extra-turn Dual Attack, Burst extra-attack (not Dual Attack)
- Skill Effect Nullifier (must **not** reuse the Skill Nullifier watch)

**Skip** when it is imprint, self buff, 25% stun, flavor CR +15%.

Detector: unique name **and** `ids.has("the-id")`. Do not match a substring
that another unique contains (`Hunt` vs Hunter’s Mark).

If Sanctuary is on the wall, Seal / Cannot Buff / Stun watches must stay off.

---

## 4. `jobFor` — always, if verified

File: `engine.ts`, one `case "hero-id":` in `jobFor`.

- Who they are on **our** team. Two sentences max.
- No “if the wall has Nullifier…” (that is pitfalls).
- Name the mechanic they actually have.

---

## 5. `prefer` — only the slot they should win

File: `recipes.ts`. Put the id on **the slot whose job they do**. One or two
lists, not every list.

| They are | Put on |
|---|---|
| Area injury | Injury grind `Injury`; True hit `True` |
| Single-target injury | Injury list, **after** AoE cores |
| Real tank (no Sanctuary) | Injury `Frontline`; Speed cap `Tank` |
| Revive **we** bring | Injury `Sustain` (Ruele, Lisette, SE Celine, Maid, SN Yulha) |
| Strip / curse | Tech / Strip — B.Iseria, Hecate stay first |
| Control (stun/sleep/lock) | Turn-2 `Control`; Strip and lock `Lock` |
| Miss core | Evasion bait `Miss` only (Setsuka, Riolet) |
| Anti-counter (Mort, A.Elena) | True hit `Cover` |
| Closer / execute | Anti-revive `Closer` |
| RGB Politis (not SP) | Control / Lock — **not** soul lock |

**Do not prefer** onto Injury Frontline / Sustain if they will **steal Mort or Diene**:

- Notos (Sanctuary kills our buffs)
- A.Tywin (stun, not the default front)
- Scales (Offering is not stall sustain)
- A.Ravi / MA Ken (bruiser wincon, not the tank)

After adding, mentally fill Injury grind vs a Harsetti stall: still
`injury core / Mort-class tank / strip / Diene-class sustain` unless the
new hero **is** that core.

---

## 6. Engine gates — rare

Only if this kit **breaks a recipe that would otherwise show**:

| Situation | Where |
|---|---|
| Unique would mis-score a wall type | `classifyDefense` `idSet.has` — last resort. Prefer roles/tags |
| Buffs/debuffs do not apply (Sanctuary-class) | `recipesFor` drop cleave / strip-lock / turn-2 / evasion-bait |
| Soul lock | `recipesFor` drop `outspeed-cleave` |
| Ferocious Stand | `slotScore` already boosts **area** injury |
| Offering | `slotScore` already boosts ignore-share |
| Curse + **our** revive | `slotScore` revive set: add their id if they revive **our** bench (Lisette, SE Celine, A.Ravi, BM Haste, Ruele, Maid, SN Yulha, A.Vildred) |

Do **not** add `harsetti-stall` to Turn-2 `vs` (Checkmate is Cannot Buff —
Immunity does not land).

Do **not** add a 9th wall type. Map the unique into an existing bucket + Watch.

---

## 7. One grounded scout

Pick **one** 4-man wall that includes this hero (or a preset they fit).

1. `classifyDefense` — title matches the gimmick, not a neighbour
2. Watch — every line points at someone on **this** wall
3. Filled card — Setup uses the new `jobFor`; no ungrounded copy
   ([`SCOUT_AUDIT.md`](SCOUT_AUDIT.md) checklist on **this card only**)
4. Clash — if B.Iseria is on the team with a revive we added, sustain must
   not be that reviver

Then stop. Do not re-score all 81.

---

## 8. Report to the user

Short:

- Kit in: roles / the unique that matters
- Watch added **or** “generic Watch is enough”
- `jobFor` + which `prefer` slot
- One sample counter if they were on a wall
- Anything skipped on purpose (not a miss nest, not a new wall type)

---

## Trigger phrases (agent)

If the user says any of: `next hero`, `cek resep`, Journal screenshots + a
name, `in-game verified` — **run this file**, not a full system audit.

Full-system audit only if they explicitly ask to re-learn **all** verified
units, or a bug repeats across walls (ungrounded copy class).
