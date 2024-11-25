import bo6List from "@/json/black-ops-six/equipment/lethal.json";
import bo6ZombiesList from "@/json/black-ops-six/zombies/lethal.json";
import warzoneList from "@/json/warzone/equipment/tactical.json";

export function getLethalList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    case "black-ops-six-zombies":
      return bo6ZombiesList;
    case "warzone":
      return warzoneList;
    default:
      return {};
  }
}
