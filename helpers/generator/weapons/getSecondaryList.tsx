import bo6List from "@/json/black-ops-six/weapon/secondary.json";
import mw3List from "@/json/modern-warfare-three/weapon/secondary.json";
import vanguardList from "@/json/vanguard/weapon/secondary.json";

const secondaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
};

export function getSecondaryList(game: string): any {
  return secondaryWeapons[game] || {};
}
