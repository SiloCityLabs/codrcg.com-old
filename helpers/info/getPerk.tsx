import { getPerkList } from "@/helpers/generator/getPerkList";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Types
import { Perk } from "@/types/Generator";

export function getPerk(
  game: string = "all",
  value: string = ""
): Perk | Record<string, Perk> {
  const perks = getPerkList(game);
  const data = mergeObjectsWithRekey(
    perks.perk1List,
    perks.perk2List,
    perks.perk3List
  ) as Record<string, Perk>;

  return data;
}
