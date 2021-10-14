const express= require('express');
const router=express.Router();
const passport=require('passport');

router.get('/login',(req,res)=>{
    res.render('login');
});

router.post('/login',(req,res)=>{
    if(!req.body.username){
        res.json({success:false,message:"email is not given"});
    }else{
        if(!req.body.password){
            res.json({success:false,message:"password was not given"});
        }else{
            passport.authenticate('local',(err,user,info)=>{
                if(err){
                    res.json({success:false,meassage:err});
                }else{
                    if(!user){
                        res.json({success:false,message:"Email or Password is not correct"});
                    }else{
                        req.login(user,(err)=>{
                            if(err){
                                res.json({success:false,message:err});
                            }else{
                                res.render('index',{success:true,username:req.user});
                                console.log("login successful");
                            }
                        });
                    }
                }
            })(req,res)
        }
    }
});

module.exports=router;