import sirin9mm from "@/json/black-ops-six/attachments/special/sirin9mm.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getSpecialAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "sirin9mm":
      return sirin9mm;
    default:
      return null;
  }
}
