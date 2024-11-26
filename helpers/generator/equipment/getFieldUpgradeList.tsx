import bo6List from "@/json/black-ops-six/equipment/field_upgrade.json";
import bo6ZombiesList from "@/json/black-ops-six/zombies/field_upgrade.json";
import mw3ZombiesList from "@/json/modern-warfare-three/zombies/field_upgrade.json";

const fieldUpgrades: Record<string, any> = {
  "black-ops-six": bo6List,
  "black-ops-six-zombies": bo6ZombiesList,
  "modern-warfare-three-zombies": mw3ZombiesList,
};

export function getFieldUpgradeList(game: string): any {
  return fieldUpgrades[game] || {};
}
