import aek973 from "@/json/black-ops-six/attachments/marksman_rifle/aek973.json";
import dm10 from "@/json/black-ops-six/attachments/marksman_rifle/dm10.json";
import swat556 from "@/json/black-ops-six/attachments/marksman_rifle/swat556.json";
import tsarkov762 from "@/json/black-ops-six/attachments/marksman_rifle/tsarkov762.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

export function getMarksmanRifleAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = getGunAttachments(gun);

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
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
