import { randomizeAttachments } from "@/helpers/randomizeAttachments";
import dm56 from "@/json/modern-warfare/three/attachments/marksman_rifle/dm56.json";
import kar98k from "@/json/modern-warfare/three/attachments/marksman_rifle/kar98k.json";
import kvdEnforcer from "@/json/modern-warfare/three/attachments/marksman_rifle/kvdEnforcer.json";
import mcw68 from "@/json/modern-warfare/three/attachments/marksman_rifle/mcw68.json";
import mtzInterceptor from "@/json/modern-warfare/three/attachments/marksman_rifle/mtzInterceptor.json";

const attachmentsList: Record<string, any> = {
  dm56,
  kar98k,
  "kvdenforcer": kvdEnforcer,
  mcw68,
  "mtzinterceptor": mtzInterceptor
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
