import bo6List from "@/json/black-ops-six/weapon/melee.json";

export function getMeleeList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
