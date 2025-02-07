import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getClassicAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  classic: getClassicAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getIwAttachments(
  type: string,
  gun: string,
  count: number,
  attach_type: string = ""
) {
  const getter = attachmentGetters[type];
  return getter ? getter(attach_type, gun, count) : {};
}
