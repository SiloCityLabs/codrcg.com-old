import gpmg7 from "@/json/black-ops-six/attachments/lmg/gpmg7.json";
import pu21 from "@/json/black-ops-six/attachments/lmg/pu21.json";
import xmg from "@/json/black-ops-six/attachments/lmg/xmg.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getLmgAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "gpmg7":
      return gpmg7;
    case "pu21":
      return pu21;
    case "xmg":
      return xmg;
    default:
      return null;
  }
}
