import { getPerkList } from "@/helpers/generator/getPerkList";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Types
import { Perk } from "@/types/Generator";

export function getPerk(
  game: string = "all",
  perk: string = ""
): Perk | Perk[] {
  const perks = getPerkList(game);
  const data = mergeObjectsWithRekey(
    perks.perk1List,
    perks.perk2List,
    perks.perk3List
  ) as Perk[];

  return data;
}
