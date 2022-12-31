const express=require('express')
const router=express.Router()
const {ensureAuth,ensureGuest}=require('../middelware/auth')
const story = require('../models/Story')
const Story =require('../models/Story')
//login/landing page
//@route Get/
router.get('/', ensureGuest,(req,res)=>{
    res.render('login',{
        layout:'login',
    })
})

//dashboard
//@route Get/dashboard
router.get('/dashboard',ensureAuth,async(req,res)=>{
    try {
        const stories=await Story.find({user:req.user.id}).lean()
        res.render('dashboard',{
            name:req.user.firstName,
            stories
        })
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
   
})


module.exports=router