import perk1 from "@/json/world-at-war/perk/perk1.json";
import perk2 from "@/json/world-at-war/perk/perk2.json";
import perk3 from "@/json/world-at-war/perk/perk3.json";
import vehiclePerk from "@/json/world-at-war/perk/vehicle-perk.json";
import { randomListItem } from "@/helpers/randomListItem";

const perks: Record<string, any> = {
  perk1: perk1,
  perk2: perk2,
  perk3: perk3,
  "vehicle-perk": vehiclePerk,
};

export function fetchPerk(perk: string, currentPerk: string = ""): string {
  let randPerk: string;
  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerk === randPerk);

  return randPerk;
}
