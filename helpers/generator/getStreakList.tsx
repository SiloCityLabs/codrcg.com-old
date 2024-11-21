import bo6List from "@/json/black-ops-six/streaks.json";

export function getStreakList(game: string) {
  switch (game) {
    case "black-ops-six":
      return bo6List;
    default:
      return {};
  }
}
