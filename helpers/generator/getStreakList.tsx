import bo6List from "@/json/black-ops-six/streaks.json";
import mw3List from "@/json/modern-warfare-three/streaks.json";

const streaks: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
};

export function getStreakList(game: string): any {
  return streaks[game] || {};
}
