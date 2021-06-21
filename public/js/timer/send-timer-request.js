import { startCounting } from "../main.js";

export default async function (startSeconds) {
  try {
    const nowTimestamp = moment().unix();
    const response = await fetch("/api/timer", {
      method: "PUT",
      body: JSON.stringify({
        amount: startSeconds,
        timestamp: nowTimestamp,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const timer = await response.json();
      startCounting(timer);
    }
  } catch (err) {
    console.log(err);
  }
}
