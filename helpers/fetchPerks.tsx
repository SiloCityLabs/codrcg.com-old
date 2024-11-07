export async function fetchPerks() {
    const response = await fetch('/api/warzone-two/perks');
    if (!response.ok) {
        throw new Error(`Error fetching perks: ${response.statusText}`);
    }

    const perks = await response.json();
    return perks;
}