export function getOptic(): boolean {
  const hasOptic = Math.random() < 0.35; // 35% chance to add optic

  return hasOptic;
}
