// Find second largest element in an array
function secLargest(a,n){
    let result;
    // let i = 0;
    for(let i = 0 ;i<n;i++){
        for(let j = i+1;j<n;j++){
            if(a[i] > a[j]){
                let temp = a[i] ;
                a[i] = a[j];
                a[j] = temp;
            }
       

        }
    }
   
   result = a[n-2];
    return result;
}
const prompt = require("prompt-sync")();
let input = prompt("Enter a list of numbers separated by:"); 
let a = input.split(",");
let n = a.length;
console.log("Second largest element",secLargest(a,n));

