import default1 from "@/json/world-war-two/attachments/sniper/default1.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  karabin: default1,
  leeenfield: default1,
  m1903: default1,
  kar98k: default1,
};

export function getSniperAttachments(gun: string, count: number): any {
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
