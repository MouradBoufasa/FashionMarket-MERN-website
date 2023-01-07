import mongoose from "mongoose";


//create table into DB

const categorySchema = new mongoose.Schema(
{
    title: {type : String, required : true , unique : true} ,
    image: {type : String, required : true} ,
},
{
    timesstamps:true, //add date
}
);
const Category = mongoose.model('Category', categorySchema); //bale for table

export default Category;