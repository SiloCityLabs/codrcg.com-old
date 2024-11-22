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
  //TODO: Max this out (some weapons have less than 8) - ISSUE #22
  while (attachs < count) {
    const keys = Object.keys(data);
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
