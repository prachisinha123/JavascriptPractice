// Given two array  a and b. Write a function comp(a,b) (orCompSame(a,b)) 
// that checks whether the two arrays
// have the "same" elements, with the same multiplicities( the multilpicity of a 
// member is the number of times it appears).
// "Same" means, here that the element in 'b' are the element in 'a 'squared, regardless of the order,  
const comp = (a, b) => {
    if (
      a === null ||
      b === null ||
      a.length === 0 ||
      b.length === 0 ||
      a.length !== b.length
    ) {
      return false;
    }
  
    let status = true;
    let i = 0;
    while (status && i < a.length) {
      status = b.indexOf(Math.pow(a[i],2)) > -1
      i++;
    }
  
    return status;
  };
  let a = [121, 144, 19, 161, 19, 144, 19, 11];
  let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  console.log("Result",comp(a,b));
  