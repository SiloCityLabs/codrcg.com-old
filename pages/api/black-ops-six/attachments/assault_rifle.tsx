import xm4 from "@/json/black-ops-six/attachments/assault_rifle/xm4.json";
import ak74 from "@/json/black-ops-six/attachments/assault_rifle/ak74.json";
import { randomListItem } from "@/helpers/randomListItem";

export default async function handler(req, res) {
  let attachments: any = {};
  const body = req.body;
  console.log("attachments body33", body);
  const data = getGunAttachments(body.gun);
  console.log("attachments data22", data);

  if (data) {
    randomizeAttachments(attachments, data, body.count);
  }
  console.log("attachments", attachments);

  res.status(200).json("");
}

function getGunAttachments(gun: string) {
  switch (gun) {
    case "xm4":
      return xm4;
    case "ak74":
      return ak74;
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
