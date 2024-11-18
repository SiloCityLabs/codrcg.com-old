import c9 from "@/json/black-ops-six/attachments/smg/c9.json";
import jackalPdw from "@/json/black-ops-six/attachments/smg/jackalPdw.json";
import kompakt92 from "@/json/black-ops-six/attachments/smg/kompakt92.json";
import ksv from "@/json/black-ops-six/attachments/smg/ksv.json";
import pp919 from "@/json/black-ops-six/attachments/smg/pp919.json";
import tanto22 from "@/json/black-ops-six/attachments/smg/tanto22.json";
import { randomListItem } from "@/helpers/randomListItem";

export default async function handler(req, res) {
  let attachments: any = {};
  const body = req.body;
  const data = getGunAttachments(body.gun);

  if (data) {
    randomizeAttachments(attachments, data, body.count);
  }

  res.status(200).json("");
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "c9":
      return c9;
    case "jackalPdw":
      return jackalPdw;
    case "kompakt92":
      return kompakt92;
    case "ksv":
      return ksv;
    case "pp919":
      return pp919;
    case "tanto22":
      return tanto22;
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
