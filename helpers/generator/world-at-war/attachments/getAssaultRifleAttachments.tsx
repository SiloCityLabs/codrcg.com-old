import default1 from "@/json/world-at-war/attachments/assault_rifle/default.json";
import gewehr43 from "@/json/world-at-war/attachments/assault_rifle/gewehr43.json";
import m1garand from "@/json/world-at-war/attachments/assault_rifle/m1garand.json";
import m1a1carbine from "@/json/world-at-war/attachments/assault_rifle/m1a1carbine.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  svt40: default1,
  gewehr43,
  m1garand,
  stg44: default1,
  m1a1carbine
};

export function getAssaultRifleAttachments(gun: string, count: number): any {
  const attachments: any = [];
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
