import { getAttachments } from "./attachments/getAttachments";
//Types
import { Weapon } from "@/types/Generator";

export function fetchAttachments(
  weapon: Weapon,
  type: string,
  count: number = 1
): any {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // const data = getAttachments(gun, type);

  return {};
}
