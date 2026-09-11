import type { HeroClass } from "./types";

/** Short PvP list. Not the full 277 catalog. class null = any class. */
export type PvpArtifact = {
  id: string;
  name: string;
  class: HeroClass | null;
  fit: string[];
  note: string;
};

export const PVP_ARTIFACTS: PvpArtifact[] = [
  { id: "aurius", name: "Aurius", class: "knight", fit: ["tank", "bruiser"], note: "Shares a cut of damage the team takes." },
  { id: "elbris-ritual-sword", name: "Elbris Ritual Sword", class: "knight", fit: ["counter", "tank"], note: "Chance to counter when an ally is attacked." },
  { id: "holy-sacrifice", name: "Holy Sacrifice", class: "knight", fit: ["tank", "revive"], note: "Sacrifices herself to save an ally from lethal damage." },
  { id: "ancient-dragons-legacy", name: "Ancient Dragon's Legacy", class: "knight", fit: ["cleanse", "healer"], note: "After a non-attack skill, shortens ally cooldowns once." },
  { id: "sword-of-ezera", name: "Sword of Ezera", class: "knight", fit: ["tank"], note: "Cuts damage taken from elites and bosses." },
  { id: "proof-of-valor", name: "Proof of Valor", class: null, fit: ["tank", "bruiser"], note: "Takes less damage as the fight goes on." },
  { id: "uberiuss-tooth", name: "Uberius's Tooth", class: "warrior", fit: ["dps", "cleave", "bruiser"], note: "After attacking, extra hit proportional to Attack." },
  { id: "border-coin", name: "Border Coin", class: "warrior", fit: ["extra-turn", "bruiser"], note: "Stacks Attack and Speed after non-attack skills." },
  { id: "draco-plate", name: "Draco Plate", class: "warrior", fit: ["bruiser", "tank"], note: "Critical Hit Damage, and heals after a crit." },
  { id: "sigurd-scythe", name: "Sigurd Scythe", class: "warrior", fit: ["bruiser", "dps"], note: "Lifesteal while Health is high." },
  { id: "tagehels-ancient-book", name: "Tagehel's Ancient Book", class: "mage", fit: ["soulburn", "opener"], note: "Gives souls at the start of the first battle." },
  { id: "abyssal-crown", name: "Abyssal Crown", class: "mage", fit: ["stun", "control"], note: "Chance to stun after attacking." },
  { id: "spirits-breath", name: "Spirit's Breath", class: "mage", fit: ["control", "strip"], note: "Non-attack skills can shorten her own cooldown." },
  { id: "black-hand-of-the-goddess", name: "Black Hand of the Goddess", class: "mage", fit: ["dps", "cleave"], note: "Crit Chance plus fading Crit Damage." },
  { id: "time-matter", name: "Time Matter", class: "mage", fit: ["cleave", "dps"], note: "Kills boost the next attack and cut cooldown." },
  { id: "sword-of-judgment", name: "Sword of Judgment", class: "ranger", fit: ["dps", "opener"], note: "Chance to fire the basic skill again." },
  { id: "reingars-special-drink", name: "Reingar's Special Drink", class: "ranger", fit: ["cleave", "aoe"], note: "Extra hit after an all-target attack." },
  { id: "song-of-stars", name: "Song of Stars", class: "ranger", fit: ["opener", "strip"], note: "Marks the target and raises Dual Attack chance." },
  { id: "rosa-hargana", name: "Rosa Hargana", class: "ranger", fit: ["dps", "dual-attack"], note: "Dual Attack chance after a single attack." },
  { id: "portrait-of-the-saviors", name: "Portrait of the Saviors", class: null, fit: ["dps", "cleave", "bruiser"], note: "More damage when the target is healthier than you." },
  { id: "violet-talisman", name: "Violet Talisman", class: "thief", fit: ["evasion", "evade", "opener"], note: "Stacks Attack and Evasion each turn." },
  { id: "wind-rider", name: "Wind Rider", class: "thief", fit: ["cleave", "dps"], note: "Kill grants Stealth and a burst of Attack." },
  { id: "rhianna-and-luciella", name: "Rhianna & Luciella", class: "thief", fit: ["extra-turn", "opener"], note: "Chance of an extra turn after attacking." },
  { id: "dust-devil", name: "Dust Devil", class: "thief", fit: ["dps", "dual-attack"], note: "Chance to attack again with the basic skill." },
  { id: "wondrous-potion-vial", name: "Wondrous Potion Vial", class: "soulweaver", fit: ["cleanse", "healer"], note: "Chance to cleanse an ally at the start of the turn." },
  { id: "idols-cheer", name: "Idol's Cheer", class: "soulweaver", fit: ["healer", "cr-push"], note: "After a non-attack skill, pushes the ally with the highest Attack." },
  { id: "magarahas-tome", name: "Magaraha's Tome", class: "soulweaver", fit: ["healer", "cleanse"], note: "Combat Readiness after a non-attack skill." },
  { id: "touch-of-rekos", name: "Touch of Rekos", class: "soulweaver", fit: ["healer", "tank"], note: "Heals the team after she is hit." },
  { id: "waters-origin", name: "Water's Origin", class: "soulweaver", fit: ["healer", "bruiser"], note: "Heals and pushes CR when a heavy hit lands." },
];
