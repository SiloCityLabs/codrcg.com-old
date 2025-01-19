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

export function fetchAttachments(
  weapon: Weapon,
  type: string,
  count: number = 1
): any {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const getAttachments = attachmentGetter[type];

  if (getAttachments) {
    return getAttachments(weapon.type, gun, count);
  } else {
    return {};
  }
}
