import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import bo4List from "@/json/black-ops/four/zombies/perks.json";
//World War 2
import ww2CamouflageList from "@/json/world-war-two/zombies/mods/camouflage.json";
import ww2FreefireList from "@/json/world-war-two/zombies/mods/freefire.json";
import ww2FrontlineList from "@/json/world-war-two/zombies/mods/frontline.json";
import ww2ShellshockList from "@/json/world-war-two/zombies/mods/shellshock.json";
import ww2UniversalList from "@/json/world-war-two/zombies/mods/universal.json";

const list: Record<string, any> = {
  "black-ops-four-zombies": bo4List,
  "world-war-two-zombies": mergeObjectsWithRekey(
    ww2UniversalList,
    ww2CamouflageList,
    ww2FreefireList,
    ww2FrontlineList,
    ww2ShellshockList
  ),
  "world-war-two-zombies-camouflage": mergeObjectsWithRekey(
    ww2UniversalList,
    ww2CamouflageList
  ),
  "world-war-two-zombies-freefire": mergeObjectsWithRekey(
    ww2UniversalList,
    ww2FreefireList
  ),
  "world-war-two-zombies-frontline": mergeObjectsWithRekey(
    ww2UniversalList,
    ww2FrontlineList
  ),
  "world-war-two-zombies-shellshock": mergeObjectsWithRekey(
    ww2UniversalList,
    ww2ShellshockList
  ),
};

export function getPerkList(game: string): any {
  return list[game] || {};
}
