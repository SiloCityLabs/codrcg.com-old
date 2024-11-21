import { getPerkList } from "@/helpers/generator/getPerkList";
import { randomListItem } from "./randomListItem";

export async function fetchPerks(
  game: string = "",
  isPerkGreed: boolean = false
) {
  const perkList = getPerkList(game);
  let perks = [
    randomListItem(perkList?.perk1List).name,
    randomListItem(perkList?.perk2List).name,
    randomListItem(perkList?.perk3List).name,
  ];

  if (isPerkGreed) {
    let perk4: string;
    const mergedObject = {
      ...perkList.perk1List,
      ...perkList.perk2List,
      ...perkList.perk3List,
    };
    while (true) {
      perk4 = randomListItem(mergedObject).name;

      if (!perks.includes(perk4)) {
        break;
      }
    }
    perks[3] = perk4;
  }

  return perks.join(", ");
}
