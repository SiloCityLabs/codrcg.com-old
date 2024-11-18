import aek973 from "@/json/black-ops-six/attachments/marksman_rifle/aek973.json";
import dm10 from "@/json/black-ops-six/attachments/marksman_rifle/dm10.json";
import swat556 from "@/json/black-ops-six/attachments/marksman_rifle/swat556.json";
import tsarkov762 from "@/json/black-ops-six/attachments/marksman_rifle/tsarkov762.json";
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
    case "aek973":
      return aek973;
    case "dm10":
      return dm10;
    case "swat556":
      return swat556;
    case "tsarkov762":
      return tsarkov762;
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
