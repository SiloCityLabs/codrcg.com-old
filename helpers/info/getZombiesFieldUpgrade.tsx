import { getFieldUpgradeList } from "@/helpers/generator/zombies/getFieldUpgradeList";
import { Artifact } from "@/types/Generator";

export function getZombiesFieldUpgrade(
  game: string = "all",
  value: string = ""
): Artifact | Record<string, Artifact> {
  const data = getFieldUpgradeList(game) as Record<string, Artifact>;

  return data;
}
