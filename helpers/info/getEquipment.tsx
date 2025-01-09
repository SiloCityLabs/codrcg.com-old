import { mergeObjectsWithRekey } from "@/helpers/mergeObjectsWithRekey";
import { getLethalList } from "@/helpers/generator/equipment/getLethalList";
import { getTacticalList } from "@/helpers/generator/equipment/getTacticalList";
import { getFieldUpgradeList } from "@/helpers/generator/equipment/getFieldUpgradeList";
import { getVestList } from "@/helpers/generator/equipment/getVestList";
import { Equipment } from "@/types/Generator";

export function getEquipment(
  game: string = "all",
  value: string = ""
): Equipment | Record<string, Equipment> {
  const data = mergeObjectsWithRekey(
    getLethalList(game),
    getTacticalList(game),
    getFieldUpgradeList(game)
  ) as Record<string, Equipment>;

  console.log("getEquipment", data);

  return data;
}
