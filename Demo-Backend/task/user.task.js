const connection = require("../db/connection");

const userTasks = {
  insertUser: (values) => {
    const query =
      "INSERT INTO users (Userid,firstname,lastname,email,contactnumber,role,password,vesselname) VALUES (?,?,?,?,?,?,?,?)";
     const param = [
      values.Userid,
      values.firstname,
      values.lastname,
      values.email,
      values.contactnumber,
      values.role,
      values.password,
      values.vesselname,
    ];
  
    return new Promise((resolve, reject) => {
      connection.query(query, param, function (error, results) {
        if (error) reject(error);
        resolve(true);
      });
    });
  },

getUserByEmailId: (email) => {
    const param = [email];
    const query = `SELECT * FROM users WHERE email = ?;`;
    return new Promise((resolve, reject) => {
      connection.query(query, param, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  },

  getUserByUserid:(Userid) => {
  const param = [Userid];
  const query="select Userid,email,password,role from users where Userid = ?"
  return new Promise((resolve, reject) => {
    connection.query(query,param,(error,results)=>{
      if(error){
        reject (error)
      }
      resolve(results)
    });
  })
},

getUserDetails:() =>{
  const query="select Userid,firstname,lastname,email,contactnumber from users where role='user' ";
  return new Promise((resolve, reject) => {
    connection.query(query,(error,results)=>{
      if(error){
        reject (error)
        // console.log(error)
      }
      resolve(results)
      // console.log(results)
    });

})
}

};


module.exports = userTasks;
