let mongoose=require('mongoose')
const ProductSchema = new mongoose.Schema({
    userName: { type: String,  required: true, unique: true },
    userEmail: { type: String,  required: true, unique: true },
    userPassword: { type: String,  required: true },
    userNumber:{type:Number,required:true,unique:true},
    token:{type:String}
  });
const MbsUsers=mongoose.model("properties",ProductSchema)
module.exports=MbsUsers
