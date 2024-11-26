import bo6List from "@/json/black-ops-six/weapon/melee.json";
import mw3List from "@/json/modern-warfare-three/weapon/melee.json";

const meleeWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
};

export function getMeleeList(game: string): any {
  return meleeWeapons[game] || {};
}
