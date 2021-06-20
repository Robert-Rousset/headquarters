import convertSecondsToMinutes from "./convert-seconds-to-minutes.js"

export default class {
    constructor(startSeconds) {
        this.seconds = startSeconds;
    }
    start() {
        if (this.seconds <= 0) {
            const alerted = JSON.parse(localStorage.getItem("alerted"))
            if(!alerted){
            this.complete();
            return;
            }
            return;
        }
        localStorage.setItem("alerted", JSON.stringify(false))
        if (this.intervalId){
            clearInterval(this.intervalId)
        }
        this.intervalId = setInterval(this.tick, 1000, this);
    }
    tick(timer) {
        if (timer.seconds > 0) {
            timer.seconds -= 1;
            const counter = document.querySelector("#time-title")
            if(!counter) return
            counter.innerHTML = convertSecondsToMinutes(timer.seconds);
        } else {
            timer.complete();
        }
    }
    update(newSeconds){
        this.seconds = newSeconds
    }
    pause() {
        if (this.intervalId){
            clearInterval(this.intervalId)
        }
    }
    complete() {
        clearInterval(this.intervalId);
        alert("Your time is up!");
        localStorage.setItem("alerted", JSON.stringify(true))
    }
}
