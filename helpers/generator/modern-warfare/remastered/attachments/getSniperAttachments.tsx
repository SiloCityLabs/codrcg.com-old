import default1 from "@/json/modern-warfare/remastered/attachments/sniper/default1.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  m40a3: default1,
  m21: default1,
  dragunov: default1,
  r700: default1,
  barrett50cal: default1,
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
