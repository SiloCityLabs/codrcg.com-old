import { getAugmentList } from "@/helpers/generator/zombies/getAugmentList";
import { Augment } from "@/types/Generator";

export function getZombiesAugments(
  game: string = "all",
  value: string = ""
): Augment | Record<string, Augment> {
  const data = getAugmentList(game) as Record<string, Augment>;

  return data;
}
