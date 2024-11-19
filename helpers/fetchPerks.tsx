export async function fetchPerks(
  game: string = "",
  isPerkGreed: boolean = false
) {
  const response = await fetch(`/api/${game}/perks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isPerkGreed: isPerkGreed,
    }),
  });
  if (!response.ok) {
    throw new Error(`Error fetching perks for ${game}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
