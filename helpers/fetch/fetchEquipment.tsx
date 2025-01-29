import { getLethalList } from "@/helpers/generator/equipment/getLethalList";
import { getTacticalList } from "@/helpers/generator/equipment/getTacticalList";
import { getFieldUpgradeList } from "@/helpers/generator/equipment/getFieldUpgradeList";
import { getVestList } from "@/helpers/generator/equipment/getVestList";
import { randomListItem } from "../randomListItem";
import { Equipment } from "@/types/Generator";

const equipmentListGetters: Record<string, (game: string) => any> = {
  lethal: getLethalList,
  tactical: getTacticalList,
  field_upgrade: getFieldUpgradeList,
  vest: getVestList,
};

export function fetchEquipment(type: string, game: string = ""): Equipment {
  if (type === "lethal_tactical") {
    const lethalList = getLethalList(game);
    const tacticalList = getTacticalList(game);
    const combinedList = [...lethalList, ...tacticalList]; // Merge the lists
    return randomListItem(combinedList); // Select a random item from the merged list
  } else {
    const getEquipmentList = equipmentListGetters[type];

    if (getEquipmentList) {
      const dataList = getEquipmentList(game);
      return randomListItem(dataList);
    } else {
      return {} as Equipment;
    }
  }
}
