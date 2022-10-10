const ProfileModel = require("../models/ProfileModel");
let jwt = require('jsonwebtoken');

exports.CreateProfile = (req,res)=>{
    let reqBody = req.body;
    ProfileModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })
}


exports.UserLogin = (req,res)=>{
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
    ProfileModel.find({UserName:UserName,Password:Password},(err,data)=>{
        if (err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            if (data.length>0){

                let Payload = {exp: Math.floor(Date.now() / 1000) + (24*60 * 60), data:data[0]}
                let token = jwt.sign(Payload, 'SecretKey123456789');
                res.status(200).json({status:"Success",token:token,data:data})
            }else{
                res.status(401).json({status:"Unauthorized"})
            }
        }
    })

}


exports.SelectProfile = (req,res)=>{
    let UserName = req.headers['username'];
    ProfileModel.find({UserName:UserName},(err,data)=>{
        if (err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })
}


exports.UpdateProfile = (req,res)=>{
    let UserName = req.headers['username'];
    let reqBody = req.body;

    ProfileModel.updateOne({UserName:UserName}, {$set:reqBody},{upsert:true}, (err,data)=>{
        if (err){
            res.status(400).json({status:"Fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })


}