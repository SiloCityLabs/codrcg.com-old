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

export default async function handler(req, res) {
  let attachments: any = {};
  const body = req.body;
  const data = getGunAttachments(body.gun);

  if (data) {
    randomizeAttachments(attachments, data, body.count);
  }

  res.status(200).json(attachments);
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
