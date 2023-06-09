const mongoose=require("mongoose");

const userschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
      },
      mobile: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      }
})

const UserModel=mongoose.model("user",userschema)

module.exports={
    UserModel
};

// {
//     "firstname":"vipul",
//     "lastname":"vatsa",
//     "password":"12345",
//     "mobile":9818289663,
//     "email":"vipul@gmail.com"
// }