//file system
let fs = require('fs');
// console.log(fs);
let path = require('path');

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

//read a directory

let folderContent = fs.readdirSync(__dirname);
console.log(folderContent);

//check if exists or not
let isExists = fs.existsSync('new_module');
console.log(isExists);

if(isExists == false){
    //create a directory
    fs.mkdirSync('new_module');
}else{
    // delete a directory
    fs.rmdirSync('new_module');
}


//copy a file

// fs.copyFileSync(pathOfFileToBeCopied,pathOfDestination)
let dest = '/home/mike/Desktop/jp_dev/module2/js';
let fileName = 'file.txt';
let destPath = path.join(dest,fileName);
console.log(destPath);
fs.copyFileSync('/home/mike/Desktop/jp_dev/module2/node/file.txt',destPath);