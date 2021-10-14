const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/LoginApp',({
    useUnifiedTopology:true,
    useNewUrlParser:true
})).then(()=>{
    console.log("MongoDB Connected Successfully");
}).catch((err)=>{
    console.log(err);
});

module.exports=router;