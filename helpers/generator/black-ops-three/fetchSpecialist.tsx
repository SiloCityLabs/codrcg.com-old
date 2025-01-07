import { randomListItem } from "@/helpers/randomListItem";
import dataList from "@/json/black-ops-three/specialists.json";

export function fetchSpecialist() {
  const data: string = randomListItem(dataList);

  return data;
}
