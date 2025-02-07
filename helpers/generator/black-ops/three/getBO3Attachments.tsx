import { getOptics } from "./attachments/get/getOptics";
import { getAttachments } from "./attachments/get/getAttachments";
//Types
import { Weapon } from "@/types/Generator";

const attachmentGetter: Record<
  string,
  (type: string, gun: string, count: number) => any
> = {
  optic: getOptics,
  attachments: getAttachments,
};

export function getBO3Attachments(
  weapon: Weapon,
  type: string,
  count: number = 1
): any {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (type === "all") {
    return {
      optic: getOptics(weapon.type, gun, count),
      attachments: getAttachments(weapon.type, gun, count),
    };
  }
  const getGunAttachments = attachmentGetter[type];

  if (getGunAttachments) {
    return getGunAttachments(weapon.type, gun, count);
  } else {
    return {};
  }
}
