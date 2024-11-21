import nineMmPm from "@/json/black-ops-six/attachments/pistol/9mmPm.json";
import grekhova from "@/json/black-ops-six/attachments/pistol/grekhova.json";
import gs45 from "@/json/black-ops-six/attachments/pistol/gs45.json";
import stryder22 from "@/json/black-ops-six/attachments/pistol/stryder22.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getPistolAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "9mmpm":
      return nineMmPm;
    case "grekhova":
      return grekhova;
    case "gs45":
      return gs45;
    case "stryder22":
      return stryder22;
    default:
      return null;
  }
}
