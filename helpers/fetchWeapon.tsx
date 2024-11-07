import { randomNumber } from "./randomNumber";

export async function fetchWeapon(type: string = "", game: string = "") {
  type = type === "" ? getType() : type;
  game = game === "" ? getGame() : game;

  const response = await fetch(`/api/${game}/${type}`);

  if (!response.ok) {
    throw new Error(`Error fetching ${type} weapons: ${response.statusText}`);
  }

  const weapon = await response.json();
  return weapon;
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

function getType() {
  let type: string;
  const randomNum = randomNumber(0, 6);

  switch (randomNum) {
    case 1:
    case 3:
    case 5:
      type = "secondary";
      break;
    default:
      type = "primary";
      break;
  }

  return type;
}
