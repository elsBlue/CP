/** Equipment sets. Piece count is what activates the bonus. No stats. */

export type GearSetId =
  | "health"
  | "defense"
  | "critical"
  | "hit"
  | "resist"
  | "unity"
  | "immunity"
  | "penetration"
  | "torrent"
  | "pursuit"
  | "fervor"
  | "attack"
  | "speed"
  | "destruction"
  | "lifesteal"
  | "counter"
  | "rage"
  | "revenge"
  | "injury"
  | "protection"
  | "reversal"
  | "riposte"
  | "warfare"
  | "weakening";

export type GearSet = {
  id: GearSetId;
  name: string;
  pieces: 2 | 4;
  effect: string;
};

export const GEAR_SETS: Record<GearSetId, GearSet> = {
  health: { id: "health", name: "Health", pieces: 2, effect: "+15% Health." },
  defense: { id: "defense", name: "Defense", pieces: 2, effect: "+15% Defense." },
  critical: { id: "critical", name: "Critical", pieces: 2, effect: "+12% Critical Hit Chance." },
  hit: { id: "hit", name: "Hit", pieces: 2, effect: "+20% Effectiveness." },
  resist: { id: "resist", name: "Resist", pieces: 2, effect: "+20% Effect Resistance." },
  unity: { id: "unity", name: "Unity", pieces: 2, effect: "+4% Dual Attack chance." },
  immunity: { id: "immunity", name: "Immunity", pieces: 2, effect: "Immunity for 1 turn at battle start." },
  penetration: {
    id: "penetration",
    name: "Penetration",
    pieces: 2,
    effect: "Single Attack ignores 15% Defense.",
  },
  torrent: { id: "torrent", name: "Torrent", pieces: 2, effect: "−10% Health, +10% damage dealt." },
  pursuit: { id: "pursuit", name: "Pursuit", pieces: 2, effect: "+20% additional damage." },
  fervor: {
    id: "fervor",
    name: "Fervor",
    pieces: 2,
    effect: "At the start of an extra turn, next attack +20% damage.",
  },
  attack: { id: "attack", name: "Attack", pieces: 4, effect: "+45% Attack." },
  speed: { id: "speed", name: "Speed", pieces: 4, effect: "+25% Speed." },
  destruction: { id: "destruction", name: "Destruction", pieces: 4, effect: "+60% Critical Hit Damage." },
  lifesteal: { id: "lifesteal", name: "Lifesteal", pieces: 4, effect: "Heal 20% of damage dealt." },
  counter: { id: "counter", name: "Counter", pieces: 4, effect: "30% chance to counter when hit." },
  rage: { id: "rage", name: "Rage", pieces: 4, effect: "+30% damage vs a debuffed enemy." },
  revenge: { id: "revenge", name: "Revenge", pieces: 4, effect: "+12% Speed, more as Health drops." },
  injury: { id: "injury", name: "Injury", pieces: 4, effect: "Cuts enemy max Health after attacking." },
  protection: {
    id: "protection",
    name: "Protection",
    pieces: 4,
    effect: "Start-of-battle barrier on all allies.",
  },
  reversal: { id: "reversal", name: "Reversal", pieces: 4, effect: "+15% Speed; +50% CR on revive." },
  riposte: { id: "riposte", name: "Riposte", pieces: 4, effect: "70% chance to counter on a successful evade." },
  warfare: { id: "warfare", name: "Warfare", pieces: 4, effect: "+20% Health; reset skill cooldowns at battle start." },
  weakening: { id: "weakening", name: "Weakening", pieces: 4, effect: "+15% Speed; +15% chance to land debuffs." },
};
