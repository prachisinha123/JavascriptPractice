//Loops in javascript:We use loops to perform repeated action.
// 1:for-loop
//  for(let i = 0;i<34;i++){
//     console.log(i) 
//  }
//  eg:
const prompt = require("prompt-sync")()
let sum = 0;
let n = prompt("Enter the value of n ");
// this is used to take input.
n = Number.parseInt(n)
for(let i = 0;i<n;i++){
    sum = sum+( i+1);
}
console.log("Sum of first "+ n +"natural number is " + sum);
console.log(i);
 

// 2)for-in loop:
let obj = {
    harry: 90,
    shubh : 45,
    shivika : 56,
    ritika : 57,
    shiv : 23,
}
 for(let a in obj){
    console.log("Marks of " +a+ " are " + obj[a])
 }

//  for-of loop:
// for(let b of obj){
//     console.log(b);
// }
for(let b of "Harry"){
    console.log(b);
}