import lachmann762 from "@/json/modern-warfare/two/attachments/battle_rifle/lachmann762.json";
import cronensquall from "@/json/modern-warfare/two/attachments/battle_rifle/cronenSquall.json";
import ftacrecon from "@/json/modern-warfare/two/attachments/battle_rifle/ftacRecon.json";
import taqv from "@/json/modern-warfare/two/attachments/battle_rifle/taqv.json";
import so14 from "@/json/modern-warfare/two/attachments/battle_rifle/so14.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  lachmann762,
  cronensquall,
  ftacrecon,
  taqv,
  so14,
};

export function getBattleRifleAttachments(gun: string, count: number): any {
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
