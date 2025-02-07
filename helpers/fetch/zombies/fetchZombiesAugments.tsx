import { getAugmentList } from "@/helpers/generator/zombies/getAugmentList";

export function fetchZombiesAugments(game: string = ""): Record<string, any> {
  const defaultDataList = getAugmentList(game);
  const dataList = {};

  for (const key in defaultDataList) {
    const item = defaultDataList[key];
    const majorUpgrades = item.major;
    const minorUpgrades = item.minor;

    // Create a copy of the item to avoid modifying the original
    dataList[key] = { ...item };
    dataList[key].major =
      majorUpgrades[Math.floor(Math.random() * majorUpgrades.length)].name;
    dataList[key].minor =
      minorUpgrades[Math.floor(Math.random() * minorUpgrades.length)].name;
  }

  return dataList;
}
