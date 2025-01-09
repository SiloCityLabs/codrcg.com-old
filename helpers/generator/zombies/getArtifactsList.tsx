import vanguardList from "@/json/vanguard/zombies/artifacts.json";

const list: Record<string, any> = {
  vanguard: vanguardList,
};

export function getArtifactsList(game: string): any {
  return list[game] || {};
}
