import ebr14 from "@/json/modern-warfare/two/attachments/marksman_rifle/ebr14.json";
import spr208 from "@/json/modern-warfare/two/attachments/marksman_rifle/spr208.json";
import lockwoodmk2 from "@/json/modern-warfare/two/attachments/marksman_rifle/lockwoodMk2.json";
import tempustorrent from "@/json/modern-warfare/two/attachments/marksman_rifle/tempusTorrent.json";
import crossbow from "@/json/modern-warfare/two/attachments/marksman_rifle/crossbow.json";
import lms from "@/json/modern-warfare/two/attachments/marksman_rifle/lms.json";
import sab50 from "@/json/modern-warfare/two/attachments/marksman_rifle/sab50.json";
import taqm from "@/json/modern-warfare/two/attachments/marksman_rifle/taqm.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  ebr14,
  spr208,
  lockwoodmk2,
  tempustorrent,
  crossbow,
  lms,
  sab50,
  taqm,
};

export function getMarksmanRifleAttachments(gun: string, count: number): any {
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
