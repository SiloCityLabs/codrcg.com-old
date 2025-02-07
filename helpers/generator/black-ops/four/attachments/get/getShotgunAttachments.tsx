import mog12 from "@/json/black-ops/four/attachments/shotgun/mog12.json";
import rampage from "@/json/black-ops/four/attachments/shotgun/rampage.json";
import sg12 from "@/json/black-ops/four/attachments/shotgun/sg12.json";
//Helpers
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  mog12,
  rampage,
  sg12,
};

export function getShotgunAttachments(
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
