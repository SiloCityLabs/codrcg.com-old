import m60 from "@/json/black-ops/cold-war/attachments/lmg/m60.json";
import mg82 from "@/json/black-ops/cold-war/attachments/lmg/mg82.json";
import rpd from "@/json/black-ops/cold-war/attachments/lmg/rpd.json";
import stoner63 from "@/json/black-ops/cold-war/attachments/lmg/stoner63.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  m60,
  mg82,
  rpd,
  stoner63,
};

export function getLmgAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
