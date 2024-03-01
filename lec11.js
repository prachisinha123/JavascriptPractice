let a = 1;
let b = 2;
let c = 3;

function onePlusAvg(x,y){
    console.log("Done");
       return 1+(x+y)/2
       
}
// Now we are calling the above function
 console.log("Average of a and b is",onePlusAvg(a,b));
 console.log("Average of b and c is",onePlusAvg(b,c));
 console.log("Average of a and c is",onePlusAvg(a,c));

 
// Here we are computing (1+avg)
// console.log("Average of a and b is",1+(a+b)/2);
// console.log("Average of b and c is",1+(b+c)/2);
// console.log("Average of a and c is",1+(a+c)/2);
// Let's say we have to print "done" fter every avg computation,so we have to write the console after every line.
// console.log("Average of a and b is",1+(a+b)/2);
// console.log("Done");
// console.log("Average of b and c is",1+(b+c)/2);
// console.log("Done");
// console.log("Average of a and c is",1+(a+c)/2);
// console.log("Done");
// But with the help of the function we can reduce the work,and we have to do it only at a time.

// Note:Function invocation is the way to use the code inside the function, it is compulsory to invoke the function. 


//  Arrow Function:
// const sum = (p,q) =>{
//     return p+q
// }
// console.log(sum(9,7))
// Here we are making the function without argument, but we have to call the function


// Function 3: This function doesn't take any value or return any value.
// const hello = ()=>{
//     console.log("Hey how are you. I am toh fine yaar")
// }
// This is the way to call the function
// hello();

// Function 4:This function return someting,
// const hello = ()=>{
//     console.log("Hey how are you. I am toh fine yaar")
//     return "hi"
// }
// let v = hello();
// console.log(v);
