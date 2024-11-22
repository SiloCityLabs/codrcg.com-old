export function randomNumber(min: number, max: number): number {
  // Ensure min is less than or equal to max
  if (min > max) {
    throw new Error("Min value must be less than or equal to max value.");
  }

  // Generate random number between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range (with integer adjustment)
  const range = max - min + 1; // Add 1 to include the maximum value
  const randomValue = Math.floor(randomDecimal * range);

  // Add the minimum value to get the final random integer within the range
  return randomValue + min;
}
