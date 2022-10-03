const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String,unique: true},
    MobileNumber:{type:String,unique:true},
    City:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String}
},{version:false});
const ProfileModel = mongoose.model('Profile',DataSchema);
module.exports = ProfileModel;