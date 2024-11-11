import xm4 from "@/json/black-ops-six/attachments/assault_rifle/xm4.json";
import ak74 from "@/json/black-ops-six/attachments/assault_rifle/ak74.json";

export default async function handler(req, res) {
  const body = req.body;
  console.log("attachments body33", body);
  const data = getGunAttachments(body.gun);
  console.log("attachments data22", data);

  res.status(200).json("");
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "xm4":
      return xm4;
    case "ak74":
      return ak74;
    default:
      return null;
  }
}
