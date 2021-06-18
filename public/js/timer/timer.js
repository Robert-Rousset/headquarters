import Stopwatch from "./Stopwatch.js";

function init() {
    initTimerSettingsButton();
    initTimerSettingsConfirmButton();
}

function initTimerSettingsButton() {
    const timerSettingsButton = document.querySelector("#timer-settings-button");
    timerSettingsButton.addEventListener("click", editTimer)
}

function editTimer(_event) {
    showTimerSettingsModal()
}

function showTimerSettingsModal() {
    const timerSettingsModal = document.querySelector("#timer-settings-modal");
    timerSettingsModal.setAttribute("class", "modal is-active")
}

function initTimerSettingsConfirmButton() {
    const timerSettingsConfirmButton = document.querySelector("#timer-settings-confirm-button")
    timerSettingsConfirmButton.addEventListener("click", confirmTimerSettings)
}

function confirmTimerSettings() {
    const selectedTimeString = document.querySelector("select").value;
    const arrayOfStrings = selectedTimeString.split(" ")
    const amount = Number(arrayOfStrings[0])
    const units = arrayOfStrings[1]
    if (units === "second" || units === "seconds") {
        const stopwatch = new Stopwatch(amount);
        stopwatch.start();
    }
}

init();