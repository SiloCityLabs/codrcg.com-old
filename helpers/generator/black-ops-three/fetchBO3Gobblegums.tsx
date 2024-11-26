import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import { randomListItem } from "@/helpers/randomListItem";
//Json
import gobblegumClassicList from "@/json/black-ops-three/zombies/gobblegum/classic.json";
import gobblegumMegaList from "@/json/black-ops-three/zombies/gobblegum/mega.json";

export function fetchBO3Gobblegums(): string {
  let count = 0;
  let gobblegum = "";
  const gobblegums = new Set<string>();
  const gobblegumList = mergeObjectsWithRekey(
    gobblegumClassicList,
    gobblegumMegaList,
  );

  while (count < 5) {
    gobblegum = randomListItem(gobblegumList).name;

    if (!gobblegums.has(gobblegum)) {
      gobblegums.add(gobblegum);
      count++;
    }
  }

  return Array.from(gobblegums).join(", ");
}
