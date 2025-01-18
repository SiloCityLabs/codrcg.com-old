import { getSpecialistList } from "@/helpers/generator/getSpecialistList";
import { randomListItem } from "../randomListItem";
import { Wildcard } from "@/types/Generator";

export function fetchSpecialist(game: string = ""): Wildcard {
  const dataList = getSpecialistList(game);
  return randomListItem(dataList);
}
