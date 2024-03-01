
// for google button:
// document.getElementById("google").addEventListener("click",function(){

    // var url = "https://www.google.com/search?q=javascript";
    // var win = window.open(url,"","width = 500, height= 500, srollbars = yes, resizable= yes");
    // win.focus();


//     window.location =  "https://www.google.com";
//     window.focus();
// })
// for facebook button:
// document.getElementById("fb").addEventListener("click",function(){
//     window.location =  "https://www.facebook.com";
//     window.focus();
// })
// for twitter button:
// document.getElementById("twitter").addEventListener("click",function(){
//     window.location =  "https://www.twitter.com";
//     window.focus();
// })
// 4)Write a javascript program to keep fetching contents of a website (every 5 sec)

// const fetchContent = async(url) =>{
//     con = await fetch(url);
//     let a = await con.json()
//     return a;
// }

// setInterval( async function() {
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// },3000)

// 5
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)