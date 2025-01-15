import ak74u from "@/json/cold-war/attachments/smg/ak74u.json";
import bullfrog from "@/json/cold-war/attachments/smg/bullfrog.json";
import ksp45 from "@/json/cold-war/attachments/smg/ksp45.json";
import lapa from "@/json/cold-war/attachments/smg/lapa.json";
import lc10 from "@/json/cold-war/attachments/smg/lc10.json";
import mac10 from "@/json/cold-war/attachments/smg/mac10.json";
import milano821 from "@/json/cold-war/attachments/smg/milano821.json";
import mp5 from "@/json/cold-war/attachments/smg/mp5.json";
import ots9 from "@/json/cold-war/attachments/smg/ots9.json";
import ppsh41 from "@/json/cold-war/attachments/smg/ppsh41.json";
import tec9 from "@/json/cold-war/attachments/smg/tec9.json";
import ugr from "@/json/cold-war/attachments/smg/ugr.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  ak74u,
  bullfrog,
  ksp45,
  lapa,
  lc10,
  mac10,
  milano821,
  mp5,
  ots9,
  ppsh41,
  tec9,
  ugr,
};

export function getSmgAttachments(gun: string, count: number) {
  let attachments: any = {};
  const data = attachmentsList[gun];

  data ? randomizeAttachments(attachments, data, count) : {};

  return attachments;
}
