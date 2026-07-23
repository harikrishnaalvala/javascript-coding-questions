function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function nextNLeapYears(startYear, n) {
    let count = 0;
    let year = startYear + 1;
    let result = [];

    while (count < n) {
        if (isLeapYear(year)) {
            result.push(year);
            count++;
        }
        year++;
    }

    console.log(result.join(", "));
}

// Example
nextNLeapYears(2000, 5); // 2004, 2008, 2012, 2016, 2020
