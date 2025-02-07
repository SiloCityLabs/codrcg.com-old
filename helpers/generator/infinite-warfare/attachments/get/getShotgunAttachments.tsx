import banshee from "@/json/infinite-warfare/attachments/shotgun/banshee.json";
import dcm8 from "@/json/infinite-warfare/attachments/shotgun/dcm8.json";
import default1 from "@/json/infinite-warfare/attachments/shotgun/default1.json";
import m2187 from "@/json/infinite-warfare/attachments/shotgun/m2187.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  banshee,
  dcm8,
  reaver: default1,
  rack9: default1,
  m2187,
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

  if (data) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
