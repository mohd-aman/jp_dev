const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "saifiamaan445@gmail.com", // generated ethereal user
      pass: "enfflecietxpggzn", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Mohd Aman" <saifiamaan@gmail.com>', // sender address
    to: "mohammad.aman@pepcoding.com,tapishatreya31@gmail.com,dixitshubham189@gmail.com  ", // list of receivers
    subject: "Figth Against Covid", // Subject line
    html: "<b>Schedule of Vaccination</b>", // html body
    attachments:[{path:"./Schedule.xlsx"}]
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);