export default async function generateQuote() {
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        quote.textContent = data.content;
        cite.textContent = data.author;
    } else {
        quote.textContent = "An error occured";
    }
}