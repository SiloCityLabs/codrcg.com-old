import bo6List from "@/json/black-ops-six/wildcard.json";
import warzoneList from "@/json/warzone/wildcard.json";

const wildcards: Record<string, any> = {
  "black-ops-six": bo6List,
  warzone: warzoneList,
};

export function getWildcardList(game: string): any {
  return wildcards[game] || {};
}
