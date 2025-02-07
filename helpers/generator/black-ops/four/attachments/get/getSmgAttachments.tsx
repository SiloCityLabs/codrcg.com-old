import cordite from "@/json/black-ops/four/attachments/smg/cordite.json";
import gks from "@/json/black-ops/four/attachments/smg/gks.json";
import mx9 from "@/json/black-ops/four/attachments/smg/mx9.json";
import saug9mm from "@/json/black-ops/four/attachments/smg/saug9mm.json";
import spitfire from "@/json/black-ops/four/attachments/smg/spitfire.json";
//Helpers
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  cordite,
  gks,
  mx9,
  saug9mm,
  spitfire,
};

export function getSmgAttachments(
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
