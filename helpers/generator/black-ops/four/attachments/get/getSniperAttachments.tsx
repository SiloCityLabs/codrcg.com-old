import koshka from "@/json/black-ops/four/attachments/sniper/koshka.json";
import outlaw from "@/json/black-ops/four/attachments/sniper/outlaw.json";
import paladinHb50 from "@/json/black-ops/four/attachments/sniper/paladinHb50.json";
import sdm from "@/json/black-ops/four/attachments/sniper/sdm.json";
//Helpers
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  koshka,
  outlaw,
  paladinhb50: paladinHb50,
  sdm,
};

export function getSniperAttachments(
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
