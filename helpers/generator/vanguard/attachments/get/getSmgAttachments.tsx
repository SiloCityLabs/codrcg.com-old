import armaguerra43 from "@/json/vanguard/attachments/smg/armaguerra43.json";
import h4blixen from "@/json/vanguard/attachments/smg/h4blixen.json";
import m1928 from "@/json/vanguard/attachments/smg/m1928.json";
import marco5 from "@/json/vanguard/attachments/smg/marco5.json";
import mp40 from "@/json/vanguard/attachments/smg/mp40.json";
import owenGun from "@/json/vanguard/attachments/smg/owenGun.json";
import ppsh41 from "@/json/vanguard/attachments/smg/ppsh41.json";
import ra225 from "@/json/vanguard/attachments/smg/ra225.json";
import sten from "@/json/vanguard/attachments/smg/sten.json";
import type100 from "@/json/vanguard/attachments/smg/type100.json";
import welgun from "@/json/vanguard/attachments/smg/welgun.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  armaguerra43,
  h4blixen,
  m1928,
  marco5,
  mp40,
  owengun: owenGun,
  ppsh41,
  ra225,
  sten,
  type100,
  welgun,
};

export function getSmgAttachments(gun: string, count: number) {
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
