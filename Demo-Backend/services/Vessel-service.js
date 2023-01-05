const connection = require("../db/connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("./Authentication");
const VesselTask = require("../task/vessel.task");

const Vessel={
    VesselForm:(req,res)=>
    {
        let vesseldata = req.body;
        VesselTask.insertvessel(vesseldata).then((err,result)=>
        {
            if(result)
            {
                res.send({ message:result });
            }
            else
            {
                res.send({ message:err});
                
            }
        })
        
    },
    GetVesselByVesselId:(req,res)=>
    {
        var query = "select * from vessels where VesselId =?"
        connection.query(query, [req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
            }
            else
            {
                res.send(err);
                
            }
        })
    },
    GetAllVessels:(req,res)=>
    {
        var query = "select * from vessels"
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                console.log(results);
            }
            else
            {
                res.send(err);
                console.log(err);
                
            }
        })
    },
    GetVesselFlag:(req,res)=>
    {
        var query = "select * from flags"
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                
            }
            else
            {
                res.send(err);
                
            } 
        }
        )
        
    },
    VesselMap:(req,res)=>
    {
        let data=req.body;
        VesselTask.insertVesselMapping(data).then((err,result)=>
        {
            if(result)
            {
                res.send({ message:result });
            }
            else
            {
                res.send({ message:err});
                
            }
        })

    },
    GetVesselMapping:(req,res)=>
    {
        var query = "select * from vesselmapping where Userid=? ";
        connection.query(query,[req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
                console.log(results);
            }
            else
            {
                res.send(err);
                console.log(err);
                
            }
        })
    }
}



module.exports = Vessel;