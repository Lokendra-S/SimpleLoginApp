const mongoose=require('mongoose');
const passport_local_mongoose=require('passport-local-mongoose');

const User=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    }
});

User.plugin(passport_local_mongoose);
module.exports=mongoose.model('LoginDetails',User);