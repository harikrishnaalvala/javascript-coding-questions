function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}
function logMessage() {
    console.log("Executed:", Date.now());
}

const throttledLog = throttle(logMessage, 2000);

setInterval(() => {
    throttledLog();
}, 500);

// Output:

// Executed every 2 seconds
