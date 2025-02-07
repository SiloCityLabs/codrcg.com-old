import bo6List from "@/json/black-ops/six/zombies/field_upgrade.json";
import vanguardList from "@/json/vanguard/zombies/artifacts.json";
import coldWarList from "@/json/black-ops/cold-war/zombies/field_upgrade.json";
import mw3List from "@/json/modern-warfare/three/zombies/field_upgrade.json";
import ww2List from "@/json/world-war-two/zombies/special.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
  vanguard: vanguardList,
  "cold-war": coldWarList,
  "modern-warfare-three": mw3List,
  "world-war-two-zombies": ww2List,
};

export function getFieldUpgradeList(game: string): any {
  return list[game] || {};
}
