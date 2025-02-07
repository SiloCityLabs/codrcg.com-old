import gallosa12 from "@/json/black-ops/cold-war/attachments/shotgun/gallosa12.json";
import hauer77 from "@/json/black-ops/cold-war/attachments/shotgun/hauer77.json";
import ironhide410 from "@/json/black-ops/cold-war/attachments/shotgun/ironhide410.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  gallosa12,
  hauer77,
  ironhide410,
};

export function getShotgunAttachments(gun: string, count: number): any {
  let attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
