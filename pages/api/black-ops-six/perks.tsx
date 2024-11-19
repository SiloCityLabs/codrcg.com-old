import perk1List from "@/json/black-ops-six/perk/perk1.json";
import perk2List from "@/json/black-ops-six/perk/perk2.json";
import perk3List from "@/json/black-ops-six/perk/perk3.json";
import { randomListItem } from "@/helpers/randomListItem";

export default async function handler(req, res) {
  const body = req.body;
  let perks = [
    randomListItem(perk1List).name,
    randomListItem(perk2List).name,
    randomListItem(perk3List).name,
  ];
  //TODO: Add a loop to verify we ha a different perk
  if (body.isPerkGreed) {
    let perk4: string;
    const mergedObject = { ...perk1List, ...perk2List, ...perk3List };
    while (true) {
      perk4 = randomListItem(mergedObject).name;

      if (!perks.includes(perk4)) {
        break;
      }
    }
    perks[3] = perk4;
  }

  res.status(200).json(perks.join(", "));
}
