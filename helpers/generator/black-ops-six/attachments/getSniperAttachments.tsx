import lr762 from "@/json/black-ops-six/attachments/sniper/lr762.json";
import lw3a1Frostline from "@/json/black-ops-six/attachments/sniper/lw3a1Frostline.json";
import svd from "@/json/black-ops-six/attachments/sniper/svd.json";
//DLC Weapons
import amrMod4 from "@/json/black-ops-six/attachments/sniper/amrMod4.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getSniperAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "lr762":
      return lr762;
    case "lw3a1frostline":
      return lw3a1Frostline;
    case "svd":
      return svd;
    case "amrmod4":
      return amrMod4;
    default:
      return null;
  }
}
