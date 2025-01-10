import bo6List from "@/json/black-ops-six/zombies/field_upgrade.json";
import vanguardList from "@/json/vanguard/zombies/artifacts.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
  vanguard: vanguardList,
};

export function getFieldUpgradeList(game: string): any {
  return list[game] || {};
}
