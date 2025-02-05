import baseList from "@/json/modern-warfare/two/perk/base.json";
import bonusList from "@/json/modern-warfare/two/perk/bonus.json";
import ultimateList from "@/json/modern-warfare/two/perk/ultimate.json";
import { randomListItem } from "@/helpers/randomListItem";

export function fetchPerks(): string {
  const perks: string[] = [];

  perks.push(randomListItem(baseList).name);

  let basePerk2: string;
  do {
    basePerk2 = randomListItem(baseList).name;
  } while (perks.includes(basePerk2));
  perks.push(basePerk2);

  perks.push(randomListItem(bonusList).name, randomListItem(ultimateList).name);

  return perks.join(", ");
}
