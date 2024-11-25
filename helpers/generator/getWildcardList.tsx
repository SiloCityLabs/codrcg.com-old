import bo6List from "@/json/black-ops-six/wildcard.json";
import warzoneList from "@/json/warzone/wildcard.json";

export function getWildcardList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    case "warzone":
      return warzoneList;
    default:
      return {};
  }
}
