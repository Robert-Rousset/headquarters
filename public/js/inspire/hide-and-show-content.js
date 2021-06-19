export default function () {
    const videoTab = document.querySelector("#video");
    const quoteTab = document.querySelector("#quote");
    const videoContent = document.querySelector("#video-content");
    const quoteContent = document.querySelector("#card-quote");
  
    videoTab.addEventListener("click", () => {
      videoTab.classList.add("is-active");
      quoteTab.classList.remove("is-active");
  
      videoContent.classList.remove("is-hidden");
      quoteContent.classList.add("is-hidden");
    });
  
    quoteTab.addEventListener("click", () => {
      videoTab.classList.remove("is-active");
      quoteTab.classList.add("is-active");
  
      videoContent.classList.add("is-hidden");
      quoteContent.classList.remove("is-hidden");
    });
  }