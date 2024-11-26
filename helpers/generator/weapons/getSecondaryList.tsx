import bo6List from "@/json/black-ops-six/weapon/secondary.json";

const secondaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getSecondaryList(game: string): any {
  return secondaryWeapons[game] || {};
}
