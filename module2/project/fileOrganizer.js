let fs = require('fs');
let path = require('path')

//take a input
let pathToBeOrganized = process.argv.slice(2)[0];
// console.log(pathToBeOrganized);
let extFolderPath = path.join(pathToBeOrganized,'Others');
let extensions = {
    "Image":['.png','.jpg','.jpeg','.gif'],
    "Video":['.mp4','.mkv'],
    "Documents":['.pdf','.doc','.xls','.ppt','.txt',],
    "Software":['.exe','.deb'],
    "Audio":['.mp3'],
}

function checkFolder(extentionName,folderPath){
    // extensionName -> .mp3
    // folderPath -> /home/mike/Desktop/jp_dev/module2/Download
    for(let key in extensions){
        let extArray = extensions[key];
        if(extArray.includes(extentionName)){
            extFolderPath = path.join(folderPath,key);
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

function moveFile(fileName,folderPath){
    let sourcePath = path.join(folderPath,fileName);
    let destPath = path.join(extFolderPath,fileName);
    fs.copyFileSync(sourcePath,destPath);
    fs.unlinkSync(sourcePath);
}

function createFolder(){
    fs.mkdirSync(extFolderPath);
}

function organizedFolder(folderPath){
    let exist = fs.existsSync(folderPath);
    if(exist == true){
        //read folderPath
        let content = fs.readdirSync(folderPath);
        for(let i=0;i<content.length;i++){
            let extName = path.extname(content[i]);
            console.log(extName);
            let extensionFolderExist = checkFolder(extName,folderPath)
            if(extensionFolderExist == true){
                moveFile(content[i],folderPath)
            }
            else{
                createFolder();
                moveFile(content[i],folderPath);
            }
            extFolderPath = path.join(folderPath,'Others');
        }
    }
    else{
        console.log("Enter correct path!!!");
        return;
    }
}

organizedFolder(pathToBeOrganized);