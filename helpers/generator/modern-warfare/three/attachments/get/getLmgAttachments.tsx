import bruenmk9 from "@/json/modern-warfare/three/attachments/lmg/bruenMk9.json";
import kastovlsw from "@/json/modern-warfare/three/attachments/lmg/kastovLsw.json";
import taqevolvere from "@/json/modern-warfare/three/attachments/lmg/taqEvolvere.json";
import pulemyot762 from "@/json/modern-warfare/three/attachments/lmg/pulemyot762.json";
import dg58lsw from "@/json/modern-warfare/three/attachments/lmg/dg58lsw.json";
import taqeradicator from "@/json/modern-warfare/three/attachments/lmg/taqEradicator.json";
import holger26 from "@/json/modern-warfare/three/attachments/lmg/holger26.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  bruenmk9,
  kastovlsw,
  taqevolvere,
  pulemyot762,
  dg58lsw,
  taqeradicator,
  holger26,
};

export function getLmgAttachments(gun: string, count: number): any {
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
