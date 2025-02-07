import stg44 from "@/json/modern-warfare/three/attachments/assault_rifle/stg44.json";
import bal27 from "@/json/modern-warfare/three/attachments/assault_rifle/bal27.json";
import mtz556 from "@/json/modern-warfare/three/attachments/assault_rifle/mtz556.json";
import sva545 from "@/json/modern-warfare/three/attachments/assault_rifle/sva545.json";
import bp50 from "@/json/modern-warfare/three/attachments/assault_rifle/bp50.json";
import holger556 from "@/json/modern-warfare/three/attachments/assault_rifle/holger556.json";
import mcw from "@/json/modern-warfare/three/attachments/assault_rifle/mcw.json";
import dg56 from "@/json/modern-warfare/three/attachments/assault_rifle/dg56.json";
import fr556 from "@/json/modern-warfare/three/attachments/assault_rifle/fr556.json";
import ram7 from "@/json/modern-warfare/three/attachments/assault_rifle/ram7.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  stg44,
  bal27,
  mtz556,
  sva545,
  bp50,
  holger556,
  mcw,
  dg56,
  fr556,
  ram7,
};

export function getAssaultRifleAttachments(gun: string, count: number): any {
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
