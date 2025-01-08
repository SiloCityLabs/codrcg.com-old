import bo6List from "@/json/black-ops-six/zombies/map.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getMapList(game: string): any {
  return list[game] || {};
}
