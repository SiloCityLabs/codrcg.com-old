import bo6List from "@/json/black-ops-six/streaks.json";

const streaks: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getStreakList(game: string): any {
  return streaks[game] || {};
}
