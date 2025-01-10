import { getMapList } from "@/helpers/generator/zombies/getMapList";
import { ZombiesMap } from "@/types/Generator";

export function getZombiesMaps(
  game: string = "all",
  value: string = ""
): ZombiesMap | Record<string, ZombiesMap> {
  const data = getMapList(game) as Record<string, ZombiesMap>;

  return data;
}
