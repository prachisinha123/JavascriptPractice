if(1== "1"){
    console.log("I am true");
}
// Here we wondered that  how number 1 is equal to string 1, but in javacsript (==) operator first convert both 
// into same datatype and then perform the check of equality.

// But if we want that equality become true only when the datatype is also same, then we use (===),
if(1=== "1"){
    console.log("I am true");
}
else{
   console.log("I am False");
}