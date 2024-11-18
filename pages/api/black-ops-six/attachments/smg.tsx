import c9 from "@/json/black-ops-six/attachments/smg/c9.json";
import jackalPdw from "@/json/black-ops-six/attachments/smg/jackalPdw.json";
import kompakt92 from "@/json/black-ops-six/attachments/smg/kompakt92.json";
import ksv from "@/json/black-ops-six/attachments/smg/ksv.json";
import pp919 from "@/json/black-ops-six/attachments/smg/pp919.json";
import tanto22 from "@/json/black-ops-six/attachments/smg/tanto22.json";
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
    default:
      return null;
  }
}
