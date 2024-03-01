// Console object method:
console.log(console);
console.log("Hi Harry");

// alert():

// alert("hello your scripts works");

// prompt();
// alert("Enter the value of a!");
// let a = prompt("Enter a here");
// document.write(a);

// If we want to change the type of the number entered into  
// alert("Enter the value of a!");
// let a = prompt("Enter a here");
// a = Number.parseInt(a);
// alert("You entered a of type"+ (typeof a));
// defaul value in prompt:

// alert("Enter the value of a!");
// let a = prompt("Enter a here",578);
// a = Number.parseInt(a);
// alert("You entered a of type"+ (typeof a));
// document.write(a);
 

// confirm():
alert("Enter the value of a!");
let a = prompt("Enter a here",578);
a = Number.parseInt(a);
alert("You entered a of type"+ (typeof a));
let write =  confirm("Do you want to write it on the page");
// As we know that the answer of this is either true OR false;
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write");
}
