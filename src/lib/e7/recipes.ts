import type { ArchetypeId, DefensePreset, Recipe } from "./types";

/** Built-in recipes. Overlay refreshes `source = seed` only.
 * Admin-authored and generated strategies keep their own ids. */

export const ARCHETYPE_META: Record<
  ArchetypeId,
  { title: string; blurb: string; color: "control" | "stall" | "cleave" | "bruiser" }
> = {
  "speed-cleave": {
    title: "Speed cleave",
    blurb: "Opener, strip, AoE. The wall is built to take turn one and end the cycle.",
    color: "cleave",
  },
  "harsetti-stall": {
    title: "Harsetti stall",
    blurb: "Speed is capped to Harsetti. The wall is built for a long fight.",
    color: "stall",
  },
  "revive-wall": {
    title: "Revive wall",
    blurb: "A reset is in the draft — Ruele, Lisette, BM Haste, SE Celine, G.Ras Covenant, or A.Ravi on a kill.",
    color: "stall",
  },
  "injury-grind": {
    title: "Injury grind",
    blurb: "Injury cores scale as the fight goes long. Raw HP racing feeds them.",
    color: "bruiser",
  },
  "evasion-counter": {
    title: "Evasion nest",
    blurb: "Miss chance plus counters. The wall is built around dodge and bounce.",
    color: "bruiser",
  },
  "turn2-control": {
    title: "Turn-2 control",
    blurb: "CR cut and lock after the first cycle. The wall steals the script.",
    color: "control",
  },
  "immunity-soul": {
    title: "Immunity / soul lock",
    blurb: "Belian turns soulburn off. Often paired with LR Krau team Immunity.",
    color: "control",
  },
  "bruiser-mix": {
    title: "Mixed bruiser",
    blurb: "No single gimmick — bulky units with mixed tools.",
    color: "bruiser",
  },
};

