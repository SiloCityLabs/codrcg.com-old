//AMES85, GPR91, Model L all use default556.json
import default556 from "@/json/black-ops-six/attachments/assault_rifle/default556.json";
//Custom ARs
import ak74 from "@/json/black-ops-six/attachments/assault_rifle/ak74.json";
import asVal from "@/json/black-ops-six/attachments/assault_rifle/asVal.json";
import goblinMk2 from "@/json/black-ops-six/attachments/assault_rifle/goblinMk2.json";
import xm4 from "@/json/black-ops-six/attachments/assault_rifle/xm4.json";
//DLC Weapons
import krigC from "@/json/black-ops-six/attachments/assault_rifle/krigC.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getAssaultRifleAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "ames85":
    case "gpr91":
    case "modell":
      return default556;
    case "ak74":
      return ak74;
    case "asval":
      return asVal;
    case "goblinmk2":
      return goblinMk2;
    case "xm4":
      return xm4;
    case "krigc":
      return krigC;
    default:
      return null;
  }
}
