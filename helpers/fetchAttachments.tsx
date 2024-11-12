import { randomNumber } from "./randomNumber";
//Types
import { Weapon } from "@/types/Generator";

export async function fetchAttachments(weapon: Weapon) {
  const gun = cleanUp(weapon.name);
  const count = 5;

  console.log("API URL:", `/api/${weapon.game}/attachments/${weapon.type}`);

  const response = await fetch(
    `/api/${weapon.game}/attachments/${weapon.type}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gun: gun,
        count: count
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching ${gun} attachments: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}

function cleanUp(str: string = "") {
  return str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
}
