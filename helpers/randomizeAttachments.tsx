import { randomListItem } from "@/helpers/randomListItem";

/**
 * Randomly selects attachments from a pool of data.
 *
 * @param {object} attachArr - The object to store the selected attachments.
 * @param {object} data - The pool of attachments to choose from.
 * @param {number} count - The number of attachments to select.
 *
 * @returns {void}
 */
export function randomizeAttachments(attachArr: any, data: any, count: number) {
  let attachs = 0;
  let keys = Object.keys(data);
  //Reset count if we are asking for more attachments than the weapon has
  if (count >= keys.length) {
    count = keys.length;
  }

  while (attachs < count) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    if (attachArr.hasOwnProperty(randomKey)) {
      continue;
    } else {
      attachArr[randomKey] = randomListItem(data[randomKey]);
      attachs++;
    }
  }
}
