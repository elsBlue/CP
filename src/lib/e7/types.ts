export type Element = "fire" | "ice" | "earth" | "light" | "dark";
export type HeroClass =
  | "knight"
  | "warrior"
  | "mage"
  | "ranger"
  | "thief"
  | "soulweaver";
export type Tier = "SS" | "S" | "A" | "B";

export type Role =
  | "opener"
  | "strip"
  | "cleanse"
  | "bruiser"
  | "cleave"
  | "tank"
  | "revive"
  | "control"
  | "soulblock"
  | "speedcap"
  | "dps"
  | "healer"
  | "evasion";

export type Tag =
  | "immunity"
  | "injury"
  | "cr-push"
  | "cr-cut"
  | "anti-revive"
  | "aoe"
  | "stun"
  | "barrier"
  | "counter"
  | "dual-attack"
  | "soulburn"
  | "ignore-er"
  | "seal"
  | "unhealable"
  | "defbreak"
  | "extra-turn"
  | "invincible"
  | "provoke"
  | "fixed-dmg"
  | "evade"
  | "strip"
  | "silence"
  | "barrier-break";

export type ArchetypeId =
  | "speed-cleave"
  | "harsetti-stall"
  | "revive-wall"
  | "injury-grind"
  | "evasion-counter"
  | "turn2-control"
  | "immunity-soul"
  | "bruiser-mix";

export const ARCHETYPE_IDS: ArchetypeId[] = [
  "speed-cleave",
  "harsetti-stall",
  "revive-wall",
  "injury-grind",
  "evasion-counter",
  "turn2-control",
  "immunity-soul",
  "bruiser-mix",
];

export const ROLE_IDS: Role[] = [
  "opener",
  "strip",
  "cleanse",
  "bruiser",
  "cleave",
  "tank",
  "revive",
  "control",
  "soulblock",
  "speedcap",
  "dps",
  "healer",
  "evasion",
];

export const TAG_IDS: Tag[] = [
  "immunity",
  "injury",
  "cr-push",
  "cr-cut",
  "anti-revive",
  "aoe",
  "stun",
  "barrier",
  "counter",
  "dual-attack",
  "soulburn",
  "ignore-er",
  "seal",
  "unhealable",
  "defbreak",
  "extra-turn",
  "invincible",
  "provoke",
  "fixed-dmg",
  "evade",
  "strip",
  "silence",
  "barrier-break",
];

export type NormalEffect =
  | "revive"
  | "extinction"
  | "increase-cr"
  | "decrease-cr"
  | "extra-turn"
  | "ally-cd-decrease"
  | "enemy-cd-increase"
  | "increase-hit"
  | "increase-evasion"
  | "always-crit"
  | "damage-reduction"
  | "damage-sharing"
  | "ignore-damage-sharing"
  | "damage-received-limit"
  | "increase-crit-resist"
  | "increase-pen-resist"
  | "soul-removal"
  | "resource-reduction"
  | "barrier-inversion"
  | "buff-dispel"
  | "debuff-dispel"
  | "buff-duration-decrease"
  | "debuff-duration-decrease"
  | "dual-attack"
  | "injury"
  | "counterattack"
  | "cannot-counterattack";

export const EFFECT_IDS: NormalEffect[] = [
  "revive",
  "extinction",
  "increase-cr",
  "decrease-cr",
  "extra-turn",
  "ally-cd-decrease",
  "enemy-cd-increase",
  "increase-hit",
  "increase-evasion",
  "always-crit",
  "damage-reduction",
  "damage-sharing",
  "ignore-damage-sharing",
  "damage-received-limit",
  "increase-crit-resist",
  "increase-pen-resist",
  "soul-removal",
  "resource-reduction",
  "barrier-inversion",
  "buff-dispel",
  "debuff-dispel",
  "buff-duration-decrease",
  "debuff-duration-decrease",
  "dual-attack",
  "injury",
  "counterattack",
  "cannot-counterattack",
];

