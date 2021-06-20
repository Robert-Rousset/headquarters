import convertSecondsToMinutes from "./convert-seconds-to-minutes.js";

export default class {
  constructor(startSeconds) {
    this.seconds = startSeconds;
  }
  start() {
    if (this.seconds <= 0) {
      const alerted = JSON.parse(localStorage.getItem("alerted"));
      if (!alerted) {
        this.complete();
        return;
      }
      return;
    }
    localStorage.setItem("alerted", JSON.stringify(false));
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.tick, 1000, this);
    const counter = document.querySelector("#time-title");
    if (counter) {
      counter.textContent = convertSecondsToMinutes(this.seconds);
    }
    const hqTimerContainer = document.querySelector("#hq-timer-container");
    if (hqTimerContainer) {
      hqTimerContainer.classList.remove("is-hidden");
    }
    const hqTimeTitle = document.querySelector("#hq-time-title");
    if (hqTimeTitle) {
      hqTimeTitle.textContent = convertSecondsToMinutes(this.seconds);
    }
    const timeHeading = document.querySelector("#time-heading");
    if (timeHeading) {
      timeHeading.textContent = "Time Remaining:";
    }
  }
  tick(timer) {
    if (timer.seconds > 0) {
      timer.seconds -= 1;
      const counter = document.querySelector("#time-title");
      if (counter) {
        counter.textContent = convertSecondsToMinutes(timer.seconds);
      }
      const hqTimeTitle = document.querySelector("#hq-time-title");
      if (hqTimeTitle) {
        hqTimeTitle.textContent = convertSecondsToMinutes(timer.seconds);
      }
      const hqTimerContainer = document.querySelector("#hq-timer-container");
      if (hqTimerContainer) {
        hqTimerContainer.classList.remove("is-hidden");
      }
      const timeHeading = document.querySelector("#time-heading");
      if (timeHeading) {
        timeHeading.textContent = "Time Remaining:";
      }
    } else {
      timer.complete();
    }
  }
  update(newSeconds) {
    this.seconds = newSeconds;
  }
  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  complete() {
    clearInterval(this.intervalId);
    alert("Your time is up!");
    localStorage.setItem("alerted", JSON.stringify(true));
  }
}
