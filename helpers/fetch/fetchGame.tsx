const games = ["black-ops-six", "modern-warfare-3", "black-ops-six"];

export function fetchGame(): string {
  //Temp: This will change once we implement MW3 Weapons
  return "black-ops-six";

  const randomIndex = Math.floor(Math.random() * games.length);
  return games[randomIndex];
}
