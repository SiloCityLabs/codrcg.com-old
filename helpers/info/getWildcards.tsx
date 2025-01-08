import { getWildcardList } from "@/helpers/generator/getWildcardList";
import { Wildcard } from "@/types/Generator";

export function getWildcards(
  game: string = "all",
  perk: string = ""
): Wildcard | Wildcard[] {
  const data = getWildcardList(game) as Wildcard[];

  return data;
}
