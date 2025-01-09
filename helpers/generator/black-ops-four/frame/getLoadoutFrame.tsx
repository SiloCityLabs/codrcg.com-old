//Frame Helpers
import { getAttachments } from "@/helpers/generator/black-ops-four/frame/getAttachments";
import { getPiece } from "@/helpers/generator/black-ops-four/frame/getPiece";
import { getOptic } from "@/helpers/generator/black-ops-four/frame/getOptic";
//Helpers
import { isset } from "@/helpers/isset";
//Types
import { AttachmentInfo, LoadoutFrame } from "@/types/BlackOps4";
import { getSecondaryList } from "../../weapons/getSecondaryList";

export function getLoadoutFrame(): LoadoutFrame {
  const defaultLoadoutFrame = {
    primary: false,
    primary_optic: false,
    primary_attach: 0,
    secondary: false,
    secondary_optic: false,
    secondary_attach: 0,
    gear: 0,
    equipment: false,
    perk1: false,
    perk2: false,
    perk3: false,
    wildcards: [],
  };

  // return defaultLoadoutFrame;

  let frame: LoadoutFrame = defaultLoadoutFrame;
  let points = 10;
  let maxCount = 0;

  while (points > 0 && maxCount < 50) {
    const piece = getPiece();
    console.log("getLoadoutFrame piece: ", piece);
    console.log("getLoadoutFrame points: ", points);
    console.log("getLoadoutFrame frame: ", frame);

    if (piece === "gear") {
      if (frame[piece] < 2) {
        frame[piece] += 1;
        points--;
      }
      continue;
    } else if (frame[piece]) {
      //Wildcard Check
      if (points > 2) {
        const cost = wildcardCheck(piece, frame);
        points -= cost;
      }
      continue;
    } else {
      frame[piece] = true;
      points--;
    }

    if (
      points > 1 &&
      (piece === "primary" ||
        piece === "secondary" ||
        isset(frame["overkill"]) ||
        isset(frame["underkill"]))
    ) {
      const weapon_type = isset(frame["overkill"])
        ? "secondary"
        : isset(frame["underkill"])
        ? "primary"
        : piece;
      const hasOptic = getOptic();
      frame[`${weapon_type}_optic`] = hasOptic;

      if (hasOptic) {
        points--;
      }

      const attachInfo: AttachmentInfo = getAttachments(weapon_type, points);
      const type = `${weapon_type.charAt(0).toUpperCase()}${weapon_type.slice(
        1
      )}`;
      frame[`${weapon_type}_attach`] = attachInfo.attachments;
      points -= attachInfo.attachments + attachInfo.wildcardCost;

      if (attachInfo.wildcardCost >= 1) {
        (frame.wildcards as string[]).push(`${type} Gunfighter I`);
        if (attachInfo.wildcardCost >= 2) {
          (frame.wildcards as string[]).push(`${type} Gunfighter II`);
          if (attachInfo.wildcardCost === 3) {
            (frame.wildcards as string[]).push(`${type} Gunfighter III`);
          }
        }
      }
    }

    //Stop infinite loops
    maxCount++;
  }

  if (maxCount > 50) {
    console.error("Max Count Reached, Please Refresh Page", {
      frame: frame,
      points: points,
    });
  }

  return frame;
}

function wildcardCheck(piece: string, frame: LoadoutFrame): number {
  let wildcardCost = 0;

  if (
    (piece === "primary" && frame.wildcards.includes("Underkill")) ||
    (piece === "secondary" && frame.wildcards.includes("Overkill"))
  ) {
    return wildcardCost;
  }

  if (
    wildcardMap[piece] &&
    !frame.wildcards.includes(wildcardMap[piece].wildcard)
  ) {
    //Overkill specific Check
    if (wildcardMap[piece].property === "overkill") {
      frame.secondary = true;
    } else if (wildcardMap[piece].property === "overkill") {
      //Underkill specific Check
      frame.primary = true;
    }

    frame[wildcardMap[piece].property] = true;
    frame.wildcards.push(wildcardMap[piece].wildcard);
    wildcardCost = 2;
  }

  return wildcardCost;
}

const wildcardMap = {
  perk1: {
    property: "perk1Greed",
    wildcard: "Perk 1 Greed",
  },
  perk2: {
    property: "perk2Greed",
    wildcard: "Perk 2 Greed",
  },
  perk3: {
    property: "perk3Greed",
    wildcard: "Perk 3 Greed",
  },
  primary: {
    property: "overkill",
    wildcard: "Overkill",
  },
  secondary: {
    property: "underkill",
    wildcard: "Underkill",
  },
};
