import { randomListItem } from "@/helpers/randomListItem";
import { verifyBO6Attachments } from "@/helpers/generator/black-ops/six/verifyBO6Attachments";

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
  let attachCount = 0;
  const keys = Object.keys(data);

  // Reset count if we are asking for more attachments than the weapon has
  count = Math.min(count, keys.length);

  while (attachCount < count) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    if (typeof data[randomKey] === "string") {
      if (!attachArr.includes(data[randomKey])) {
        attachArr.push(data[randomKey]);
        attachCount++;
      }
    } else if (!attachArr.hasOwnProperty(randomKey)) {
      const attachment = randomListItem(data[randomKey]);
      //TODO: Make this only run on black ops 6 guns
      const addAttachment = verifyBO6Attachments(
        data,
        attachArr,
        attachment,
        randomKey,
        count,
        (newCount) => {
          count = newCount;
        }
      );
      if (addAttachment) {
        attachArr[randomKey] = attachment;
        attachCount++;
      }
    }
  }
}
