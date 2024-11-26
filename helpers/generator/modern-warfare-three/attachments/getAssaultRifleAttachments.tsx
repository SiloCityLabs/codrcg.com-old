import stg44 from "@/json/modern-warfare-three/attachments/assault_rifle/stg44.json";
import bal27 from "@/json/modern-warfare-three/attachments/assault_rifle/bal27.json";
import mtz556 from "@/json/modern-warfare-three/attachments/assault_rifle/mtz556.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  stg44,
  bal27,
  mtz556,
};

export function getAssaultRifleAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
