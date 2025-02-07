import default1 from "@/json/world-war-two/attachments/assault_rifle/default1.json";
import default2 from "@/json/world-war-two/attachments/assault_rifle/default2.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  m1garand: default1,
  stg44: default1,
  m1a1carbine: default1,
  bar: default1,
  svt40: default1,
  gewehr43: default1,
  itraburst: default1,
  as44: default1,
  m1941: default2,
  fg42: default2,
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
