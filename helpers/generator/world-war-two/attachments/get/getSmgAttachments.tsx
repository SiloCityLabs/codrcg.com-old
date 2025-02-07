import default1 from "@/json/world-war-two/attachments/smg/default1.json";
import zk383 from "@/json/world-war-two/attachments/smg/zk383.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  greasegun: default1,
  ppsh41: default1,
  type100: default1,
  waffe28: default1,
  m1928: default1,
  mp40: default1,
  sten: default1,
  zk383,
};

export function getSmgAttachments(gun: string, count: number) {
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
