import default1 from "@/json/world-at-war/attachments/sniper/default.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  springfield: default1,
  arisaka: default1,
  mosinnagant: default1,
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
