const games = ["black-ops-six", "modern-warfare-three", "black-ops-six"];

export function fetchGame(): string {
  const randomIndex = Math.floor(Math.random() * games.length);

  return games[randomIndex];
}
