export type AttachmentInfo = {
  attachments: number;
  wildcardCost: number;
};

export type LoadoutFrame = {
  primary: boolean;
  primary_optic: boolean;
  primary_attach: number;
  secondary: boolean;
  secondary_optic: boolean;
  secondary_attach: number;
  tactical: number;
  lethal: boolean;
  perk1: boolean;
  perk2: boolean;
  perk3: boolean;
  wildcards: string[];
  overkill?: boolean;
  perk1Greed?: boolean;
  perk2Greed?: boolean;
  perk3Greed?: boolean;
  dangerClose?: boolean;
  tactician?: number;
};
