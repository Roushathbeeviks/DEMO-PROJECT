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



Editprofile:(id,Userid,firstname,lastname,email,contactnumber)=>
      {
        
        return new Promise((resolve, reject) => 
        {
          connection.query("update users set Userid=?, firstname=?,lastname=?,email=?,contactnumber=? where id=?", 
          [Userid,firstname,lastname,email,contactnumber,id],(error,results)=>
          {
            if (!error)
                if(results.affectedRows==0)
                {
                  console.log("Error in Updates: Userid does not exists")
                }
                else{
                     console.log("Updated")
                }
               
            
            else
            {
              console.log(error)
            }
          })
      })
    },






//   UpdateUser:(Userid,
//     firstname,
//     lastname,
//     email,
//     contactnumber
// ) => {
//     var query="update users set firstname=?,lastname=?,email=?,contactnumber=? where Userid=?"
//     const param = [
//       Userid,
//       firstname,
//       lastname,
//       email,
//       contactnumber

//     ];
  
//     return new Promise((resolve, reject) => {
//       connection.query(query, param, function (error, results) {
//         if (error) reject(error);
//         console.log(error);
//         resolve(true);
        
//       });
//     });
//   },

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
  const query="select ID,Userid,firstname,lastname,email,contactnumber,password,role from users where Userid = ?"
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
