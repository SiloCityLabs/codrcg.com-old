import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSecondaryList } from "@/helpers/generator/weapons/getSecondaryList";
import { getMeleeList } from "@/helpers/generator/weapons/getMeleeList";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import { randomListItem } from "./randomListItem";
import { Weapon } from "@/types/Generator";
import { fetchGame } from "@/helpers/fetchGame";

export async function fetchWeapon(
  type: string = "",
  game: string = "",
  weapon: string = ""
) {
  //Choose random game to select a weapon from
  game = game === "" ? fetchGame() : game;
  const dataList = getWeaponList(type, game);
  let data: Weapon;

  while (true) {
    data = randomListItem(dataList);

    if (data.name != weapon) {
      break;
    }
  }

  return data;
}

function getWeaponList(type, game) {
  switch (type) {
    case "primary":
      return getPrimaryList(game);
    case "secondary":
      return getSecondaryList(game);
    case "all":
      return mergeObjectsWithRekey(
        getPrimaryList(game),
        getSecondaryList(game)
      );
    case "melee":
      return getMeleeList(game);
    default:
      return {};
  }
}
