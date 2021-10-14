const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../schemas/signupSchema');

router.use(passport.initialize());
router.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const MongooseConn=require('./MongooseConn');
const signupRoute=require('./signupRoute');
const loginRoute=require('./loginRoute');

router.use(MongooseConn);
router.use(signupRoute);
router.use(loginRoute);

router.get('/',(req,res)=>{
    res.render('index',{success:false});
});

module.exports=router;