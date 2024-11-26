import xrkstalker from "@/json/modern-warfare-three/attachments/sniper/xrkStalker.json";
import mors from "@/json/modern-warfare-three/attachments/sniper/mors.json";
import kattamr from "@/json/modern-warfare-three/attachments/sniper/kattamr.json";
import longbow from "@/json/modern-warfare-three/attachments/sniper/longbow.json";
import kvinhibitor from "@/json/modern-warfare-three/attachments/sniper/kvInhibitor.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  xrkstalker,
  mors,
  kattamr,
  longbow,
  kvinhibitor,
};

export function getSniperAttachments(gun: string, count: number): any {
  let attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
