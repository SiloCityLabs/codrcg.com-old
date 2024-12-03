import { randomListItem } from "@/helpers/randomListItem";
import { AmmoMod } from "@/types/Generator";
import dataList from "@/json/black-ops-six/zombies/ammo_mod.json";

export function fetchBO6AmmoMod() {
  const data: AmmoMod = randomListItem(dataList);

  return data.name;
}
