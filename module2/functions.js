// Normal fxn

function sayHi(){
    console.log("function says Hi!!!");
}

sayHi();

//function accepting parameter

function add(a,b){
    console.log("Addition of given numbers is : ",a+b)
}

add(2,3);

//function which returns a value

function mul(a,b){
    return a*b;
}

let product = mul(2,3);
console.log(product)

//function is first class citizen in js

let a = function sub(x,y){
            return x-y;
        }

console.log(a(10,2));


//IIFE (Immediately invoked function Expression)

(function(){
    console.log("I am IIFE");
})();


//IIFE with parameter

(function(a,b){
    console.log(a/b);
})(10,2);