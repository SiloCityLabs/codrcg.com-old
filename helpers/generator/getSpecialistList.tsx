import bo3List from "@/json/black-ops/three/specialists.json";
import bo4List from "@/json/black-ops/four/specialists.json";
import iwList from "@/json/infinite-warfare/combat-rig.json";

const data: Record<string, any> = {
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "infinite-warfare": iwList,
};

export function getSpecialistList(game: string): any {
  return data[game] || {};
}
