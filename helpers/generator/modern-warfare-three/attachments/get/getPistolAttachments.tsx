import renetti from "@/json/modern-warfare-three/attachments/pistol/renetti.json";
import tyr from "@/json/modern-warfare-three/attachments/pistol/tyr.json";
import wspstinger from "@/json/modern-warfare-three/attachments/pistol/wspStinger.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  renetti,
  tyr,
  wspstinger,
};

export function getPistolAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
