import { getWildcardList } from "@/helpers/generator/getWildcardList";
import { randomListItem } from "../randomListItem";
import { Wildcard } from "@/types/Generator";

export function fetchWildcard(game: string = ""): Wildcard {
  const dataList = getWildcardList(game);
  return randomListItem(dataList);
}
