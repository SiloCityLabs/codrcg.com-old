import m1897trenchgun from "@/json/world-at-war/attachments/shotgun/m1897trenchgun.json";
import doublebarreledshotgun from "@/json/world-at-war/attachments/shotgun/doublebarreledshotgun.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  m1897trenchgun,
  doublebarreledshotgun
};

export function getShotgunAttachments(gun: string, count: number): any {
  const attachments: any = [];
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
