// 1.Q)
// let age = prompt("Enter yuor age");
// age = Number.parseInt(age); 
// const canDrive = (age) =>{
//     return age>=18?true:false;
// }

// if(canDrive(age)){
//     alert("Yes you can drive");
// }
// else{
//     alert("Yes cannot drive");
// } 
// 2.Q
let age = prompt("Enter your age");
age = Number.parseInt(age); 
let runAgain = true;
while(runAgain){
const canDrive = (age) =>{
    return age>=18?true:false;
}

if(canDrive(age)){
    alert("Yes you can drive")  ;
}
else{
    alert("Yes cannot drive");
}
runAgain = confirm("Do you want to play again");
}
