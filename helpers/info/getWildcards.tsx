import { getWildcardList } from "@/helpers/generator/getWildcardList";
import { Wildcard } from "@/types/Generator";

export function getWildcards(
  game: string = "all",
  value: string = ""
): Wildcard | Record<string, Wildcard> {
  const data = getWildcardList(game) as Record<string, Wildcard>;

  return data;
}
