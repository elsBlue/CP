import type { ArchetypeId, DefensePreset, Recipe } from "./types";

/** Built-in recipes. Seed inserts these once (`source = seed`) and never updates
 * existing rows — admin-authored and generated strategies keep their own ids. */

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
    blurb: "A soul weaver can reset a kill. The wall is built to outlast a burst.",
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
    blurb: "Buffs persist and soulburn is blocked.",
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
    vs: ["harsetti-stall", "revive-wall", "bruiser-mix", "immunity-soul"],
    summary: "You cannot outspeed this wall. Stack injury and win the long fight.",
    wincon: "Stack injury on the threat unit, then grind the rest after they can no longer heal.",
    setup: "Open with a tank or immunity piece so the bruiser lives the first cycle. Do not bring a glass opener.",
    pitfalls: [
      "A naked cleave into Harsetti is a throw.",
      "If they have Ruele, you still need anti-revive or the grind resets.",
    ],
    slots: [
      { label: "Injury", tags: ["injury"], prefer: ["empyrean-ilynav", "boss-arunka", "new-moon-luna", "hecate", "urban-shadow-choux", "apocalypse-ravi"] },
      { label: "Frontline", roles: ["tank", "bruiser"], prefer: ["dragon-bride-senya", "last-rider-krau", "fallen-cecilia", "krau", "senya"] },
      { label: "Sustain", roles: ["healer", "cleanse", "revive"], prefer: ["ruele-of-light", "school-nurse-yulha", "death-dealer-ray", "diene"] },
      { label: "Tech", tags: ["anti-revive", "strip"], roles: ["soulblock"], prefer: ["briar-witch-iseria", "blood-moon-haste", "belian", "solitaria"] },
    ],
  },
  {
    id: "anti-revive-burst",
    name: "Anti-revive cut",
    vs: ["revive-wall", "bruiser-mix", "injury-grind"],
    summary: "Stop the reset, then delete the soul weaver.",
    wincon: "Land anti-revive, focus the reviver, then collapse the remaining bruisers.",
    setup: "B.Iseria or BM Haste must move before the revive. Pair with a strip if they sit in immunity.",
    pitfalls: [
      "Killing the tank first just feeds Ruele.",
      "Maid Chloe invincibility can eat a poorly timed burst.",
    ],
    slots: [
      { label: "Anti-revive", tags: ["anti-revive"], prefer: ["briar-witch-iseria", "blood-moon-haste", "solitaria"] },
      { label: "Strip", roles: ["strip"], tags: ["strip"], prefer: ["briar-witch-iseria", "lone-wolf-peira", "ambitious-tywin", "pirate-captain-flan"] },
      { label: "Closer", roles: ["dps", "cleave", "bruiser"], prefer: ["straze", "lionheart-cermia", "new-moon-luna", "boss-arunka", "jenua"] },
      { label: "Cover", roles: ["opener", "tank", "control"], prefer: ["genesis-ras", "ambitious-tywin", "last-rider-krau", "rinak"] },
    ],
  },
  {
    id: "harsetti-answer",
    name: "Speed cap",
    vs: ["speed-cleave", "turn2-control"],
    summary: "Cap their speed and make the cleave take a real fight.",
    wincon: "Harsetti (or equivalent CR lock) denies the opener. Your tank eats the leftover AoE.",
    setup: "Harsetti on a bulky set. Pair with LR Krau / DB Senya and a soulblock so they cannot soulburn past you.",
    pitfalls: [
      "If Harsetti is too slow versus a true 280+ opener you still lose the first cycle — gear matters.",
      "Injury and evasion drafts ignore this plan. Scout first.",
    ],
    slots: [
      { label: "Cap", roles: ["speedcap"], prefer: ["harsetti"], tags: ["cr-cut"] },
      { label: "Tank", roles: ["tank"], prefer: ["last-rider-krau", "dragon-bride-senya", "fallen-cecilia", "notos"] },
      { label: "Soul lock", roles: ["soulblock"], prefer: ["belian", "sea-phantom-politis", "politis", "mort"] },
      { label: "Flex", roles: ["bruiser", "healer", "control"], prefer: ["empyrean-ilynav", "school-nurse-yulha", "ruele-of-light", "lady-of-the-scales"] },
    ],
  },
  {
    id: "outspeed-cleave",
    name: "Strip cleave",
    vs: ["bruiser-mix", "immunity-soul", "turn2-control"],
    summary: "Take turn one, strip, and end it before the wall cycles.",
    wincon: "Opener into strip into AoE. If anyone lives, you already lost the draft.",
    setup: "Opener at a real speed floor (270+). Strip must land. Closer wants def-break or ignore-defense.",
    pitfalls: [
      "Harsetti, evasion, and heavy soulblock all brick this.",
      "Do not take this into unknown Champion+ defenses.",
    ],
    slots: [
      { label: "Opener", roles: ["opener"], prefer: ["lone-wolf-peira", "ran", "zio", "peira", "ambitious-tywin", "genesis-ras"] },
      { label: "Strip", roles: ["strip"], tags: ["strip"], prefer: ["briar-witch-iseria", "pirate-captain-flan", "flan", "iseria", "lone-wolf-peira"] },
      { label: "Cleave", roles: ["cleave"], tags: ["aoe"], prefer: ["straze", "zahhak", "milim", "little-queen-charlotte", "eternal-wanderer-ludwig"] },
      { label: "Enable", roles: ["soulblock", "cleanse", "dps"], prefer: ["belian", "diene", "landy", "navy-captain-landy"] },
    ],
  },
  {
    id: "turn2-control",
    name: "Turn-2 script",
    vs: ["speed-cleave", "bruiser-mix", "injury-grind", "turn2-control"],
    summary: "Immunity into CR lock. You play the second turn on purpose.",
    wincon: "Survive the opener with immunity, then Rinak / Frieren / Scales steal the cycle.",
    setup: "G.Ras or Diene for the immunity window. Control mage next. Bruiser cleans up.",
    pitfalls: [
      "Strip that ignores ER (B.Iseria) pops this instantly.",
      "If your immunity unit is slower than their opener, the script never starts.",
    ],
    slots: [
      { label: "Immunity", tags: ["immunity"], roles: ["opener"], prefer: ["genesis-ras", "diene", "shepherd-diene", "angel-of-light-angelica"] },
      { label: "Control", roles: ["control"], prefer: ["rinak", "frieren", "lady-of-the-scales", "witch-of-the-mere-tenebria", "sea-phantom-politis"] },
      { label: "Wincon", roles: ["bruiser", "dps"], prefer: ["empyrean-ilynav", "boss-arunka", "new-moon-luna", "setsuka"] },
      { label: "Hold", roles: ["tank", "healer", "soulblock"], prefer: ["last-rider-krau", "ruele-of-light", "belian", "school-nurse-yulha"] },
    ],
  },
  {
    id: "evasion-bait",
    name: "Evasion bait",
    vs: ["speed-cleave", "bruiser-mix", "turn2-control"],
    summary: "Let them swing. They miss. You counter.",
    wincon: "Evasion cores force whiffs, then counter and dual-attack collapse the opener.",
    setup: "Remnant Violet or Setsuka as the miss magnet. C.Lilias or NC Landy amplify the bounce.",
    pitfalls: [
      "AoE that cannot miss, and unbuffable, both ignore this.",
      "A strip plus AoE still kills you if evasion fails the roll.",
    ],
    slots: [
      { label: "Miss", roles: ["evasion"], tags: ["evade"], prefer: ["setsuka", "remnant-violet", "spirit-eye-celine"] },
      { label: "Force", tags: ["dual-attack", "counter"], prefer: ["conqueror-lilias", "navy-captain-landy", "urban-shadow-choux"] },
      { label: "Frontline", roles: ["tank", "bruiser"], prefer: ["dragon-bride-senya", "school-nurse-yulha", "ae-karina"] },
      { label: "Support", roles: ["healer", "soulblock", "control"], prefer: ["requiem-roana", "roana", "belian", "lady-of-the-scales"] },
    ],
  },
  {
    id: "anti-evasion",
    name: "True hit",
    vs: ["evasion-counter"],
    summary: "Do not play their miss game. Bring AoE, dual attacks, or fixed damage.",
    wincon: "AoE and dual attacks bypass evasion. Fixed-damage units ignore the HP sponge behind it.",
    setup: "C.Lilias to force dual attacks, plus an AoE closer. Avoid single-target assassins.",
    pitfalls: [
      "Jenua / Hwayoung / Spec Tene into Violet is a common throw.",
      "If you strip and still take a single-target S3, you deserve the miss.",
    ],
    slots: [
      { label: "Force", tags: ["dual-attack", "aoe"], roles: ["opener"], prefer: ["conqueror-lilias", "ambitious-tywin", "lilias"] },
      { label: "AoE", roles: ["cleave"], tags: ["aoe"], prefer: ["straze", "zahhak", "navy-captain-landy", "landy", "milim"] },
      { label: "True", tags: ["fixed-dmg", "injury"], prefer: ["lionheart-cermia", "krau", "dark-corvus", "bystander-hwayoung"] },
      { label: "Cover", roles: ["strip", "tank", "soulblock"], prefer: ["briar-witch-iseria", "belian", "last-rider-krau"] },
    ],
  },
  {
    id: "strip-control",
    name: "Strip and lock",
    vs: ["immunity-soul", "injury-grind", "revive-wall"],
    summary: "Pop the immunity, then the fight is a normal draft.",
    wincon: "Ignore-ER strip into CR lock. Their kit never gets to play.",
    setup: "B.Iseria first. Follow with Rinak / Frieren / Solitaria so they cannot recast buffs.",
    pitfalls: [
      "Stripping into a counter-set without a plan still loses.",
      "Belian does not care about your soulburn follow-up.",
    ],
    slots: [
      { label: "Strip", tags: ["strip", "ignore-er"], roles: ["strip"], prefer: ["briar-witch-iseria", "spirit-eye-celine", "lone-wolf-peira"] },
      { label: "Lock", roles: ["control"], prefer: ["rinak", "frieren", "solitaria", "lady-of-the-scales", "mediator-kawerik"] },
      { label: "Wincon", roles: ["dps", "bruiser", "cleave"], prefer: ["boss-arunka", "empyrean-ilynav", "straze", "new-moon-luna"] },
      { label: "Hold", roles: ["tank", "healer", "opener"], prefer: ["genesis-ras", "last-rider-krau", "ruele-of-light"] },
    ],
  },
];

