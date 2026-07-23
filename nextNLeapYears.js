function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function nextNLeapYears(startYear, n) {
    let count = 0;
    let year = startYear + 1;

    while (count < n) {
        if (isLeapYear(year)) {
            process.stdout.write(year + " ");
            count++;
        }
        year++;
    }
}

// Example
const inputYear = 2000;
const n = 5;

console.log("Output:");
nextNLeapYears(inputYear, n); // 2004, 2008, 2012, 2016, 2020
