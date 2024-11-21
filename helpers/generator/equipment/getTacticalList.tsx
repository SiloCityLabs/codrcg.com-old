import bo6List from "@/json/black-ops-six/equipment/tactical.json";

export function getTacticalList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