export const PRESET_DEFENSES: DefensePreset[] = [
  {
    id: "emperor-stall",
    name: "Stall",
    heroIds: ["harsetti", "last-rider-krau", "belian", "dragon-bride-senya"],
    blurb: "Speed cap plus soul lock.",
  },
  {
    id: "injury-throne",
    name: "Injury",
    heroIds: ["boss-arunka", "empyrean-ilynav", "ruele-of-light", "fallen-cecilia"],
    blurb: "Revive plus two injury cores.",
  },
  {
    id: "scales-script",
    name: "Scales",
    heroIds: ["lady-of-the-scales", "rinak", "frieren", "genesis-ras"],
    blurb: "Turn-2 control.",
  },
  {
    id: "evasion-nest",
    name: "Evasion",
    heroIds: ["setsuka", "remnant-violet", "sea-phantom-politis", "school-nurse-yulha"],
    blurb: "Miss magnet.",
  },
  {
    id: "cleave-line",
    name: "Cleave",
    heroIds: ["ran", "pirate-captain-flan", "straze", "belian"],
    blurb: "Classic strip cleave.",
  },
  {
    id: "soul-lock",
    name: "Soul lock",
    heroIds: ["belian", "politis", "mort", "ambitious-tywin"],
    blurb: "No souls, no buffs.",
  },
];
