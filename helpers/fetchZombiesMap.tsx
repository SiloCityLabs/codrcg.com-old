import { getMapList } from "@/helpers/generator/zombies/getMapList";
import { randomListItem } from "./randomListItem";
import { ZombiesMap } from "@/types/Generator";

export function fetchZombiesMap(game: string = ""): ZombiesMap {
  console.log("fetchZombiesMap ", game);
  const dataList = getMapList(game);

  const data = randomListItem(dataList);
  console.log("fetchZombiesMap data", data);

  return data;
}
