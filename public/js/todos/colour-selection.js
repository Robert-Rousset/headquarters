export default {
  selectedColour: "",

  setSelectedColour(bulmaColourClass) {
    this.selectedColour = bulmaColourClass;
  },

  getSelectedColour() {
    return this.selectedColour;
  },

  selectColourElement(colourElement) {
    deselectAllColours();
    colourElement.classList.add("selected");
    const classesArray = Array.from(colourElement.classList);
    const newBulmaColorClass = classesArray.find((element) =>
      element.startsWith("is-")
    );
    this.setSelectedColour(newBulmaColorClass);
  },
};

function deselectAllColours() {
  const coloursEls = Array.from(document.querySelectorAll(".colour"));
  coloursEls.forEach((element) => {
    element.classList.remove("selected");
  });
}
