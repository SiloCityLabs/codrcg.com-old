import abr223 from "@/json/black-ops/four/attachments/tactical_rifle/abr223.json";
import augerdmr from "@/json/black-ops/four/attachments/tactical_rifle/augerdmr.json";
import swordfish from "@/json/black-ops/four/attachments/tactical_rifle/swordfish.json";
//Helpers
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  abr223,
  augerdmr,
  swordfish,
};

export function getTacticalRifleAttachments(
  type: string,
  gun: string,
  count: number
): any {
  const attachments: any = [];
  const data = attachmentsList[gun];
  const dataList = data[type];
  if (count === -1) {
    return data;
  }

  if (data && dataList) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
