//Basic imports
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

//Security Middleware imports
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database Library import
const mongoose = require('mongoose');

//Security Middleware implements
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(xss())

//Body Parser Implement
app.use(bodyParser.json())

//Request Rate Limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Mongo DB Database Connection
let URI = "mongodb://localhost:27017/Todo";
let OPTION = {user:'',pass:'', autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

//Routing Implement
app.use("/api/v1",router)

//Undefined Route Implement
app.use("*",(req, res)=>{
    res.status(404).json({status:"Fail",data:"Data Not Found"})
})

module.exports = app;