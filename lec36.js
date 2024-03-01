// change the card title:
// let ctitle =  document.getElementById("firstcardtitle");
// ctitle.style.color = "red";
 
let ctitles =  document.querySelectorAll(".card-title");
ctitles[0].style.color = "red";
ctitles[1].style.color = "green";
ctitles[2].style.color = "blue";
console.log(ctitles);
// Here we  wrtite in one way,so the syntax changed; it will the first element of the class = this.                                                                                                                                                                  re we write in one line,due to this the syntax changed;
// document.querySelector(".this").style.color = "black";
// document.querySelector(".this").style.background = "red";
let cbtn1 = document.querySelector(".this1");
cbtn1.style.color = "red";
cbtn1.style.background = "black";  

let cbtn2 = document.querySelector(".this2");
cbtn2.style.color = "green";
cbtn2.style.background = "black";  

let cbtn3 = document.querySelector(".this3");
cbtn3.style.color = "blue";
cbtn3.style.background = "black";  


console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));
 