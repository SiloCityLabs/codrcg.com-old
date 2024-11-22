import { getStreakList } from "@/helpers/generator/getStreakList";
import { randomListItem } from "./randomListItem";
import { Streak } from "@/types/Generator";
//Helpers
import { implodeObject } from "./implodeObject";

export async function fetchStreaks(
  game: string = "",
  isHighRoller: boolean = false
) {
  let count = 0;
  let streak: Streak;
  const streakCount = isHighRoller ? 4 : 3;
  let streaks: Object = {};

  while (count < streakCount) {
    streak = randomListItem(getStreakList(game));

    if (!Object.values(streaks).includes(streak.name)) {
      streaks[streak.score] = streak.name;
      count++;
    }
  }
  return implodeObject(streaks);
}
