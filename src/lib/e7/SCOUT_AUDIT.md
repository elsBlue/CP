# Scout copy audit

Name for this class of bug: **ungrounded copy**.

A sentence that is true of a kit in isolation, but false or irrelevant for
**this wall** or **this filled team**.

Read this file before:

- answering “cek resep / cek hasil scout”
- editing `jobFor`, `whyFor`, `pitfallsFor`, `wallThreats`, or recipe wincon/setup
- adding a new verified unique that other copy might mention

Files: `engine.ts`, `threats.ts`, `recipes.ts`, verified kits in `heroes.ts`.

---

## Four subtypes

| Subtype | What leaked | Example |
|---|---|---|
| **Tag leak** | A shared tag fires copy written for a different kit | `evade` on LC Bellona → miss-nest line meant for Riolet / Setsuka |
| **Wall-blind job** | Setup/why names a mechanic that is not on this wall | B.Iseria “revive is off” vs a wall with no revive; “do not strip into Nullifier” vs no Nullifier |
| **Unstated clash** | Two units on **our** team cancel each other; copy stays silent | Ruele + B.Iseria: Witch's Curse turns her revive off |
| **Union false positive** | Tags/roles OR’d across four heroes as if one hero had both | `immunity` on LC Bellona + `tank` on Arunka → “buffed wall / LR Krau Immunity” |

---

## Grounding rule

- `jobFor` = who this hero is. **No wall-conditional warnings.**
- `whyFor` / `pitfallsFor` = this wall + this filled team. Every named mechanic must exist on one of those two sides.
- `wallThreats` = this wall only. Do not OR a tag from hero A with a role from hero B unless the same hero has both, or the unique is team-wide (Ferocious Stand, Offering, Skuggiheim).

If a line cannot be pointed at a verified unique, tag, or effect **on this board**, it does not ship.

---

## Checklist (run in order)

Wall = the four enemy ids. Team = the four filled counter ids. Use **verified kits only**.

### 1. Inventory

For each wall hero, list: roles, tags, uniques, what the kit actually does (self-only vs team).

Known **self-only** (must not drive team-wide copy):

- LC Bellona evasion — self. Not a miss nest.
- Lone Wolf Peira evasion — self. Extra-turn opener, not a miss nest.

Known **team-wide** (must drive copy):

- Ferocious Stand (B.Arunka)
- Offering / Scales of Equity
- Skuggiheim (Harsetti)
- Witch's Curse / Death's Dominion (no revive, both sides)
- Skill Nullifier / Guardian Angel
- Dark Moon (any Soulburn)
- Elbris's Successor (Miseria) — doubled counters and foremost-ally counter. Not Dual Attack.
- Superhumanization (SN Yulha) — revive on an ally, not herself. Cooldown cannot be pushed.
- Possession (S.Taeyou) — self. Counters on a critical hit, not a miss nest. Roaring Spiritfall does not Dual Attack; Dual Attack into him keeps Lan Na Zha.
- Sanctuary of Battle (Notos) — both sides. Buffs and debuffs do not apply. Not Immunity. Do not recommend strip or stun as the plan. Injury still stacks. God's Might starts the first fight on cooldown. Do not fire Seal, Cannot Buff, Fear, or Sleep watches while it is on the wall — they do not land after transform.
- Seal ≠ Cannot Buff. Seal turns passives off. Harsetti Checkmate is Cannot Buff. Never label them as one watch.
- Skill Effect Nullifier (NM Luna) — on herself at start. Not Fallen Cecilia eating the opener. Do not fire the Skill Nullifier watch from this unique.

### 2. Watch

For each watch line: which hero on **this wall** justifies it?

Drop or rewrite if the answer is “a tag that means something else on this kit”.

### 3. Why / Setup / Breaks if — line by line

For each sentence, write in the margin:

- **On the wall?** unique / id / role that exists here
- **On the team?** hero that actually does it
- **Else:** ungrounded → delete or gate

Named mechanics that must be gated, not baked into `jobFor`:

- Skill Nullifier / Guardian Angel
- Revive / Extinction / anti-revive
- Ferocious Stand
- Offering / ignore damage sharing
- Speed cap / Skuggiheim
- Miss nest (Setsuka, Remnant Violet only)
- Soul lock / Dark Moon
- Dual Attack reset (Lionheart Cermia)

### 4. Clashes on our team

If both sides of a pair are in the filled team, a Breaks-if (or Setup) line is required.

| Pair | What actually happens |
|---|---|
| B.Iseria or Hecate + Ruele / Maid Chloe / SN Yulha / A.Vildred / Lisette | Ally revive is off while the curse lives |
| Mort + TE Kayron / Miseria / S.Taeyou / any counter core | Mort turns other counters off |
| Belian (ours) + a Soulburn wincon | That Soulburn does not exist |
| B.Iseria (ours) + Ruele as “the reset” | She is heals and Barrier only |
| Notos Sanctuary + strip / stun / Immunity plan | Buffs and debuffs do not apply. Injury still stacks |

If the wall has **no** revive, do not sell B.Iseria / Hecate as anti-revive. Sell the job they still do (area strip / ignore share).

### 5. Gaps

`No {threat}` means the **draft does not answer that threat**, not that the wall lacks it.

Offering unanswered → Breaks-if must say: do not dump the closer into the back.

### 6. Pass / fail

Fail if any Why / Setup / Breaks-if line would still print after you remove the justifying unique from the wall, or after you swap the filled hero for a generic of the same slot.

---

## When editing generators

1. Prefer `read.watch.some((t) => t.key === "…")` or a unique regex on `read` over `read.tags.includes("evade")`.
2. Anti-revive why only if the wall has a revive unique or `roles.includes("revive")`.
3. Nullifier warning only in `pitfallsFor` when the unique is on the wall.
4. After a verified-kit pass, pick one real scout (four named enemies) and run this checklist on the printed card — not on the recipe template.
