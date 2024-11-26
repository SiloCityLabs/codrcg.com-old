import { getBO6Attachments } from "./generator/black-ops-six/getBO6Attachments";
//Types
import { Weapon } from "@/types/Generator";

const attachmentGetters: Record<
  string,
  (type: string, gun: string, count: number) => any
> = {
  "black-ops-six": getBO6Attachments,
};

export function fetchAttachments(weapon: Weapon, count: number = 5): any {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const getAttachments = attachmentGetters[weapon.game];

  if (getAttachments) {
    return getAttachments(weapon.type, gun, count);
  } else {
    return {};
  }
}
