// print hello world
console.log("Hello Pepcoders");

let name = "Mohd Aman"; //string
console.log(name)

let num  = 1;//number
console.log(num);

let ch = 'a'//character
console.log(ch);

let bool = true;//boolean
console.log(bool)

//loop
for(let i=0;i<10;i++){
    console.log(i);
}

//while

// let num = 10;

// while(num<20){
//     console.log(num);
//     num++;
// }
//Q. isPrime

let n = 47
let isPrime = true;

for(let i=2;i*i<=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("It is a prime No")
}
else{
    console.log("Not a prime")
}