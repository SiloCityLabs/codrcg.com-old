import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getTacticalRifleAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  tactical_rifle: getTacticalRifleAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getBO4Attachments(
  type: string,
  gun: string,
  count: number,
  attach_type: string = ""
) {
  const getter = attachmentGetters[type];
  return getter ? getter(attach_type, gun, count) : {};
}
