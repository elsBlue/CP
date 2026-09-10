# def-sets

Sources dated at research time **2026-09-04** (Asia/Bangkok).

| Source | Patch / date | What it anchors |
| --- | --- | --- |
| STOVE: Counter Set description fix | 2021 notice (still live value) | Counter **30%** (text was wrong at 20%; gameplay was 30%) |
| STOVE: Unity Set adjustment + Dual Attack base/cap | 10/27 equipment patch notes | Unity **2pc**, Dual Attack chance **+8%**; Dual Attack keyword (not Extra Attack) |
| epic7x: Choux banner / Equipment Set Improvements | 23/6 patch notes mirror | Destruction **4pc**: Crit Damage **40% to 60%** |
| STOVE tip AbyssDragon3 [Gearing] | Asia tip (accessed via index **2026**) | Speed **+25%**, Attack **+45%**, Lifesteal **20%**, Counter **30%**, Penetration **15%**, Immunity **1 turn** at start; Rage **+30%** vs debuffed |
| epic7x Equipment Tutorial | Older baseline (cross-check only) | Piece counts for classic 2pc/4pc; **stale** on Attack / Counter / Destruction / Unity numbers |
| LDPlayer "Equipment Guide 2025" | Third-party blog | **Do not trust** piece counts (lists Immunity / Penetration / Unity as 4pc) |

Scope: what common **defense** set bonuses change for the **attacker** in high PvP / Guild War. Not a farm guide. No scout recipes. No wall-type guesses. No meta bible.

Keywords locked: **Combat Readiness** (not turn bar). **Extra Attack** is not **Dual Attack**. **Seal** is not **Cannot Buff**. **CR cut** is not **Speed cap**.

## Piece-count rule

| Pieces | How you read it on a hero |
| --- | --- |
| **4pc** | One big set (Speed, Counter, Lifesteal, Destruction, Rage, and similar) |
| **2pc** | Can stack with a 4pc, or triple-2pc: Immunity, Resist, Penetration, Unity, Crit, Hit, Health, Defense, Torrent, and similar |

Wrong blogs flip Immunity / Penetration / Unity to 4pc. Prefer STOVE / in-client tooltips.

## Set table (defense-relevant)

| Set | Pieces | Bonus (live text intent) | First cycle | Grind |
| --- | --- | --- | --- |
| **Immunity** | 2 | Immunity buff **1 turn** at battle start | **Primary** — opener strip / control window | Falls after turn 1 unless reapplied by kit |
| **Resist** | 2 | **+20%** Effect Resistance | Helps vs opener strip/CC | Stays all fight |
| **Immunity + Resist** | 2+2 | Both | Opener Immune + higher ER after | ER remains; Immune gone |
| **Speed** | 4 | **+25%** Speed | Who wins opener CR race | Still cycles faster forever |
| **Counter** | 4 | **30%** chance to counter when attacked (S1) | Mild if you never hit them | **Primary** — every hit can answer |
| **Lifesteal** | 4 | Absorb **20%** of damage dealt as HP | Small if fight ends turn 1 | **Primary** — sustain in long trades |
| **Penetration** | 2 | Penetrate Defense **15%** when attacking | Matters if they act / hit early | Every attack hits harder through Def |
| **Unity** | 2 | Dual Attack chance **+8%** | Rare early Dual | **Grind RNG** — more Dual procs over time |
| **Rage** | 4 | **+30%** damage vs **debuffed** targets | Only if debuffs land before/on their hit | Strong once DoTs / breaks stick |
| **Destruction** | 4 | Crit Damage **+60%** | Burst if they crit early | Same — permanent CD budget |

Attack set (**4pc**, **+45%** Atk per AbyssDragon tip) is offense-leaning on def DPS but not listed in the ask; treat as generic damage amp if seen.

## First cycle vs grind (what the attacker changes)

| Set seen | Attacker first-cycle change | Attacker grind change |
| --- | --- | --- |
| Immunity | Plan strip / wait out Immunity before relying on debuffs | Usually ignore once buff is gone |
| Resist / Imm+Res | Bring more Eff or accept resist rolls on opener | Keep Eff budget; do not assume 100% land |
| Speed | Contest CR / Speed race; do not assume free first move | Expect more enemy turns per fight |
| Counter | Soften or kill without feeding S1 if S1 is scary | Cap hits / bait counters / kill fast |
| Lifesteal | Less relevant if one-shot | Expect self-heals; push through sustain |
| Penetration | Budget higher effective damage from them | Same |
| Unity | Low weight | Budget random Dual Attacks (keyword Dual, not Extra) |
| Rage | Check if your opener leaves debuffs on *their* targets | Assume +30% when your team is debuffed |
| Destruction | Higher crit burst threat | Same |

## Screenshot-warnable vs unmodelable

| Visible from a casual scout / formation shot | Often **not** readable from that shot |
| --- | --- |
| Set **icons** (Speed, Counter, Imm, etc.) when UI shows them | Exact Speed number / substat rolls |
| Sometimes artifact portrait | Exact Eff / ER % |
| Hero identity + relative "bulky vs glass" vibe | Whether boots are Speed main vs HP% |
| | Hidden rolls that decide Speed race by 1–2 |

**Warnable from screenshot:** set identity (and thus first-cycle vs grind tag above).

**Unmodelable from casual shot alone:** exact Speed / ER / Eff / Crit Damage totals. Model sets; do not invent roll math.

## Unsure

- Whether every GW / Arena scout screen shows full set icons on all three seats in the current **2026** client (UI process, not set math).
- Exact live Attack-set % if AbyssDragon tip lagged a later silent change — tip said **45%**; older epic7x said **35%**. Destruction **60%** is patch-anchored.
- Revenge / Injury / Riposte / Protection / Torrent on defense frequency — out of this topic’s named list.
- Bit-identical set proc timing between GW AI and Arena AI (see `gw-ai.md`).

## Guild War Q block

**Immunity / Counter / Speed / Lifesteal / Penetration / Unity / Imm+Resist / Rage / Destruction on defense** — table above.

**First cycle vs grind** — section above.

**Screenshot-warnable vs unmodelable rolls** — section above.
