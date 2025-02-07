import kvBroadside from "@/json/modern-warfare/two/attachments/shotgun/kvBroadside.json";
import lockwood300 from "@/json/modern-warfare/two/attachments/shotgun/lockwood300.json";
import expedtite12 from "@/json/modern-warfare/two/attachments/shotgun/expedtite12.json";
import bryson800 from "@/json/modern-warfare/two/attachments/shotgun/bryson800.json";
import mxguardian from "@/json/modern-warfare/two/attachments/shotgun/mxGuardian.json";
import bryson890 from "@/json/modern-warfare/two/attachments/shotgun/bryson890.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  kvBroadside,
  lockwood300,
  expedtite12,
  bryson800,
  mxguardian,
  bryson890,
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
