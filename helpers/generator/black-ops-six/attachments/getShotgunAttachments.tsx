import asg89 from "@/json/black-ops-six/attachments/shotgun/asg89.json";
import marineSp from "@/json/black-ops-six/attachments/shotgun/marineSp.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getShotgunAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "asg89":
      return asg89;
    case "marinesp":
      return marineSp;
    default:
      return null;
  }
}
