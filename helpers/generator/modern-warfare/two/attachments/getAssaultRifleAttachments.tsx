import taq56 from "@/json/modern-warfare/two/attachments/assault_rifle/taq56.json";
import m4 from "@/json/modern-warfare/two/attachments/assault_rifle/m4.json";
import stb556 from "@/json/modern-warfare/two/attachments/assault_rifle/stb556.json";
import kastov762 from "@/json/modern-warfare/two/attachments/assault_rifle/kastov762.json";
import m13b from "@/json/modern-warfare/two/attachments/assault_rifle/m13b.json";
import chimera from "@/json/modern-warfare/two/attachments/assault_rifle/chimera.json";
import isohemlock from "@/json/modern-warfare/two/attachments/assault_rifle/isoHemlock.json";
import tempusrazorback from "@/json/modern-warfare/two/attachments/assault_rifle/tempusRazorback.json";
import fravancer from "@/json/modern-warfare/two/attachments/assault_rifle/frAvancer.json";
import m13c from "@/json/modern-warfare/two/attachments/assault_rifle/m13c.json";
import tr76geist from "@/json/modern-warfare/two/attachments/assault_rifle/tr76geist.json";
import lachmann556 from "@/json/modern-warfare/two/attachments/assault_rifle/lachmann556.json";
import m16 from "@/json/modern-warfare/two/attachments/assault_rifle/m16.json";
import kastov74u from "@/json/modern-warfare/two/attachments/assault_rifle/kastov74u.json";
import kastov545 from "@/json/modern-warfare/two/attachments/assault_rifle/kastov545.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  taq56,
  m4,
  stb556,
  kastov762,
  m13b,
  chimera,
  isohemlock,
  tempusrazorback,
  fravancer,
  m13c,
  tr76geist,
  lachmann556,
  m16,
  kastov74u,
  kastov545,
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
