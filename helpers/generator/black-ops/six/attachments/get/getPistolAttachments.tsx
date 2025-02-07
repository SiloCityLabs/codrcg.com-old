import nineMmPm from "@/json/black-ops/six/attachments/pistol/9mmPm.json";
import grekhova from "@/json/black-ops/six/attachments/pistol/grekhova.json";
import gs45 from "@/json/black-ops/six/attachments/pistol/gs45.json";
import stryder22 from "@/json/black-ops/six/attachments/pistol/stryder22.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  "9mmpm": nineMmPm,
  grekhova,
  gs45,
  stryder22,
};

export function getPistolAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
