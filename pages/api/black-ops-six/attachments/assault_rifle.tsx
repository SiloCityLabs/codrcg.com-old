import ak74 from "@/json/black-ops-six/attachments/assault_rifle/ak74.json";
import ames85 from "@/json/black-ops-six/attachments/assault_rifle/ames85.json";
import asVal from "@/json/black-ops-six/attachments/assault_rifle/asVal.json";
import goblinMk2 from "@/json/black-ops-six/attachments/assault_rifle/goblinMk2.json";
import gpr91 from "@/json/black-ops-six/attachments/assault_rifle/gpr91.json";
import modelL from "@/json/black-ops-six/attachments/assault_rifle/modelL.json";
import xm4 from "@/json/black-ops-six/attachments/assault_rifle/xm4.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export default async function handler(req, res) {
  let attachments: any = {};
  const body = req.body;
  const data = getGunAttachments(body.gun);

  if (data) {
    randomizeAttachments(attachments, data, body.count);
  }

  console.info("attachments", attachments);

  res.status(200).json(attachments);
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "ak74":
      return ak74;
    case "ames85":
      return ames85;
    case "asval":
      return asVal;
    case "goblinmk2":
      return goblinMk2;
    case "gpr91":
      return gpr91;
    case "modell":
      return modelL;
    case "xm4":
      return xm4;
    default:
      return null;
  }
}
