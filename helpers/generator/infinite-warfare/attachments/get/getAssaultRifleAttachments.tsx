import default1 from "@/json/infinite-warfare/attachments/assault_rifle/default1.json";
import default2 from "@/json/infinite-warfare/attachments/assault_rifle/default2.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  nv4: default1,
  kbar32: default1,
  grail: default1,
  r3k: default2,
  type2: default2,
  volk: default2,
  rvn: default2,
  xeon: default2,
};

export function getAssaultRifleAttachments(
  type: string,
  gun: string,
  count: number
): any {
  const attachments: any = [];
  const data = attachmentsList[gun];
  const dataList = data[type];
  if (count === -1) {
    return data;
  }

  if (data && dataList) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
