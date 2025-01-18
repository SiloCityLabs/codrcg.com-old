import c9 from "@/json/black-ops/six/attachments/smg/c9.json";
import jackalpdw from "@/json/black-ops/six/attachments/smg/jackalPdw.json";
import kompakt92 from "@/json/black-ops/six/attachments/smg/kompakt92.json";
import ksv from "@/json/black-ops/six/attachments/smg/ksv.json";
import pp919 from "@/json/black-ops/six/attachments/smg/pp919.json";
import tanto22 from "@/json/black-ops/six/attachments/smg/tanto22.json";
//DLC Weapons
import saug from "@/json/black-ops/six/attachments/smg/saug.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  c9,
  jackalpdw,
  kompakt92,
  ksv,
  pp919,
  tanto22,
  saug,
};

export function getSmgAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = attachmentsList[gun];

  data ? randomizeAttachments(attachments, data, count) : {};

  return attachments;
}
