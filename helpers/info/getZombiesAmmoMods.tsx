import { getAmmoModList } from "@/helpers/generator/zombies/getAmmoModList";
import { AmmoMod } from "@/types/Generator";

export function getZombiesAmmoMods(
  game: string = "all",
  value: string = ""
): AmmoMod | AmmoMod[] {
  const data = getAmmoModList(game) as AmmoMod[];

  return data;
}
