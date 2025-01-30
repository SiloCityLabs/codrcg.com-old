import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Data
import bo6List from "@/json/black-ops/six/weapon/melee.json";
import mw3List from "@/json/modern-warfare/three/weapon/melee.json";
import mw2List from "@/json/modern-warfare/two/weapon/melee.json";
import mwrList from "@/json/modern-warfare/remastered/weapon/melee.json";
import ww2List from "@/json/world-war-two/weapon/melee.json";

const meleeWeapons: Record<string, any> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  "modern-warfare-two": mw2List,
  "modern-warfare-remastered": mwrList,
  "world-war-two": ww2List,
};

export function getMeleeList(game: string): any {
  return meleeWeapons[game] || {};
}
