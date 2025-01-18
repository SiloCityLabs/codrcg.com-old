import bo6Perk1List from "@/json/black-ops/six/perk/perk1.json";
import bo6Perk2List from "@/json/black-ops/six/perk/perk2.json";
import bo6Perk3List from "@/json/black-ops/six/perk/perk3.json";
//Warzone
import warzonePerk1List from "@/json/warzone/perk/perk1.json";
import warzonePerk2List from "@/json/warzone/perk/perk2.json";
import warzonePerk3List from "@/json/warzone/perk/perk3.json";
//Vanguard
import vanguardPerk1List from "@/json/vanguard/perk/perk1.json";
import vanguardPerk2List from "@/json/vanguard/perk/perk2.json";
import vanguardPerk3List from "@/json/vanguard/perk/perk3.json";
//Black Ops 4
import bo4Perk1List from "@/json/black-ops/four/perk/perk1.json";
import bo4Perk2List from "@/json/black-ops/four/perk/perk2.json";
import bo4Perk3List from "@/json/black-ops/four/perk/perk3.json";
//Black Ops 4 Zombies
import bo4ZombiesList from "@/json/black-ops/four/zombies/perks.json";
//Cold War
import coldWarPerk1List from "@/json/black-ops/cold-war/perk/perk1.json";
import coldWarPerk2List from "@/json/black-ops/cold-war/perk/perk2.json";
import coldWarPerk3List from "@/json/black-ops/cold-war/perk/perk3.json";

const perks: Record<
  string,
  { perk1List: any; perk2List: any; perk3List: any }
> = {
  "black-ops-four": {
    perk1List: bo4Perk1List,
    perk2List: bo4Perk2List,
    perk3List: bo4Perk3List,
  },
  "black-ops-six": {
    perk1List: bo6Perk1List,
    perk2List: bo6Perk2List,
    perk3List: bo6Perk3List,
  },
  warzone: {
    perk1List: warzonePerk1List,
    perk2List: warzonePerk2List,
    perk3List: warzonePerk3List,
  },
  vanguard: {
    perk1List: vanguardPerk1List,
    perk2List: vanguardPerk2List,
    perk3List: vanguardPerk3List,
  },
  "black-ops-four-zombies": {
    perk1List: bo4ZombiesList,
    perk2List: {},
    perk3List: {},
  },
  "cold-war": {
    perk1List: coldWarPerk1List,
    perk2List: coldWarPerk2List,
    perk3List: coldWarPerk3List,
  },
};

export function getPerkList(game: string): {
  perk1List: any;
  perk2List: any;
  perk3List: any;
} {
  return perks[game] || { perk1List: {}, perk2List: {}, perk3List: {} };
}
