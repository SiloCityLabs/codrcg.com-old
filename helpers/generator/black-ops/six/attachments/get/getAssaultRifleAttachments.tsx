import default556 from "@/json/black-ops/six/attachments/assault_rifle/default556.json";
import ak74 from "@/json/black-ops/six/attachments/assault_rifle/ak74.json";
import asval from "@/json/black-ops/six/attachments/assault_rifle/asVal.json";
import goblinmk2 from "@/json/black-ops/six/attachments/assault_rifle/goblinMk2.json";
import xm4 from "@/json/black-ops/six/attachments/assault_rifle/xm4.json";
//DLC
import krigc from "@/json/black-ops/six/attachments/assault_rifle/krigC.json";
import cypher091 from "@/json/black-ops/six/attachments/assault_rifle/cypher091.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  ames85: default556,
  gpr91: default556,
  modell: default556,
  ak74,
  asval,
  goblinmk2,
  xm4,
  krigc,
  cypher091,
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
