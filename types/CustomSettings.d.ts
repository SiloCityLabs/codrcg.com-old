export type Setting = {
  name: string;
  type: string;
  defaultChance: string; //Perfectage to use default
  default: number | string;
  unitValue: string;
  values: number[] | string[];
  min?: number;
  max?: number;
  increment?: number;
};

export interface CustomSettingsProps {
  data: Setting[];
  count: number;
}
