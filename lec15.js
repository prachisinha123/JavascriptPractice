// Practice set:
// 1)
console.log("har\"".length);

// 2)Explain the includes,starts with & end with function of the string

const sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox2";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ?'is': 'is not'} in the sentence`);

// 4) Extract the amount out of the string
// let str2 = "Please give Rs 1000";
// let amount = str2.slice("Please give Rs ".length);
// We slice the string till the lenght of this "Please give Rs"; that is( let amount =  str2.slice(15)
// console.log(amount);
// console.log(typeof amount);

// let str2 = "Please give Rs 1000";
// let amount = Number.parseInt(str2.slice(15));
// console.log(amount);
// console.log(typeof amount);



 