import { getLethalList } from "@/functions/generator/equipment/getLethalList";
import { getTacticalList } from "@/functions/generator/equipment/getTacticalList";
import { getFieldUpgradeList } from "@/functions/generator/equipment/getFieldUpgradeList";
import { randomListItem } from "./randomListItem";
import { Equipment } from "@/types/Generator";

export async function fetchEquipment(type: string, game: string = "") {
  const dataList = getEquipmentList(type, game);

  const data: Equipment = randomListItem(dataList);

  return data;
}

function getEquipmentList(type, game) {
  switch (type) {
    case "lethal":
      return getLethalList(game);
    case "tactical":
      return getTacticalList(game);
    case "field_upgrade":
      return getFieldUpgradeList(game);
    default:
      return {};
  }
}
