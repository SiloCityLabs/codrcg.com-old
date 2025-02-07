import {
  getAssaultRifleAttachments,
  getBattleRifleAttachments,
  getLauncherAttachments,
  getLmgAttachments,
  getMarksmanRifleAttachments,
  getPistolAttachments,
  getShotgunAttachments,
  getSmgAttachments,
  getSniperAttachments,
} from "./attachments";

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  battle_rifle: getBattleRifleAttachments,
  launcher: getLauncherAttachments,
  lmg: getLmgAttachments,
  marksman_rifle: getMarksmanRifleAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  smg: getSmgAttachments,
  sniper: getSniperAttachments,
};

export function getMW3Attachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];
  return getter ? getter(gun, count) : {};
}
