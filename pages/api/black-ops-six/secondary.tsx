import secondaryList from "../../../json/black-ops-six/secondary.json";
import { randomListItem } from "../../../helpers/randomListItem";
import { Weapon } from "@/app/lib/definitions";

export default async function handler(req, res) {
  const secondary: Weapon = randomListItem(secondaryList);

  res.status(200).json(secondary);
}
