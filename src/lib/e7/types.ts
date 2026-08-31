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

export type Hero = {
  id: string;
  name: string;
  short: string;
  element: Element;
  class: HeroClass;
  tier: Tier;
  roles: Role[];
  tags: Tag[];
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
  tags: Tag[];
  roles: Role[];
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
