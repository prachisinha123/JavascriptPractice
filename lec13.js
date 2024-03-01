//  Strings: These are two ways to declare the string
// let name = "Harry";
// let name2 = 'Harry';
// console.log(name.length);
// 2) access of striing:
// console.log(name[0]);
// console.log(name[1]);
// 3) Template literals:
let boy1 = "Pramod";
let boy2 = "Nikhil";
// let say we have to print "Nikhil is a friend of pramod" 
// let sentence = `boy1 is a friend of boy2`;
// console.log(sentence);
// Here we observe that by using backticks we can make string,
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);
let name = 'Harry';
let a = `This is ${name}`;
console.log(a);

// 4)Escape sequence characters
// Let say if someone force you that i want to use single quote inside single quote string,like this
// let fruit = 'Bana'na',but in this javascript become confused,so to get rid of this,and also to use this,we 
// use escape sequence character
let fruit = 'Bana\'na';
console.log(fruit);
console.log(fruit.length);
let animal = "Parr\"ot";
console.log(animal);
// Other escape sequence characters:
// \n :
let flower = 'Blueb\nell';
console.log(flower);
// \t :
let girl1 = "Moni\tka";
console.log(girl1);
// \r :
let girl2 = "Ritikae\rrty";
console.log(girl2);
