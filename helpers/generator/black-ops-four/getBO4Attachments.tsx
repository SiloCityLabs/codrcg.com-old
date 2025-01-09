import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getMarksmanRifleAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  marksman_rifle: getMarksmanRifleAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getBO4Attachments(
  type: string,
  attach_type: string,
  gun: string,
  count: number
) {
  const getter = attachmentGetters[type];
  return getter ? getter(attach_type, gun, count) : {};
}
