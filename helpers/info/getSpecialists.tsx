import bo4List from "@/json/black-ops/four/specialists.json";
import bo3List from "@/json/black-ops/three/specialists.json";
import { Specialist } from "@/types/Generator";

const dataList: Record<string, any> = {
  "black-ops-four": bo4List,
  "black-ops-three": bo3List,
};

export function getSpecialists(
  game: string = "all",
  value: string = ""
): Specialist | Record<string, Specialist> {
  const data = dataList[game] || ({} as Record<string, Specialist>);

  return data;
}
