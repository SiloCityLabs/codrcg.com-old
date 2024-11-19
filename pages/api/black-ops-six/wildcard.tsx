import dataList from "@/json/black-ops-six/wildcard.json";
import { randomListItem } from "@/helpers/randomListItem";
import { Wildcard } from "@/types/Generator";

export default async function handler(req, res) {
  const data: Wildcard = randomListItem(dataList);

  res.status(200).json(data);
}
