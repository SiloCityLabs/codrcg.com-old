import bo6List from "@/json/black-ops/six/streaks.json";
import mw3List from "@/json/modern-warfare/three/streaks.json";
import vanguardList from "@/json/vanguard/streaks.json";
import bo3List from "@/json/black-ops/three/streaks.json";
import bo4List from "@/json/black-ops/four/streaks.json";
import coldWarList from "@/json/black-ops/cold-war/streaks.json";
import ww2List from "@/json/world-war-two/streaks.json";
import mw2List from "@/json/modern-warfare/two/streaks.json";
import iwList from "@/json/infinite-warfare/streaks.json";

const streaks: Record<string, any> = {
  "black-ops-six": bo6List,
  "modern-warfare-three": mw3List,
  vanguard: vanguardList,
  "black-ops-three": bo3List,
  "black-ops-four": bo4List,
  "cold-war": coldWarList,
  "world-war-two": ww2List,
  "modern-warfare-two": mw2List,
  "infinite-warfare": iwList,
};

export function getStreakList(game: string): any {
  return streaks[game] || {};
}
