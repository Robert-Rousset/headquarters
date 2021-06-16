import displayTodos from "./display-todos.js";

export default async function (url, requestMethod, colourString) {
  try {
    const newTitle = document.querySelector("#todo-title").value.trim();
    const response = await fetch(url, {
      method: requestMethod,
      body: JSON.stringify({
        title: newTitle,
        colour: colourString,
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
