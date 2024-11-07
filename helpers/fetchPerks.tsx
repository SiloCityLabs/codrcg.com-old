export async function fetchPerks(game: string = "") {
  const response = await fetch(`/api/${game}/perks`);
  if (!response.ok) {
    throw new Error(`Error fetching perks: ${response.statusText}`);
  }

  const perks = await response.json();
  return perks;
}
