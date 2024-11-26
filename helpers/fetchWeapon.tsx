import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSecondaryList } from "@/helpers/generator/weapons/getSecondaryList";
import { getMeleeList } from "@/helpers/generator/weapons/getMeleeList";
import { randomListItem } from "./randomListItem";
import { fetchGame } from "@/helpers/fetchGame";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Types
import { Weapon } from "@/types/Generator";

const weaponListGetters: Record<string, (game: string) => any> = {
  primary: getPrimaryList,
  secondary: getSecondaryList,
  melee: getMeleeList,
  all: (game: string) =>
    mergeObjectsWithRekey(getPrimaryList(game), getSecondaryList(game)),
};

export function fetchWeapon(
  type: string = "",
  game: string = "",
  excludeWeapon: string = ""
): Weapon {
  game = game === "" ? fetchGame() : game;
  const getWeaponList = weaponListGetters[type];

  if (getWeaponList) {
    let data: Weapon;
    do {
      data = randomListItem(getWeaponList(game));
    } while (data.name === excludeWeapon);
    return data;
  } else {
    return {} as Weapon;
  }
}
