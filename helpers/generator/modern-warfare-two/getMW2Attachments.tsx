import {
  getAssaultRifleAttachments,
  getBattleRifleAttachments,
  getSmgAttachments,
  getLmgAttachments,
  getMarksmanRifleAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  battle_rifle: getBattleRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  marksman_rifle: getMarksmanRifleAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getMW2Attachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
