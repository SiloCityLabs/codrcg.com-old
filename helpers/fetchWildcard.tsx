import { getWildcardList } from "@/functions/generator/getWildcardList";
import { randomListItem } from "./randomListItem";
import { Wildcard } from "@/types/Generator";

export async function fetchWildcard(game: string = "") {
  const dataList = getWildcardList(game);

  const data: Wildcard = randomListItem(dataList);

  return data;
}
