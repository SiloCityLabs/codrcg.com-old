import { getPerkList } from "@/helpers/generator/getPerkList";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import { randomListItem } from "../randomListItem";

export function fetchPerks(
  game: string = "",
  isPerkGreed: boolean = false
): string {
  const perkList = getPerkList(game);
  const perks: string[] = [];

  if (perkList) {
    perks.push(
      randomListItem(perkList.perk1List).name,
      randomListItem(perkList.perk2List).name,
      randomListItem(perkList.perk3List).name
    );

    if (isPerkGreed) {
      const allPerks = mergeObjectsWithRekey(
        perkList.perk1List,
        perkList.perk2List,
        perkList.perk3List
      );
      let perk4: string;
      do {
        perk4 = randomListItem(allPerks).name;
      } while (perks.includes(perk4));
      perks.push(perk4);
    }
  }

  return perks.join(", ");
}
