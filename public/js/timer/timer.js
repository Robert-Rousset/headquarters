import timerModal from "./timer-modal.js";

function init() {
  timerModal.init();
  document.querySelector("#timer-settings-button").onclick = timerModal.show;
}

init();
