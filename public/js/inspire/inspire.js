import generateQuote from "./generate-quote.js";
import hideAndShowContent from "./hide-and-show-content.js";

function init() {
    document.addEventListener("DOMContentLoaded", () => {
        const newQuoteButton = document.querySelector("#new-quote-button");
        newQuoteButton.addEventListener("click", generateQuote);
        generateQuote();
        hideAndShowContent();
    });
}

init();


