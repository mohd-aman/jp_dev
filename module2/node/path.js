let path = require('path')

// console.log(path);

let extension = path.extname("/home/mike/Desktop/jp_dev/module1/logo2.png");
console.log(extension);

let base = path.basename("/home/mike/Desktop/jp_dev/module1/logo2.png");
console.log(base);

console.log(__dirname); //path of current directory of file

console.log(__filename); // path of current file