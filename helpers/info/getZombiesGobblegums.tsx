import { getGobblegumList } from "@/helpers/generator/zombies/getGobblegumList";
import { Gobblegum } from "@/types/Generator";

export function getZombiesGobblegums(
  game: string = "all",
  value: string = ""
): Gobblegum | Gobblegum[] {
  const data = getGobblegumList(game) as Gobblegum[];

  return data;
}
