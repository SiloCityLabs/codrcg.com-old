import asg89 from "@/json/black-ops-six/attachments/shotgun/asg89.json";
import marinesp from "@/json/black-ops-six/attachments/shotgun/marineSp.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  asg89,
  marinesp,
};

export function getShotgunAttachments(gun: string, count: number): any {
  let attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
