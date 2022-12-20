const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require('../services/Authentication')
var checkrole= require('../services/checkRole')


router.post("/signup", function (req, res) {
  userService.doCreate(req, res);
});

router.post("/login", function (req, res) {
  userService.doLogin(req, res);
});

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post("/forgotpassword", function (req, res) {
  // userService.forgotPassword(req,res)
  let user = req.body;
  query = "select email,password from users where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0) {
        res.status(404).json({ Message: "No USER EXISTS WITH THIS EMAIL ID" });
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
});


//GET USER DETAILS_ ROEL=USER
router.get("/getusers",auth.Authentication, (req, res) =>
 {
  var query = "select Userid,firstname,lastname,email,contactnumber from users where role='user'";
  connection.query(query,(err,results)=>
  {
    if(results)
    {
      return res.status(500).json(results)
    
    }
    else
    {
      return res.status(200).json(err)
    }
  })

  // userService.GetUserDetails(req,res)
})


//CHECK TOKEN
// router.get("/checktoken",auth.Authentication ((req, res)=>{
//   return res.status(200).json({message:"True"})
// })



module.exports = router;
