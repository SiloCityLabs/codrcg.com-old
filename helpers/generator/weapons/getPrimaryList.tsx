import bo6List from "@/json/black-ops-six/weapon/primary.json";
import mw3List from "@/json/modern-warfare-three/weapon/primary.json";
import vanguardList from "@/json/vanguard/weapon/primary.json";
import bo3List from "@/json/black-ops-three/weapon/primary.json";
import bo4List from "@/json/black-ops-four/weapon/primary.json";

const primaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
};

export function getPrimaryList(game: string): any {
  return primaryWeapons[game] || {};
}
