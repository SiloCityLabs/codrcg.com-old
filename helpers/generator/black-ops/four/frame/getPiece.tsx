export function getPiece(): string {
  const pieces = [
    "primary",
    "secondary",
    "equipment",
    "gear",
    "perk1",
    "perk2",
    "perk3",
  ];

  return pieces[Math.floor(Math.random() * pieces.length)];
}
