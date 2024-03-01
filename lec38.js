// Practice Set
//1)Create a navbar and change the color of its first element to read;
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
let t = document.getElementsByTagName("nav")[0];
console.log(t);
let s = document.getElementsByTagName("nav")[0].firstElementChild;
console.log(s);
// t.style.color = "red";
// 2)Create a table without tbody.Now use "view page source" button to check whether it has a tbody or not
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// 3)Write a javacsript code to change background of all the <li> tags to cyan.
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";  
})