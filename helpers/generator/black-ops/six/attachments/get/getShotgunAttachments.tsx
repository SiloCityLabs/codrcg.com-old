import asg89 from "@/json/black-ops/six/attachments/shotgun/asg89.json";
import marinesp from "@/json/black-ops/six/attachments/shotgun/marineSp.json";
import maelstrom from "@/json/black-ops/six/attachments/shotgun/maelstrom.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  asg89,
  marinesp,
  maelstrom,
};

export function getShotgunAttachments(gun: string, count: number): any {
  let attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
