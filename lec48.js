const inp = document.getElementById("inpbox");
let timer;
const debounce = (fn,delay)=>{
   if(timer) clearTimeout(timer)
   timer = setTimeout(fn,delay)
}
const getSuggestion = () =>{
    debounce(()=>{
        console.log('fetching result for..',inp.value)
    },500);

 } 
   









// Here we are making an input box and for every key stroke 'getSuggestion' function will be called, and this 'getSuggestion' function will log the value of text input 
// So consider this console.log(), as a api call, at every key stroke we are calling the api.Because of this there is
// load on our server, so we can optimise this by uisng debouncing technique.We have to reduce our api call.
