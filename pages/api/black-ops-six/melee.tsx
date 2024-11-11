import meleeList from "@/json/black-ops-six/weapon/melee.json";
import { randomListItem } from "@/helpers/randomListItem";
import { Weapon } from "@/app/lib/definitions";

export default async function handler(req, res) {
  const melee: Weapon = randomListItem(meleeList);

  res.status(200).json(melee);
}
