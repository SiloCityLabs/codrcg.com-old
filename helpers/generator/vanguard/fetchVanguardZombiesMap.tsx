import { randomListItem } from "@/helpers/randomListItem";
import { ZombiesMap } from "@/types/Generator";
import dataList from "@/json/vanguard/zombies/map.json";

export function fetchVanguardZombiesMap() {
  const data: ZombiesMap = randomListItem(dataList);

  return data.name;
}
