import perk1 from "@/json/black-ops-four/perks/perk1.json";
import perk2 from "@/json/black-ops-four/perks/perk2.json";
import perk3 from "@/json/black-ops-four/perks/perk3.json";
import { randomListItem } from "@/helpers/randomListItem";

const perks: Record<string, any> = {
  perk1: perk1,
  perk2: perk2,
  perk3: perk3,
};

export function fetchPerk(perk: string, currentPerk: string = ""): string {
  let randPerk: string;
  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerk === randPerk);

  return randPerk;
}
