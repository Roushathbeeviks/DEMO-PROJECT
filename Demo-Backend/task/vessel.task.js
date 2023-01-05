const connection = require("../db/connection");

const VesselTask=
{
    insertvessel:(values)=>
    {
        const query ="INSERT INTO vessels (VesselName,IMONumber,VesselType,flag,VesselId) VALUES (?,?,?,?,?)"; 
        const param=[
            values.VesselName,
            values.IMONumber,
            values.VesselType,
            values.flag,
            values.VesselId
        ]
        return new Promise((resolve,reject)=>
        {
            connection.query(query,param,function(err,result)
            {
                if(err)
                    reject(err);
                 resolve(result)   
            })
        })
    },
    insertVesselMapping:(values)=>
    {
        const query ="INSERT INTO vesselmapping (Userid,VesselName)values (?,?)";
        const param=[
            values.Userid,
            values.VesselName]
            return new Promise((resolve,reject)=>
            {
                connection.query(query,param,function(err,result)
                {
                    if(err)
                        reject(err);
                     resolve(result)   
                })
            })

    }
}

module.exports=VesselTask;