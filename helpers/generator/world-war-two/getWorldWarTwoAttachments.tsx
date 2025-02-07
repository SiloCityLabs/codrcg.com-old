import {
  getAssaultRifleAttachments,
  getLmgAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSmgAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  lmg: getLmgAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  smg: getSmgAttachments,
  sniper: getSniperAttachments,
};

export function getWorldWarTwoAttachments(
  type: string,
  gun: string,
  count: number
) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
