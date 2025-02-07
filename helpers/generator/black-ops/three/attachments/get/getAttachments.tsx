import assault_rifle from "@/json/black-ops/three/attachments/assault_rifle/attachments.json";
import lmg from "@/json/black-ops/three/attachments/lmg/attachments.json";
import pistol from "@/json/black-ops/three/attachments/pistol/attachments.json";
import shotgun from "@/json/black-ops/three/attachments/shotgun/attachments.json";
import smg from "@/json/black-ops/three/attachments/smg/attachments.json";
import sniper from "@/json/black-ops/three/attachments/sniper/attachments.json";
//Weapon Specific
import nxShadowclaw from "@/json/black-ops/three/attachments/special/nxShadowclaw.json";
import rifte9 from "@/json/black-ops/three/attachments/pistol/rifte9.json";

import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  assault_rifle,
  lmg,
  pistol,
  shotgun,
  smg,
  sniper,
  rifte9,
  nxshadowclaw: nxShadowclaw,
};

export function getAttachments(gun: string, type: string, count: number): any {
  const attachments: any = [];

  // Check if attachments exist for the gun OR the type
  const data = attachmentsList[gun] || attachmentsList[type];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
