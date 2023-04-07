const mongoose =require("mongoose");
const validator =require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        require:true
    },
    Email:{
        type:String,
        require:true,
        validator(value){
            if(!isEmail(value)){
                throw new error("Invaild Email")
            }
        }
    },
    phoneNo:{
        type:String,
        require:true
    },
    address:{
        type:String,
        minlength:"3",
        require:true
    }

})

const User = new mongoose.model('User',userSchema);

module.exports = User;
