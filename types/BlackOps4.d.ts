export type AttachmentInfo = {
  attachments: number;
  wildcardCost: number;
};

export type LoadoutFrame = {
  primary: boolean;
  primary_optic: boolean;
  primary_attach: number;
  primary_mod?: boolean;
  secondary: boolean;
  secondary_optic: boolean;
  secondary_attach: number;
  secondary_mod?: boolean;
  gear: number;
  equipment: boolean;
  perk1: boolean;
  perk2: boolean;
  perk3: boolean;
  wildcards: string[];
  overkill?: boolean;
  underkill?: boolean;
  perk1Greed?: boolean;
  perk2Greed?: boolean;
  perk3Greed?: boolean;
  perk1Gluttony?: boolean;
  perk2Gluttony?: boolean;
  perk3Gluttony?: boolean;
};
