export function implodeObject(obj: Object): string {
  const values = Object.values(obj);
  return values.join(", ");
}
