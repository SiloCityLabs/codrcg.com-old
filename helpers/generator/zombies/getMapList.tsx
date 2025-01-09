import bo6List from "@/json/black-ops-six/zombies/map.json";
import vanguardList from "@/json/vanguard/zombies/map.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
  vanguard: vanguardList,
};

export function getMapList(game: string): any {
  return list[game] || {};
}
