import { getStreakList } from "@/helpers/generator/getStreakList";
import { Streak } from "@/types/Generator";

export function getStreaks(
  game: string = "all",
  value: string = ""
): Streak | Record<string, Streak> {
  const data = getStreakList(game) as Record<string, Streak>;

  return data;
}
