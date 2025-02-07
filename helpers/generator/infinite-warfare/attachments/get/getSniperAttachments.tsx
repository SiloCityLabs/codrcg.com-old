import default1 from "@/json/infinite-warfare/attachments/sniper/default1.json";
import default2 from "@/json/infinite-warfare/attachments/sniper/default2.json";
import trek50 from "@/json/infinite-warfare/attachments/sniper/trek50.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  kbslongbow: default1,
  widowmaker: default1,
  dmr1: default1,
  proteus: default1,
  ebr800: default2,
  trek50,
};

export function getSniperAttachments(
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

  if (data) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
