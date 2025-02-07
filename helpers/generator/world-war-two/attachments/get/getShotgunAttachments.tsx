import default1 from "@/json/world-war-two/attachments/shotgun/default1.json";
import m30LuftwaffeDrilling from "@/json/world-war-two/attachments/shotgun/m30LuftwaffeDrilling.json";
import sawedoffShotgun from "@/json/world-war-two/attachments/shotgun/sawedoffShotgun.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  combatshotgun: default1,
  toggleaction: default1,
  m30luftwaffedrilling: m30LuftwaffeDrilling,
  sawedoffshotgun: sawedoffShotgun,
};

export function getShotgunAttachments(gun: string, count: number): any {
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
