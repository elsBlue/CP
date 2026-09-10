# gw-vs-arena

Sources dated at research time **2026-09-04** (Asia/Bangkok).

| Source | Patch / date | What it anchors |
| --- | --- | --- |
| Game8 JP Guild War guide | Updated **2026-07-10** | GW = **3 heroes** × **2 rounds** (Round 1 / Round 2); KO’d heroes locked for that war day |
| LDPlayer team-building guide | **2025-04-17** | Standard / Arena-style team = **4** heroes |
| Game8 Battle System | Last updated **2020-08-28** (rules still match live PvP AI notes) | Soul gauge + Soulburn; Arena defense AI **never** Soulburns; Combat Readiness / Speed engine |
| STOVE: Arena AI Def. Team use souls? | Community + accepted reply (persistent rule) | AI defense cannot Soulburn; soul-gated offense tools weak on def |
| STOVE: Immunity vs Soulburn / ignore ER (e.g. Genesis Ras thread **2025-12**) | Live engine clarification | Immunity blocks debuffs; ignore Effect Resistance ≠ ignore Immunity; CR manip and skill CD are not “debuffs” in that sense |
| Epic7x Melissa review (post-buff) | Guide text still cites **3v3 GW** restriction | Format note: fewer bodies → single-target delete swings harder in GW than in 4-man Arena |
| Epic7db / STOVE GW **2026-1** + revamp **2025-03-13** | Live 2026 cadence | GW still **3v3**; no official kit rewrite by mode |

Scope: same hero, what changes between **Guild War 3v3** and **Arena 4v4**. No scout recipes. No wall-type guesses. No meta bible.

## Core rule: kits do not rewrite

The same hero keeps the same skill text, Soulburn options, Injury / Extinction / Seal wording, and gear-set rules in both modes.

What changes is **format and control** (how many allies, who presses Soulburn, lockouts), not a hidden GW-only buff sheet.

## Format table

| | Arena | Guild War |
| --- | --- | --- |
| Heroes per side | **4** | **3** per round |
| Fights per entry | **1** | **2** rounds (separate comps) |
| Who controls offense | You (manual) | You (manual) |
| Who controls defense | AI | AI |
| Defense Soulburn | **No** | **No** (same AI rule class) |
| Offense Soulburn | **Yes** | **Yes** |
| Hero KO lockout | End of that Arena fight only | KO’d heroes unusable for the **rest of that war day** |
| Win piece | Match Victory Points / defense record | Round mix → attack record + Havoc |

## Same hero: what actually changes

| Layer | Same? | Note |
| --- | --- | --- |
| Skill numbers / cooldowns | Same | No mode-tagged kit |
| Combat Readiness math | Same | Speed sets open Combat Readiness; push/cut use the same engine |
| Immunity set | Same | Grants Immunity buff; blocks debuffs until gone |
| Soulburn **effect** when used | Same | Cost and effect text unchanged |
| Soulburn **availability on defense** | Same (unavailable) | AI never Soulburns |
| Party size pressure | **Different** | 3 seats vs 4 seats |
| Extra-attack / Dual Attack rules | Same | Still distinct keywords; mode does not rename them |

## What is “lost” in 3v3 vs 4v4

Arithmetic of seats, not a nerf line on the hero:

| Lost in GW vs Arena (same moment) | Why |
| --- | --- |
| **Fourth** hero seat | Only **3** allies on the field |
| Room for a dedicated **4th** cleanser / stripper / bait / reviver / flex | That role must be dropped or merged into one of the three |
| One more body to soak AoE / share damage | Fewer HP pools |

Arena can hold cleanser **and** strip **and** DPS **and** flex at once. GW forces a cut.

## What hits harder from format (not from buffed kits)

Do **not** read this as “Injury deals more % in GW.” Numbers stay the same. Swing size changes because the board is smaller.

| Tool | Why GW format amplifies it (sourced as format logic) |
| --- | --- |
| Strong **single-target** delete | Removing **1 of 3** is a bigger board swing than **1 of 4** (Epic7x Melissa GW note) |
| **Extinction** / anti-revive answers | Same skill; fewer backup seats if a revive threat returns |
| **Injury** | Same Injury rules; each stack sits on a thinner roster |

Anything claiming Injury/Extinction have **different coefficients** in GW vs Arena: not found → see **Unsure**.

## Soulburn / Combat Readiness / Immunity set

| System | Arena vs GW |
| --- | --- |
| Combat Readiness | **Same** engine |
| Immunity set | **Same** buff rules |
| Soulburn on **your** turn (offense) | **Same** |
| Soulburn on **AI defense** | **Neither** mode: AI does not Soulburn |
| Strip then debuff vs bare ignore-ER into Immunity | **Same** interaction in both |

So: **beda kontrol dan jumlah kursi**, bukan beda rumus Immunity / Combat Readiness / Soulburn.

## Side modes (context only)

World Arena RTA is human vs human (both sides can Soulburn). That is **not** Arena defense AI and **not** GW defense AI. Out of scope except to avoid mixing it in.

## Unsure

- Any official patch line that Injury / Extinction / Seal deal different values in GW than Arena (none found; treat as **same** until proven).
- Whether every AI targeting edge case is bit-identical between Arena def and GW def (element-first is documented for Arena; GW shares “AI def, no Soulburn,” but a full parity doc was not found).
- Post-scout UX and crest economy (GW-only systems; they change **prep**, not hero kits).

## Guild War Q block (asked)

**Hero yang sama, apa yang berubah di 3v3 vs 4v4?**  
Kit **sama**. Yang berubah: **3 kursi** vs **4**, **2 round** + KO lockout di GW, attack manual vs defense AI di kedua mode.

**Yang hilang (cleanser ke-4, strip ke-4, …)?**  
Kursi **ke-4**. Cleanser/strip/flex ke-4 tidak muat bersamaan.

**Yang lebih kuat (injury, single-target, extinction, …)?**  
**Bukan** angka skill yang naik. Format 3v3 membuat single-target delete / anti-revive **lebih menentukan** karena board lebih tipis. Coefficient beda mode: **Unsure** (tidak ada sumber).

**Soulburn, Combat Readiness, Immunity set: beda atau sama?**  
**Sama** rumus. Defense AI **tidak** Soulburn di Arena maupun GW. Offense **bisa** Soulburn di keduanya.
