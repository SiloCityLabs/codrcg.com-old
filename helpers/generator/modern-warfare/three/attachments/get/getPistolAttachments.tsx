import { randomizeAttachments } from "@/helpers/randomizeAttachments";
import renetti from "@/json/modern-warfare/three/attachments/pistol/renetti.json";
import tyr from "@/json/modern-warfare/three/attachments/pistol/tyr.json";
import wspStinger from "@/json/modern-warfare/three/attachments/pistol/wspStinger.json";

const attachmentsList: Record<string, any> = {
  renetti,
  tyr,
  wspstinger: wspStinger,
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
