import bo6List from "@/json/black-ops/six/zombies/ammo_mod.json";

const list: Record<string, any> = {
  "black-ops-six": bo6List,
};

export function getAmmoModList(game: string): any {
  return list[game] || {};
}
