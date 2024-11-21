import { getBO6Attachments } from "./generator/black-ops-six/getBO6Attachments";
//Types
import { Weapon } from "@/types/Generator";

export async function fetchAttachments(weapon: Weapon, count: number = 5) {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const attachments = getAttachments(weapon.game, gun, count, weapon.type);

  return attachments;
}

function getAttachments(game, gun, count, type) {
  console.log("game, gun, count, type", game, gun, count, type);
  switch (game) {
    case "black-ops-six":
      return getBO6Attachments(type, gun, count);
    default:
      return {};
  }
}
