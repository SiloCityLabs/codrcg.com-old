import aek973 from "@/json/black-ops/six/attachments/marksman_rifle/aek973.json";
import dm10 from "@/json/black-ops/six/attachments/marksman_rifle/dm10.json";
import swat556 from "@/json/black-ops/six/attachments/marksman_rifle/swat556.json";
import tsarkov762 from "@/json/black-ops/six/attachments/marksman_rifle/tsarkov762.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  aek973,
  dm10,
  swat556,
  tsarkov762,
};

export function getMarksmanRifleAttachments(gun: string, count: number): any {
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
