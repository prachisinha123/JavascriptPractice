// let marks = {

//     harry:90,
//     shubham:9,
//     lavish:50,
//     Monika:4,
// }
// By using simple for-loop:
//  for(let i = 0;i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i] +" are " + marks[(Object.keys(marks)[i])]);
//  }
//  This is used to print the key-value,
//  for(let i in marks){
//     console.log(i);
//  }
//  By using for-in loop: here we replace (i->key)
// for(let key in marks){
//     console.log("The marks of "+ key + " are " + marks[key]);
// }

// 3)
// const prompt = require("prompt-sync")()
// let cn = 4;
// let i;
// while(i!=cn){
//     console.log("Try again");
//     i = prompt("Enter a number");

// }
// console.log("You have entered a correct number");

// 4)by using arrow function
const mean = (a,b,c,d) =>{
   return(a+b+c+d)/4
} 
console.log(mean(4,5,6,7));

