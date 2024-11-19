import dataList from "@/json/black-ops-six/equipment/field_upgrade.json";
import { randomListItem } from "@/helpers/randomListItem";
import { Equipment } from "@/types/Generator";

export default async function handler(req, res) {
  const data: Equipment = randomListItem(dataList);

  res.status(200).json(data);
}
