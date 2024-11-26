import bo6List from "@/json/black-ops-six/equipment/tactical.json";
import bo6ZombiesList from "@/json/black-ops-six/zombies/tactical.json";
import warzoneList from "@/json/warzone/equipment/tactical.json";

const tacticalEquipment: Record<string, any> = {
  "black-ops-six": bo6List,
  "black-ops-six-zombies": bo6ZombiesList,
  warzone: warzoneList,
};

export function getTacticalList(game: string): any {
  return tacticalEquipment[game] || {};
}
