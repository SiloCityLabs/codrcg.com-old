//Frame Helpers
import { getAttachments } from "@/helpers/generator/black-ops-three/frame/getAttachments";
import { getPiece } from "@/helpers/generator/black-ops-three/frame/getPiece";
import { getOptic } from "@/helpers/generator/black-ops-three/frame/getOptic";
//Types
import { AttachmentInfo, LoadoutFrame } from "@/types/BlackOps3";

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

export function getLoadoutFrame(): LoadoutFrame {
  let frame: LoadoutFrame = defaultLoadoutFrame;
  let points = 10;

  while (points > 0) {
    console.log("points", points);
    const piece = getPiece();
    console.log("piece", piece);

    if (piece === "tactical") {
      console.log("THIS IS SDHJSDFJSDFJDSJFD");
      if (frame[piece] < 2) {
        frame[piece] += 1;
        points--;
      }
      continue;
    } else if (frame[piece]) {
      //Wildcard Check
      const cost = wildcardCheck(piece, frame);
      points -= cost;
      console.log(piece + " - wildcard - cost: ", cost);
      continue;
    } else {
      frame[piece] = true;
      points--;
    }

    if (piece === "primary" || piece === "secondary") {
      const hasOptic = getOptic();
      frame[`${piece}_optic`] = hasOptic;

      if (hasOptic) {
        points--;
      }

      const attachInfo: AttachmentInfo = getAttachments(piece, points);
      const type = `${piece.charAt(0).toUpperCase()}${piece.slice(1)}`;
      frame[`${piece}_attach`] = attachInfo.attachments;
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

  console.log("frame", frame);
  console.log("last points", points);

  return frame;
}

function wildcardCheck(piece: string, frame: LoadoutFrame): number {
  let wildcardCost = 0;

  if (
    wildcardMap[piece] &&
    !frame.wildcards.includes(wildcardMap[piece].wildcard)
  ) {
    //Overkill specific Check
    // if (wildcardMap[piece].property === "overkill") {
    //   frame.secondary = true;
    // }

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
  //   primary: {
  //     property: "overkill",
  //     wildcard: "Overkill",
  //   },
};
