import {
  getAssaultRifleAttachments,
  getLmgAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSmgAttachments,
  getSniperAttachments,
  getTacticalRifleAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  lmg: getLmgAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  smg: getSmgAttachments,
  sniper: getSniperAttachments,
  tactical_rifle: getTacticalRifleAttachments,
};

export function getColdWarAttachments(
  type: string,
  gun: string,
  count: number
) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
