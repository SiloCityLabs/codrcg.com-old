import { randomListItem } from "@/helpers/randomListItem";
import { verifyBO6Attachments } from "@/helpers/generator/black-ops-six/verifyBO6Attachments";

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

  // Shuffle the keys array for random selection
  for (let i = keys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [keys[i], keys[j]] = [keys[j], keys[i]];
  }

  for (let i = 0; i < count && attachCount < count; i++) {
    const randomKey = keys[i];

    if (!attachArr.hasOwnProperty(randomKey)) {
      const attachment = randomListItem(data[randomKey]);
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
