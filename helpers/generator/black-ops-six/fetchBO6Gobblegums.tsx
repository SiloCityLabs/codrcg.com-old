import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import { randomListItem } from "@/helpers/randomListItem";
//Json
import gobblegumRareList from "@/json/black-ops-six/zombies/gobblegum/rare.json";
import gobblegumEpicList from "@/json/black-ops-six/zombies/gobblegum/epic.json";
import gobblegumLegendaryList from "@/json/black-ops-six/zombies/gobblegum/legendary.json";
import gobblegumUltraList from "@/json/black-ops-six/zombies/gobblegum/ultra.json";
import gobblegumWhimsicalList from "@/json/black-ops-six/zombies/gobblegum/whimsical.json";

export function fetchBO6Gobblegums() {
  // Removed async
  let count = 0;
  let gobblegum = "";
  const gobblegums = new Set<string>();
  const gobblegumList = mergeObjectsWithRekey(
    gobblegumRareList,
    gobblegumEpicList,
    gobblegumLegendaryList,
    gobblegumUltraList,
    gobblegumWhimsicalList
  );

  while (count < 5) {
    gobblegum = randomListItem(gobblegumList).name;

    if (!gobblegums.has(gobblegum)) {
      // Use Set.has()
      gobblegums.add(gobblegum);
      count++;
    }
  }

  return Array.from(gobblegums).join(", ");
}
