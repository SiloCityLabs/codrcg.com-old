import adList from "../../json/cod/adjectives.json";
import nounList from "../../json/cod/nouns.json";
import { randomListItem } from "../randomListItem";

export function fetchClassName(): string {
  let adjective = randomListItem(adList);
  let noun = randomListItem(nounList);

  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  return `The ${adjective} ${noun}`;
}
