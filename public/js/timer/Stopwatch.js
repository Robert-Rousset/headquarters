export default class {
    constructor(startSeconds) {
        this.seconds = startSeconds;
    }
    start() {
        if (this.seconds <= 0) {
            return;
        }
        this.intervalId = setInterval(this.tick, 1000, this);
    }
    tick(timer) {
        if (timer.seconds > 0) {
            timer.seconds -= 1;
            document.getElementById("time-title").innerHTML = timer.seconds;
        } else {
            timer.complete();
        }
    }
    pause() {
        clearInterval(this.intervalId);
    }
    complete() {
        clearInterval(this.intervalId);
        alert("Your time is up!");
    }
}
