export function createRangeArray(
  min: number,
  max: number,
  increment: number
): number[] {
  const rangeArray: number[] = [];
  for (let i = min; i <= max; i += increment) {
    rangeArray.push(i);
  }

  return rangeArray;
}
