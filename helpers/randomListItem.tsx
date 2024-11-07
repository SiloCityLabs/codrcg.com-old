export function randomListItem(perks: Object): any {
    // Get all the values of the object
    const values = Object.values(perks);

    // Get a random index
    const randomIndex = Math.floor(Math.random() * values.length);

    // Get the value at the random index
    const randomValue = values[randomIndex];

    return randomValue;
}