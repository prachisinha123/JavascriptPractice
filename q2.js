// In the givem array,find eleemnts with highest frequency:
function highFreq(a,n){
      let maxFrequent;
      let maxFreq = 0;
      for(let i = 0;i<n;i++){
           let count = 1;
         for(let j = 0;j<n;j++){
            if(a[i] == a[j]){
                count =  count +1; 
            }
         }
         if(count > maxFreq){
              maxFreq = count;
              maxFrequent = a[i];
         }
      } 
      return maxFrequent;

}
const prompt = require("prompt-sync")()
let input = prompt("Enter a list of numbers separated by commas:");
let a = input.split(",");
let n = a.length;
console.log("Element having maximum frequency",highFreq(a,n));

