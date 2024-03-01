// Find the minimum and maximum element in the array:
function getMin(arr,n){
     let min = arr[0];
     for(let i = 1;i<n;i++){
        if(arr[i]<min){
            min = arr[i];
        }
     }
     return min;

}
function getMax(arr,n){
    let max = arr[0];
    for(let i = 1;i<n;i++){
       if(arr[i]>max){
           max = arr[i];
       }
    }
    return max;

}
const prompt = require("prompt-sync")()
let input = prompt("Enter a list of items separated by commas:");
let arr = input.split(",");
// let arr = [12,1234,45,67,1];
let n = arr.length;
// document.write("Minimun element of the array:" + getMin(arr,n));
// document.write("Maximum element of the array:" + getMax(arr,n));
console.log("Minimun element of the array:",getMin(arr,n));
console.log("Maximum element of the array:",getMax(arr,n));

