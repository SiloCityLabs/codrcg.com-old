export function implodeObject(obj: { [key: string]: string }): string {
    const values = Object.values(obj);
    return values.join(", ");
}