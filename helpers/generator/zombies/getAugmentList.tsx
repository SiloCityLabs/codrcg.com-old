import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Black Ops 4 Zombies
import bo6AmmoModList from "@/json/black-ops/six/zombies/augments/ammo-mods.json";
import bo6FieldUpgradeList from "@/json/black-ops/six/zombies/augments/field-upgrades.json";
import bo6PerkAColaList from "@/json/black-ops/six/zombies/augments/perk-a-colas.json";

const list: Record<string, any> = {
  "black-ops-six-zombies": mergeObjectsWithRekey(
    bo6AmmoModList,
    bo6FieldUpgradeList,
    bo6PerkAColaList
  ),
  "ammo-mod-black-ops-six-zombies": bo6AmmoModList,
  "field-upgrade-black-ops-six-zombies": bo6FieldUpgradeList,
  "perk-a-cola-black-ops-six-zombies": bo6PerkAColaList,
};

export function getAugmentList(game: string): any {
  return list[game] || {};
}
