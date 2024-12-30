import kar98k from "@/json/modern-warfare-three/attachments/marksman_rifle/kar98k.json";
import kvdenforcer from "@/json/modern-warfare-three/attachments/marksman_rifle/kvdEnforcer.json";
import mcw68 from "@/json/modern-warfare-three/attachments/marksman_rifle/mcw68.json";
import dm56 from "@/json/modern-warfare-three/attachments/marksman_rifle/dm56.json";
import mtzinterceptor from "@/json/modern-warfare-three/attachments/marksman_rifle/mtzInterceptor.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  kar98k,
  kvdenforcer,
  mcw68,
  dm56,
  mtzinterceptor,
};

export function getMarksmanRifleAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
