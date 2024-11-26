import { getLethalList } from "@/helpers/generator/equipment/getLethalList";
import { getTacticalList } from "@/helpers/generator/equipment/getTacticalList";
import { getFieldUpgradeList } from "@/helpers/generator/equipment/getFieldUpgradeList";
import { getVestList } from "@/helpers/generator/equipment/getVestList";
import { randomListItem } from "./randomListItem";
import { Equipment } from "@/types/Generator";

const equipmentListGetters: Record<string, (game: string) => any> = {
  lethal: getLethalList,
  tactical: getTacticalList,
  field_upgrade: getFieldUpgradeList,
  vest: getVestList,
};

export function fetchEquipment(type: string, game: string = ""): Equipment {
  const getEquipmentList = equipmentListGetters[type];

  if (getEquipmentList) {
    const dataList = getEquipmentList(game);
    return randomListItem(dataList);
  } else {
    return {} as Equipment; // Provide a default empty Equipment object
  }
}
