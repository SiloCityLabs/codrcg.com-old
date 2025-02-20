import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Data
import bo6List from "@/json/black-ops/six/weapon/primary.json";
import mw3List from "@/json/modern-warfare/three/weapon/primary.json";
import mw2List from "@/json/modern-warfare/two/weapon/primary.json";
import mw2RiotList from "@/json/modern-warfare/two/weapon/riot.json";
import vanguardList from "@/json/vanguard/weapon/primary.json";
import coldWarList from "@/json/black-ops/cold-war/weapon/primary.json";
import bo3List from "@/json/black-ops/three/weapon/primary.json";
import bo4List from "@/json/black-ops/four/weapon/primary.json";
//Black Ops 4 Zombies
import bo4ZombieList from "@/json/black-ops/four/zombies/start_weapon.json";
import bo4ZombieAetherSpecialList from "@/json/black-ops/four/zombies/aether_story/special_weapon.json";
import bo4ZombieChaosSpecialList from "@/json/black-ops/four/zombies/chaos_story/special_weapon.json";
import mwrList from "@/json/modern-warfare/remastered/weapon/primary.json";
import ww2List from "@/json/world-war-two/weapon/primary.json";
import ww2ZombieList from "@/json/world-war-two/zombies/weapon.json";
import iwList from "@/json/infinite-warfare/weapon/primary.json";
import wawList from "@/json/world-at-war/weapon/primary.json";

const primaryWeapons: Record<string, any> = {
  // warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  warzone: mergeObjectsWithRekey(bo6List, mw3List),
  "black-ops-six": bo6List,
  // "modern-warfare-three": mergeObjectsWithRekey(mw2RiotList, mw3List, mw2List),
  "modern-warfare-three": mergeObjectsWithRekey(mw2RiotList, mw3List),
  "modern-warfare-two": mw2List,
  vanguard: vanguardList,
  "cold-war": coldWarList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "black-ops-four-zombies": bo4ZombieList,
  "aether_story-black-ops-four-zombies": bo4ZombieAetherSpecialList,
  "chaos_story-black-ops-four-zombies": bo4ZombieChaosSpecialList,
  "modern-warfare-remastered": mwrList,
  "world-war-two": ww2List,
  "world-war-two-zombies": ww2ZombieList,
  "infinite-warfare": iwList,
  "world-at-war": wawList,
};

export function getPrimaryList(game: string): any {
  return primaryWeapons[game] || {};
}
