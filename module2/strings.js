let str = "It is a string";// sequence of character
console.log(str);

//length
let lengthOfString = str.length;

console.log(lengthOfString)

//slice (start,end) -> extract a part of a string;

let slicedArr = str.slice(3);
console.log(slicedArr);

let slicedArr2 = str.slice(5,9);
console.log(slicedArr2)

//replace(valueToBeReplaced,valueToBeReplacedWith)

let replacedStr = str.replace("is","was");
console.log(replacedStr);

//ToUpperCase and ToLowerCase
let upperCase = str.toUpperCase()
console.log(upperCase);

let lowerCase = str.toLowerCase();
console.log(lowerCase)

//concatenation

let first = "Hello "
let second = "Madhur"

// Hello Madhur

let concatenate = first.concat(second);
console.log(concatenate);

//trim

let text = '                         Hello Pepcoder               ';
console.log("length of text:",text.length);
console.log("Text Before trim: ",text)
let trimmedtext = text.trim();
console.log("length of trimmed text : ",trimmedtext.length);
console.log("trimeed text: ",trimmedtext);

