import c9 from "@/json/black-ops-six/attachments/smg/c9.json";
import jackalPdw from "@/json/black-ops-six/attachments/smg/jackalPdw.json";
import kompakt92 from "@/json/black-ops-six/attachments/smg/kompakt92.json";
import ksv from "@/json/black-ops-six/attachments/smg/ksv.json";
import pp919 from "@/json/black-ops-six/attachments/smg/pp919.json";
import tanto22 from "@/json/black-ops-six/attachments/smg/tanto22.json";
//DLC Weapons
import saug from "@/json/black-ops-six/attachments/smg/saug.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getSmgAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "c9":
      return c9;
    case "jackalpdw":
      return jackalPdw;
    case "kompakt92":
      return kompakt92;
    case "ksv":
      return ksv;
    case "pp919":
      return pp919;
    case "tanto22":
      return tanto22;
    case "saug":
      return saug;
    default:
      return null;
  }
}
