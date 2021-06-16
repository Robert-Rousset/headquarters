export default async function (event) {
    console.log("Got here")
    try {
        event.preventDefault();

        const newContent = document.querySelector("#item-content").value.trim();
        const response = await fetch("/api/users/create-item", {
            method: "POST",
            body: JSON.stringify({
                content: newContent,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const items = await response.json();
            displayItems(items);
        }
    } catch (err) {
        console.log(err);
    }
}


