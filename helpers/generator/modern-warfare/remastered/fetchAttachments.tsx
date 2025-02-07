import { getMWRAttachments } from "./getMWRAttachments";
//Types
import { Weapon } from "@/types/Generator";

export function fetchAttachments(weapon: Weapon, count: number = 1): any {
  if (weapon?.no_attach_info) {
    return [`No attachment info. Randomly select ${count}.`];
  }

  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const data = getMWRAttachments(weapon.type, gun, count);

  return data;
}
