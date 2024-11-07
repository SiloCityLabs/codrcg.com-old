import perk1List from "../../../json/black-ops-six/perk1.json";
import perk2List from "../../../json/black-ops-six/perk2.json";
import perk3List from "../../../json/black-ops-six/perk3.json";
import { randomListItem } from "../../../helpers/randomListItem";
import { implodeObject } from "../../../helpers/implodeObject";

export default async function handler(req, res) {
  const perks = {
    perk1: randomListItem(perk1List).name,
    perk2: randomListItem(perk2List).name,
    perk3: randomListItem(perk3List).name,
  };

  res.status(200).json(implodeObject(perks));
}
