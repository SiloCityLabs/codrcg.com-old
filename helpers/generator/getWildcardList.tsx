import bo6List from "@/json/black-ops-six/wildcard.json";

export function getWildcardList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
