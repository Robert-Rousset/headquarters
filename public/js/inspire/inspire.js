import generateQuote from "./generate-quote.js";

function init() {
    document.addEventListener("DOMContentLoaded", () => {
        const button = document.querySelector("button");
        button.addEventListener("click", generateQuote);
        generateQuote();
    });
}

init();


