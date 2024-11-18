import asg89 from "@/json/black-ops-six/attachments/shotgun/asg89.json";
import marineSp from "@/json/black-ops-six/attachments/shotgun/marineSp.json";
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
    case "asg89":
      return asg89;
    case "marinesp":
      return marineSp;
    default:
      return null;
  }
}
