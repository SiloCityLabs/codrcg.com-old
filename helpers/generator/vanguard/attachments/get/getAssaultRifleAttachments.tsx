import as44 from "@/json/vanguard/attachments/assault_rifle/as44.json";
import automaton from "@/json/vanguard/attachments/assault_rifle/automaton.json";
import bar from "@/json/vanguard/attachments/assault_rifle/bar.json";
import bp50 from "@/json/vanguard/attachments/assault_rifle/bp50.json";
import cooperCarbine from "@/json/vanguard/attachments/assault_rifle/cooperCarbine.json";
import ex1 from "@/json/vanguard/attachments/assault_rifle/ex1.json";
import itraBurst from "@/json/vanguard/attachments/assault_rifle/itraBurst.json";
import kgm40 from "@/json/vanguard/attachments/assault_rifle/kgm40.json";
import nikitaAvt from "@/json/vanguard/attachments/assault_rifle/nikitaAvt.json";
import nz41 from "@/json/vanguard/attachments/assault_rifle/nz41.json";
import stg44 from "@/json/vanguard/attachments/assault_rifle/stg44.json";
import vargos from "@/json/vanguard/attachments/assault_rifle/vargos.json";
import volkssturmgewehr from "@/json/vanguard/attachments/assault_rifle/volkssturmgewehr.json";
import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {
  as44,
  automaton,
  bar,
  bp50,
  coopercarbine: cooperCarbine,
  ex1,
  itraburst: itraBurst,
  kgm40,
  nikitaavt: nikitaAvt,
  nz41,
  stg44,
  vargos,
  volkssturmgewehr,
};

export function getAssaultRifleAttachments(gun: string, count: number): any {
  const attachments: any = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
