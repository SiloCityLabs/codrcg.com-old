import bo6List from "@/json/black-ops-six/equipment/field_upgrade.json";

export function getFieldUpgradeList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
