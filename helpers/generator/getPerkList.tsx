import bo6Perk1List from "@/json/black-ops-six/perk/perk1.json";
import bo6Perk2List from "@/json/black-ops-six/perk/perk2.json";
import bo6Perk3List from "@/json/black-ops-six/perk/perk3.json";
import warzonePerk1List from "@/json/black-ops-six/perk/perk1.json";
import warzonePerk2List from "@/json/black-ops-six/perk/perk2.json";
import warzonePerk3List from "@/json/black-ops-six/perk/perk3.json";

export function getPerkList(game: string) {
  switch (game) {
    case "black-ops-six":
      return {
        perk1List: bo6Perk1List,
        perk2List: bo6Perk2List,
        perk3List: bo6Perk3List,
      };
    case "warzone":
      return {
        perk1List: warzonePerk1List,
        perk2List: warzonePerk2List,
        perk3List: warzonePerk3List,
      };
    default:
      return {
        perk1List: {},
        perk2List: {},
        perk3List: {},
      };
  }
}
