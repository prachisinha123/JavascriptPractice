//Looping in javascript
// 1)Normal loop:
let num = [3,54,1,2,4];
// for(let i = 0;i<num.length;i++){
//     console.log(num[i]);
// }

//  2)forEach loop:
num.forEach((element) =>{
    console.log(element*element);
})

// 3)Array.from:
let name = "Harry";
let arr = Array.from(name);
console.log(arr); 

// 4)for-of loop:
for(let i of num){
    console.log(i);
}
// 5)for-in loop:

for(let i in num){
    console.log(i);
}
// here if we want to print the elemnet of the array:
for(let i in num){
    console.log(num[i]);
}


