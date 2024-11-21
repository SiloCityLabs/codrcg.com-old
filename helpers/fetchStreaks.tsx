import { getStreakList } from "@/functions/generator/getStreakList";
import { randomListItem } from "./randomListItem";

export async function fetchStreaks(
  game: string = "",
  isHighRoller: boolean = false
) {
  let count = 0;
  let streak: string;
  const streakCount = isHighRoller ? 4 : 3;
  let streaks: string[] = [];

  while (count < streakCount) {
    streak = randomListItem(getStreakList(game)).name;

    if (!streaks.includes(streak)) {
      streaks[count] = streak;
      count++;
    }
  }

  return streaks.join(", ");
}
