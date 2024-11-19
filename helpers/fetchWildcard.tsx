import { randomNumber } from "./randomNumber";

export async function fetchWildcard(game: string = "") {
  game = game === "" ? getGame() : game;

  const response = await fetch(`/api/${game}/wildcard`);

  if (!response.ok) {
    throw new Error(`Error fetching ${game} wildcard: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

//TODO: Maybe make this its own function for WARZONE
function getGame() {
  let game: string;
  const randomNum = randomNumber(0, 6);

  switch (randomNum) {
    case 1:
    case 3:
    case 5:
      game = "modern-warfare-two";
      break;
    default:
      game = "modern-warfare-three";
      break;
  }

  return game;
}
