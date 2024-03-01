const fetchButton = document.getElementById("fetchButton");
let count = 0;
let timer;
const debounce = (fn, delay) => {
   if (timer) clearTimeout(timer);
   timer = setTimeout(fn, delay);
}
const getSuggestion = () =>{
    debounce(()=>{
        console.log('fetching result for..',fetchButton.value,count++)
    },500);
 } 
fetchButton.addEventListener('click', getSuggestion);
