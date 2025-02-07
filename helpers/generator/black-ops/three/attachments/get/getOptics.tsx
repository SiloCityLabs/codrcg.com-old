import assault_rifle from "@/json/black-ops/three/attachments/assault_rifle/optics.json";
import lmg from "@/json/black-ops/three/attachments/lmg/optics.json";
import pistol from "@/json/black-ops/three/attachments/pistol/optics.json";
import shotgun from "@/json/black-ops/three/attachments/shotgun/optics.json";
import smg from "@/json/black-ops/three/attachments/smg/optics.json";
import sniper from "@/json/black-ops/three/attachments/sniper/optics.json";
//Weapon Specific
import nxShadowclawOptic from "@/json/black-ops/three/attachments/special/nxShadowclawOptic.json";

import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  assault_rifle,
  lmg,
  pistol,
  shotgun,
  smg,
  sniper,
  nxshadowclaw: nxShadowclawOptic,
};

export function getOptics(gun: string, type: string, count: number = 1): any {
  const attachments: any = [];

  // Check if optics exist for the gun OR the type
  const data = attachmentsList[gun] || attachmentsList[type];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
