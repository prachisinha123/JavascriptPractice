let id1 = document.getElementById("id1");
console.log(id1);
// match
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
// closest
console.log(sp1.closest(".box")); 
console.log(sp1.closest("#sp1")); 
// contains
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
 