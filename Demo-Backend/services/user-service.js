const md5 = require("md5");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("../services/Authentication");
var checkrole = require("../services/checkRole");
var bcrypt = require("bcrypt");

const userService = {
  doCreate: (req, res) => {
    let users = req.body;
    userTasks
      .getUserByEmailId(users.email)
      .then((user) => {
        if (user.length > 0) {
          res.send({ message: "User already exists" });
        } else {
          userTasks.insertUser(users).then((results) => {
            if (results) {
              // return res.status(200).json("User successfully added");
              res.send({ message: "User successfully added" });
            }
          });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  CheckEmail: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByEmailId(users.email)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({ message: "Email id already exists", status: true });
        } else {
          res.send({ message: "Email id does not exist", status: false });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  CheckId: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByUserid(users.Userid)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({ message: "User name already exists", status: true });
        } else {
          res.send({ message: "User name does not exist", status: false });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  doLogin: (req, res) => {
    let user = req.body;
    userTasks
      .getUserByUserid(user.Userid)
      .then((users) => {
        if (users.length <= 0 || users[0].password != user.password) {
          res.send({ message: "Invalid username or password", status: false });
        } else if (users[0].password == user.password) {
          const response = { userid: users[0].Userid, role: users[0].role };
          const accesstoken = jwt.sign(response, process.env.ACCCESS_TOKEN, {
            expiresIn: "8h",
          });
          userTasks.getUserByUserid(response.userid).then((users) => {
            // console.log(users);
            res
              .status(200)
              .json({
                token: accesstoken,
                Detail: users[0].role,
                status: true,
              });
          });
          // res.status(200).json({token: accesstoken});
          // res.status(200).json({Message:response.role})
          // console.log(users[0].role)
        } else {
          res.send({ message: "something went wrong" });
          // return res.status(400).json({ Message: "something went wrong" });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  GetUserDetails: (req, res) => {
    var query =
      "select Userid,firstname,lastname,email,contactnumber from users where role='user'";
    connection.query(query, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        res.send({ message: results });
      } else {
        res.send({ message: err });
      }
    });
  },

  EditUserProfile: (req,res)=>
  {
    console.log(req.body)
   const userid = req.body.Userid;
   const newfirstname = req.body.firstname;
   const newlastname = req.body.lastname;
   const newemail = req.body.email;
   const newcontactnumber = req.body.contactnumber;
  var X= userTasks.Editprofile(userid,newfirstname,newlastname,newemail,newcontactnumber)

  
    if(X)
    {
      return res.send("Updated the profile");
    }
    else{
      return res.send("Updation Failed")
    }

  },


  GetRole: (req, res) => {
    var query = "select role from users";
    connection.query(query, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        res.send({ message: results });
      } else {
        // return res.status(200).json(err);
        res.send(err);
      }
    });
  },

  GetAllDetails: (req, res) => {
    var query =
      "select Userid,firstname,lastname,email,contactnumber,role,password from users";
    connection.query(query, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        res.send({ message: results });
      } else {
        // return res.status(200).json(err);
        res.send(err);
      }
    });
  },
};

module.exports = userService;
