import { getCharacterList } from "@/helpers/generator/zombies/getCharacterList";
import { randomListItem } from "../../randomListItem";
import { ZombiesCharacter } from "@/types/Generator";

export function fetchZombiesCharacter(game: string = ""): ZombiesCharacter {
  const dataList = getCharacterList(game);

  const data = randomListItem(dataList);

  return data;
}
