import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Black Ops 6
import bo6GobblegumRareList from "@/json/black-ops-six/zombies/gobblegum/rare.json";
import bo6GobblegumEpicList from "@/json/black-ops-six/zombies/gobblegum/epic.json";
import bo6GobblegumLegendaryList from "@/json/black-ops-six/zombies/gobblegum/legendary.json";
import bo6GobblegumUltraList from "@/json/black-ops-six/zombies/gobblegum/ultra.json";
import bo6GobblegumWhimsicalList from "@/json/black-ops-six/zombies/gobblegum/whimsical.json";

const data = {
  "black-ops-six": mergeObjectsWithRekey(
    bo6GobblegumRareList,
    bo6GobblegumEpicList,
    bo6GobblegumLegendaryList,
    bo6GobblegumUltraList,
    bo6GobblegumWhimsicalList
  ),
};

export function getGobblegumList(game: string) {
  return data[game] || {};
}
