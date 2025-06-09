let minutes = 50, seconds = 0;
let paddedSeconds, paddedMinutes, intervalId;
let isTimerOn = false;

let displayText = document.querySelector("#timerVar");
let dualBtn = document.querySelector("#dual-btn");
let refreshBtn = document.querySelector("#refresh");

let resumeSrc = "assets/resume.png";
let pauseSrc = "assets/pause.png";

dualBtn.src = resumeSrc;
dualBtn.addEventListener("click", checkState);
refreshBtn.addEventListener("click", reset);
const timerFunc = function () {
    // let minutes = 50;
    // let seconds = 0;
    const MAX_SEC = 59;
    if (seconds > 0) {
        seconds--;
    }
    else if (seconds === 0) {
        if (minutes > 0) {
            seconds = MAX_SEC;
            minutes--;
        }
        else {
            clearInterval(intervalId);
            // dualBtn.src = resumeSrc;
            // add sound
        }

    }

    paddedSeconds = String(seconds).padStart(2, '0');
    paddedMinutes = String(minutes).padStart(2, '0');
    displayText.innerHTML = `${paddedMinutes}:${paddedSeconds}`;
}

function checkState() {
    if (isTimerOn === false) {
        isTimerOn = true;
        dualBtn.src = pauseSrc;
        intervalId = setInterval(timerFunc, 1000);
    }
    else {
        isTimerOn = false;
        dualBtn.src = resumeSrc;
        clearInterval(intervalId);
    }
}
function reset() {

    clearInterval(intervalId);
    minutes = 50; seconds = 0;
    paddedSeconds = String(seconds).padStart(2, '0');
    paddedMinutes = String(minutes).padStart(2, '0');
    displayText.innerHTML = `${paddedMinutes}:${paddedSeconds}`;
    dualBtn.src = resumeSrc;
    isTimerOn = false;
}