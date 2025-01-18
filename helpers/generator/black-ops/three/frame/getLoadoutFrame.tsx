//Frame Helpers
import { getAttachments } from "@/helpers/generator/black-ops/three/frame/getAttachments";
import { getPiece } from "@/helpers/generator/black-ops/three/frame/getPiece";
import { getOptic } from "@/helpers/generator/black-ops/three/frame/getOptic";
//Helpers
import { isset } from "@/helpers/isset";
//Types
import { AttachmentInfo, LoadoutFrame } from "@/types/BlackOps3";

export function getLoadoutFrame(): LoadoutFrame {
  const defaultLoadoutFrame = {
    primary: false,
    primary_optic: false,
    primary_attach: 0,
    secondary: false,
    secondary_optic: false,
    secondary_attach: 0,
    tactical: 0,
    lethal: false,
    perk1: false,
    perk2: false,
    perk3: false,
    wildcards: [],
  };

  let frame: LoadoutFrame = defaultLoadoutFrame;
  let points = 10;
  let maxCount = 0;

  while (points > 0 && maxCount < 50) {
    //Stop infinite loops
    maxCount++;
    const piece = getPiece();

    if (piece === "tactical") {
      if (frame[piece] < 2) {
        frame[piece] += 1;
        points--;
      } else if (frame[piece] === 2) {
        //Setup Tactician
        if (points > 2 && !isset(frame["tactician"])) {
          frame["tactician"] = 1;
          frame.wildcards.push("Tactician");
          points -= 2;
        } else if (isset(frame["tactician"]) && frame["tactician"] === 1) {
          frame["tactician"] += 1;
          points--;
        }
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
      (piece === "primary" || piece === "secondary" || isset(frame["overkill"]))
    ) {
      const weapon_type = isset(frame["overkill"]) ? "secondary" : piece;
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
    wildcardMap[piece] &&
    !frame.wildcards.includes(wildcardMap[piece].wildcard)
  ) {
    //Overkill specific Check
    if (wildcardMap[piece].property === "overkill") {
      frame.secondary = true;
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
  lethal: {
    property: "dangerClose",
    wildcard: "Danger Close",
  },
  primary: {
    property: "overkill",
    wildcard: "Overkill",
  },
};
