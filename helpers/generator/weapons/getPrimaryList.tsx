import bo6List from "@/json/black-ops-six/weapon/primary.json";
import mw3List from "@/json/modern-warfare-three/weapon/primary.json";

const primaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
};

export function getPrimaryList(game: string): any {
  return primaryWeapons[game] || {};
}
