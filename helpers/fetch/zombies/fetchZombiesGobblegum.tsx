import { getGobblegumList } from "@/helpers/generator/zombies/getGobblegumList";
import { randomListItem } from "../../randomListItem";
import { Gobblegum } from "@/types/Generator";

export function fetchZombiesGobblegum(
  game: string = "",
  amount: number = 5
): string {
  let count = 0;
  let gobblegum = "";
  const gobblegums = new Set<string>();
  const dataList: Gobblegum[] = getGobblegumList(game);

  while (count < amount) {
    gobblegum = randomListItem(dataList).name;

    if (!gobblegums.has(gobblegum)) {
      gobblegums.add(gobblegum);
      count++;
    }
  }

  return Array.from(gobblegums).join(", ");
}
