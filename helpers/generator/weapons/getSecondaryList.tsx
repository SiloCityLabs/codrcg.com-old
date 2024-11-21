import bo6List from "@/json/black-ops-six/weapon/secondary.json";

export function getSecondaryList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
