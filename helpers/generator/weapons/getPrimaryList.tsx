import bo6List from "@/json/black-ops-six/weapon/primary.json";

const primaryWeapons: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getPrimaryList(game: string): any {
  return primaryWeapons[game] || {};
}
