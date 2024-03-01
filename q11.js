function largest(a,n){
    let largest = Number.NEGATIVE_INFINITY;
    let smallest = Number.POSITIVE_INFINITY;
    for(let i = 0;i<n;i++){
         if(a[i]>largest){
             largest  = a[i];
         }
       if(a[i]<smallest){
         smallest = a[i];
       }
    }
    console.log(largest);
    console.log(smallest);
  

}
let a  = [23,45,21,44,22,67,41];
let n = a.length;
console.log("Largest number:",largest(a,n));

