import mcpr300 from "@/json/modern-warfare/two/attachments/sniper/mcpr300.json";
import signal50 from "@/json/modern-warfare/two/attachments/sniper/signal50.json";
import victusxmr from "@/json/modern-warfare/two/attachments/sniper/victusXmr.json";
import fjximperium from "@/json/modern-warfare/two/attachments/sniper/fjxImperium.json";
import carrack300 from "@/json/modern-warfare/two/attachments/sniper/carrack300.json";
import lab330 from "@/json/modern-warfare/two/attachments/sniper/lab330.json";
import spx80 from "@/json/modern-warfare/two/attachments/sniper/spx80.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  mcpr300,
  signal50,
  victusxmr,
  fjximperium,
  carrack300,
  lab330,
  spx80,
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
