import { randomNumber } from "./randomNumber";

export async function fetchEquipment(type: string, game: string = "") {
  game = game === "" ? getGame() : game;

  const response = await fetch(`/api/${game}/${type}`);

  if (!response.ok) {
    throw new Error(`Error fetching ${type} weapons: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

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
