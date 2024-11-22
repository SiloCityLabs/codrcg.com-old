import bo6List from "@/json/black-ops-six/equipment/tactical.json";
import bo6ZombiesList from "@/json/black-ops-six/zombies/tactical.json";

export function getTacticalList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    case "black-ops-six-zombies":
      return bo6ZombiesList;
    default:
      return {};
  }
}
