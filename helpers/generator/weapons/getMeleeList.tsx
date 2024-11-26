import bo6List from "@/json/black-ops-six/weapon/melee.json";

const meleeWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getMeleeList(game: string): any {
  return meleeWeapons[game] || {};
}
