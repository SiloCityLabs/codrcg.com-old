import lw3tundra from "@/json/black-ops/cold-war/attachments/sniper/lw3tundra.json";
import m82 from "@/json/black-ops/cold-war/attachments/sniper/m82.json";
import pelington703 from "@/json/black-ops/cold-war/attachments/sniper/pelington703.json";
import swissk31 from "@/json/black-ops/cold-war/attachments/sniper/swissk31.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  lw3tundra,
  m82,
  pelington703,
  swissk31,
};

export function getSniperAttachments(gun: string, count: number): any {
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
