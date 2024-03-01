// Find the second largest number in the array:
function print2lrgest(a,n){
 let largest = Number.NEGATIVE_INFINITY;
  for(let i  = 0;i<n;i++){
      if(a[i]>largest){
        largest  = a[i];
      }
  }
//   let secondLargest = -1; or
let secondLargest = Number.NEGATIVE_INFINITY;
  for(let  i =0;i<n;i++){
    if(a[i]!= largest && a[i]>secondLargest){
        secondLargest = a[i];
    }
  }
  return secondLargest;
}
const prompt = require("prompt-sync")();
let input = prompt("Enter a list of number :");
let a = input.split(",");
let n = a.length;
console.log("Second largest element:",print2lrgest(a,n));