export const EFFECT_LABEL: Record<NormalEffect, string> = {
  revive: "Revive",
  extinction: "Extinction / Cannot Revive",
  "increase-cr": "Increase Combat Readiness",
  "decrease-cr": "Decrease Combat Readiness",
  "extra-turn": "Extra Turn",
  "ally-cd-decrease": "Ally Cooldown Decrease",
  "enemy-cd-increase": "Enemy Cooldown Increase",
  "increase-hit": "Increase Hit Chance",
  "increase-evasion": "Increase Evasion",
  "always-crit": "Always Critical Hit on Successful Attack",
  "damage-reduction": "Damage Reduction",
  "damage-sharing": "Damage Sharing",
  "ignore-damage-sharing": "Ignore Damage Sharing",
  "damage-received-limit": "Damage Received Limit",
  "increase-crit-resist": "Increase Critical Hit Resistance",
  "increase-pen-resist": "Increase Penetration Resistance",
  "soul-removal": "Soul Removal",
  "resource-reduction": "Resource Reduction",
  "barrier-inversion": "Barrier Inversion",
  "buff-dispel": "Buff Dispel",
  "debuff-dispel": "Debuff Dispel",
  "buff-duration-decrease": "Buff Duration Decrease",
  "debuff-duration-decrease": "Debuff Duration Decrease",
  "dual-attack": "Dual Attack",
  injury: "Injury",
  counterattack: "Counterattack",
  "cannot-counterattack": "Cannot Counterattack",
};

export type UniqueEffect = {
  name: string;
  text: string;
};

export type WallUnique = UniqueEffect & {
  heroId: string;
};

export type Hero = {
  id: string;
  name: string;
  short: string;
  element: Element;
  class: HeroClass;
  tier: Tier;
  roles: Role[];
  tags: Tag[];
  effects?: NormalEffect[];
  buffs?: string[];
  debuffs?: string[];
  uniqueEffects?: UniqueEffect[];
  kit: string;
  defense: number;
  offense: number;
  icon?: string;
};

export type SlotNeed = {
  label: string;
  roles?: Role[];
  tags?: Tag[];
  prefer?: string[];
  avoidRoles?: Role[];
};

export type Recipe = {
  id: string;
  name: string;
  vs: ArchetypeId[];
  summary: string;
  wincon: string;
  setup: string;
  pitfalls: string[];
  slots: [SlotNeed, SlotNeed, SlotNeed, SlotNeed];
};

export type DefenseRead = {
  archetype: ArchetypeId;
  title: string;
  headline: string;
  threats: { heroId: string; text: string; severity: 1 | 2 | 3 }[];
  notes: string[];
  watch: {
    key: string;
    label: string;
    note: string;
    answerTags?: Tag[];
    answerRoles?: Role[];
    answerEffects?: NormalEffect[];
  }[];
  tags: Tag[];
  roles: Role[];
  effects: NormalEffect[];
  buffs: string[];
  debuffs: string[];
  uniqueEffects: WallUnique[];
};

export type CounterTeam = {
  recipeId: string;
  name: string;
  heroIds: string[];
  score: number;
  coverage: number;
  wincon: string;
  setup: string;
  pitfalls: string[];
  missing: string[];
  gaps: string[];
  theorycraft: boolean;
  why: string[];
};

export type RankId =
  | "bronze"
  | "silver"
  | "gold"
  | "master"
  | "challenger"
  | "champion"
  | "emperor"
  | "legend";

export type MatchLog = {
  id: string;
  at: number;
  enemy: string[];
  team: string[];
  won: boolean;
  vpDelta: number;
  note: string;
  recipeId?: string;
  recipeName?: string;
  archetype?: ArchetypeId;
};

export type RosterEntry = {
  owned: boolean;
  built: boolean;
};

export type MemberRole = "member" | "admin";

export type DefensePreset = {
  id: string;
  name: string;
  heroIds: string[];
  blurb: string;
};

export type GuildMember = {
  userId: string;
  displayName: string | null;
  email: string | null;
  role: MemberRole;
};
