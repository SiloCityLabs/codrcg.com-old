import { isset } from "@/helpers/isset";

export function verifyBO6Attachments(
  attachData,
  attachments,
  attachment: string,
  attachmentType: string,
  count,
  modifyCount: (newCount: number) => void
) {
  const lasers = ["Tactical Laser", "Strelok Laser", "Target Laser"];
  const hasAkimbo =
    isset(attachments["stock"]) && attachments["stock"].includes("Akimbo");

  // Combine Akimbo checks
  if (
    (attachment.includes("Akimbo") &&
      (isset(attachments["optic"]) || isset(attachments["underbarrel"]))) ||
    (hasAkimbo && (attachmentType === "stock" || attachmentType === "optic")) ||
    (isset(attachments["laser"]) &&
      attachment.includes("Akimbo") &&
      lasers.includes(attachments["laser"]))
  ) {
    if (Object.keys(attachData.stock).length === 1 && count > 7) {
      modifyCount(7);
    }
    return false;
  }

  // Dont allow specific lasers if akimbo is already selected
  if (attachmentType === "laser" && lasers.includes(attachment) && hasAkimbo) {
    return false;
  }

  // Lower the count to 7 if it's at 8 and akimbo is selected
  if (hasAkimbo && count > 7) {
    modifyCount(7);
  }

  return true;
}