export const RECIPES: Recipe[] = [
  {
    id: "injury-vs-stall",
    name: "Injury grind",
    vs: ["harsetti-stall", "revive-wall", "bruiser-mix", "immunity-soul", "evasion-counter", "turn2-control"],
    summary: "You cannot outspeed this wall. Injury, then grind.",
    wincon: "Stack injury on the threat. Once max HP is cut, the stall cannot out-heal you.",
    setup: "Ilynav (single-target) or NM Luna / US Choux (AoE injury). A.Ravi S1 is 10% plus lifesteal. LR Krau / DB Senya / Mort in front. If they revive, fourth slot is B.Iseria or Hecate.",
    pitfalls: [
      "A naked cleave into Harsetti is a throw.",
      "Ruele, Lisette, BM Haste Moon Slash, or A.Ravi on a kill resets the grind unless anti-revive lands first.",
      "Arunka Ferocious Stand forces single-target injury onto her. Use AoE injury (NM Luna, US Choux Bzzt!) or accept hitting her.",
      "G.Ras Sacred Covenant is a 5-turn 100% revive. Wait it out or land anti-revive.",
    ],
    slots: [
      { label: "Injury", tags: ["injury"], prefer: ["empyrean-ilynav", "new-moon-luna", "urban-shadow-choux", "apocalypse-ravi"] },
      { label: "Frontline", roles: ["tank", "bruiser"], prefer: ["dragon-bride-senya", "last-rider-krau", "mort", "fallen-cecilia"] },
      { label: "Sustain", roles: ["healer", "cleanse", "revive"], prefer: ["ruele-of-light", "blood-moon-haste", "spirit-eye-celine", "diene"] },
      { label: "Tech", tags: ["anti-revive", "strip"], roles: ["soulblock", "strip"], prefer: ["briar-witch-iseria", "hecate", "shepherd-diene", "belian"] },
    ],
  },
  {
    id: "anti-revive-burst",
    name: "Anti-revive cut",
    vs: ["revive-wall", "bruiser-mix"],
    summary: "Stop the reset, then delete the soul weaver.",
    wincon: "Land anti-revive, focus the reviver, then collapse the remaining bruisers.",
    setup: "Witch's Curse or Death's Dominion — both sides cannot revive while B.Iseria or Hecate lives. Hecate also blocks Immortality. Pair with a strip if they sit in Immunity (LR Krau) or Skill Nullifier (F.Cecilia).",
    pitfalls: [
      "Killing the tank first just feeds Ruele.",
      "Lisette Time Reversal / Fragment of Life — do not all-in turn one.",
      "BM Haste Moon Slash on a kill revives the bench and grants Immortal. Kill him first, or land anti-revive. Hecate also turns Immortal off.",
      "G.Ras Covenant is self-only, 5 turns, then gone. Anti-revive still shuts the revive.",
      "SE Celine S3 revives everyone and grants Immortal. Hecate turns Immortal off. Don't dump into Sixth Sense (70% HP cap per hit).",
      "Hecate S3 starts on cooldown the first fight. Don't need it — the passive is the wincon.",
    ],
    slots: [
      { label: "Anti-revive", tags: ["anti-revive"], prefer: ["briar-witch-iseria", "hecate"] },
      { label: "Strip", roles: ["strip"], tags: ["strip"], prefer: ["briar-witch-iseria", "shepherd-diene", "rinak", "frieren", "fallen-cecilia"] },
      { label: "Closer", roles: ["dps", "cleave", "bruiser"], prefer: ["straze", "new-moon-luna", "empyrean-ilynav", "hecate", "setsuka"] },
      { label: "Cover", roles: ["opener", "tank", "control"], prefer: ["genesis-ras", "boss-arunka", "last-rider-krau", "rinak"] },
    ],
  },
  {
    id: "harsetti-answer",
    name: "Speed cap",
    vs: ["speed-cleave", "turn2-control"],
    summary: "Cap their speed and make the cleave take a real fight.",
    wincon: "Harsetti denies the opener. LR Krau / DB Senya eat the leftover AoE. Belian turns soulburn off.",
    setup: "Harsetti on a bulky set. Pair with LR Krau or DB Senya, plus Belian so they cannot soulburn past you. Mort, RGB Politis, and SP Politis are not soul lock.",
    pitfalls: [
      "If Harsetti is too slow versus a true 280+ opener you still lose the first cycle — gear matters.",
      "Injury (Ilynav / US Choux) and evasion (Setsuka / Violet) ignore this plan. Scout first.",
      "Skuggiheim also blocks CR push — do not bring a CR-stack wincon into your own Harsetti.",
    ],
    slots: [
      { label: "Cap", roles: ["speedcap"], prefer: ["harsetti"], tags: ["cr-cut"] },
      { label: "Tank", roles: ["tank"], prefer: ["last-rider-krau", "dragon-bride-senya", "mort", "fallen-cecilia"] },
      { label: "Soul lock", roles: ["soulblock"], prefer: ["belian"] },
      { label: "Flex", roles: ["bruiser", "healer", "control"], prefer: ["empyrean-ilynav", "urban-shadow-choux", "ruele-of-light", "lady-of-the-scales"] },
    ],
  },
  {
    id: "outspeed-cleave",
    name: "Strip cleave",
    vs: ["bruiser-mix", "immunity-soul", "turn2-control"],
    summary: "Take turn one, strip, and end it before the wall cycles.",
    wincon: "Opener into strip into AoE. If anyone lives, you already lost the draft.",
    setup: "Opener at a real speed floor (270+), or LW Peira extra turn + Swift Attack. Rinak Pickpocketing or B.Iseria soulburn for ignore-ER strip. Straze S2 is the AoE strip-cleave; NM Luna / Frieren / Hecate if he is not built.",
    pitfalls: [
      "Harsetti, evasion, and Belian soul lock all brick this.",
      "F.Cecilia Skill Nullifier, or A.Angelica Guardian Angel on AoE, eats one skill — do not lead with the only strip.",
      "Do not take this into unknown Champion+ defenses.",
      "ML Diene Dark Moon fires on any Soulburn — yours included — and strips two from everyone.",
    ],
    slots: [
      { label: "Opener", roles: ["opener"], prefer: ["rinak", "conqueror-lilias", "genesis-ras", "lone-wolf-peira"] },
      { label: "Strip", roles: ["strip"], tags: ["strip"], prefer: ["briar-witch-iseria", "shepherd-diene", "sea-phantom-politis", "rinak", "frieren"] },
      { label: "Cleave", roles: ["cleave", "dps"], tags: ["aoe"], prefer: ["straze", "new-moon-luna", "frieren", "hecate", "navy-captain-landy"] },
      { label: "Enable", roles: ["soulblock", "cleanse", "dps"], prefer: ["belian", "diene", "conqueror-lilias", "angel-of-light-angelica"] },
    ],
  },
  {
    id: "turn2-control",
    name: "Turn-2 script",
    vs: ["speed-cleave", "bruiser-mix", "injury-grind", "turn2-control"],
    summary: "Survive the opener, then steal the cycle.",
    wincon: "LR Krau S3 is team Immunity. Rinak Pickpocketing or Frieren Judradjim take the script. G.Ras Covenant only covers himself.",
    setup: "Team Immunity is LR Krau S3 — not RGB Diene, not ML Diene, not A.Angelica, not G.Ras. A.Angelica is Stun-immune + Guardian Angel (AoE cleanse + Skill Nullifier).",
    pitfalls: [
      "Strip that ignores ER (B.Iseria, Rinak soulburn, Setsuka vs lower HP) pops this instantly.",
      "If LR Krau is slower than their opener, the Immunity window never starts.",
      "Rinak S3 self-stun. If you need a second cycle, stay on S2.",
      "Belian turns Defensive Magic off — Frieren never hits 4 souls. Soulburn into ML Diene is a Dark Moon.",
    ],
    slots: [
      { label: "Immunity", tags: ["immunity"], roles: ["tank"], prefer: ["last-rider-krau"] },
      { label: "Control", roles: ["control"], prefer: ["rinak", "frieren", "solitaria", "politis"] },
      { label: "Wincon", roles: ["bruiser", "dps"], prefer: ["empyrean-ilynav", "new-moon-luna", "setsuka", "urban-shadow-choux"] },
      { label: "Hold", roles: ["tank", "healer", "soulblock", "cleanse"], prefer: ["last-rider-krau", "angel-of-light-angelica", "belian", "dragon-bride-senya"] },
    ],
  },
  {
    id: "evasion-bait",
    name: "Evasion bait",
    vs: ["speed-cleave", "bruiser-mix", "turn2-control"],
    summary: "Setsuka buffs team evade. Violet is the miss magnet. They whiff, then Massacre.",
    wincon: "Setsuka +30% team evade and counters when an ally misses. Violet Focus into Massacre. Frieren +40% Focus/FS charges both. Peira is +35% self evade and Rampage for Dark.",
    setup: "Setsuka or Remnant Violet as the miss core. Frieren on the same draft feeds Fighting Spirit and Focus. Someone in front has to get hit so the gauges actually build.",
    pitfalls: [
      "AoE that cannot miss, and unbuffable, both ignore this.",
      "Demon Blade Unleashed: she cannot die that window. Don't dump the closer there.",
      "Rinak Clumsy Finish deals 7,000 to all even on miss. Don't bait a Rinak.",
      "Solitaria sets enemy Focus gain to 0 — Massacre never charges.",
      "Mort: all other heroes cannot counter. This plan is off.",
      "A strip plus AoE still kills you if the evade roll fails.",
    ],
    slots: [
      { label: "Miss", roles: ["evasion"], tags: ["evade"], prefer: ["setsuka", "remnant-violet", "lone-wolf-peira"] },
      { label: "Force", tags: ["dual-attack", "counter"], prefer: ["conqueror-lilias", "sea-phantom-politis", "frieren"] },
      { label: "Frontline", roles: ["tank", "bruiser"], prefer: ["dragon-bride-senya", "last-rider-krau", "fallen-cecilia", "boss-arunka"] },
      { label: "Support", roles: ["healer", "soulblock", "control"], prefer: ["frieren", "belian", "lady-of-the-scales", "diene"] },
    ],
  },
  {
    id: "anti-evasion",
    name: "True hit",
    vs: ["evasion-counter"],
    summary: "Do not play their miss game. AoE, dual attacks, or injury.",
    wincon: "AoE and dual attacks bypass Concentration. Injury does not care about dodge. Solitaria turns enemy Focus off. Rinak S3 7,000 hits even on miss. Mort turns their counters off.",
    setup: "Solitaria if built — Focus gain on their side is 0. Mort if built — their counters are off. Otherwise C.Lilias / SP Politis Dual Attack, NM Luna / Frieren / Hecate AoE.",
    pitfalls: [
      "Jenua / Hwayoung / Spec Tene into Violet is a common throw.",
      "Setsuka Demon Blade: she cannot die that turn. Wait it out or strip first.",
      "If you strip and still take a single-target S3, you deserve the miss.",
    ],
    slots: [
      { label: "Force", tags: ["dual-attack", "aoe"], roles: ["opener"], prefer: ["conqueror-lilias", "sea-phantom-politis", "boss-arunka", "rinak"] },
      { label: "AoE", roles: ["cleave", "dps"], tags: ["aoe"], prefer: ["straze", "new-moon-luna", "frieren", "hecate", "navy-captain-landy"] },
      { label: "True", tags: ["fixed-dmg", "injury"], prefer: ["empyrean-ilynav", "new-moon-luna", "urban-shadow-choux", "rinak"] },
      { label: "Cover", roles: ["strip", "tank", "soulblock", "control"], prefer: ["solitaria", "mort", "briar-witch-iseria", "belian"] },
    ],
  },
  {
    id: "strip-control",
    name: "Strip and lock",
    vs: ["immunity-soul", "injury-grind", "revive-wall", "turn2-control"],
    summary: "Pop the immunity, then the fight is a normal draft.",
    wincon: "Ignore-ER strip into CR lock. Their kit never gets to play.",
    setup: "B.Iseria first, or ML Diene Dark Moon (any Soulburn), Rinak Pickpocketing, Frieren Judradjim. Solitaria stuns and cuts CR after the strip.",
    pitfalls: [
      "Skill Nullifier (F.Cecilia, NM Luna, A.Angelica on AoE) eats the first skill. Don't lead with the only strip.",
      "Oath of Punishment and Ferocious Stand are undispellable — strip will not clear them.",
      "Rinak S3 stuns herself. Stay on Pickpocketing unless the fight ends.",
      "Belian does not care about your soulburn follow-up.",
    ],
    slots: [
      { label: "Strip", tags: ["strip", "ignore-er"], roles: ["strip"], prefer: ["briar-witch-iseria", "shepherd-diene", "angel-of-light-angelica", "rinak", "frieren"] },
      { label: "Lock", roles: ["control"], prefer: ["solitaria", "politis", "rinak", "frieren"] },
      { label: "Wincon", roles: ["dps", "bruiser", "cleave"], prefer: ["straze", "empyrean-ilynav", "new-moon-luna", "setsuka"] },
      { label: "Hold", roles: ["tank", "healer", "opener"], prefer: ["genesis-ras", "last-rider-krau", "ruele-of-light", "dragon-bride-senya"] },
    ],
  },
];

