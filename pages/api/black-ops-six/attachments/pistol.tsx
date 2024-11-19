import nineMmPm from "@/json/black-ops-six/attachments/pistol/9mmPm.json";
import grekhova from "@/json/black-ops-six/attachments/pistol/grekhova.json";
import gs45 from "@/json/black-ops-six/attachments/pistol/gs45.json";
import stryder22 from "@/json/black-ops-six/attachments/pistol/stryder22.json";
//DLC Weapons
import sirin9mm from "@/json/black-ops-six/attachments/pistol/sirin9mm.json";
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
    case "9mmpm":
      return nineMmPm;
    case "grekhova":
      return grekhova;
    case "gs45":
      return gs45;
    case "stryder22":
      return stryder22;
    case "sirin9mm":
      return sirin9mm;
    default:
      return null;
  }
}
