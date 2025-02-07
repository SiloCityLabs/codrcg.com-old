import default1 from "@/json/infinite-warfare/attachments/smg/default1.json";
import default2 from "@/json/infinite-warfare/attachments/smg/default2.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  fhr40: default1,
  karma45: default1,
  rprevo: default1,
  hvr: default1,
  vpr: default1,
  trencher: default1,
  raijinemx: default1,
  erad: default2,
};

export function getSmgAttachments(
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

  data ? randomizeAttachments(attachments, dataList, count) : {};

  return attachments;
}
