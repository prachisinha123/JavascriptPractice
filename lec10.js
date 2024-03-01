// While Loop:
const prompt = require("prompt-sync")()
//  let n = prompt("Enter the value of n")
//  Here we are asking the value of n from user,then we convert this into integer.
//  n = Number.parseInt(n)

//  let i = 0;
//  Here we declare a variable i and declare it to 0.
// while(i<n){
//     console.log(i);
//     i++;
// }


// do-while loop:
let n = prompt("Enter the value of n")
n = Number.parseInt(n);

let i = 10;
do{
    console.log(i);
    i++;

}
while(i<n)
