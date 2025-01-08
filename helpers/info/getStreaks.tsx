import { getStreakList } from "@/helpers/generator/getStreakList";
import { Streak } from "@/types/Generator";

export function getStreaks(
  game: string = "all",
  value: string = ""
): Streak | Streak[] {
  const data = getStreakList(game) as Streak[];
  console.log(data);

  return data;
}
