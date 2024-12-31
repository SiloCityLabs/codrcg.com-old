import bo6List from "@/json/black-ops-six/wildcard.json";
import warzoneList from "@/json/warzone/wildcard.json";
import bo3List from "@/json/black-ops-three/wildcard.json";

const wildcards: Record<string, any> = {
  "black-ops-six": bo6List,
  warzone: warzoneList,
  "black-ops-three": bo3List,
};

export function getWildcardList(game: string): any {
  return wildcards[game] || {};
}
