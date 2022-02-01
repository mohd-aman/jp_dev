let fs = require('fs');
// console.log(fs);

//read a file
let content = fs.readFileSync('file.txt');

// console.log(content+"");

//write a file
fs.writeFileSync('file.txt',"Hello from file"); // overwrite in existing file
fs.writeFileSync('file2.txt',"I am file2"); // create a new file then write

//update a file

fs.appendFileSync('file.txt',"\nHow are you ?");

//delete a file

fs.unlinkSync('file2.txt');