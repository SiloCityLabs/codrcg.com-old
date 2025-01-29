import division from "@/json/world-war-two/division.json";
import basicTraining from "@/json/world-war-two/basic-training.json";
import { randomListItem } from "@/helpers/randomListItem";

const perks: Record<string, any> = {
  division,
  "basic-training": basicTraining,
  all: [...division, ...basicTraining],
};

export function fetchPerk(
  perk: string,
  currentPerks: string | string[] = ""
): string {
  let randPerk: string;
  if (typeof currentPerks === "string") {
    currentPerks = [currentPerks]; // Convert single string to an array
  }
  console.log("fetchPerk", perk);
  console.log("fetchPerk perks[perk]", perks[perk]);

  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerks.includes(randPerk));

  return randPerk;
}
