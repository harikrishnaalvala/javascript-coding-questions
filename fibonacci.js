// Method 1: Using a Loop (Recommended) :

function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

fibonacci(10);

/* Output:

0
1
1
2
3
5
8
13
21
34 */

// Method 2: Using Recursion :

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

// Method 3: Return Fibonacci Series as an Array :

function fibonacciSeries(n) {
    let series = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        series.push(a);
        [a, b] = [b, a + b];
    }

    return series;
}

console.log(fibonacciSeries(10));

// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
