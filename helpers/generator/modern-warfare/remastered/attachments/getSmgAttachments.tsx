import default1 from "@/json/modern-warfare/remastered/attachments/shotgun/default1.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  mp5: default1,
  skorpion: default1,
  miniuzi: default1,
  ak74u: default1,
  p90: default1,
  mac10: default1,
  fang45: default1,
};

export function getSmgAttachments(gun: string, count: number) {
  const attachments: any = [];
  const data = attachmentsList[gun];

  data ? randomizeAttachments(attachments, data, count) : {};

  return attachments;
}
