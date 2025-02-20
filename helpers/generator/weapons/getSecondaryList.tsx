import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Data
import bo6List from "@/json/black-ops/six/weapon/secondary.json";
import mw3List from "@/json/modern-warfare/three/weapon/secondary.json";
import mw3MeleeList from "@/json/modern-warfare/three/weapon/melee.json";
import mw2List from "@/json/modern-warfare/two/weapon/secondary.json";
import mw2MeleeList from "@/json/modern-warfare/two/weapon/melee.json";
import vanguardList from "@/json/vanguard/weapon/secondary.json";
import coldWarList from "@/json/black-ops/cold-war/weapon/secondary.json";
import bo3List from "@/json/black-ops/three/weapon/secondary.json";
import bo4List from "@/json/black-ops/four/weapon/secondary.json";
import mwrList from "@/json/modern-warfare/remastered/weapon/side_arm.json";
import ww2List from "@/json/world-war-two/weapon/secondary.json";
import ww2MeleeList from "@/json/world-war-two/weapon/melee.json";
import iwList from "@/json/infinite-warfare/weapon/secondary.json";
import wawList from "@/json/world-at-war/weapon/side_arm.json";

const secondaryWeapons: Record<string, any> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List),
  "black-ops-six": bo6List,
  // "modern-warfare-three": mergeObjectsWithRekey(
  //   mw3List,
  //   mw2List,
  //   mw3MeleeList,
  //   mw2MeleeList
  // ),
  "modern-warfare-three": mergeObjectsWithRekey(
    mw3List,
    mw3MeleeList,
    mw2MeleeList
  ),
  "modern-warfare-two": mergeObjectsWithRekey(mw2List, mw2MeleeList),
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "cold-war": coldWarList,
  "modern-warfare-remastered": mwrList,
  "world-war-two": mergeObjectsWithRekey(ww2List, ww2MeleeList),
  "infinite-warfare": iwList,
  "world-at-war": wawList,
};

export function getSecondaryList(game: string): any {
  return secondaryWeapons[game] || {};
}
