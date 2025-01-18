import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import bo6List from "@/json/black-ops-six/zombies/map.json";
import vanguardList from "@/json/vanguard/zombies/map.json";
import coldWarCoreList from "@/json/cold-war/zombies/map/core.json";
import coldWarOnslaughtList from "@/json/cold-war/zombies/map/onslaught.json";
//Black Ops 4 Zombies
import bo4AetherList from "@/json/black-ops/four/zombies/aether_story/map.json";
import bo4ChaosList from "@/json/black-ops/four/zombies/chaos_story/map.json";

const list: Record<string, any> = {
  "black-ops-six-zombies": bo6List,
  "vanguard-zombies": vanguardList,
  "black-ops-four-zombies": mergeObjectsWithRekey(bo4AetherList, bo4ChaosList),
  "aether_story-black-ops-four-zombies": bo4AetherList,
  "chaos_story-black-ops-four-zombies": bo4ChaosList,
  "cold-war-zombies": mergeObjectsWithRekey(
    coldWarCoreList,
    coldWarOnslaughtList
  ),
  "core-cold-war-zombies": coldWarCoreList,
  "onslaught-cold-war-zombies": coldWarOnslaughtList,
};

export function getMapList(game: string): any {
  return list[game] || {};
}
