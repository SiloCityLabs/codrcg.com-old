import streaksList from "@/json/black-ops-six/streaks.json";
import { randomListItem } from "@/helpers/randomListItem";

export default async function handler(req, res) {
  const body = req.body;
  let count = 0;
  let streak: string;
  const streakCount = body.isHighRoller ? 4 : 3;
  let streaks: string[] = [];

  while (count < streakCount) {
    streak = randomListItem(streaksList).name;

    if (!streaks.includes(streak)) {
      streaks[count] = streak;
      count++;
    }
  }

  res.status(200).json(streaks.join(", "));
}
