import glovesList from "@/json/modern-warfare/three/perk/gloves.json";
import bootsList from "@/json/modern-warfare/three/perk/boots.json";
import gearList from "@/json/modern-warfare/three/perk/gear.json";
import { randomListItem } from "@/helpers/randomListItem";

export function fetchPerks(): string {
  const perks: string[] = [];

  perks.push(
    randomListItem(glovesList).name,
    randomListItem(bootsList).name,
    randomListItem(gearList).name
  );

  let gear2: string;
  do {
    gear2 = randomListItem(gearList).name;
  } while (perks.includes(gear2));
  perks.push(gear2);

  return perks.join(", ");
}
