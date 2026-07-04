function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
}

const params = {
    name: "John",
    age: 25,
    city: "New York"
};

console.log(objectToQueryString(params)); // name=John&age=25&city=New%20York
