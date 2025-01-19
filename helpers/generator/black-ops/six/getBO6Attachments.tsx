import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getMarksmanRifleAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
  getSpecialAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  marksman_rifle: getMarksmanRifleAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
  special: getSpecialAttachments,
};

export function getBO6Attachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
