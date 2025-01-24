import glovesList from "@/json/modern-warfare/three/perk/gloves.json";
import bootsList from "@/json/modern-warfare/three/perk/boots.json";
import gearList from "@/json/modern-warfare/three/perk/gear.json";
import { randomListItem } from "@/helpers/randomListItem";

export function fetchPerks(allowGear2: boolean = true): string {
  const perks: string[] = [];

  perks.push(
    randomListItem(glovesList).name,
    randomListItem(bootsList).name,
    randomListItem(gearList).name
  );

  if (allowGear2) {
    let gear2: string;
    do {
      gear2 = randomListItem(gearList).name;
    } while (perks.includes(gear2));
    perks.push(gear2);
  }

  return perks.join(", ");
}
