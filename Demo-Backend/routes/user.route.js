const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require("../services/Authentication");
var checkrole = require("../services/checkRole");
const PasswordService = require("../services/PasswordService");
const jwt = require('jsonwebtoken')


// function verifyToken(req, res, next) {
//   // console.log(req.headers.Authorization)
//   if (!req.headers.authorization) {
//       return res.status(401).send("unauthorized req")
//   }
//   let token = req.headers.authorization.split(' ')[1]
//   // console.log(token);
//   if (token == 'null') {
//       return res.status(401).send("unauthorized req")
//   }
//   let payload = jwt.verify(token, 'secretkey')
//   if (!payload) {
//       return res.status(401).send("unauthorized req")
//   }
//   req.userId = payload.subject
//   next()
// }

router.post("/signup", function (req, res) {
  userService.doCreate(req, res);
});

router.post("/Checkemail", function (req, res) {
  userService.CheckEmail(req,res)
})
router.post("/checkId", function (req, res) {
  userService.CheckId(req,res)
})

router.post("/login", function (req, res) {
  userService.doLogin(req, res);
});

router.get("/getlogin", function (req, res) {
  userService.GetRole(req, res)
})

router.post("/forgotpassword", function (req, res) {
  PasswordService.ForgotPassword(req, res);
});
 router.post("/editprofile", function (req, res) {
  userService.EditUserProfile(req,res)
 })

//GET USER DETAILS_ ROLE=USER
router.get("/getusers", (req, res) => {
  userService.GetUserDetails(req, res);
});

router.get("/getallusers", (req,res) => {
  userService.GetAllDetails(req,res)
})



// CHECK TOKEN
// router.get("/checktoken",auth.Authentication ((req, res)=>{
//   return res.status(200).json({message:"True"})
// })

module.exports = router;
