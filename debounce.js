function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching:", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hello");
