import combatShotgun from "@/json/vanguard/attachments/shotgun/combatShotgun.json";
import doubleBarrel from "@/json/vanguard/attachments/shotgun/doubleBarrel.json";
import einhornRevolving from "@/json/vanguard/attachments/shotgun/einhornRevolving.json";
import graceyAuto from "@/json/vanguard/attachments/shotgun/graceyAuto.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  combatshotgun: combatShotgun,
  doublebarrel: doubleBarrel,
  einhornrevolving: einhornRevolving,
  graceyauto: graceyAuto,
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
