// Call back and promises.
// A callback function is a function that is passed as an argument to another
//  function and is executed after the completion of some operation. 
//  Callbacks are commonly used in asynchronous operations, 
// such as handling events, making API requests, or reading files.


// Promises:
// A Promise is an object that represents the eventual completion or failure of an asynchronous
//  operation and its resulting value.
//  It provides a cleaner syntax for handling asynchronous code and helps avoid callback hell.




// CODE - CALL BACK
// fs is the file-system module in node.js to read the file.
// let fs  =  require("fs");
// Here we are using callback function., here we pass  obj and err.
// The first argument is err, and second argument is 
// fs.readFile("file.txt","utf-8", (err,data)=>{
//      console.log(err,data);
// });     
// console.log("This is a message");

// CODE - PROMISE
// Now we are using the promises of the "fs"; thst is 'fs/promises', 
// let fs = require("fs/promises");
// let a = fs.readFile("file.txt" , "utf-8");
// a.then ((data) => {
//     console.log(data);
// })
// console.log("This is eof");

// Async_Await:let fs = require("fs/promise");

const readFile = async (file1,file2,file3) = >{
    let a1 = fs.readFile(file1, "utf-8");
    let a2 = fs.readFile(file2,"utf-8");
    let a3 = fs.readFile(file2,"utf-8");
    let c1 = await a1;
    console.log(c1);
    let c2 = await a2;
    console.log(c2);
    let c3 = await a3;
    console.log(c3);
}
let a = fs.readFile("file.txt","utf-8");
a.then(data)=>{
    console.log(data);
})
console.log("This is eof");
readThree("file1.txt","file2.txt","file3.txt");


// Because of path of the file problem ,it is not working,