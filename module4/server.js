const express = require('express')
const path = require("path");
const cp = require("child_process");
const nodemailer = require("nodemailer");
const app = express()

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "saifiamaan445@gmail.com", // generated ethereal user
      pass: "enfflecietxpggzn", // generated ethereal password
    },
  });

app.get('/', function (req, res) {
    let pathOfIndexFile = path.join(__dirname, 'index.html');
    res.sendFile(pathOfIndexFile);
})

app.get("/details/:pin/:age/:email",async function(req,res){
    let pin = req.params.pin;
    let email = req.params.email;
    let age = req.params.age;
    let arr = cp.execSync(`node script ${pin} ${age}`);
    // console.log(arr+"");
    res.send(arr);
    let info = await transporter.sendMail({
        from: '"Mohd Aman" <saifiamaan@gmail.com>', // sender address
        to:  `${email}`, // list of receivers
        subject: "Figth Against Covid", // Subject line
        html: "<b>Schedule of Vaccination</b>", // html body
        attachments:[{path:"./Schedule.xlsx"}]
      });
    
      console.log("Message sent: %s", info.messageId);
})

app.listen(3000)
console.log("server is running");