import emc from "@/json/infinite-warfare/attachments/pistol/emc.json";
import hailstorm from "@/json/infinite-warfare/attachments/pistol/hailstorm.json";
import kendall44 from "@/json/infinite-warfare/attachments/pistol/kendall44.json";
import oni from "@/json/infinite-warfare/attachments/pistol/oni.json";
import stallion44 from "@/json/infinite-warfare/attachments/pistol/stallion44.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  emc,
  hailstorm,
  kendall44,
  oni,
  stallion44,
};

export function getPistolAttachments(
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
