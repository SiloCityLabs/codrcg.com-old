import { getStreakList } from "@/helpers/generator/getStreakList";
import { randomListItem } from "./randomListItem";

export function fetchStreaks(
  game: string = "",
  isHighRoller: boolean = false
): string {
  const streakCount = isHighRoller ? 4 : 3;
  const streaks: Record<number, string> = {};
  const selectedStreaks = new Set<string>();

  while (selectedStreaks.size < streakCount) {
    const streak = randomListItem(getStreakList(game));
    if (!selectedStreaks.has(streak.name)) {
      streaks[streak.score] = streak.name;
      selectedStreaks.add(streak.name);
    }
  }

  return Object.entries(streaks)
    .map(([score, name]) => `${score}: ${name}`)
    .join(", ");
}
