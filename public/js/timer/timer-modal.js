import sendTimerRequest from "./send-timer-request.js"

export default {
  init() {
    document.querySelector("#timer-settings-modal-background").onclick = _ =>
      this.hide();
    document.querySelector("#timer-settings-modal-delete").onclick = _ =>
      this.hide();
    document.querySelector("#timer-settings-confirm-button").onclick = _ => {
      this.hide();
      confirmTimerSettings();
    };
  },

  show() {
    document.querySelector("#timer-settings-modal").classList.add("is-active");
  },

  hide() {
    document
      .querySelector("#timer-settings-modal")
      .classList.remove("is-active");
  },
};

async function confirmTimerSettings() {
  const selectedTimeString = document.querySelector("select").value;
  const arrayOfStrings = selectedTimeString.split(" ");
  const amount = Number(arrayOfStrings[0]);
  document.getElementById("time-title").innerHTML = amount;
  const units = arrayOfStrings[1];
  const startSeconds =
    units === "seconds"
      ? amount
      : units === "minutes"
        ? amount * 60
        : amount * 60 * 60;
  sendTimerRequest(startSeconds)
}
