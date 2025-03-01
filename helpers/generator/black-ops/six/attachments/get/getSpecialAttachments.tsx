import sirin9mm from "@/json/black-ops/six/attachments/special/sirin9mm.json";
import d13sector from "@/json/black-ops/six/attachments/special/d13sector.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  sirin9mm,
  d13sector,
};

export function getSpecialAttachments(gun: string, count: number): any {
  let attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
