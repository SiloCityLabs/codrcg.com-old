import { randomListItem } from "@/helpers/randomListItem";
import dataList from "@/json/vanguard/zombies/artifacts.json";

export function fetchVanguardZombiesArtifact() {
  const data: string = randomListItem(dataList);

  return data;
}
