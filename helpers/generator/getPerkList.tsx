import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
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
//Black Ops 3
import bo3Perk1List from "@/json/black-ops/three/perk/perk1.json";
import bo3Perk2List from "@/json/black-ops/three/perk/perk2.json";
import bo3Perk3List from "@/json/black-ops/three/perk/perk3.json";
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
//Modern Warfare Three
import mw3BootsList from "@/json/modern-warfare/three/perk/boots.json";
import mw3GearList from "@/json/modern-warfare/three/perk/gear.json";
import mw3GlovesList from "@/json/modern-warfare/three/perk/gloves.json";
//Modern Warfare Remastered
import mwrPerk1List from "@/json/modern-warfare/remastered/perk/perk1.json";
import mwrPerk2List from "@/json/modern-warfare/remastered/perk/perk2.json";
import mwrPerk3List from "@/json/modern-warfare/remastered/perk/perk3.json";
//World War Two
import ww2DivisionList from "@/json/world-war-two/division.json";
import ww2BasicTrainingList from "@/json/world-war-two/basic-training.json";
//World War Two Zombies
import ww2CamouflageList from "@/json/world-war-two/zombies/mods/camouflage.json";
import ww2FreefireList from "@/json/world-war-two/zombies/mods/freefire.json";
import ww2FrontlineList from "@/json/world-war-two/zombies/mods/frontline.json";
import ww2ShellshockList from "@/json/world-war-two/zombies/mods/shellshock.json";
import ww2UniversalList from "@/json/world-war-two/zombies/mods/universal.json";

const perks: Record<
  string,
  { perk1List: any; perk2List: any; perk3List: any }
> = {
  "world-war-two-zombies": {
    perk1List: mergeObjectsWithRekey(ww2UniversalList, ww2CamouflageList),
    perk2List: mergeObjectsWithRekey(ww2FreefireList, ww2FrontlineList),
    perk3List: ww2ShellshockList,
  },
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
  "modern-warfare-three": {
    perk1List: mw3BootsList,
    perk2List: mw3GearList,
    perk3List: mw3GlovesList,
  },
  "black-ops-three": {
    perk1List: bo3Perk1List,
    perk2List: bo3Perk2List,
    perk3List: bo3Perk3List,
  },
  "modern-warfare-remastered": {
    perk1List: mwrPerk1List,
    perk2List: mwrPerk2List,
    perk3List: mwrPerk3List,
  },
  "world-war-two": {
    perk1List: ww2DivisionList,
    perk2List: ww2BasicTrainingList,
    perk3List: {},
  },
};

export function getPerkList(game: string): {
  perk1List: any;
  perk2List: any;
  perk3List: any;
} {
  return perks[game] || { perk1List: {}, perk2List: {}, perk3List: {} };
}
