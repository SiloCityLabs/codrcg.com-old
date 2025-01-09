import { getAmmoModList } from "@/helpers/generator/zombies/getAmmoModList";
import { AmmoMod } from "@/types/Generator";

export function getZombiesAmmoMods(
  game: string = "all",
  value: string = ""
): AmmoMod | Record<string, AmmoMod> {
  const data = getAmmoModList(game) as Record<string, AmmoMod>;

  return data;
}
