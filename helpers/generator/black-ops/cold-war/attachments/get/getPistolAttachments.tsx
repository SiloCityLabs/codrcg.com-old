import amp63 from "@/json/black-ops/cold-war/attachments/pistol/amp63.json";
import diamatti from "@/json/black-ops/cold-war/attachments/pistol/diamatti.json";
import magnum from "@/json/black-ops/cold-war/attachments/pistol/magnum.json";
import marshal from "@/json/black-ops/cold-war/attachments/pistol/marshal.json";
import one911 from "@/json/black-ops/cold-war/attachments/pistol/one911.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  amp63,
  diamatti,
  magnum,
  marshal,
  "1911": one911,
};

export function getPistolAttachments(gun: string, count: number): any {
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
