import mw3List from "@/json/modern-warfare/three/equipment/vest.json";

const equipment: Record<string, any> = {
  "modern-warfare-three": mw3List,
};

export function getVestList(game: string): any {
  return equipment[game] || {};
}