export const PRESET_DEFENSES: DefensePreset[] = [
  {
    id: "emperor-stall",
    name: "Stall",
    heroIds: ["harsetti", "last-rider-krau", "belian", "dragon-bride-senya"],
    blurb: "Speed cap, soul lock, team Immunity, Oath of Punishment.",
  },
  {
    id: "injury-throne",
    name: "Injury",
    heroIds: ["empyrean-ilynav", "new-moon-luna", "last-rider-krau", "dragon-bride-senya"],
    blurb: "Two injury cores. No revive.",
  },
  {
    id: "scales-script",
    name: "Scales",
    heroIds: ["lady-of-the-scales", "rinak", "frieren", "genesis-ras"],
    blurb: "Turn-2. Offering, Pickpocketing, Judradjim, Covenant.",
  },
  {
    id: "evasion-nest",
    name: "Evasion",
    heroIds: ["setsuka", "remnant-violet", "frieren", "fallen-cecilia"],
    blurb: "Miss nest. Frieren feeds Focus/FS. Nullifier eats skill one.",
  },
  {
    id: "revive-bench",
    name: "Revive",
    heroIds: ["lisette", "ruele-of-light", "blood-moon-haste", "dragon-bride-senya"],
    blurb: "Three resets. Time Reversal, Spirit Lord, Moon Slash.",
  },
  {
    id: "soul-lock",
    name: "Soul lock",
    heroIds: ["belian", "last-rider-krau", "fallen-cecilia", "boss-arunka"],
    blurb: "No souls. Team Immunity. Nullifier and Ferocious Stand.",
  },
];
