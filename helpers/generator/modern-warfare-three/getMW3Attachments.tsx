import {
  getAssaultRifleAttachments,
  getBattleRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getMarksmanRifleAttachments,
  // getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
  // getSpecialAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  battle_rifle: getBattleRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  marksman_rifle: getMarksmanRifleAttachments,
  // pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
  // special: getSpecialAttachments,
};

export function getMW3Attachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
