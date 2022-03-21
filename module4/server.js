const express = require('express')
const path = require("path");
const cp = require("child_process");
const app = express()

app.get('/', function (req, res) {
    let pathOfIndexFile = path.join(__dirname, 'index.html');
    res.sendFile(pathOfIndexFile);
})

app.get("/details/:pin/:age/:email",function(req,res){
    let pin = req.params.pin;
    let email = req.params.email;
    let age = req.params.age;
    console.log(age);
    console.log(email);
    let arr = cp.execSync(`node script ${pin}`);
    // console.log(arr+"");
    res.send(arr);
})

app.listen(3000)
console.log("server is running");