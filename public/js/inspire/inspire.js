import generateQuote from "./generate-quote.js";
import hideAndShowContent from "./hide-and-show-content.js";

function init() {
    document.addEventListener("DOMContentLoaded", () => {
        const button = document.querySelector("button");
        button.addEventListener("click", generateQuote);
        generateQuote();
        hideAndShowContent();
    });
}

init();


