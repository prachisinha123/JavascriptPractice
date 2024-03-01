// const inp = document.getElementById("inpbox");
let timer;
let count = 0;

const debounce = (fn, delay) => {
   if (timer) clearTimeout(timer);
   timer = setTimeout(fn, delay);
}

const getSuggestion = () => {
    debounce(() => {
        console.log('Fetching result for...',count++);
       // Replace the log statement with the actual logic for fetching suggestions
    }, 500);
}

// Attach getSuggestion to window scroll event
window.addEventListener('scroll', getSuggestion);
