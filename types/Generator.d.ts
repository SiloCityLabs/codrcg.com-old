export type Weapon = {
  name: string;
  type: string;
  game: string;
  no_attach?: boolean;
  isDlc?: boolean;
  no_attach_info?: boolean; //When we dont have access to the attachments for the weapon
};

export type Perk = {
  name: string;
  type: string;
  game: string;
  isDlc?: boolean;
};

export type Wildcard = {
  name: string;
  type: string;
  game: string;
  description: string;
  isDlc?: boolean;
};

export type Streak = {
  name: string;
  type: string;
  game: string;
  score: number;
  isDlc?: boolean;
};

export type Equipment = {
  name: string;
  type: string;
  game: string;
  isDlc?: boolean;
};

export type Specialist = {
  name: string;
  equipment?: string;
  weapon?: string;
  payload?: string;
  trait?: string;
  type: string;
  game: string;
};

export type ZombiesCharacter = {
  name: string;
  type: string;
  game: string;
};

export type ZombiesMap = {
  name: string;
  type: string;
  game: string;
  mode?: string;
  difficulty?: string;
  story?: string;
  isDlc?: boolean;
};

export type AmmoMod = {
  name: string;
  type: string;
  game: string;
  isDlc: boolean;
};

export type Augment = {
  name: string;
  description: string;
  major: Augments[];
  minor: Augments[];
  type: string;
  game: string;
  isDlc: boolean;
};

export type Augments = {
  name: string;
  description: string;
};

export type Gobblegum = {
  name: string;
  type: string;
  game: string;
  isDlc: boolean;
};

export type Artifact = {
  name: string;
  type: string;
  game: string;
};

export type MW3Vest = {
  name: string;
  type: string;
  game: string;
};

export type Bo6ZombiesSettings = {
  rollMap: boolean;
  rollGobblegum: boolean;
  rollAugments: boolean;
};

export type Bo4ZombiesSettings = {
  rollMap: boolean;
  rollElixers: boolean;
  rollTalisman: boolean;
};

export type WarzoneDropSpotSettings = {
  warzoneMap: string;
};
