import { AttachmentInfo } from "@/types/BlackOps3";

export function getAttachments(
  type: string,
  classPoints: number
): AttachmentInfo {
  const rollAttachments = Math.floor(Math.random() * 11); // 0-10 inclusive
  let wildcardCost = 0;
  let attachments = 0;

  /*
   * Max Attachments
   *  - Primary = 5 (3 Primary Gun Fighters)
   *  - Secondary = 4 (2 Secondary Gun fighters)
   *  - Overkill = 4 (2 Secondary Gun fighters)
   */

  if (rollAttachments % 2 === 0 && classPoints >= 1) {
    if (type === "primary") {
      attachments = Math.floor(Math.random() * 5) + 1; // 1-5 inclusive

      switch (attachments) {
        case 5:
          if (classPoints >= 8) {
            wildcardCost++;
          } else {
            attachments = 4;
          }
        case 4:
          if (classPoints >= 6) {
            wildcardCost++;
          } else {
            attachments = 3;
          }
        case 3:
          if (classPoints >= 4) {
            wildcardCost++;
          } else {
            attachments = 2;
          }
        case 2:
          if (classPoints < 2) {
            attachments = 1;
          }
        case 1:
          if (classPoints < 1) {
            attachments = 0;
          }
      }
    } else if (type !== "primary") {
      attachments = Math.floor(Math.random() * 4) + 1; // 1-4 inclusive

      switch (attachments) {
        case 4:
          if (classPoints >= 6) {
            wildcardCost++;
          } else {
            attachments = 3;
          }
        case 3:
          if (classPoints >= 4) {
            wildcardCost++;
          } else {
            attachments = 2;
          }
        case 2:
          if (classPoints < 2) {
            attachments = 1;
          }
        case 1:
          if (classPoints < 1) {
            attachments = 0;
          }
      }
    }
  }

  return { attachments: attachments, wildcardCost: wildcardCost };
}
