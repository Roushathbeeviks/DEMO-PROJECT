const nodemailer = require("nodemailer");
const connection = require("../db/connection");

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const PasswordService = {
  ForgotPassword: (req, res) => {
    let user = req.body;
    query = "select email,password from users where email=?";
    connection.query(query, [user.email], (err, results) => {
      if (!err) {
        if (results.length <= 0) {
          res
            .status(404)
            .json({Message: "No USER EXISTS WITH THIS EMAIL ID"});
        } else {
          var mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Forgot Password",
            html:
              "<p><b>Password Reset</b><br><b>Email: </b>" +
              results[0].email +
              "<br> <b>Password: </b>" +
              results[0].password +
              "<br>http://localhost:4200/ click the link to login</a></p>",
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  },
};
module.exports = PasswordService;
