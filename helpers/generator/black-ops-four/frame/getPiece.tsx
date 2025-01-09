export function getPiece(): string {
  const pieces = [
    "primary",
    "secondary",
    "tactical",
    "lethal",
    "perk1",
    "perk2",
    "perk3",
    // "tactician",
  ];

  return pieces[Math.floor(Math.random() * pieces.length)];
}
