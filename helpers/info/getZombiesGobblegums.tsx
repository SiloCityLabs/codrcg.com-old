import { getGobblegumList } from "@/helpers/generator/zombies/getGobblegumList";
import { Gobblegum } from "@/types/Generator";

export function getZombiesGobblegums(
  game: string = "all",
  value: string = ""
): Gobblegum | Record<string, Gobblegum> {
  const data = getGobblegumList(game) as Record<string, Gobblegum>;

  return data;
}
