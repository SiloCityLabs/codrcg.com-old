import bo3List from "@/json/black-ops-three/specialists.json";
import bo4List from "@/json/black-ops/four/specialists.json";

const data: Record<string, any> = {
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
};

export function getSpecialistList(game: string): any {
  return data[game] || {};
}
