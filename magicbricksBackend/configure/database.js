let mongoose=require("mongoose")
let {connection_string}=process.env;
exports.connect=()=>{
mongoose.connect(connection_string)
.then(()=>console.log("MongoDB database connection established successfully"))
.catch((err)=>console.log("connection unsucess",err))
} 

 