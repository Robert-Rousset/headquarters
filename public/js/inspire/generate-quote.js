export default async function generateQuote() {
    const quoteContent = document.querySelector("#quote-content");
    const source = document.querySelector("#source-title");
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        quoteContent.textContent = data.content;
        source.textContent = data.author;
    } else {
        quoteContent.textContent = "An error occured";
    }
}