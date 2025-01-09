import { Weapon } from "./Generator";

export interface InfoListProps {
  game?: string;
  data: Weapon[];
  dataKeys: Array<string>;
}
