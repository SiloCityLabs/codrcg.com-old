import bo6List from "@/json/black-ops/six/weapon/primary.json";
import mw3List from "@/json/modern-warfare-three/weapon/primary.json";
import vanguardList from "@/json/vanguard/weapon/primary.json";
import coldWarList from "@/json/black-ops/cold-war/weapon/primary.json";
import bo3List from "@/json/black-ops/three/weapon/primary.json";
import bo4List from "@/json/black-ops/four/weapon/primary.json";
//Black Ops 4 Zombies
import bo4ZombieList from "@/json/black-ops/four/zombies/start_weapon.json";
import bo4ZombieAetherSpecialList from "@/json/black-ops/four/zombies/aether_story/special_weapon.json";
import bo4ZombieChaosSpecialList from "@/json/black-ops/four/zombies/chaos_story/special_weapon.json";

const primaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
  "cold-war": coldWarList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "black-ops-four-zombies": bo4ZombieList,
  "aether_story-black-ops-four-zombies": bo4ZombieAetherSpecialList,
  "chaos_story-black-ops-four-zombies": bo4ZombieChaosSpecialList,
};

export function getPrimaryList(game: string): any {
  return primaryWeapons[game] || {};
}
