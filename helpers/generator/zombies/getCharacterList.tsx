import ww2CharacterList from "@/json/world-war-two/zombies/character.json";

const list: Record<string, any> = {
  "world-war-two-zombies": ww2CharacterList,
};

export function getCharacterList(game: string): any {
  return list[game] || {};
}
