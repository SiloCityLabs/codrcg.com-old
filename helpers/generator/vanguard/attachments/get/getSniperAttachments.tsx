import threeLineRifle from "@/json/vanguard/attachments/sniper/3lineRifle.json";
import gorenkoAntitankRifle from "@/json/vanguard/attachments/sniper/gorenkoAntitankRifle.json";
import kar98k from "@/json/vanguard/attachments/sniper/kar98k.json";
import type99 from "@/json/vanguard/attachments/sniper/type99.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  "3linerifle": threeLineRifle,
  gorenkoantitankrifle: gorenkoAntitankRifle,
  kar98k,
  type99,
};

export function getSniperAttachments(gun: string, count: number): any {
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
