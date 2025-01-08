import { getMapList } from "@/helpers/generator/zombies/getMapList";
import { randomListItem } from "./randomListItem";
import { ZombiesMap } from "@/types/Generator";

export function fetchZombiesMap(game: string = ""): ZombiesMap {
  const dataList = getMapList(game);

  return randomListItem(dataList).name;
}
