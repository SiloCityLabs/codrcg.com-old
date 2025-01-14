import bo4List from "@/json/black-ops-four/zombies/perks.json";

const list: Record<string, any> = {
  "black-ops-four-zombies": bo4List,
};

export function getPerkList(game: string): any {
  return list[game] || {};
}
