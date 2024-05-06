let mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const UserSchema = new mongoose.Schema({
    userName: { type: String,  required: true, unique: true },
    userEmail: { type: String,  required: true, unique: true },
    userPassword: { type: String,  required: true },
    userNumber:{type:Number,required:true,unique:true},
     
    token:{type:String}
  });
  // UserSchema.pre('save', async function(next) {
  //   if (!this.isModified('password')) return next();
  //   this.password = await bcrypt.hash(this.password, 8);
  // });
//   UserSchema.pre('save', async function(next) {
//     if (!this.isModified('userPassword')) return next(); // Only hash if the password has been modified (or is new)
//     const salt = await bcrypt.genSalt(10);
//     this.userPassword = await bcrypt.hash(this.userPassword, salt);
//     next();
// });
const MbsUsers=mongoose.model("mbsUser",UserSchema)

module.exports=MbsUsers