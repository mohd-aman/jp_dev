// var a;
// a = 1;
// console.log(a);
// a = 12;
// console.log(a);
// var a = 30; // re-declaration allowed
// console.log(a);


//can access var before declaration
// console.log(b);

// var b;

// scope of var

//global -> when declared outside of fxn;

//function scope-> inside of a fxn;

var c = 30; //global 
function fn(){
    console.log(c);
    var c = 10;
    console.log(c);
    if(true){
        var c = 50;
        console.log("-----------4------------",c);
    }
    console.log("----------5---------",c);
}

fn();