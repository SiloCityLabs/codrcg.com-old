export function implodeObject(obj: Record<any, any>): string {
  return Object.values(obj).join(", ");
}
