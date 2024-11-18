import aek973 from "@/json/black-ops-six/attachments/marksman_rifle/aek973.json";
import dm10 from "@/json/black-ops-six/attachments/marksman_rifle/dm10.json";
import swat556 from "@/json/black-ops-six/attachments/marksman_rifle/swat556.json";
import tsarkov762 from "@/json/black-ops-six/attachments/marksman_rifle/tsarkov762.json";
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
    case "aek973":
      return aek973;
    case "dm10":
      return dm10;
    case "swat556":
      return swat556;
    case "tsarkov762":
      return tsarkov762;
    default:
      return null;
  }
}
