import bo6List from "@/json/black-ops/six/weapon/secondary.json";
import mw3List from "@/json/modern-warfare/three/weapon/secondary.json";
import vanguardList from "@/json/vanguard/weapon/secondary.json";
import coldWarList from "@/json/black-ops/cold-war/weapon/secondary.json";
import bo3List from "@/json/black-ops/three/weapon/secondary.json";
import bo4List from "@/json/black-ops/four/weapon/secondary.json";

const secondaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "cold-war": coldWarList,
};

export function getSecondaryList(game: string): any {
  return secondaryWeapons[game] || {};
}
