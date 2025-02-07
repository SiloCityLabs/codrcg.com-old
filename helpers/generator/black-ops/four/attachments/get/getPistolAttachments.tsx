import kap45mkii from "@/json/black-ops/four/attachments/pistol/kap45mkii.json";
import mozu from "@/json/black-ops/four/attachments/pistol/mozu.json";
import rk7garrison from "@/json/black-ops/four/attachments/pistol/rk7garrison.json";
import strife from "@/json/black-ops/four/attachments/pistol/strife.json";
//Helpers
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  kap45mkii,
  mozu,
  rk7garrison,
  strife,
};

export function getPistolAttachments(
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
