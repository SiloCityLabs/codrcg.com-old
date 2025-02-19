import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getSniperAttachments,
  getShotgunAttachments,
  getLmgAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getWAWAttachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];
  console
  return getter ? getter(gun, count) : {};
}
