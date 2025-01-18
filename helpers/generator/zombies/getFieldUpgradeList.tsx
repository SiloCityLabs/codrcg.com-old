import bo6List from "@/json/black-ops/six/zombies/field_upgrade.json";
import vanguardList from "@/json/vanguard/zombies/artifacts.json";
import coldWarList from "@/json/black-ops/cold-war/zombies/field_upgrade.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
  vanguard: vanguardList,
  "cold-war": coldWarList,
};

export function getFieldUpgradeList(game: string): any {
  return list[game] || {};
}
