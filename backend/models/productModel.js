import mongoose from "mongoose";


//create table into DB

const productSchema = new mongoose.Schema(
{
    title: {type : String, required : true , unique : true} ,
    slug: {type : String, required : true , unique : true} ,
    desc: {type : String, required : true} ,
    category: {type : String, required : true} ,
    image: {type : String, required : true} ,
    image1: {type : String, required : true} ,
    image2: {type : String, required : true} ,
    image3: {type : String, required : true} ,
    countInStock: {type : String, required : true} ,
    price: {type : String, required : true} ,
},
{
    timesstamps:true, //add date
}
);
const Product = mongoose.model('Product', productSchema); //bale for table
export default Product;