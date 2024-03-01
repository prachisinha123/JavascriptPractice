// map,filter and reduce
// 1)map-function:
let arr = [45 ,23 ,21];
// let a = arr.map((value) => {
//     console.log(value);
  
// })
// console.log(a);
// By doing this,it will return the element of the array,one by one
// But the difference between map and for-each loop is , map forms a new array and return it.

let a = arr.map((value) =>{
    console.log(value); 
     return value +1;
})
console.log(a);












// 2)filter-function:
let arr2 = [45,23,21,0,3,5];
let a2 = arr2.filter((a) =>{
    return a<10;
})
console.log(a2);
console.log(arr2); 

// 3)reduce-function:
let arr3 = [1,2,3,5,2,1];
let newarr3 =  arr3.reduce((h1,h2) => {
    return h1+h2;
 })
 console.log(newarr3);
//Another way : we make the function and then pass it,for function we are making arrow fuction
let arr4 = [1,2,3,5,2,1];
const reduce_func = (h1,h2) =>{
    return h1+h2;

}
let newarr4 = arr4.reduce(reduce_func);
console.log(newarr4);

