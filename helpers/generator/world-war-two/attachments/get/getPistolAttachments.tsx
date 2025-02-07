import default1 from "@/json/world-war-two/attachments/pistol/default1.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  p08: default1,
  "1911": default1,
  machinepistol: default1,
  "9mmsap": default1,
};

export function getPistolAttachments(gun: string, count: number): any {
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
