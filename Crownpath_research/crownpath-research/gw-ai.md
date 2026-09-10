# gw-ai

Sources dated at research time **2026-09-04** (Asia/Bangkok).

| Source | Patch / date | What it anchors |
| --- | --- | --- |
| Game8 Battle System | Last updated **2020-08-28** (still matches live PvP AI writeups) | Arena defense AI: **never Soulburns**; follows **elemental advantage** except Invulnerable; some skills ignore element → random target |
| Digital Crowns (Effectiveness / AI targeting article) | Long-standing PvP note (still cited) | Arena AI: **ignore formation aggro**; element first → lowest **% HP** (then random if tied) → neutral → disadvantage |
| STOVE Guild War “Equal Battle” thread | **2019-09** (GW AI behavior still treated as current by community) | Defense AI **cannot Soulburn**; AI uses a skill when available and conditions met **even if** Unable to be buffed makes S3 useless (Angelica / Crimson Armin examples) |
| STOVE “Krau defense S3 AI” reply | **2020-03** | Community priority summary used in PvP: not Invincible → element → HP → random |
| STOVE “Hero AI Attack Priority” (GW example) | **2021-ish** thread citing GW | Same PvP priority talk applied **in Guild War** fights |
| Epic7x Straze / Violet balance notes | Violet AI patch text | Some heroes get **custom AI** (e.g. Violet Focus / skill choice rules) |

Scope: **defense AI** in Guild War (and how it compares to Arena). No scout recipes. No wall-type guesses. No meta bible.

## Who controls what

| Side | Control | Soulburn |
| --- | --- | --- |
| GW / Arena **offense** (you) | Manual | **Yes** (you choose) |
| GW / Arena **defense** | AI | **No** |

Defense never spends Souls on Soulburn. Tagehel-style “start with Souls” does not create AI Soulburns.

## Skill order (defense)

There is **no** single published global list “always S3 → S2 → S1 for every hero.”

What is documented:

| Rule | Detail |
| --- | --- |
| Use when ready | If the skill is available and the AI’s conditions are met, it will fire it |
| Not “hold for perfect timing” | Support ultimates are not saved for later; Angelica / Crimson Armin examples dump S3 even under Unable to be buffed |
| Per-hero AI | Some kits have custom priority (official Violet AI changes: e.g. when to use Butterfly Cut / Duel Accepted) |
| Extra attack | Kit **extra attack** (or Dual Attack when the skill says Dual Attack) still follows that hero’s AI — mode does not rename them |

### Tahan S3 atau langsung pakai?

**Langsung pakai** when the AI considers the skill available and conditions OK.

It does **not** intelligently hold S3 for a better turn. That is why Unable to be buffed / Seal can waste a defense S3.

Seal ≠ Cannot Buff / Unable to be buffed — read the live debuff name. Both can make a buffing S3 pointless if the AI still presses it.

## Targeting (what they hit)

PvP defense AI (Arena writeups; GW threads use the same language):

| Priority (typical) | Note |
| --- | --- |
| Skip / avoid Invincible when the AI “sees” it | Game8: element rule has Invulnerable exception |
| Elemental **advantage** targets | Fire→Earth→Ice→Fire; Light↔Dark |
| Then lowest current **HP %** among that band | Digital Crowns Arena |
| Then neutral, then disadvantage | Same cascade |
| Formation front aggro | Stronger in **PvE**; Arena guide says AI **ignores** front bias |

Element bait works because of this cascade — not because of a separate GW-only brain.

Combat Readiness push skills on AI allies follow **that hero’s** AI (STOVE examples: Emilia / Flan / Tywin push rules). Not a universal “push lowest Combat Readiness” for all supports.

## Soulburn

| Question | Answer |
| --- | --- |
| Defense Soulburn? | **Tidak** |
| Kadang? | **Tidak** documented — AI defense does not Soulburn |
| Offense Soulburn? | **Ya** (manual) |

## GW AI vs Arena AI

| Topic | Same? | Evidence |
| --- | --- | --- |
| Defense is AI | Yes | Both modes |
| No defense Soulburn | Yes | Game8 (Arena) + STOVE GW thread |
| Element → HP% targeting class | Treated as same PvP AI | Arena guides + GW posts discussing the same bait logic |
| Bit-identical code / every edge case | **Unsure** | No official “GW AI == Arena AI” patch line found this pass |
| What the AI *sees* | Different board | GW **3** heroes vs Arena **4** — same rules, fewer bodies |

So: **same AI family** for practical play. Exact engine parity: **Unsure**.

RTA (human vs human) is **not** this AI. Both sides can Soulburn there.

## Unsure

- Full per-hero skill priority table for every live unit (only patch notes / community tests cover pieces).
- Whether every Invincible / Stealth / Skill Nullifier edge case matches 1:1 between Arena def and GW def.
- Any silent 2025–2026 AI retune not written in patch notes.

## Guild War Q block (asked)

**Urutan skill defense**  
Per-hero AI. Umumnya: skill ready + condition OK → dipakai. Bukan satu urutan global S3→S2→S1 untuk semua.

**Tahan S3 atau langsung pakai?**  
**Langsung** kalau AI menganggap siap. Tidak “tahan timing.” S3 support bisa terbuang di Unable to be buffed / Seal.

**Soulburn: ya / tidak / kadang**  
Defense: **tidak**. Offense: **ya** (manual).

**Beda AI GW vs arena, kalau ada**  
Kontrol sama (AI def, no Soulburn, PvP element/HP targeting). Board size beda (3 vs 4). Bit-identical: **Unsure**.
