import default1 from "@/json/modern-warfare/remastered/attachments/pistol/default1.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  m9: default1,
  usp45: default1,
  m191145: default1,
  prokolot: default1,
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
