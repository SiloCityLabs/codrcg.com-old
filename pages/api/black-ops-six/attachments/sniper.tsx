import lr762 from "@/json/black-ops-six/attachments/sniper/lr762.json";
import lw3a1Frostline from "@/json/black-ops-six/attachments/sniper/lw3a1Frostline.json";
import svd from "@/json/black-ops-six/attachments/sniper/svd.json";
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
    case "lr762":
      return lr762;
    case "lw3a1frostline":
      return lw3a1Frostline;
    case "svd":
      return svd;
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
