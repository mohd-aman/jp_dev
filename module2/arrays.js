//array declaration
// let arr = [];
// console.log(arr);

// let arr = [1,2,3,4,5];

// console.log(arr);

let b = [1,'c',"I am a String",true];

console.log(b);

console.log(b[0]); // 1
console.log(b[3]); // true
console.log(b[2]); // I am a string

console.log("Before : ",b[1]);
b[1] = "I am replaced";
console.log("After : ",b[1]);

b[4] = "newly added";
console.log(b);

b[7] = "Excited";

console.log(b);

//Arrays method

//1. push

let arr = [1,2,3,4,5];

console.log("Before push:",arr)
arr.push(6);
console.log("After push: ",arr);

//2. pop
console.log("Before pop: ",arr);
arr.pop();
console.log("After pop: ",arr);

//3. shift
console.log("Before shift",arr);
arr.shift();
console.log("After shift",arr)

//4. unshift
console.log("Before unshift: ",arr);
arr.unshift(1);
console.log("After unshift",arr);

//5. length

console.log(arr.length);

//2d array

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(matrix)