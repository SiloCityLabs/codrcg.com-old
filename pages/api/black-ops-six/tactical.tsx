import tacticalList from "../../../json/black-ops-six/tactical.json";
import { randomListItem } from "../../../helpers/randomListItem";
import { Equipment } from "@/app/lib/definitions";

export default async function handler(req, res) {
  const tactical: Equipment = randomListItem(tacticalList);

  res.status(200).json(tactical);
}
