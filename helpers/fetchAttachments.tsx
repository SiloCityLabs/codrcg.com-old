import { getBO6Attachments } from "./generator/black-ops-six/getBO6Attachments";
import { getMW3Attachments } from "./generator/modern-warfare-three/getMW3Attachments";
import { getMW2Attachments } from "./generator/modern-warfare-two/getMW2Attachments";
import { getVanguardAttachments } from "./generator/vanguard/getVanguardAttachments";
//Types
import { Weapon } from "@/types/Generator";

const attachmentGetters: Record<
  string,
  (type: string, gun: string, count: number) => any
> = {
  "black-ops-six": getBO6Attachments,
  "modern-warfare-three": getMW3Attachments,
  "modern-warfare-two": getMW2Attachments,
  vanguard: getVanguardAttachments,
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
