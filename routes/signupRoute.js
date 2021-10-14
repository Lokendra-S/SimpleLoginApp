const express=require('express');
const router=express.Router();
const User=require('../schemas/signupSchema');

router.get('/signup',(req,res)=>{
    res.render('signup');
});
router.post('/signup',(req,res)=>{
    users=new User({
        username:req.body.username,
        email:req.body.email
    });
    var password=req.body.password;
    var Cpassword=req.body.Cpassword;
    if(password===Cpassword){
        User.register(users,password,(err,user)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
                console.log("Success");
            }
        });
    }else{
        res.redirect('/signup');
        console.log("please check the password");
    }
    console.log(users);
});

module.exports=router;