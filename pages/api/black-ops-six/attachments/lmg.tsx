import gpmg7 from "@/json/black-ops-six/attachments/lmg/gpmg7.json";
import pu21 from "@/json/black-ops-six/attachments/lmg/pu21.json";
import xmg from "@/json/black-ops-six/attachments/lmg/xmg.json";
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
