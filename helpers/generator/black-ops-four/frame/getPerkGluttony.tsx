export function getPerkGluttony(): Record<string, string> {
  let randomGluttony = "";
  let randomWildcard = "";
  const hasGluttony = Math.random() < 0.15; // 15% chance to add perk gluttony

  if (hasGluttony) {
    const gluttony = ["Perk 1 Gluttony", "Perk 2 Gluttony", "Perk 3 Gluttony"];
    const cardKeys = ["perk1Gluttony", "perk2Gluttony", "perk3Gluttony"];
    const gluttonyKey = Math.floor(Math.random() * gluttony.length);

    randomGluttony = gluttony[gluttonyKey];
    randomWildcard = cardKeys[gluttonyKey];
  }

  return {
    gluttony: randomGluttony,
    wildcard: randomWildcard,
  };
}
