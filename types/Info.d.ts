import { Weapon, Perk } from "./Generator";

export interface InfoListProps {
  game?: string;
  data: WeaponData | PerkData;
  dataKeys: Array<string>;
}

type WeaponData = Record<string, Weapon>;
type PerkData = Record<string, PerkData>;
