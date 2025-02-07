import lr762 from "@/json/black-ops/six/attachments/sniper/lr762.json";
import lw3a1Frostline from "@/json/black-ops/six/attachments/sniper/lw3a1Frostline.json";
import svd from "@/json/black-ops/six/attachments/sniper/svd.json";
import amrmod4 from "@/json/black-ops/six/attachments/sniper/amrmod4.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  lr762,
  lw3a1frostline: lw3a1Frostline,
  svd,
  amrmod4,
};

export function getSniperAttachments(gun: string, count: number): any {
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
