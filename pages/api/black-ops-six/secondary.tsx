import dataList from "@/json/black-ops-six/weapon/secondary.json";
import { randomListItem } from "@/helpers/randomListItem";
import { Weapon } from "@/types/Generator";

export default async function handler(req, res) {
  const data: Weapon = randomListItem(dataList);

  res.status(200).json(data);
}
