import reclaimer18 from "@/json/modern-warfare/three/attachments/shotgun/reclaimer18.json";
import lockwood680 from "@/json/modern-warfare/three/attachments/shotgun/lockwood680.json";
import haymaker from "@/json/modern-warfare/three/attachments/shotgun/haymaker.json";
import riveter from "@/json/modern-warfare/three/attachments/shotgun/riveter.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  reclaimer18,
  lockwood680,
  haymaker,
  riveter,
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
