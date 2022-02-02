let fs = require('fs');

//take a input
let pathToBeOrganized = process.argv.slice(2)[0];
// console.log(pathToBeOrganized);

function organizedFolder(folderPath){
    let exist = fs.existsSync(folderPath);
    if(exist == true){
        //read folderPath
        let content = fs.readdirSync(folderPath);
        console.log(content);
    }
    else{
        console.log("Enter correct path!!!");
        return;
    }
}

organizedFolder(pathToBeOrganized);