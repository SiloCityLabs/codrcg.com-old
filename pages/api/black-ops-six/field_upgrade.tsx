import fieldUpgradeList from "../../../json/black-ops-six/field_upgrade.json";
import { randomListItem } from "../../../helpers/randomListItem";
import { Equipment } from "@/app/lib/definitions";

export default async function handler(req, res) {
  const field_upgrade: Equipment = randomListItem(fieldUpgradeList);

  res.status(200).json(field_upgrade);
}
