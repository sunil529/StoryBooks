const express=require('express')
const passport=require('passport')
// const passport = require('../config/passport')
const router=express.Router()

//auth with google
//@route Get/auth/google
router.get('/google',passport.authenticate('google',{scope:['profile']}))

//google auth callback
//@route Get/auth/google/callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{res.redirect('/dashboard')}
)

//@desc logout user
//@route /auth/logout

router.get('/logout', function(req, res) {
    req.logout(function(err) {
      if (err) { 
        return next(err); 
        }
      res.redirect('/');
    });
  });


module.exports=router