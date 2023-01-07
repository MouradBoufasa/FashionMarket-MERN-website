import mongoose from "mongoose";


//create table into DB

const userSchema = new mongoose.Schema(
{
    name: {type : String, required : true} ,
    email: {type : String, required : true , unique : true} ,
    password: {type : String, required : true} ,
    isAdmin: {type : Boolean, default:false , required : true} ,
},
{
    timesstamps:true, //add date
}
);
const User = mongoose.model('User', userSchema); //bale for table

export default User;