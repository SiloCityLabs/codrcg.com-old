import sakinmg38 from "@/json/modern-warfare/two/attachments/lmg/sakinMg38.json";
import raalmg from "@/json/modern-warfare/two/attachments/lmg/raalMg.json";
import icarus556 from "@/json/modern-warfare/two/attachments/lmg/556icarus.json";
import rapph from "@/json/modern-warfare/two/attachments/lmg/rapph.json";
import hcr56 from "@/json/modern-warfare/two/attachments/lmg/hcr56.json";
import rpk from "@/json/modern-warfare/two/attachments/lmg/rpk.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  sakinmg38,
  raalmg,
  "556icarus": icarus556,
  rapph,
  hcr56,
  rpk,
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
