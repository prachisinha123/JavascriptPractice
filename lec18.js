// Some more array methods:
// 7)delete operator:
//  let num = [1,2,3,4,5,6,7,8,9];
//  delete num[0]; 
//  console.log(num);
//  console.log(num.length);

//  8)concat method:

// let num1 =   [1,2,3,4,5,6,7,8,9];
// let num_more = [11,12,13,14,15,16,17,18,19];
// let newArray = num1.concat(num_more);
// console.log(newArray);
// we can even concat more than 2 arrays:

// let num1 =   [1,2,3,4,5,6,7,8,9];
// let num_more = [11,12,13,14,15,16,17,18,19];
// let num_even_more = [234,789,456,234];
// let newArray = num1.concat(num_more,num_even_more);
// console.log(newArray);

// 9)sort method:
// let numb = [551,22,3,14,5,6,7,8,229];
// numb.sort();                                                                                                                                                                                                                            
// console.log(numb); 

let compare = ( a,b) =>{
    return a-b;  
}
let num = [551,22,3,14,5,6,7,8,229];
num.sort(compare);                                                                                                                                                                                                                            
console.log(num); 


// 10 reverse method:
// let numb = [551,22,3,14,5,6,7,8,229];
// numb.reverse();
// console.log(numb);
// 11)splice menthod:
// let num3 =  [551,22,3,14,5,6,7,8,229];
// let deletedValues = num3.splice(2,3,1021,1022,1023);
// console.log(num3);
// console.log(deletedValues);
// let num4 = [551,22,3,14,5,6,7,8,229];
// let deletedValues = num4.splice(2,3,1021,1022,1023,1024,1025);
// console.log(num4);
// console.log(deletedValues);  
// console.log(typeof deletedValues);

// slice method:

// let num5 =[551,22,3,14,5,6,7,8,229];
// let newArray = num5.slice(3);
// console.log(newArray);



