import g43 from "@/json/vanguard/attachments/marksman_rifle/g43.json";
import m1garand from "@/json/vanguard/attachments/marksman_rifle/m1garand.json";
import m1916 from "@/json/vanguard/attachments/marksman_rifle/m1916.json";
import svt40 from "@/json/vanguard/attachments/marksman_rifle/svt40.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  g43,
  m1garand,
  m1916,
  svt40,
};

export function getMarksmanRifleAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
