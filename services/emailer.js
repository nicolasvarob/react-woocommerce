const nodemailer = require("nodemailer");
const Credentials = require("../secret/emailclient.json");
const buildHtml = require("./buildHtml");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Credentials.user, // generated ethereal user
    pass: Credentials.pass // generated ethereal password
  }
});

exports.SendOrderTo = async reqBody => {
  let html = buildHtml.buildHtml(
    new Date().toString().replace(/GMT.*/, ""),
    reqBody
  );
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Orden recibida"' + "<" + Credentials.user + ">", // sender address
    to: "nicolas.varob@gmail.com", // list of receivers
    subject: "Test", // Subject line
    text: "Test", // plain text body
    html: html // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};
