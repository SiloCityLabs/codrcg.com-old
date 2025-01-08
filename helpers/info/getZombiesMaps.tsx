import { getMapList } from "@/helpers/generator/zombies/getMapList";
import { ZombiesMap } from "@/types/Generator";

export function getZombiesMaps(
  game: string = "all",
  value: string = ""
): ZombiesMap | ZombiesMap[] {
  const data = getMapList(game) as ZombiesMap[];

  return data;
}
