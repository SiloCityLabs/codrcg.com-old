import lachmannshroud from "@/json/modern-warfare/two/attachments/smg/lachmannShroud.json";
import iso45 from "@/json/modern-warfare/two/attachments/smg/iso45.json";
import iso9mm from "@/json/modern-warfare/two/attachments/smg/iso9mm.json";
import pdsw528 from "@/json/modern-warfare/two/attachments/smg/pdsw528.json";
import vel46 from "@/json/modern-warfare/two/attachments/smg/vel46.json";
import fennec45 from "@/json/modern-warfare/two/attachments/smg/fennec45.json";
import basp from "@/json/modern-warfare/two/attachments/smg/basp.json";
import lachmannsub from "@/json/modern-warfare/two/attachments/smg/lachmannSub.json";
import fsshurricane from "@/json/modern-warfare/two/attachments/smg/fssHurricane.json";
import mx9 from "@/json/modern-warfare/two/attachments/smg/mx9.json";
import minibak from "@/json/modern-warfare/two/attachments/smg/minibak.json";
import vaznev9k from "@/json/modern-warfare/two/attachments/smg/vaznev9k.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  lachmannshroud,
  iso45,
  iso9mm,
  pdsw528,
  vel46,
  fennec45,
  basp,
  lachmannsub,
  fsshurricane,
  mx9,
  minibak,
  vaznev9k,
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
