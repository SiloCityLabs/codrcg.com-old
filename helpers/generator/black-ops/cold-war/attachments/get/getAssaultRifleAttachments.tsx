import ak47 from "@/json/black-ops/cold-war/attachments/assault_rifle/ak47.json";
import c58 from "@/json/black-ops/cold-war/attachments/assault_rifle/c58.json";
import em2 from "@/json/black-ops/cold-war/attachments/assault_rifle/em2.json";
import fara83 from "@/json/black-ops/cold-war/attachments/assault_rifle/fara83.json";
import ffar1 from "@/json/black-ops/cold-war/attachments/assault_rifle/ffar1.json";
import grav from "@/json/black-ops/cold-war/attachments/assault_rifle/grav.json";
import groza from "@/json/black-ops/cold-war/attachments/assault_rifle/groza.json";
import krig6 from "@/json/black-ops/cold-war/attachments/assault_rifle/krig6.json";
import qbz83 from "@/json/black-ops/cold-war/attachments/assault_rifle/qbz83.json";
import vargo52 from "@/json/black-ops/cold-war/attachments/assault_rifle/vargo52.json";
import xm4 from "@/json/black-ops/cold-war/attachments/assault_rifle/xm4.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  ak47,
  c58,
  em2,
  fara83,
  ffar1,
  grav,
  groza,
  krig6,
  qbz83,
  vargo52,
  xm4,
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
