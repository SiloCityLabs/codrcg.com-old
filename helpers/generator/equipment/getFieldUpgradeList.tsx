import bo6List from "@/json/black-ops/six/equipment/field_upgrade.json";
import bo6ZombiesList from "@/json/black-ops/six/zombies/field_upgrade.json";
import mw3List from "@/json/modern-warfare/three/equipment/field_upgrade.json";
import vanguardList from "@/json/vanguard/equipment/field_upgrade.json";
import vanguardZombieList from "@/json/vanguard/zombies/artifacts.json";
import coldWarZombieList from "@/json/black-ops/cold-war/zombies/field_upgrade.json";
import coldWarList from "@/json/black-ops/cold-war/equipment/field_upgrade.json";

const equipment: Record<string, any> = {
  "black-ops-six": bo6List,
  "black-ops-six-zombies": bo6ZombiesList,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
  "vanguard-zombies": vanguardZombieList,
  "cold-war-zombies": coldWarZombieList,
  "cold-war": coldWarList,
};

export function getFieldUpgradeList(game: string): any {
  return equipment[game] || {};
}
