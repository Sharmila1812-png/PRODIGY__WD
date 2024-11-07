let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("time-display").innerText = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById("time-display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        document.getElementById("laps").appendChild(lapItem);
    }
}

document.getElementById("start-btn").addEventListener("click", startStopwatch);
document.getElementById("pause-btn").addEventListener("click", pauseStopwatch);
document.getElementById("reset-btn").addEventListener("click", resetStopwatch);
document.getElementById("lap-btn").addEventListener("click", recordLap);
