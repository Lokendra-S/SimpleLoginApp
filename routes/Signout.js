const {Router}=require('express');
router=Router();

router.get('/signout',(req,res)=>{
    req.logOut();
    res.render('index',{success:false});
});

module.exports=router