import { isset } from "@/helpers/isset";

const AKIMBO = "Akimbo";
const BURST = "3-Round Burst Mod";

export function verifyBO6Attachments(
  attachData,
  attachments,
  attachment: string,
  attachmentType: string,
  count,
  modifyCount: (newCount: number) => void
) {
  const attachmentBooleans = getAttachmentBooleans(attachmentType);
  const issetAttachment = getIssetAttachments(attachments);
  const lasers = ["Tactical Laser", "Strelok Laser", "Target Laser"];
  const hasAkimbo =
    issetAttachment.stock && attachments["stock"].includes(AKIMBO);
  const hasThreeRoundBurst =
    issetAttachment.fireMods && attachments["fire_mods"].includes(BURST);

  // Combine Akimbo checks
  if (
    (attachment.includes(AKIMBO) &&
      (issetAttachment.optic || issetAttachment.underbarrel)) ||
    (hasAkimbo && (attachmentBooleans.isStock || attachmentBooleans.isOptic)) ||
    (issetAttachment.laser &&
      attachment.includes(AKIMBO) &&
      lasers.includes(attachments["laser"]))
  ) {
    if (Object.keys(attachData.stock).length === 1 && count > 7) {
      modifyCount(7);
    }
    return false;
  }

  //3-Round Burst Mod fire mod check
  const isBurst = attachment.includes(BURST);
  if (
    (isBurst && (issetAttachment.barrel || issetAttachment.underbarrel)) ||
    (hasThreeRoundBurst &&
      (attachmentBooleans.isBarrel || attachmentBooleans.isUnderbarrel))
  ) {
    return false;
  }

  // Dont allow specific lasers if akimbo is already selected
  if (attachmentBooleans.isLaser && lasers.includes(attachment) && hasAkimbo) {
    return false;
  }

  // Lower the count to 7 if it's at 8 and akimbo is selected
  if ((hasAkimbo || hasThreeRoundBurst) && count > 7) {
    modifyCount(7);
  }

  return true;
}

function getAttachmentBooleans(attachmentType) {
  return {
    isBarrel: attachmentType === "barrel",
    isUnderbarrel: attachmentType === "underbarrel",
    isStock: attachmentType === "stock",
    isLaser: attachmentType === "laser",
    isFireMods: attachmentType === "fire_mods",
    isMuzzle: attachmentType === "muzzle",
    isOptic: attachmentType === "optic",
    isMagazine: attachmentType === "magazine",
    isRearGrip: attachmentType === "rear_grip",
  };
}

function getIssetAttachments(attachments) {
  return {
    barrel: isset(attachments["barrel"]),
    underbarrel: isset(attachments["underbarrel"]),
    stock: isset(attachments["stock"]),
    laser: isset(attachments["laser"]),
    fireMods: isset(attachments["fire_mods"]),
    muzzle: isset(attachments["muzzle"]),
    optic: isset(attachments["optic"]),
    magazine: isset(attachments["magazine"]),
    rearGrip: isset(attachments["rear_grip"]),
  };
}
