import p890 from "@/json/modern-warfare/two/attachments/pistol/p890.json";
import gs50 from "@/json/modern-warfare/two/attachments/pistol/50gs.json";
import x12 from "@/json/modern-warfare/two/attachments/pistol/x12.json";
import basilisk from "@/json/modern-warfare/two/attachments/pistol/basilisk.json";
import ftacsiege from "@/json/modern-warfare/two/attachments/pistol/ftacSiege.json";
import gsmagna from "@/json/modern-warfare/two/attachments/pistol/gsmagna.json";
import daemon9mm from "@/json/modern-warfare/two/attachments/pistol/9mmDaemon.json";
import x13auto from "@/json/modern-warfare/two/attachments/pistol/x13auto.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  p890,
  "50gs": gs50,
  x12,
  basilisk,
  ftacsiege,
  gsmagna,
  "9mmdaemon": daemon9mm,
  x13auto,
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
