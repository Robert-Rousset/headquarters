import colourSelection from "./colour-selection.js";
import displayTodos from "./display-todos.js";

export default async function (event) {
    try {
        event.preventDefault();

        const newTitle = document.querySelector("#item-title").value.trim();
        const response = await fetch("/api/users/create-todo", {
            method: "POST",
            body: JSON.stringify({
                title: newTitle,
                colour: selectedColour,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const todos = await response.json();
            displayTodos(todos);
        }
    } catch (err) {
        console.log(err);
    }
}