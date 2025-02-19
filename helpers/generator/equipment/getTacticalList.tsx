import bo6List from "@/json/black-ops/six/equipment/tactical.json";
import bo6ZombiesList from "@/json/black-ops/six/zombies/tactical.json";
import warzoneList from "@/json/warzone/equipment/tactical.json";
import mw3List from "@/json/modern-warfare/three/equipment/tactical.json";
import mw3ZombiesList from "@/json/modern-warfare/three/zombies/tactical.json";
import mwrList from "@/json/modern-warfare/remastered/equipment/tactical.json";
import vanguardList from "@/json/vanguard/equipment/tactical.json";
import bo3List from "@/json/black-ops/three/equipment/tactical.json";
//BO4 had weird names
import bo4List from "@/json/black-ops/four/equipment/equipment.json";
import coldWarList from "@/json/black-ops/cold-war/equipment/tactical.json";
import ww2List from "@/json/world-war-two/equipment/tactical.json";
import mw2List from "@/json/modern-warfare/two/equipment/tactical.json";
import iwList from "@/json/infinite-warfare/equipment/tactical.json";
import wawList from "@/json/world-at-war/equipment/tactical.json";

const equipment: Record<string, any> = {
  "black-ops-six": bo6List,
  "black-ops-six-zombies": bo6ZombiesList,
  warzone: warzoneList,
  "modern-warfare-three": mw3List,
  "modern-warfare-three-zombies": mw3ZombiesList,
  "modern-warfare-remastered": mwrList,
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "cold-war": coldWarList,
  "world-war-two": ww2List,
  "modern-warfare-two": mw2List,
  "infinite-warfare": iwList,
  "world-at-war": wawList,
};

export function getTacticalList(game: string): any {
  return equipment[game] || {};
}
