import { getPerkList } from "@/helpers/generator/zombies/getPerkList";
import { randomListItem } from "../../randomListItem";
import { Perk } from "@/types/Generator";

export function fetchZombiesPerks(
  game: string = "",
  amount: number = 4
): string[] {
  const perkNames: string[] = []; // Array to store perk names
  const dataList: Perk[] = getPerkList(game);

  while (perkNames.length < amount) {
    const randomPerkName = randomListItem(dataList).name;
    if (!perkNames.includes(randomPerkName)) {
      perkNames.push(randomPerkName);
    }
  }

  return perkNames;
}
