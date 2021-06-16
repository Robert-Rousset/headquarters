export default {
  selectedColour: "",

  setSelectedColour(bulmaColourClass) {
    this.selectedColour = bulmaColourClass;
  },

  getSelectedColour() {
    return this.selectedColour;
  },

  setSelectedColourSelector(colourSelector) {
    deselectAllColourSelectors();
    colourSelector.classList.add("selected");
    const classesArray = Array.from(colourSelector.classList);
    const newBulmaColorClass = classesArray.find((element) =>
      element.startsWith("is-")
    );
    this.setSelectedColour(newBulmaColorClass);
  },
};

function deselectAllColourSelectors() {
  const colourSelectors = Array.from(document.querySelectorAll(".colour"));
  colourSelectors.forEach((colourSelector) => {
    colourSelector.classList.remove("selected");
  });
}