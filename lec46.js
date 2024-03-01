// 1)------------------------------------------------------------
// alert("hello");
// It will print and alert message of 'hello','hello' will alert as a message
// Now we want to see the same alert after some time(sec), then, if we have to delay any task in javascript
// , then we can use setTimeout function
// setTimeout(function(){
//     alert("I am inside of setTimeout"); 
// },2000)
// // 2)-------------------------------------------------------------
// document.write("Hello");

// setTimeout(function(){
//     alert("I am inside of setTimeout"); 
// },5000) 
// 3)How to clear alert message,---------------------------------------
// let a = setTimeout(function(){
//     alert("I am inside of setTimeout"); 
// },5000)
// clearTimeout(a);
// console.log(a);
//Where to use----------------------------------------------------------
// document.write("Hello"); 
// let a = setTimeout(function(){
//     alert("I am inside of setTimeout")
// }, 5000)
// let b = prompt("Do you want to run the settimeout?")
// if("n" == b){
//     clearTimeout(a);
// }
// console.log(a); 
//4)--------------------------------------------------------------------
// we want  run this sum after some seconds.
// document.write("Hello");
// const sum = (a,b) =>{
//     console.log("Yes I am running " + ( a+b));
    
// }
// setTimeout(sum,1000,1,2);
// we can pass any number of arguments
// document.write("Hello");
// const sum = (a,b,c) =>{
//     console.log("Yes I am running " + ( a+b+c));
    
// }
// setTimeout(sum,1000,1,2,7);
// -----------------------------------------------------------------------
// Set Interval method:After every 3ms(3000); this alert will show. 
// setInterval(function(){
//     alert("setinterval")
// },3000) 

