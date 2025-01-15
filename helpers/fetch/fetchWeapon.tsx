import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSecondaryList } from "@/helpers/generator/weapons/getSecondaryList";
import { getMeleeList } from "@/helpers/generator/weapons/getMeleeList";
import { randomListItem } from "../randomListItem";
import { fetchGame } from "@/helpers/fetch/fetchGame";
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
  excludeWeapon: string = "",
  needsAttachments: boolean = false
): Weapon {
  game = game === "" ? fetchGame() : game;
  const getWeaponList = weaponListGetters[type];
  let rollAgain = false;

  if (getWeaponList) {
    let data: Weapon;

    do {
      rollAgain = false;
      data = randomListItem(getWeaponList(game));

      //Roll a weapon that has attachments\
      if (needsAttachments && data.no_attach) {
        rollAgain = true;
      }
    } while (data.name === excludeWeapon || rollAgain);

    return data;
  } else {
    return {} as Weapon;
  }
}
