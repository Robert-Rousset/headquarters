export default async function (startSeconds) {
    try {
      const response = await fetch("/api/timer", {
        method: "PUT",
        body: JSON.stringify({
          amount: startSeconds,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const timer = await response.json()
        console.log("YO", timer)
      }
    } catch (err) {
      console.log(err);
    }
  }