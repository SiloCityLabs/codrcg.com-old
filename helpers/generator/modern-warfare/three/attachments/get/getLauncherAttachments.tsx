import { randomizeAttachments } from "@/helpers/randomizeAttachments";
import rgl80 from "@/json/modern-warfare/three/attachments/launcher/rgl80.json";
import stormender from "@/json/modern-warfare/three/attachments/launcher/stormender.json";
import torque35 from "@/json/modern-warfare/three/attachments/launcher/torque35.json";

const attachmentsList: Record<string, any> = {
  rgl80,
  stormender,
  torque35,
};

export function getLauncherAttachments(gun: string, count: number): any {
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
