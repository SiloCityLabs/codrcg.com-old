import gpmg7 from "@/json/black-ops/six/attachments/lmg/gpmg7.json";
import pu21 from "@/json/black-ops/six/attachments/lmg/pu21.json";
import xmg from "@/json/black-ops/six/attachments/lmg/xmg.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  gpmg7,
  pu21,
  xmg,
};

export function getLmgAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
