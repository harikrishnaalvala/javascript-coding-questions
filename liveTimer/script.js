let countEle = document.getElementById("count")
let seconds = 0
let a = null;

function display() {
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds % 3600) / 60)
    let secs = seconds % 60
    countEle.textContent =
        String(hrs).padStart(2, "0") + ":" + String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0")
}

function start() {
    if (a !== null) return;
    a = setInterval(() => {
        seconds++
        display()
    }, 1000)

}

function stop() {
    clearInterval(a)
    a = null

}

function reset() {
    stop()
    seconds = 0
    display()
}
