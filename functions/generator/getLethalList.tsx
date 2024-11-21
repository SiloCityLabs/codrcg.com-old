import bo6List from "@/json/black-ops-six/equipment/lethal.json";

export function getLethalList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
