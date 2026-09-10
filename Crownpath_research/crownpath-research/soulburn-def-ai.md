# soulburn-def-ai

Sources dated at research time **2026-09-04** (Asia/Bangkok).

| Source | Patch / date | What it anchors |
| --- | --- | --- |
| Game8 Battle System — Arena AI section | Guide still live; accessed via search **2026-09-04** (page last-updated stamp on site historically **2020-08**; rule text still cited) | **Arena** enemy AI: **never** uses Soulburn Effect on skills |
| STOVE “Guild War - Equal Battle System” | **2019-09** thread | **GW** defense AI: **cannot** Soulburn; uses available skills when conditions met |
| STOVE “Hmm… AI customisation and auto soulburn for Arena defense?” | **2022-06-21** | Feature request assumes Arena def still has **no** auto Soulburn |
| epic7x Belian review | Updated **2021-10-14** (text still on page **2026-09-04**) | Arena def “doesn’t use soul-burns” (why Belian hurts offense Souls more than def) |
| `gw-ai.md` (same research pass) | **2026-09-04** | Cross-check: def Soulburn **No** for Arena + GW |

Scope: **defense** Soulburn only (Arena vs Guild War). Not offense manual Soulburn. Not PvE auto. No scout recipes. No wall-type guesses. No meta bible.

Keywords locked: **Combat Readiness** (not turn bar). **Extra Attack** is not **Dual Attack**. **Seal** is not **Cannot Buff**. **CR cut** is not a **Speed cap**.

## Short answers

| Mode | Defense spends Souls / Soulburns? | Label |
| --- | --- | --- |
| **Arena defense** | Documented as **never** | **never** |
| **Guild War defense** | Documented as **never** | **never** |

No sourced **rare** or **often** behavior for either mode in this pass. No 2025–2026 patch note found that turned defense Soulburn on.

## Arena defense

| Claim | Evidence |
| --- | --- |
| Enemy / defense AI **never** Soulburns | Game8 Arena AI: “Enemy AI will never use Soulburn Effect on their skills.” |
| Still treated as true years later | **2022-06** STOVE post asking for “auto soulburn for Arena defense” (would be pointless if AI already burned) |
| Practical build note | epic7x Belian: Arena defense “doesn’t use soul-burns” |

Tagehel-style “start with Souls” on a defense Mage does **not** create AI Soulburns (community Tagehel-on-def talk; same rule family as Game8).

## Guild War defense

| Claim | Evidence |
| --- | --- |
| Defense AI **cannot** Soulburn | STOVE Equal Battle thread: “AI cannot use SoulBurn” |
| Same practical answer as Arena | Same “never” label; GW posts discuss AI skill dump without Soulburn options |

GW fight is still player offense vs AI defense. Offense may Soulburn manually. Defense does not.

## Which skills the AI Soulburns

| If defense Soulburns… | Answer |
| --- | --- |
| Skill list | **None** — AI does not spend Souls on Soulburn |
| S1 / S2 / S3 with a Soulburn line | Uses the **non-Soulburn** skill text when it fires that skill |
| Priority among Soulburn options | **N/A** |

Do not model “def CDom Soulburns Supercharge” or similar. That is offense / RTA / manual only.

## What defense AI still does (Soulburn-adjacent)

| Behavior | Soulburn? |
| --- | --- |
| Fires S3 when ready (even under Unable to be buffed) | No — base skill, wasted buff possible |
| Kit **extra attack** / **Dual Attack** (when the skill says Dual Attack) | No Souls spent |
| Gains Souls on the bar visually in some UIs | Spending for Soulburn is still **not** documented for def AI |

## Arena vs Guild War

| Topic | Same? |
| --- | --- |
| Defense Soulburn | **Yes — never** on both |
| Bit-identical AI code | **Unsure** (see `gw-ai.md`) |
| Board size | Different (Arena 4 vs GW 3) — does not unlock Soulburn |

## Unsure

- Official **2026** patch line that restates “defense AI never Soulburns” (rule is old; no found counter-patch that enables it).
- Exact Game8 “last updated” stamp at access time (JS-gated fetch failed; rule text confirmed via search snippet **2026-09-04**).
- Whether any niche mode (Draft Arena practice, special event AI) differs — out of scope; not checked.
- Auto-battle **offense** Soulburn rules (different system; not this file).

## Guild War Q block

**Arena defense: spends souls? never / rare / often** — **never**.

**Guild War defense: same, separate** — **never**.

**Which skills the AI Soulburns if it does** — **none** (does not Soulburn).
