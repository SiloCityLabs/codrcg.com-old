import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Black Ops 6
import bo6GobblegumRareList from "@/json/black-ops/six/zombies/gobblegum/rare.json";
import bo6GobblegumEpicList from "@/json/black-ops/six/zombies/gobblegum/epic.json";
import bo6GobblegumLegendaryList from "@/json/black-ops/six/zombies/gobblegum/legendary.json";
import bo6GobblegumUltraList from "@/json/black-ops/six/zombies/gobblegum/ultra.json";
import bo6GobblegumWhimsicalList from "@/json/black-ops/six/zombies/gobblegum/whimsical.json";
//Black Ops 4 Elixers
import bo4ElixerClassicList from "@/json/black-ops/four/zombies/elixers/classic.json";
import bo4ElixerCommonList from "@/json/black-ops/four/zombies/elixers/common.json";
import bo4ElixerEpicList from "@/json/black-ops/four/zombies/elixers/epic.json";
import bo4ElixerLegendaryList from "@/json/black-ops/four/zombies/elixers/legendary.json";
import bo4ElixerRareList from "@/json/black-ops/four/zombies/elixers/rare.json";
//Black Ops 4 Talismans
import bo4TalismanCommonList from "@/json/black-ops/four/zombies/talismans/common.json";
import bo4TalismanEpicList from "@/json/black-ops/four/zombies/talismans/epic.json";
import bo4TalismanLegendaryList from "@/json/black-ops/four/zombies/talismans/legendary.json";
import bo4TalismanRareList from "@/json/black-ops/four/zombies/talismans/rare.json";

const data = {
  "black-ops-six-zombies": mergeObjectsWithRekey(
    bo6GobblegumRareList,
    bo6GobblegumEpicList,
    bo6GobblegumLegendaryList,
    bo6GobblegumUltraList,
    bo6GobblegumWhimsicalList
  ),
  "black-ops-four-zombies": mergeObjectsWithRekey(
    bo4ElixerClassicList,
    bo4ElixerCommonList,
    bo4ElixerEpicList,
    bo4ElixerLegendaryList,
    bo4ElixerRareList
  ),
  "black-ops-four-zombies-talismans": mergeObjectsWithRekey(
    bo4TalismanCommonList,
    bo4TalismanEpicList,
    bo4TalismanLegendaryList,
    bo4TalismanRareList
  ),
};

export function getGobblegumList(game: string) {
  return data[game] || {};
}
