import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSecondaryList } from "@/helpers/generator/weapons/getSecondaryList";
import { getMeleeList } from "@/helpers/generator/weapons/getMeleeList";
import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
//Types
import { Weapon } from "@/types/Generator";

export function getWeapon(
  game: string = "all",
  value: string = ""
): Weapon | Weapon[] {
  const data = mergeObjectsWithRekey(
    getPrimaryList(game),
    getSecondaryList(game),
    getMeleeList(game)
  ) as Weapon[];

  return data;
}
