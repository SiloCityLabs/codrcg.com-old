import bo6List from "@/json/black-ops-six/equipment/field_upgrade.json";
import bo6ZombiesList from "@/json/black-ops-six/zombies/field_upgrade.json";

export function getFieldUpgradeList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    case "black-ops-six-zombies":
      return bo6ZombiesList;
    default:
      return {};
  }
}
