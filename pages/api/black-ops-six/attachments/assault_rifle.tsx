import ak74 from "@/json/black-ops-six/attachments/assault_rifle/ak74.json";
import ames85 from "@/json/black-ops-six/attachments/assault_rifle/ames85.json";
import asVal from "@/json/black-ops-six/attachments/assault_rifle/asVal.json";
import goblinMk2 from "@/json/black-ops-six/attachments/assault_rifle/goblinMk2.json";
import gpr91 from "@/json/black-ops-six/attachments/assault_rifle/gpr91.json";
import modelL from "@/json/black-ops-six/attachments/assault_rifle/modelL.json";
import xm4 from "@/json/black-ops-six/attachments/assault_rifle/xm4.json";
import { randomListItem } from "@/helpers/randomListItem";

export default async function handler(req, res) {
  let attachments: any = {};
  const body = req.body;
  const data = getGunAttachments(body.gun);

  if (data) {
    randomizeAttachments(attachments, data, body.count);
  }

  console.info("attachments", attachments);

  res.status(200).json(attachments);
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "ak74":
      return ak74;
    case "ames85":
      return ames85;
    case "asval":
      return asVal;
    case "goblinmk2":
      return goblinMk2;
    case "gpr91":
      return gpr91;
    case "modell":
      return modelL;
    case "xm4":
      return xm4;
    default:
      return null;
  }
}

/**
 * Randomly selects attachments from a pool of data.
 *
 * @param {object} attachArr - The object to store the selected attachments.
 * @param {object} data - The pool of attachments to choose from.
 * @param {number} count - The number of attachments to select.
 *
 * @returns {void}
 */
function randomizeAttachments(attachArr: any, data: any, count: number) {
  let attachs = 0;

  while (attachs < count) {
    const keys = Object.keys(data);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    console.log("data", data);
    console.log(`randomizeAttachments ${attachs} < ${count}`);
    console.log("randomKey", randomKey);
    if (attachArr.hasOwnProperty(randomKey)) {
      console.log("randomizeAttachments: already exists");
      continue;
    } else {
      console.log("randomizeAttachments: doesnt already exist");
      attachArr[randomKey] = randomListItem(data[randomKey]);
      attachs++;
    }
  }
}
