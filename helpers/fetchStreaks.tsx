export async function fetchStreaks(
  game: string = "",
  isHighRoller: boolean = false
) {
  const response = await fetch(`/api/${game}/streaks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isHighRoller: isHighRoller,
    }),
  });
  if (!response.ok) {
    throw new Error(
      `Error fetching streaks for ${game}: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}
