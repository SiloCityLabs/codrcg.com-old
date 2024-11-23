import { getAssaultRifleAttachments } from "./attachments/getAssaultRifleAttachments";
import { getSmgAttachments } from "./attachments/getSmgAttachments";
import { getLmgAttachments } from "./attachments/getLmgAttachments";
import { getMarksmanRifleAttachments } from "./attachments/getMarksmanRifleAttachments";
import { getPistolAttachments } from "./attachments/getPistolAttachments";
import { getShotgunAttachments } from "./attachments/getShotgunAttachments";
import { getSniperAttachments } from "./attachments/getSniperAttachments";
import { getSpecialAttachments } from "./attachments/getSpecialAttachments";

export function getBO6Attachments(type: string, gun: string, count: number) {
  switch (type) {
    case "assault_rifle":
      return getAssaultRifleAttachments(gun, count);
    case "smg":
      return getSmgAttachments(gun, count);
    case "lmg":
      return getLmgAttachments(gun, count);
    case "marksman_rifle":
      return getMarksmanRifleAttachments(gun, count);
    case "pistol":
      return getPistolAttachments(gun, count);
    case "shotgun":
      return getShotgunAttachments(gun, count);
    case "sniper":
      return getSniperAttachments(gun, count);
    case "special":
      return getSpecialAttachments(gun, count);
    default:
      return {};
  }
}
