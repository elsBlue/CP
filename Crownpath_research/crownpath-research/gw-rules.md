# gw-rules

Sources dated at research time **2026-09-04** (Asia/Bangkok).

| Source | Patch / date | What it anchors |
| --- | --- | --- |
| Epic7db `3/19 (Thu) Update Content` | Guild War **2026-1** open **2026-03-21 03:00 UTC**; wars **3×/week**, all servers **03:00 UTC** | Current season cadence |
| STOVE / Epic7db `3/13 (Thu) Update Content` | Guild War Revamp live with **2025-03-13** maintenance; entry **2025-03-15 03:00 UTC** | Fortress layout, building HP/Havoc, resume, one Defense Team placement |
| Epic7x Challenge Season / draw patch notes (`4/2` Challenge Season package) | Draw feature ship with Challenge Season open window (**2019-04** era notes, still the live draw UX described in client-facing text) | Draw button, round→match record table |
| STOVE GM notice: Havoc miscalc on draw (Challenge Season) | Draw + Havoc table correction | Havoc by round mix |
| STOVE GM: Guild War **2026-1** closing (**2026-06-10** notice; season end **2026-06-13 02:59 UTC**) | Confirms 2026 season continuum after 2026-1 | No rule rewrite in that close notice |
| Player tip post KekkeiGenkai (**2026-04-14**) | Live practice check | **3 attacks** per war day still stated |
| Game8 Battle System + STOVE Arena AI thread | Persistent AI rule | Defense AI does **not** Soulburn |

Scope: live client Guild War rules only. No scout recipes. No wall-type guesses. No meta bible.

## Battle format (3v3)

| Side | Heroes per round | Rounds per attack |
| --- | --- | --- |
| Attack | **3** | **2** |
| Defense | **3** | Same defense team faces both rounds |

One Guild Crest spent starts one attack: two consecutive 3v3 rounds against that building’s Defense Team.

## Souls / Soulburn

- Souls exist in the fight. The attacker controls Soul spend and Soulburn.
- Defense is AI. Defense AI does **not** Soulburn (same AI rule as Arena defense; community + Battle System writeups).
- Artifacts that only matter when the wearer Soulburns are dead weight on defense.

## Timer / Draw / timeout

- If a round runs long, a **turns-remaining** counter shows top-right.
- When that counter hits **0**, the **Draw** button unlocks.
- Attacker confirms Draw or keeps playing.
- Draw ends that **round** as a draw.
- Heroes already dead when Draw is taken stay dead for later rounds that war day.

## Unsure

- Exact turn count before Draw unlocks (not printed as a fixed number in the notices checked).
- Whether a separate hard real-time clock still forces attacker defeat after Draw shipped (pre-Draw era had timeout = attacker defeat; current notices describe Draw, not a published minute limit).
- Exact on-screen name localization for Guild Crest vs “sword/token” slang.

## Tokens / Guild Crest (attacks)

| Item | Rule |
| --- | --- |
| Attacks per player per war day | **3** |
| Cost | **1 Guild Crest** per attack |
| Concurrent attackers on one building | **3** max |
| War days | **3 per week** |
| Start / end clock | All servers **03:00 UTC** |

Crests refresh with each new war day (war start at 03:00 UTC). They do not top up mid-war outside that reset.

Heroes defeated (or dead at Draw) cannot be used on attack again until that war day’s reset.

## Defenses per player

| Slot | Count |
| --- | --- |
| Defense Team per player | **1** team of **3** heroes |

Captain / Vice place members onto buildings. You must have a Defense Team placed to participate.

### Map (post-revamp, still live structure)

| Piece | Per fortress | Notes |
| --- | --- | --- |
| Fortresses | **3** (Left, Right, Central) | Destroy Left + Right Strongholds before Central |
| Stronghold | **1** | Need **≥1** of that fortress’s Defense Towers down first |
| Defense Tower | **2** | Free to attack anytime |
| Satellite | **10** | Up to **7** can be staffed |

Building HP after revamp (official table):

| Building | HP each | Count (map) |
| --- | --- | --- |
| Stronghold | 800 | 3 |
| Defense Tower | 450 | 6 |
| Satellite | 200 | 21 staffed max across map (7 per fortress × 3) |

## Win / Lose / Draw — what is recorded

### Per attack (two rounds combined)

| Round mix | Match record | Havoc (standard full building) |
| --- | --- | --- |
| 2 Wins | Victory | 120 |
| 1 Win + 1 Draw | Victory | 120 |
| 1 Win + 1 Lose | Draw | 60 |
| 2 Draws | Draw | 60 |
| 1 Draw + 1 Lose | Defeat | 0 |
| 2 Loses | Defeat | 0 |

Havoc and building HP cut are capped by remaining building HP. Destroying the building adds separate destroy Havoc (revamp table differs Left/Right vs Central).

### Defense side of the log

Defense result is the mirror of the attacker’s match record on that building hit (Victory / Draw / Defeat on the defense tab of war results). Contribution scoring still weights Stronghold > Defense Tower > Satellite.

### Guild war outcome

Guild winner is decided by total Havoc for that war day (higher Havoc wins the war). Individual attack/defense logs still show Victory / Draw / Defeat as above.

## Guild War Q block (asked)

**3v3 resmi sekarang: berapa hero attack / defense?**  
Attack **3**, defense **3**, tiap attack **2 round**.

**Soul dipakai? Defense AI Soulburn atau tidak?**  
Soul dipakai di sisi attack (manual). Defense AI **tidak** Soulburn.

**Timer fight, kapan draw, siapa menang kalau waktu habis?**  
Draw muncul setelah round berjalan lama; counter turns remaining → 0 → tombol Draw. Exact turn count: lihat **Unsure**. Hard timeout menit → attacker defeat: **Unsure** setelah Draw live (era sebelum Draw: timeout = defeat attacker).

**Token / pedang: berapa serangan, reset kapan?**  
**3** Guild Crest per war day. **1** Crest = **1** attack. Reset tiap war day **03:00 UTC** (3× seminggu).

**Berapa defense per player?**  
**1** Defense Team (**3** hero).

**Menang / kalah / draw: apa yang tercatat?**  
Lihat tabel round mix di atas (Victory / Draw / Defeat + Havoc). Guild war day: total Havoc menentukan guild menang/kalah.

## Resume disconnect

If the client drops mid-fight, resume is offered for a limited window (revamp: reconnect/resume messaging in Guild Lobby / GW main). Yield or disconnect after an enemy skill has already hit can still count the hero dead.
