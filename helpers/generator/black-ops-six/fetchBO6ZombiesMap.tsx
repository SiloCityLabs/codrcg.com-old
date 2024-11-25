import { randomListItem } from "@/helpers/randomListItem";
import { ZombiesMap } from "@/types/Generator";
import dataList from "@/json/black-ops-six/zombies/map.json";

export function fetchBO6ZombiesMap() {
  const data: ZombiesMap = randomListItem(dataList);

  return data.name;
}
