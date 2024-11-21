import bo6List from "@/json/black-ops-six/weapon/primary.json";

export function getPrimaryList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
