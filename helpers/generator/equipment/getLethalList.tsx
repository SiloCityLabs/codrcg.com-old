import bo6List from "@/json/black-ops/six/equipment/lethal.json";
import bo6ZombiesList from "@/json/black-ops/six/zombies/lethal.json";
import warzoneList from "@/json/warzone/equipment/lethal.json";
import mw3List from "@/json/modern-warfare/three/equipment/lethal.json";
import mw3ZombiesList from "@/json/modern-warfare/three/zombies/lethal.json";
import vanguardList from "@/json/vanguard/equipment/lethal.json";
import bo3List from "@/json/black-ops/three/equipment/lethal.json";
//BO4 had weird names
import bo4List from "@/json/black-ops/four/equipment/gear.json";
import bo4ZombiesList from "@/json/black-ops/four/zombies/equipment.json";
import coldWarList from "@/json/black-ops/cold-war/equipment/lethal.json";
import ww2List from "@/json/world-war-two/equipment/lethal.json";
import mw2List from "@/json/modern-warfare/two/equipment/lethal.json";
import iwList from "@/json/infinite-warfare/equipment/lethal.json";
import wawList from "@/json/world-at-war/equipment/lethal.json";

const equipment: Record<string, any> = {
  "black-ops-six": bo6List,
  "black-ops-six-zombies": bo6ZombiesList,
  warzone: warzoneList,
  "modern-warfare-three": mw3List,
  "modern-warfare-three-zombies": mw3ZombiesList,
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "black-ops-four-zombies": bo4ZombiesList,
  "cold-war": coldWarList,
  "world-war-two": ww2List,
  "modern-warfare-two": mw2List,
  "infinite-warfare": iwList,
  "world-at-war": wawList,
};

export function getLethalList(game: string): any {
  return equipment[game] || {};
}
