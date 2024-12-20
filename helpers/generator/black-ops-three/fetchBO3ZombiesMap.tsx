import { randomListItem } from "@/helpers/randomListItem";
import { ZombiesMap } from "@/types/Generator";
import dataList from "@/json/black-ops-three/zombies/map.json";

export function fetchBO3ZombiesMap() {
  const data: ZombiesMap = randomListItem(dataList);

  return data.name;
}
